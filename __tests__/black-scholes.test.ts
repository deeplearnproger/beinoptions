import { describe, it, expect } from 'vitest';
import { bsPrice, bsGreeks, intrinsicValue } from '../lib/options/black-scholes';

const TOLERANCE = 0.01; // $0.01 tolerance

describe('Black-Scholes Pricing', () => {
  describe('ATM Options', () => {
    it('should price ATM call correctly', () => {
      const price = bsPrice({
        type: 'call',
        S: 100,
        K: 100,
        T: 0.25, // 3 months
        r: 0.05,
        q: 0.0,
        sigma: 0.20,
      });

      // Expected: ~4.78
      expect(price).toBeGreaterThan(4.5);
      expect(price).toBeLessThan(5.0);
    });

    it('should price ATM put correctly', () => {
      const price = bsPrice({
        type: 'put',
        S: 100,
        K: 100,
        T: 0.25,
        r: 0.05,
        q: 0.0,
        sigma: 0.20,
      });

      // Expected: ~3.54
      expect(price).toBeGreaterThan(3.3);
      expect(price).toBeLessThan(3.8);
    });
  });

  describe('Put-Call Parity', () => {
    it('should satisfy put-call parity', () => {
      const params = {
        S: 100,
        K: 100,
        T: 0.5,
        r: 0.05,
        q: 0.02,
        sigma: 0.25,
      };

      const callPrice = bsPrice({ ...params, type: 'call' });
      const putPrice = bsPrice({ ...params, type: 'put' });

      // C - P = S·e^(-q·T) - K·e^(-r·T)
      const lhs = callPrice - putPrice;
      const rhs = params.S * Math.exp(-params.q * params.T) - params.K * Math.exp(-params.r * params.T);

      expect(Math.abs(lhs - rhs)).toBeLessThan(TOLERANCE);
    });
  });

  describe('Edge Cases', () => {
    it('should return intrinsic value at expiration', () => {
      const callPrice = bsPrice({
        type: 'call',
        S: 105,
        K: 100,
        T: 0,
        r: 0.05,
        q: 0.0,
        sigma: 0.20,
      });

      expect(callPrice).toBe(5);
    });

    it('should return zero for OTM option at expiration', () => {
      const putPrice = bsPrice({
        type: 'put',
        S: 105,
        K: 100,
        T: 0,
        r: 0.05,
        q: 0.0,
        sigma: 0.20,
      });

      expect(putPrice).toBe(0);
    });

    it('should handle zero volatility', () => {
      const callPrice = bsPrice({
        type: 'call',
        S: 105,
        K: 100,
        T: 0.25,
        r: 0.05,
        q: 0.0,
        sigma: 0,
      });

      // Should be discounted forward intrinsic value
      const forwardPrice = 105 * Math.exp(0.05 * 0.25);
      const expectedPrice = Math.max(0, forwardPrice - 100) * Math.exp(-0.05 * 0.25);

      expect(Math.abs(callPrice - expectedPrice)).toBeLessThan(TOLERANCE);
    });

    it('should throw on invalid parameters', () => {
      expect(() =>
        bsPrice({
          type: 'call',
          S: -100,
          K: 100,
          T: 0.25,
          r: 0.05,
          q: 0.0,
          sigma: 0.20,
        })
      ).toThrow();
    });
  });

  describe('Greeks', () => {
    const params = {
      type: 'call' as const,
      S: 100,
      K: 100,
      T: 0.25,
      r: 0.05,
      q: 0.0,
      sigma: 0.20,
    };

    it('should calculate delta in valid range', () => {
      const greeks = bsGreeks(params);

      // Call delta should be between 0 and 1
      expect(greeks.delta).toBeGreaterThan(0);
      expect(greeks.delta).toBeLessThan(1);

      // ATM call delta should be around 0.5
      expect(greeks.delta).toBeGreaterThan(0.45);
      expect(greeks.delta).toBeLessThan(0.65);
    });

    it('should calculate positive gamma', () => {
      const greeks = bsGreeks(params);

      // Gamma should always be positive
      expect(greeks.gamma).toBeGreaterThan(0);
    });

    it('should calculate negative theta for long option', () => {
      const greeks = bsGreeks(params);

      // Long options lose value over time
      expect(greeks.theta).toBeLessThan(0);
    });

    it('should calculate positive vega', () => {
      const greeks = bsGreeks(params);

      // Vega should always be positive
      expect(greeks.vega).toBeGreaterThan(0);
    });

    it('should return zero greeks at expiration', () => {
      const greeks = bsGreeks({ ...params, T: 0 });

      expect(greeks.gamma).toBe(0);
      expect(greeks.theta).toBe(0);
      expect(greeks.vega).toBe(0);
      expect(greeks.rho).toBe(0);
    });
  });

  describe('Intrinsic Value', () => {
    it('should calculate ITM call intrinsic value', () => {
      const iv = intrinsicValue('call', 110, 100);
      expect(iv).toBe(10);
    });

    it('should calculate OTM call intrinsic value', () => {
      const iv = intrinsicValue('call', 95, 100);
      expect(iv).toBe(0);
    });

    it('should calculate ITM put intrinsic value', () => {
      const iv = intrinsicValue('put', 90, 100);
      expect(iv).toBe(10);
    });

    it('should calculate OTM put intrinsic value', () => {
      const iv = intrinsicValue('put', 105, 100);
      expect(iv).toBe(0);
    });
  });
});
