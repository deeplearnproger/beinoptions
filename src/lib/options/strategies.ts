/**
 * Multi-leg options strategies and position management
 */

export type OptionType = 'call' | 'put';
export type PositionType = 'long' | 'short';

export interface OptionLeg {
  id: string;
  type: OptionType;
  position: PositionType;
  quantity: number;
  strike: number;
  premium: number;
  expiry: number; // days to expiration
}

export interface Strategy {
  name: string;
  legs: OptionLeg[];
  underlyingPrice: number;
}

export interface PayoffResult {
  breakEvens: number[];
  maxProfit: number | null; // null = unlimited
  maxLoss: number | null; // null = unlimited
  payoffCurve: Array<{ price: number; payoff: number }>;
}

/**
 * Calculate payoff for a single leg at expiration
 */
export function calculateLegPayoff(
  leg: OptionLeg,
  underlyingPrice: number
): number {
  const { type, position, quantity, strike, premium } = leg;

  let intrinsic: number;
  if (type === 'call') {
    intrinsic = Math.max(0, underlyingPrice - strike);
  } else {
    intrinsic = Math.max(0, strike - underlyingPrice);
  }

  // Long: pay premium, receive intrinsic
  // Short: receive premium, pay intrinsic
  const payoff = position === 'long'
    ? (intrinsic - premium) * quantity
    : (premium - intrinsic) * quantity;

  return payoff;
}

/**
 * Calculate total payoff for multi-leg strategy at expiration
 */
export function calculateStrategyPayoff(
  legs: OptionLeg[],
  underlyingPrice: number
): number {
  return legs.reduce((total, leg) => total + calculateLegPayoff(leg, underlyingPrice), 0);
}

/**
 * Generate payoff curve across price range
 */
export function generatePayoffCurve(
  legs: OptionLeg[],
  underlyingPrice: number,
  priceRange: { min: number; max: number; points: number }
): Array<{ price: number; payoff: number }> {
  const { min, max, points } = priceRange;
  const step = (max - min) / (points - 1);

  const curve: Array<{ price: number; payoff: number }> = [];

  for (let i = 0; i < points; i++) {
    const price = min + i * step;
    const payoff = calculateStrategyPayoff(legs, price);
    curve.push({ price, payoff });
  }

  return curve;
}

/**
 * Find break-even points for strategy
 */
export function findBreakEvens(
  legs: OptionLeg[],
  underlyingPrice: number,
  searchRange: { min: number; max: number }
): number[] {
  const breakEvens: number[] = [];
  const { min, max } = searchRange;
  const step = 0.01; // $0.01 precision

  let prevPayoff = calculateStrategyPayoff(legs, min);

  for (let price = min + step; price <= max; price += step) {
    const payoff = calculateStrategyPayoff(legs, price);

    // Check for sign change (crossing zero)
    if ((prevPayoff < 0 && payoff >= 0) || (prevPayoff > 0 && payoff <= 0)) {
      // Refine using bisection
      const breakEven = refineBisection(
        (p) => calculateStrategyPayoff(legs, p),
        price - step,
        price,
        1e-4
      );
      if (breakEven !== null) {
        breakEvens.push(breakEven);
      }
    }

    prevPayoff = payoff;
  }

  return breakEvens;
}

/**
 * Bisection refinement for break-even point
 */
function refineBisection(
  f: (x: number) => number,
  a: number,
  b: number,
  tolerance: number,
  maxIter: number = 50
): number | null {
  let left = a;
  let right = b;

  for (let i = 0; i < maxIter; i++) {
    const mid = (left + right) / 2;
    const fMid = f(mid);

    if (Math.abs(fMid) < tolerance || Math.abs(right - left) < tolerance) {
      return mid;
    }

    if (f(left) * fMid < 0) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return (left + right) / 2;
}

/**
 * Calculate max profit and max loss for strategy
 */
export function calculateMaxProfitLoss(
  legs: OptionLeg[],
  underlyingPrice: number,
  priceRange: { min: number; max: number }
): { maxProfit: number | null; maxLoss: number | null } {
  const { min, max } = priceRange;

  // Check key price points
  const strikes = legs.map(leg => leg.strike).sort((a, b) => a - b);
  const checkPoints = [min, ...strikes, max];

  let maxProfit = -Infinity;
  let maxLoss = Infinity;

  for (const price of checkPoints) {
    const payoff = calculateStrategyPayoff(legs, price);
    maxProfit = Math.max(maxProfit, payoff);
    maxLoss = Math.min(maxLoss, payoff);
  }

  // Check if profit/loss is unlimited
  const payoffAtMin = calculateStrategyPayoff(legs, min);
  const payoffAtMax = calculateStrategyPayoff(legs, max);

  const isUnlimitedUpside = payoffAtMax > maxProfit * 0.9;
  const isUnlimitedDownside = payoffAtMin < maxLoss * 0.9;

  return {
    maxProfit: isUnlimitedUpside ? null : maxProfit,
    maxLoss: isUnlimitedDownside ? null : maxLoss,
  };
}

/**
 * Get net premium (debit/credit) for strategy
 */
export function getNetPremium(legs: OptionLeg[]): number {
  return legs.reduce((total, leg) => {
    const premium = leg.premium * leg.quantity;
    return total + (leg.position === 'long' ? -premium : premium);
  }, 0);
}

/**
 * Preset strategy templates
 */
export const STRATEGY_PRESETS: Record<string, Omit<Strategy, 'underlyingPrice'>> = {
  'covered-call': {
    name: 'Covered Call',
    legs: [
      {
        id: '1',
        type: 'call',
        position: 'short',
        quantity: 1,
        strike: 105,
        premium: 2.5,
        expiry: 30,
      },
    ],
  },
  'protective-put': {
    name: 'Protective Put',
    legs: [
      {
        id: '1',
        type: 'put',
        position: 'long',
        quantity: 1,
        strike: 95,
        premium: 2.0,
        expiry: 30,
      },
    ],
  },
  'bull-call-spread': {
    name: 'Bull Call Spread',
    legs: [
      {
        id: '1',
        type: 'call',
        position: 'long',
        quantity: 1,
        strike: 100,
        premium: 4.0,
        expiry: 30,
      },
      {
        id: '2',
        type: 'call',
        position: 'short',
        quantity: 1,
        strike: 110,
        premium: 1.5,
        expiry: 30,
      },
    ],
  },
  'bear-put-spread': {
    name: 'Bear Put Spread',
    legs: [
      {
        id: '1',
        type: 'put',
        position: 'long',
        quantity: 1,
        strike: 100,
        premium: 4.0,
        expiry: 30,
      },
      {
        id: '2',
        type: 'put',
        position: 'short',
        quantity: 1,
        strike: 90,
        premium: 1.5,
        expiry: 30,
      },
    ],
  },
  'iron-condor': {
    name: 'Iron Condor',
    legs: [
      {
        id: '1',
        type: 'put',
        position: 'long',
        quantity: 1,
        strike: 90,
        premium: 1.0,
        expiry: 30,
      },
      {
        id: '2',
        type: 'put',
        position: 'short',
        quantity: 1,
        strike: 95,
        premium: 2.5,
        expiry: 30,
      },
      {
        id: '3',
        type: 'call',
        position: 'short',
        quantity: 1,
        strike: 105,
        premium: 2.5,
        expiry: 30,
      },
      {
        id: '4',
        type: 'call',
        position: 'long',
        quantity: 1,
        strike: 110,
        premium: 1.0,
        expiry: 30,
      },
    ],
  },
  'straddle': {
    name: 'Long Straddle',
    legs: [
      {
        id: '1',
        type: 'call',
        position: 'long',
        quantity: 1,
        strike: 100,
        premium: 4.0,
        expiry: 30,
      },
      {
        id: '2',
        type: 'put',
        position: 'long',
        quantity: 1,
        strike: 100,
        premium: 4.0,
        expiry: 30,
      },
    ],
  },
  'strangle': {
    name: 'Long Strangle',
    legs: [
      {
        id: '1',
        type: 'put',
        position: 'long',
        quantity: 1,
        strike: 95,
        premium: 3.0,
        expiry: 30,
      },
      {
        id: '2',
        type: 'call',
        position: 'long',
        quantity: 1,
        strike: 105,
        premium: 3.0,
        expiry: 30,
      },
    ],
  },
};

/**
 * Create strategy from preset
 */
export function createStrategyFromPreset(
  presetKey: string,
  underlyingPrice: number
): Strategy | null {
  const preset = STRATEGY_PRESETS[presetKey];
  if (!preset) return null;

  return {
    ...preset,
    underlyingPrice,
  };
}

/**
 * Validate strategy legs
 */
export interface ValidationError {
  field: string;
  message: string;
}

export function validateStrategy(strategy: Strategy): ValidationError[] {
  const errors: ValidationError[] = [];

  if (strategy.legs.length === 0) {
    errors.push({ field: 'legs', message: 'Strategy must have at least one leg' });
  }

  if (strategy.legs.length > 6) {
    errors.push({ field: 'legs', message: 'Strategy cannot have more than 6 legs' });
  }

  if (strategy.underlyingPrice <= 0) {
    errors.push({ field: 'underlyingPrice', message: 'Underlying price must be positive' });
  }

  strategy.legs.forEach((leg, index) => {
    if (leg.strike <= 0) {
      errors.push({ field: `leg${index}.strike`, message: 'Strike must be positive' });
    }
    if (leg.premium < 0) {
      errors.push({ field: `leg${index}.premium`, message: 'Premium cannot be negative' });
    }
    if (leg.quantity <= 0) {
      errors.push({ field: `leg${index}.quantity`, message: 'Quantity must be positive' });
    }
    if (leg.expiry < 0) {
      errors.push({ field: `leg${index}.expiry`, message: 'Expiry cannot be negative' });
    }
  });

  return errors;
}
