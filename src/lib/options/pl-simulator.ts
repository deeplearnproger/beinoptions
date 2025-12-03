/**
 * P/L Simulator using Black-Scholes pricing with Greeks
 * Calculates current option value and P/L before expiration
 */

import { bsPrice, bsGreeks, type BSParams } from './black-scholes';
import type { OptionLeg } from './strategies';

export interface PLSimulatorParams {
  legs: OptionLeg[];
  currentPrice: number;
  volatility: number;
  riskFreeRate: number;
  dividendYield: number;
}

export interface LegPL {
  legId: string;
  entryPrice: number; // premium paid/received
  currentPrice: number; // current option value
  pl: number; // profit/loss
  plPercent: number; // P/L percentage
  greeks: {
    delta: number;
    gamma: number;
    theta: number;
    vega: number;
    rho: number;
  };
}

export interface StrategyPL {
  totalPL: number;
  totalPLPercent: number;
  totalDelta: number;
  totalGamma: number;
  totalTheta: number;
  totalVega: number;
  totalRho: number;
  legs: LegPL[];
  netPremium: number; // initial cost/credit
}

/**
 * Calculate current option value for a leg using Black-Scholes
 */
export function calculateCurrentValue(
  leg: OptionLeg,
  currentPrice: number,
  volatility: number,
  riskFreeRate: number,
  dividendYield: number
): number {
  const T = leg.expiry / 365; // Convert days to years

  // Handle expiration
  if (T <= 0) {
    const intrinsic = leg.type === 'call'
      ? Math.max(0, currentPrice - leg.strike)
      : Math.max(0, leg.strike - currentPrice);
    return intrinsic;
  }

  const params: BSParams = {
    type: leg.type,
    S: currentPrice,
    K: leg.strike,
    T,
    r: riskFreeRate,
    q: dividendYield,
    sigma: volatility,
  };

  return bsPrice(params);
}

/**
 * Calculate P/L for a single leg
 */
export function calculateLegPL(
  leg: OptionLeg,
  currentPrice: number,
  volatility: number,
  riskFreeRate: number,
  dividendYield: number
): LegPL {
  const T = leg.expiry / 365;
  const currentValue = calculateCurrentValue(
    leg,
    currentPrice,
    volatility,
    riskFreeRate,
    dividendYield
  );

  // Calculate entry cost/credit
  const entryPrice = leg.premium * leg.quantity;

  // Calculate P/L based on position
  let pl: number;
  if (leg.position === 'long') {
    // Long: bought for premium, current value is what we can sell for
    pl = (currentValue - leg.premium) * leg.quantity;
  } else {
    // Short: sold for premium, would need to buy back at current value
    pl = (leg.premium - currentValue) * leg.quantity;
  }

  const plPercent = entryPrice !== 0 ? (pl / Math.abs(entryPrice)) * 100 : 0;

  // Calculate Greeks (skip if at expiration)
  let greeks = {
    delta: 0,
    gamma: 0,
    theta: 0,
    vega: 0,
    rho: 0,
  };

  if (T > 0) {
    const params: BSParams = {
      type: leg.type,
      S: currentPrice,
      K: leg.strike,
      T,
      r: riskFreeRate,
      q: dividendYield,
      sigma: volatility,
    };

    const rawGreeks = bsGreeks(params);

    // Adjust Greeks for position and quantity
    const positionMultiplier = leg.position === 'long' ? 1 : -1;
    greeks = {
      delta: rawGreeks.delta * leg.quantity * positionMultiplier,
      gamma: rawGreeks.gamma * leg.quantity * positionMultiplier,
      theta: rawGreeks.theta * leg.quantity * positionMultiplier,
      vega: rawGreeks.vega * leg.quantity * positionMultiplier,
      rho: rawGreeks.rho * leg.quantity * positionMultiplier,
    };
  }

  return {
    legId: leg.id,
    entryPrice,
    currentPrice: currentValue,
    pl,
    plPercent,
    greeks,
  };
}

/**
 * Calculate P/L for entire strategy
 */
export function calculateStrategyPL(params: PLSimulatorParams): StrategyPL {
  const { legs, currentPrice, volatility, riskFreeRate, dividendYield } = params;

  const legPLs = legs.map(leg =>
    calculateLegPL(leg, currentPrice, volatility, riskFreeRate, dividendYield)
  );

  const totalPL = legPLs.reduce((sum, legPL) => sum + legPL.pl, 0);
  const netPremium = legs.reduce((sum, leg) => {
    const premium = leg.premium * leg.quantity;
    return sum + (leg.position === 'long' ? -premium : premium);
  }, 0);

  const totalPLPercent = Math.abs(netPremium) > 0
    ? (totalPL / Math.abs(netPremium)) * 100
    : 0;

  // Sum up Greeks
  const totalDelta = legPLs.reduce((sum, leg) => sum + leg.greeks.delta, 0);
  const totalGamma = legPLs.reduce((sum, leg) => sum + leg.greeks.gamma, 0);
  const totalTheta = legPLs.reduce((sum, leg) => sum + leg.greeks.theta, 0);
  const totalVega = legPLs.reduce((sum, leg) => sum + leg.greeks.vega, 0);
  const totalRho = legPLs.reduce((sum, leg) => sum + leg.greeks.rho, 0);

  return {
    totalPL,
    totalPLPercent,
    totalDelta,
    totalGamma,
    totalTheta,
    totalVega,
    totalRho,
    legs: legPLs,
    netPremium,
  };
}

/**
 * Generate P/L curve across price range
 */
export interface PLCurvePoint {
  price: number;
  pl: number;
  delta: number;
}

export function generatePLCurve(
  params: PLSimulatorParams,
  priceRange: { min: number; max: number; points: number }
): PLCurvePoint[] {
  const { legs, volatility, riskFreeRate, dividendYield } = params;
  const { min, max, points } = priceRange;
  const step = (max - min) / (points - 1);

  const curve: PLCurvePoint[] = [];

  for (let i = 0; i < points; i++) {
    const price = min + i * step;

    const strategyPL = calculateStrategyPL({
      legs,
      currentPrice: price,
      volatility,
      riskFreeRate,
      dividendYield,
    });

    curve.push({
      price,
      pl: strategyPL.totalPL,
      delta: strategyPL.totalDelta,
    });
  }

  return curve;
}

/**
 * Calculate P/L over time (time decay simulation)
 */
export interface TimeDecayPoint {
  daysToExpiry: number;
  pl: number;
  theta: number;
}

export function simulateTimeDecay(
  params: PLSimulatorParams,
  timeSteps: number[]
): TimeDecayPoint[] {
  const { legs, currentPrice, volatility, riskFreeRate, dividendYield } = params;

  return timeSteps.map(days => {
    // Adjust legs for time decay
    const adjustedLegs = legs.map(leg => ({
      ...leg,
      expiry: days,
    }));

    const strategyPL = calculateStrategyPL({
      legs: adjustedLegs,
      currentPrice,
      volatility,
      riskFreeRate,
      dividendYield,
    });

    return {
      daysToExpiry: days,
      pl: strategyPL.totalPL,
      theta: strategyPL.totalTheta,
    };
  });
}

/**
 * Calculate P/L sensitivity to volatility changes
 */
export interface VolatilitySensitivity {
  volatility: number;
  pl: number;
  vega: number;
}

export function calculateVolatilitySensitivity(
  params: PLSimulatorParams,
  volatilities: number[]
): VolatilitySensitivity[] {
  const { legs, currentPrice, riskFreeRate, dividendYield } = params;

  return volatilities.map(vol => {
    const strategyPL = calculateStrategyPL({
      legs,
      currentPrice,
      volatility: vol,
      riskFreeRate,
      dividendYield,
    });

    return {
      volatility: vol,
      pl: strategyPL.totalPL,
      vega: strategyPL.totalVega,
    };
  });
}

/**
 * Risk metrics for the strategy
 */
export interface RiskMetrics {
  maxLoss: number | null; // null = unlimited
  maxGain: number | null; // null = unlimited
  probabilityOfProfit: number | null; // requires price distribution
  expectedValue: number | null; // requires price distribution
  sharpeRatio: number | null; // requires return history
}

/**
 * Get risk summary
 */
export function getRiskMetrics(
  params: PLSimulatorParams,
  priceRange: { min: number; max: number }
): RiskMetrics {
  const curve = generatePLCurve(params, {
    min: priceRange.min,
    max: priceRange.max,
    points: 100,
  });

  const pls = curve.map(p => p.pl);
  const maxLoss = Math.min(...pls);
  const maxGain = Math.max(...pls);

  // Check if unlimited
  const isUnlimitedGain = curve[curve.length - 1].pl > maxGain * 0.9;
  const isUnlimitedLoss = curve[0].pl < maxLoss * 0.9;

  return {
    maxLoss: isUnlimitedLoss ? null : maxLoss,
    maxGain: isUnlimitedGain ? null : maxGain,
    probabilityOfProfit: null, // Would need price distribution
    expectedValue: null, // Would need price distribution
    sharpeRatio: null, // Would need return history
  };
}
