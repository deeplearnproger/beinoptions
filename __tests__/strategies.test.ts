import { describe, it, expect } from 'vitest';
import {
  calculateLegPayoff,
  calculateStrategyPayoff,
  findBreakEvens,
  calculateMaxProfitLoss,
  getNetPremium,
  validateStrategy,
  STRATEGY_PRESETS,
} from '../lib/options/strategies';
import type { OptionLeg, Strategy } from '../lib/options/strategies';

const TOLERANCE = 0.01;

describe('Option Strategies', () => {
  describe('Single Leg Payoff', () => {
    it('should calculate long call payoff correctly', () => {
      const leg: OptionLeg = {
        id: '1',
        type: 'call',
        position: 'long',
        quantity: 1,
        strike: 100,
        premium: 5,
        expiry: 30,
      };

      // ITM: underlying = 110
      expect(calculateLegPayoff(leg, 110)).toBe(5); // 10 - 5

      // ATM: underlying = 100
      expect(calculateLegPayoff(leg, 100)).toBe(-5); // 0 - 5

      // OTM: underlying = 90
      expect(calculateLegPayoff(leg, 90)).toBe(-5); // 0 - 5
    });

    it('should calculate short put payoff correctly', () => {
      const leg: OptionLeg = {
        id: '1',
        type: 'put',
        position: 'short',
        quantity: 1,
        strike: 100,
        premium: 4,
        expiry: 30,
      };

      // OTM: underlying = 110
      expect(calculateLegPayoff(leg, 110)).toBe(4); // 4 - 0

      // ATM: underlying = 100
      expect(calculateLegPayoff(leg, 100)).toBe(4); // 4 - 0

      // ITM: underlying = 90
      expect(calculateLegPayoff(leg, 90)).toBe(-6); // 4 - 10
    });
  });

  describe('Multi-Leg Strategies', () => {
    it('should calculate bull call spread payoff', () => {
      const legs: OptionLeg[] = [
        {
          id: '1',
          type: 'call',
          position: 'long',
          quantity: 1,
          strike: 100,
          premium: 4,
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
      ];

      // Below lower strike
      expect(calculateStrategyPayoff(legs, 95)).toBe(-2.5); // Net debit

      // Between strikes
      expect(calculateStrategyPayoff(legs, 105)).toBe(2.5); // 5 - 2.5

      // Above upper strike
      expect(calculateStrategyPayoff(legs, 120)).toBe(7.5); // 10 - 2.5
    });

    it('should calculate iron condor payoff', () => {
      const legs: OptionLeg[] = [
        { id: '1', type: 'put', position: 'long', quantity: 1, strike: 90, premium: 1, expiry: 30 },
        { id: '2', type: 'put', position: 'short', quantity: 1, strike: 95, premium: 2.5, expiry: 30 },
        { id: '3', type: 'call', position: 'short', quantity: 1, strike: 105, premium: 2.5, expiry: 30 },
        { id: '4', type: 'call', position: 'long', quantity: 1, strike: 110, premium: 1, expiry: 30 },
      ];

      const netCredit = getNetPremium(legs);
      expect(netCredit).toBe(3); // 2.5 + 2.5 - 1 - 1

      // In profit zone (between 95 and 105)
      expect(calculateStrategyPayoff(legs, 100)).toBe(3);

      // Max loss below 90
      expect(calculateStrategyPayoff(legs, 80)).toBe(-2); // -5 + 3

      // Max loss above 110
      expect(calculateStrategyPayoff(legs, 120)).toBe(-2); // -5 + 3
    });
  });

  describe('Break-Even Points', () => {
    it('should find break-even for long call', () => {
      const legs: OptionLeg[] = [
        {
          id: '1',
          type: 'call',
          position: 'long',
          quantity: 1,
          strike: 100,
          premium: 5,
          expiry: 30,
        },
      ];

      const breakEvens = findBreakEvens(legs, 100, { min: 90, max: 120 });

      expect(breakEvens.length).toBe(1);
      expect(breakEvens[0]).toBeCloseTo(105, 2); // Strike + Premium
    });

    it('should find two break-evens for straddle', () => {
      const legs: OptionLeg[] = [
        {
          id: '1',
          type: 'call',
          position: 'long',
          quantity: 1,
          strike: 100,
          premium: 4,
          expiry: 30,
        },
        {
          id: '2',
          type: 'put',
          position: 'long',
          quantity: 1,
          strike: 100,
          premium: 4,
          expiry: 30,
        },
      ];

      const breakEvens = findBreakEvens(legs, 100, { min: 80, max: 120 });

      expect(breakEvens.length).toBe(2);
      expect(breakEvens[0]).toBeCloseTo(92, 1); // 100 - 8
      expect(breakEvens[1]).toBeCloseTo(108, 1); // 100 + 8
    });
  });

  describe('Max Profit/Loss', () => {
    it('should calculate max profit/loss for credit spread', () => {
      const legs: OptionLeg[] = [
        {
          id: '1',
          type: 'put',
          position: 'short',
          quantity: 1,
          strike: 100,
          premium: 3,
          expiry: 30,
        },
        {
          id: '2',
          type: 'put',
          position: 'long',
          quantity: 1,
          strike: 95,
          premium: 1.5,
          expiry: 30,
        },
      ];

      const { maxProfit, maxLoss } = calculateMaxProfitLoss(legs, 100, { min: 80, max: 110 });

      expect(maxProfit).toBeCloseTo(1.5, 2); // Net credit
      expect(maxLoss).toBeCloseTo(-3.5, 2); // -5 + 1.5
    });

    it('should detect unlimited profit for long call', () => {
      const legs: OptionLeg[] = [
        {
          id: '1',
          type: 'call',
          position: 'long',
          quantity: 1,
          strike: 100,
          premium: 5,
          expiry: 30,
        },
      ];

      const { maxProfit, maxLoss } = calculateMaxProfitLoss(legs, 100, { min: 50, max: 200 });

      expect(maxProfit).toBeNull(); // Unlimited
      expect(maxLoss).toBe(-5); // Premium paid
    });
  });

  describe('Net Premium', () => {
    it('should calculate net debit correctly', () => {
      const legs: OptionLeg[] = [
        {
          id: '1',
          type: 'call',
          position: 'long',
          quantity: 1,
          strike: 100,
          premium: 5,
          expiry: 30,
        },
        {
          id: '2',
          type: 'call',
          position: 'short',
          quantity: 1,
          strike: 110,
          premium: 2,
          expiry: 30,
        },
      ];

      const netPremium = getNetPremium(legs);
      expect(netPremium).toBe(-3); // -5 + 2 (net debit)
    });

    it('should calculate net credit correctly', () => {
      const legs: OptionLeg[] = [
        {
          id: '1',
          type: 'put',
          position: 'short',
          quantity: 1,
          strike: 100,
          premium: 4,
          expiry: 30,
        },
        {
          id: '2',
          type: 'put',
          position: 'long',
          quantity: 1,
          strike: 95,
          premium: 2,
          expiry: 30,
        },
      ];

      const netPremium = getNetPremium(legs);
      expect(netPremium).toBe(2); // 4 - 2 (net credit)
    });
  });

  describe('Strategy Validation', () => {
    it('should validate correct strategy', () => {
      const strategy: Strategy = {
        name: 'Test Strategy',
        legs: [
          {
            id: '1',
            type: 'call',
            position: 'long',
            quantity: 1,
            strike: 100,
            premium: 5,
            expiry: 30,
          },
        ],
        underlyingPrice: 100,
      };

      const errors = validateStrategy(strategy);
      expect(errors).toHaveLength(0);
    });

    it('should detect invalid strike', () => {
      const strategy: Strategy = {
        name: 'Test Strategy',
        legs: [
          {
            id: '1',
            type: 'call',
            position: 'long',
            quantity: 1,
            strike: -100,
            premium: 5,
            expiry: 30,
          },
        ],
        underlyingPrice: 100,
      };

      const errors = validateStrategy(strategy);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].message).toContain('Strike');
    });

    it('should detect too many legs', () => {
      const strategy: Strategy = {
        name: 'Test Strategy',
        legs: Array(7)
          .fill(null)
          .map((_, i) => ({
            id: `${i}`,
            type: 'call' as const,
            position: 'long' as const,
            quantity: 1,
            strike: 100,
            premium: 5,
            expiry: 30,
          })),
        underlyingPrice: 100,
      };

      const errors = validateStrategy(strategy);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].message).toContain('6 legs');
    });

    it('should detect no legs', () => {
      const strategy: Strategy = {
        name: 'Test Strategy',
        legs: [],
        underlyingPrice: 100,
      };

      const errors = validateStrategy(strategy);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].message).toContain('at least one leg');
    });
  });

  describe('Strategy Presets', () => {
    it('should have covered call preset', () => {
      expect(STRATEGY_PRESETS['covered-call']).toBeDefined();
      expect(STRATEGY_PRESETS['covered-call'].name).toBe('Covered Call');
    });

    it('should have iron condor preset with 4 legs', () => {
      expect(STRATEGY_PRESETS['iron-condor']).toBeDefined();
      expect(STRATEGY_PRESETS['iron-condor'].legs).toHaveLength(4);
    });

    it('should have all expected presets', () => {
      const expectedPresets = [
        'covered-call',
        'protective-put',
        'bull-call-spread',
        'bear-put-spread',
        'iron-condor',
        'straddle',
        'strangle',
      ];

      expectedPresets.forEach((preset) => {
        expect(STRATEGY_PRESETS[preset]).toBeDefined();
      });
    });
  });
});
