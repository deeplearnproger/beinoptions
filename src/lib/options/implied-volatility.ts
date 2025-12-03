/**
 * Implied Volatility calculation using Newton-Raphson with bisection fallback
 */

import { bsPrice, bsGreeks, type BSParams, type OptionType } from './black-scholes';
import { bisection, newtonRaphson, clamp } from './math-utils';

export interface IVParams {
  type: OptionType;
  S: number;
  K: number;
  T: number;
  r: number;
  q: number;
  marketPrice: number;
}

export interface IVResult {
  impliedVol: number | null;
  error: string | null;
  iterations: number;
  method: 'newton-raphson' | 'bisection' | 'failed';
}

// Volatility bounds
const MIN_VOL = 0.001; // 0.1%
const MAX_VOL = 5.0;   // 500%
const TOLERANCE = 1e-6;
const MAX_ITERATIONS = 100;

/**
 * Calculate implied volatility using Newton-Raphson method
 * Falls back to bisection if Newton-Raphson fails
 */
export function impliedVol(params: IVParams): IVResult {
  const { type, S, K, T, r, q, marketPrice } = params;

  // Validation
  if (S <= 0 || K <= 0 || T < 0 || marketPrice < 0) {
    return {
      impliedVol: null,
      error: 'Invalid parameters: prices and time must be non-negative',
      iterations: 0,
      method: 'failed',
    };
  }

  // Check intrinsic value bounds
  const intrinsic = type === 'call' ? Math.max(0, S - K) : Math.max(0, K - S);
  const discountedIntrinsic = intrinsic * Math.exp(-r * T);

  if (marketPrice < discountedIntrinsic - TOLERANCE) {
    return {
      impliedVol: null,
      error: 'Market price below intrinsic value',
      iterations: 0,
      method: 'failed',
    };
  }

  // Edge case: at or very close to expiration
  if (T < 1e-6) {
    if (Math.abs(marketPrice - intrinsic) < TOLERANCE) {
      return {
        impliedVol: 0,
        error: null,
        iterations: 0,
        method: 'newton-raphson',
      };
    }
    return {
      impliedVol: null,
      error: 'Cannot calculate IV at expiration with price != intrinsic',
      iterations: 0,
      method: 'failed',
    };
  }

  // Initial guess using Brenner-Subrahmanyam approximation
  const atmVol = Math.sqrt(2 * Math.PI / T) * (marketPrice / S);
  let sigma0 = clamp(atmVol, MIN_VOL, MAX_VOL);

  // Try Newton-Raphson first
  const priceError = (sigma: number) => {
    if (sigma <= 0) return Infinity;
    try {
      const price = bsPrice({ type, S, K, T, r, q, sigma });
      return price - marketPrice;
    } catch {
      return Infinity;
    }
  };

  const vega = (sigma: number) => {
    if (sigma <= 0) return 0;
    try {
      const greeks = bsGreeks({ type, S, K, T, r, q, sigma });
      return greeks.vega * 100; // Convert back from per 1% to per 1.0
    } catch {
      return 0;
    }
  };

  let result = newtonRaphson(priceError, vega, sigma0, TOLERANCE, MAX_ITERATIONS);

  if (result !== null && result > MIN_VOL && result < MAX_VOL) {
    // Verify the result
    const finalPrice = bsPrice({ type, S, K, T, r, q, sigma: result });
    if (Math.abs(finalPrice - marketPrice) < TOLERANCE) {
      return {
        impliedVol: result,
        error: null,
        iterations: MAX_ITERATIONS,
        method: 'newton-raphson',
      };
    }
  }

  // Fallback to bisection
  result = bisection(priceError, MIN_VOL, MAX_VOL, TOLERANCE, MAX_ITERATIONS);

  if (result !== null) {
    return {
      impliedVol: result,
      error: null,
      iterations: MAX_ITERATIONS,
      method: 'bisection',
    };
  }

  return {
    impliedVol: null,
    error: 'IV solver did not converge',
    iterations: MAX_ITERATIONS,
    method: 'failed',
  };
}

/**
 * Calculate implied volatilities for multiple options
 */
export function impliedVolVector(params: IVParams[]): IVResult[] {
  return params.map(p => impliedVol(p));
}

/**
 * Sanity check for IV surface data
 */
export interface IVSurfacePoint {
  strike: number;
  expiry: number; // days
  iv: number;
}

export interface IVSanityCheckResult {
  isValid: boolean;
  warnings: string[];
  errors: string[];
}

export function sanityCheckIVSurface(
  data: IVSurfacePoint[],
  spotPrice: number
): IVSanityCheckResult {
  const warnings: string[] = [];
  const errors: string[] = [];

  if (data.length === 0) {
    errors.push('No data points provided');
    return { isValid: false, warnings, errors };
  }

  // Check IV bounds
  for (const point of data) {
    if (point.iv < MIN_VOL || point.iv > MAX_VOL) {
      errors.push(
        `IV out of bounds at K=${point.strike}, T=${point.expiry}d: ${point.iv}`
      );
    }

    // Warning for very high IV
    if (point.iv > 2.0) {
      warnings.push(
        `Very high IV at K=${point.strike}, T=${point.expiry}d: ${point.iv * 100}%`
      );
    }
  }

  // Check for arbitrage: call spread arbitrage
  const byExpiry = data.reduce((acc, point) => {
    if (!acc[point.expiry]) acc[point.expiry] = [];
    acc[point.expiry].push(point);
    return acc;
  }, {} as Record<number, IVSurfacePoint[]>);

  for (const [expiry, points] of Object.entries(byExpiry)) {
    const sorted = points.sort((a, b) => a.strike - b.strike);

    // Check for non-decreasing total variance across strikes (calendar arbitrage)
    for (let i = 1; i < sorted.length; i++) {
      const variance1 = sorted[i - 1].iv ** 2 * sorted[i - 1].expiry;
      const variance2 = sorted[i].iv ** 2 * sorted[i].expiry;

      if (variance2 < variance1 * 0.5) {
        warnings.push(
          `Potential calendar arbitrage at expiry ${expiry}d between strikes ${sorted[i - 1].strike} and ${sorted[i].strike}`
        );
      }
    }
  }

  const isValid = errors.length === 0;
  return { isValid, warnings, errors };
}
