/**
 * Zustand store for options toolkit state management
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { OptionLeg, Strategy } from '../options/strategies';

interface OptionsState {
  // Strategy state
  strategy: Strategy;
  setStrategy: (strategy: Strategy) => void;
  updateStrategyName: (name: string) => void;
  updateUnderlyingPrice: (price: number) => void;

  // Leg management
  addLeg: (leg: OptionLeg) => void;
  updateLeg: (id: string, updates: Partial<OptionLeg>) => void;
  removeLeg: (id: string) => void;
  clearLegs: () => void;

  // Simulator parameters
  volatility: number;
  riskFreeRate: number;
  dividendYield: number;
  setVolatility: (vol: number) => void;
  setRiskFreeRate: (rate: number) => void;
  setDividendYield: (yield_: number) => void;

  // Price range for charts
  priceRange: { min: number; max: number; points: number };
  setPriceRange: (range: { min: number; max: number; points?: number }) => void;
  autoAdjustPriceRange: () => void;

  // UI state
  selectedLegId: string | null;
  setSelectedLegId: (id: string | null) => void;
  showGreeks: boolean;
  toggleGreeks: () => void;

  // Preset loading
  loadPreset: (presetKey: string) => void;

  // Reset
  reset: () => void;
}

const DEFAULT_UNDERLYING_PRICE = 100;
const DEFAULT_VOLATILITY = 0.25; // 25%
const DEFAULT_RISK_FREE_RATE = 0.05; // 5%
const DEFAULT_DIVIDEND_YIELD = 0.0; // 0%

const initialStrategy: Strategy = {
  name: 'Custom Strategy',
  legs: [],
  underlyingPrice: DEFAULT_UNDERLYING_PRICE,
};

export const useOptionsStore = create<OptionsState>()(
  persist(
    (set, get) => ({
      // Initial state
      strategy: initialStrategy,
      volatility: DEFAULT_VOLATILITY,
      riskFreeRate: DEFAULT_RISK_FREE_RATE,
      dividendYield: DEFAULT_DIVIDEND_YIELD,
      priceRange: { min: 80, max: 120, points: 100 },
      selectedLegId: null,
      showGreeks: false,

      // Strategy actions
      setStrategy: (strategy) => set({ strategy }),

      updateStrategyName: (name) =>
        set((state) => ({
          strategy: { ...state.strategy, name },
        })),

      updateUnderlyingPrice: (price) =>
        set((state) => ({
          strategy: { ...state.strategy, underlyingPrice: price },
        })),

      // Leg management
      addLeg: (leg) =>
        set((state) => ({
          strategy: {
            ...state.strategy,
            legs: [...state.strategy.legs, leg],
          },
          selectedLegId: leg.id,
        })),

      updateLeg: (id, updates) =>
        set((state) => ({
          strategy: {
            ...state.strategy,
            legs: state.strategy.legs.map((leg) =>
              leg.id === id ? { ...leg, ...updates } : leg
            ),
          },
        })),

      removeLeg: (id) =>
        set((state) => ({
          strategy: {
            ...state.strategy,
            legs: state.strategy.legs.filter((leg) => leg.id !== id),
          },
          selectedLegId: state.selectedLegId === id ? null : state.selectedLegId,
        })),

      clearLegs: () =>
        set((state) => ({
          strategy: { ...state.strategy, legs: [] },
          selectedLegId: null,
        })),

      // Simulator parameters
      setVolatility: (vol) => set({ volatility: vol }),
      setRiskFreeRate: (rate) => set({ riskFreeRate: rate }),
      setDividendYield: (yield_) => set({ dividendYield: yield_ }),

      // Price range
      setPriceRange: (range) =>
        set({
          priceRange: { ...range, points: range.points || 100 },
        }),

      autoAdjustPriceRange: () =>
        set((state) => {
          const { underlyingPrice, legs } = state.strategy;

          if (legs.length === 0) {
            return {
              priceRange: {
                min: underlyingPrice * 0.8,
                max: underlyingPrice * 1.2,
                points: 100,
              },
            };
          }

          const strikes = legs.map((leg) => leg.strike);
          const minStrike = Math.min(...strikes, underlyingPrice);
          const maxStrike = Math.max(...strikes, underlyingPrice);
          const range = maxStrike - minStrike;
          const padding = Math.max(range * 0.2, underlyingPrice * 0.1);

          return {
            priceRange: {
              min: Math.max(0.01, minStrike - padding),
              max: maxStrike + padding,
              points: 100,
            },
          };
        }),

      // UI state
      setSelectedLegId: (id) => set({ selectedLegId: id }),
      toggleGreeks: () => set((state) => ({ showGreeks: !state.showGreeks })),

      // Preset loading
      loadPreset: (presetKey) => {
        const presets = {
          'covered-call': {
            name: 'Covered Call',
            legs: [
              {
                id: crypto.randomUUID(),
                type: 'call' as const,
                position: 'short' as const,
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
                id: crypto.randomUUID(),
                type: 'put' as const,
                position: 'long' as const,
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
                id: crypto.randomUUID(),
                type: 'call' as const,
                position: 'long' as const,
                quantity: 1,
                strike: 100,
                premium: 4.0,
                expiry: 30,
              },
              {
                id: crypto.randomUUID(),
                type: 'call' as const,
                position: 'short' as const,
                quantity: 1,
                strike: 110,
                premium: 1.5,
                expiry: 30,
              },
            ],
          },
          'iron-condor': {
            name: 'Iron Condor',
            legs: [
              {
                id: crypto.randomUUID(),
                type: 'put' as const,
                position: 'long' as const,
                quantity: 1,
                strike: 90,
                premium: 1.0,
                expiry: 30,
              },
              {
                id: crypto.randomUUID(),
                type: 'put' as const,
                position: 'short' as const,
                quantity: 1,
                strike: 95,
                premium: 2.5,
                expiry: 30,
              },
              {
                id: crypto.randomUUID(),
                type: 'call' as const,
                position: 'short' as const,
                quantity: 1,
                strike: 105,
                premium: 2.5,
                expiry: 30,
              },
              {
                id: crypto.randomUUID(),
                type: 'call' as const,
                position: 'long' as const,
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
                id: crypto.randomUUID(),
                type: 'call' as const,
                position: 'long' as const,
                quantity: 1,
                strike: 100,
                premium: 4.0,
                expiry: 30,
              },
              {
                id: crypto.randomUUID(),
                type: 'put' as const,
                position: 'long' as const,
                quantity: 1,
                strike: 100,
                premium: 4.0,
                expiry: 30,
              },
            ],
          },
        };

        const preset = presets[presetKey as keyof typeof presets];
        if (preset) {
          set((state) => ({
            strategy: {
              ...preset,
              underlyingPrice: state.strategy.underlyingPrice,
            },
          }));
          get().autoAdjustPriceRange();
        }
      },

      // Reset
      reset: () =>
        set({
          strategy: initialStrategy,
          volatility: DEFAULT_VOLATILITY,
          riskFreeRate: DEFAULT_RISK_FREE_RATE,
          dividendYield: DEFAULT_DIVIDEND_YIELD,
          priceRange: { min: 80, max: 120, points: 100 },
          selectedLegId: null,
          showGreeks: false,
        }),
    }),
    {
      name: 'options-toolkit-storage',
      partialize: (state) => ({
        strategy: state.strategy,
        volatility: state.volatility,
        riskFreeRate: state.riskFreeRate,
        dividendYield: state.dividendYield,
        showGreeks: state.showGreeks,
      }),
    }
  )
);

/**
 * Hook for creating new leg with defaults
 */
export function createNewLeg(): OptionLeg {
  const store = useOptionsStore.getState();
  const { underlyingPrice } = store.strategy;

  return {
    id: crypto.randomUUID(),
    type: 'call',
    position: 'long',
    quantity: 1,
    strike: Math.round(underlyingPrice),
    premium: 0,
    expiry: 30,
  };
}
