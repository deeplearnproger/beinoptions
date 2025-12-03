/**
 * Black-Scholes pricing model for European options
 *
 * Assumptions:
 * - European exercise (no early exercise)
 * - Constant volatility and risk-free rate
 * - No transaction costs
 * - Continuous dividends (yield q)
 */

import { erf } from './math-utils';

export type OptionType = 'call' | 'put';

export interface BSParams {
  /** Option type */
  type: OptionType;
  /** Current underlying price */
  S: number;
  /** Strike price */
  K: number;
  /** Time to expiration in years */
  T: number;
  /** Risk-free rate (annualized) */
  r: number;
  /** Dividend yield (annualized) */
  q: number;
  /** Volatility (annualized) */
  sigma: number;
}

export interface Greeks {
  delta: number;
  gamma: number;
  theta: number;
  vega: number;
  rho: number;
}

/**
 * Standard normal cumulative distribution function
 */
function normCDF(x: number): number {
  return 0.5 * (1 + erf(x / Math.sqrt(2)));
}

/**
 * Standard normal probability density function
 */
function normPDF(x: number): number {
  return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

/**
 * Calculate d1 parameter for Black-Scholes formula
 */
function calculateD1(S: number, K: number, T: number, r: number, q: number, sigma: number): number {
  if (T <= 0) return S > K ? Infinity : -Infinity;
  return (Math.log(S / K) + (r - q + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
}

/**
 * Calculate d2 parameter for Black-Scholes formula
 */
function calculateD2(d1: number, sigma: number, T: number): number {
  if (T <= 0) return d1;
  return d1 - sigma * Math.sqrt(T);
}

/**
 * Calculate Black-Scholes option price
 */
export function bsPrice(params: BSParams): number {
  const { type, S, K, T, r, q, sigma } = params;

  // Validation
  if (S <= 0 || K <= 0 || sigma < 0) {
    throw new Error('Invalid parameters: S, K must be positive, sigma non-negative');
  }

  // Handle edge case: at expiration
  if (T <= 0) {
    if (type === 'call') {
      return Math.max(0, S - K);
    } else {
      return Math.max(0, K - S);
    }
  }

  // Handle edge case: zero volatility
  if (sigma === 0) {
    const forwardPrice = S * Math.exp((r - q) * T);
    if (type === 'call') {
      return Math.max(0, forwardPrice - K) * Math.exp(-r * T);
    } else {
      return Math.max(0, K - forwardPrice) * Math.exp(-r * T);
    }
  }

  const d1 = calculateD1(S, K, T, r, q, sigma);
  const d2 = calculateD2(d1, sigma, T);

  if (type === 'call') {
    return S * Math.exp(-q * T) * normCDF(d1) - K * Math.exp(-r * T) * normCDF(d2);
  } else {
    return K * Math.exp(-r * T) * normCDF(-d2) - S * Math.exp(-q * T) * normCDF(-d1);
  }
}

/**
 * Calculate all Greeks for a given option
 */
export function bsGreeks(params: BSParams): Greeks {
  const { type, S, K, T, r, q, sigma } = params;

  // Handle edge cases
  if (T <= 0) {
    const intrinsic = type === 'call' ? Math.max(0, S - K) : Math.max(0, K - S);
    const isITM = intrinsic > 0;
    return {
      delta: type === 'call' ? (isITM ? 1 : 0) : (isITM ? -1 : 0),
      gamma: 0,
      theta: 0,
      vega: 0,
      rho: 0,
    };
  }

  const d1 = calculateD1(S, K, T, r, q, sigma);
  const d2 = calculateD2(d1, sigma, T);
  const sqrtT = Math.sqrt(T);
  const pdf_d1 = normPDF(d1);
  const discountFactor = Math.exp(-q * T);

  // Delta
  let delta: number;
  if (type === 'call') {
    delta = discountFactor * normCDF(d1);
  } else {
    delta = -discountFactor * normCDF(-d1);
  }

  // Gamma (same for call and put)
  const gamma = (discountFactor * pdf_d1) / (S * sigma * sqrtT);

  // Vega (same for call and put, converted to per 1% change in volatility)
  const vega = (S * discountFactor * pdf_d1 * sqrtT) / 100;

  // Theta (per day)
  let theta: number;
  const term1 = -(S * discountFactor * pdf_d1 * sigma) / (2 * sqrtT);
  if (type === 'call') {
    const term2 = q * S * discountFactor * normCDF(d1);
    const term3 = r * K * Math.exp(-r * T) * normCDF(d2);
    theta = (term1 + term2 - term3) / 365; // Convert to per day
  } else {
    const term2 = q * S * discountFactor * normCDF(-d1);
    const term3 = r * K * Math.exp(-r * T) * normCDF(-d2);
    theta = (term1 - term2 + term3) / 365; // Convert to per day
  }

  // Rho (per 1% change in interest rate)
  let rho: number;
  if (type === 'call') {
    rho = (K * T * Math.exp(-r * T) * normCDF(d2)) / 100;
  } else {
    rho = -(K * T * Math.exp(-r * T) * normCDF(-d2)) / 100;
  }

  return { delta, gamma, theta, vega, rho };
}

/**
 * Vectorized pricing for multiple scenarios
 */
export function bsPriceVector(
  baseParams: Omit<BSParams, 'S'>,
  spotPrices: number[]
): number[] {
  return spotPrices.map(S => bsPrice({ ...baseParams, S }));
}

/**
 * Calculate intrinsic value at expiration
 */
export function intrinsicValue(type: OptionType, S: number, K: number): number {
  if (type === 'call') {
    return Math.max(0, S - K);
  } else {
    return Math.max(0, K - S);
  }
}
