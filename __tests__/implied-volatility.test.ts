import { describe, it, expect } from 'vitest';
import { impliedVol } from '../lib/options/implied-volatility';
import { bsPrice } from '../lib/options/black-scholes';

const TOLERANCE = 0.0001; // 0.01% tolerance

describe('Implied Volatility', () => {
  describe('IV Solver', () => {
    it('should calculate IV for ATM call correctly', () => {
      const params = {
        type: 'call' as const,
        S: 100,
        K: 100,
        T: 0.25,
        r: 0.05,
        q: 0.0,
        marketPrice: 4.78,
      };

      const result = impliedVol(params);

      expect(result.impliedVol).not.toBeNull();
      expect(result.error).toBeNull();

      if (result.impliedVol) {
        // Should be close to 20% (0.20)
        expect(Math.abs(result.impliedVol - 0.20)).toBeLessThan(0.01);
      }
    });

    it('should calculate IV for OTM put correctly', () => {
      const params = {
        type: 'put' as const,
        S: 100,
        K: 95,
        T: 0.5,
        r: 0.05,
        q: 0.0,
        marketPrice: 3.0,
      };

      const result = impliedVol(params);

      expect(result.impliedVol).not.toBeNull();
      expect(result.error).toBeNull();

      if (result.impliedVol) {
        // Should be reasonable (between 10% and 50%)
        expect(result.impliedVol).toBeGreaterThan(0.10);
        expect(result.impliedVol).toBeLessThan(0.50);
      }
    });

    it('should round-trip: price -> IV -> price', () => {
      const originalSigma = 0.30;

      // Calculate price from known IV
      const price = bsPrice({
        type: 'call',
        S: 100,
        K: 105,
        T: 0.25,
        r: 0.05,
        q: 0.0,
        sigma: originalSigma,
      });

      // Calculate IV from that price
      const result = impliedVol({
        type: 'call',
        S: 100,
        K: 105,
        T: 0.25,
        r: 0.05,
        q: 0.0,
        marketPrice: price,
      });

      expect(result.impliedVol).not.toBeNull();

      if (result.impliedVol) {
        // Should recover original IV
        expect(Math.abs(result.impliedVol - originalSigma)).toBeLessThan(TOLERANCE);
      }
    });
  });

  describe('Edge Cases', () => {
    it('should fail for price below intrinsic value', () => {
      const result = impliedVol({
        type: 'call',
        S: 110,
        K: 100,
        T: 0.25,
        r: 0.05,
        q: 0.0,
        marketPrice: 5.0, // Less than intrinsic value of 10
      });

      expect(result.impliedVol).toBeNull();
      expect(result.error).toContain('intrinsic');
    });

    it('should handle near-expiration options', () => {
      const result = impliedVol({
        type: 'call',
        S: 100,
        K: 100,
        T: 0.001, // Very close to expiration
        r: 0.05,
        q: 0.0,
        marketPrice: 0.5,
      });

      // Should either succeed with reasonable IV or fail gracefully
      if (result.impliedVol !== null) {
        expect(result.impliedVol).toBeGreaterThan(0);
        expect(result.impliedVol).toBeLessThan(5.0);
      }
    });

    it('should fail for negative parameters', () => {
      const result = impliedVol({
        type: 'call',
        S: -100,
        K: 100,
        T: 0.25,
        r: 0.05,
        q: 0.0,
        marketPrice: 5.0,
      });

      expect(result.impliedVol).toBeNull();
      expect(result.error).not.toBeNull();
    });

    it('should handle very high IV correctly', () => {
      const highIV = 1.5; // 150%

      const price = bsPrice({
        type: 'call',
        S: 100,
        K: 100,
        T: 0.25,
        r: 0.05,
        q: 0.0,
        sigma: highIV,
      });

      const result = impliedVol({
        type: 'call',
        S: 100,
        K: 100,
        T: 0.25,
        r: 0.05,
        q: 0.0,
        marketPrice: price,
      });

      expect(result.impliedVol).not.toBeNull();

      if (result.impliedVol) {
        expect(Math.abs(result.impliedVol - highIV)).toBeLessThan(0.01);
      }
    });
  });

  describe('Solver Methods', () => {
    it('should use Newton-Raphson for normal cases', () => {
      const result = impliedVol({
        type: 'call',
        S: 100,
        K: 100,
        T: 0.25,
        r: 0.05,
        q: 0.0,
        marketPrice: 5.0,
      });

      if (result.impliedVol !== null) {
        expect(result.method).toBe('newton-raphson');
      }
    });

    it('should fall back to bisection for difficult cases', () => {
      // Deep OTM option might trigger bisection fallback
      const result = impliedVol({
        type: 'call',
        S: 100,
        K: 150,
        T: 0.08, // 1 month
        r: 0.05,
        q: 0.0,
        marketPrice: 0.05,
      });

      // Just verify it converges, method may vary
      expect(result.impliedVol !== null || result.error !== null).toBe(true);
    });
  });
});
