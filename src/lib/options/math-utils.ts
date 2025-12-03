/**
 * Mathematical utility functions for options pricing
 */

/**
 * Error function approximation (Abramowitz and Stegun)
 * Accurate to ~1.5e-7
 */
export function erf(x: number): number {
  // Constants
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  // Save the sign of x
  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);

  // A&S formula 7.1.26
  const t = 1.0 / (1.0 + p * x);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return sign * y;
}

/**
 * Bisection method for root finding
 */
export function bisection(
  f: (x: number) => number,
  a: number,
  b: number,
  tolerance: number = 1e-6,
  maxIterations: number = 100
): number | null {
  let fa = f(a);
  let fb = f(b);

  // Check if root exists in interval
  if (fa * fb > 0) {
    return null;
  }

  let iteration = 0;
  let mid = a;

  while (iteration < maxIterations) {
    mid = (a + b) / 2;
    const fmid = f(mid);

    if (Math.abs(fmid) < tolerance || Math.abs(b - a) < tolerance) {
      return mid;
    }

    if (fa * fmid < 0) {
      b = mid;
      fb = fmid;
    } else {
      a = mid;
      fa = fmid;
    }

    iteration++;
  }

  return mid;
}

/**
 * Newton-Raphson method for root finding
 */
export function newtonRaphson(
  f: (x: number) => number,
  df: (x: number) => number,
  x0: number,
  tolerance: number = 1e-6,
  maxIterations: number = 100
): number | null {
  let x = x0;
  let iteration = 0;

  while (iteration < maxIterations) {
    const fx = f(x);
    const dfx = df(x);

    if (Math.abs(fx) < tolerance) {
      return x;
    }

    if (Math.abs(dfx) < 1e-10) {
      // Derivative too small, method fails
      return null;
    }

    const xNew = x - fx / dfx;

    if (Math.abs(xNew - x) < tolerance) {
      return xNew;
    }

    x = xNew;
    iteration++;
  }

  return null;
}

/**
 * Linear interpolation
 */
export function linearInterpolate(
  x: number,
  x0: number,
  x1: number,
  y0: number,
  y1: number
): number {
  if (x1 === x0) return y0;
  return y0 + (x - x0) * (y1 - y0) / (x1 - x0);
}

/**
 * Bilinear interpolation for 2D grid
 */
export function bilinearInterpolate(
  x: number,
  y: number,
  x0: number,
  x1: number,
  y0: number,
  y1: number,
  f00: number,
  f01: number,
  f10: number,
  f11: number
): number {
  const tx = (x - x0) / (x1 - x0);
  const ty = (y - y0) / (y1 - y0);

  const f0 = f00 * (1 - tx) + f10 * tx;
  const f1 = f01 * (1 - tx) + f11 * tx;

  return f0 * (1 - ty) + f1 * ty;
}

/**
 * Generate evenly spaced array
 */
export function linspace(start: number, end: number, num: number): number[] {
  if (num <= 0) return [];
  if (num === 1) return [start];

  const step = (end - start) / (num - 1);
  return Array.from({ length: num }, (_, i) => start + i * step);
}

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
