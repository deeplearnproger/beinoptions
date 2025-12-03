'use client';

import React, { useState, useMemo } from 'react';
import { impliedVol, type IVParams } from '@/lib/options/implied-volatility';
import { bsPrice } from '@/lib/options/black-scholes';
import { formatPercent } from '@/lib/options/utils';

export default function IVToolsPage() {
  // IV Solver inputs
  const [solverInputs, setSolverInputs] = useState<IVParams>({
    type: 'call',
    S: 100,
    K: 100,
    T: 30 / 365,
    r: 0.05,
    q: 0.0,
    marketPrice: 5.0,
  });

  // IV Calculator (reverse: input IV, get price)
  const [calcInputs, setCalcInputs] = useState({
    type: 'call' as 'call' | 'put',
    S: 100,
    K: 100,
    T: 30,
    r: 0.05,
    q: 0.0,
    sigma: 0.25,
  });

  // Calculate IV
  const ivResult = useMemo(() => {
    return impliedVol(solverInputs);
  }, [solverInputs]);

  // Calculate theoretical price
  const theoreticalPrice = useMemo(() => {
    try {
      return bsPrice({
        type: calcInputs.type,
        S: calcInputs.S,
        K: calcInputs.K,
        T: calcInputs.T / 365,
        r: calcInputs.r,
        q: calcInputs.q,
        sigma: calcInputs.sigma,
      });
    } catch {
      return null;
    }
  }, [calcInputs]);

  const handleSolverChange = (field: keyof IVParams, value: string | number) => {
    setSolverInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCalcChange = (field: string, value: string | number) => {
    setCalcInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Implied Volatility Tools</h1>
          <p className="text-gray-600">
            Calculate implied volatility from market prices and theoretical option values
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* IV Solver */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">IV Solver</h2>
            <p className="text-sm text-gray-600 mb-6">
              Input market price to calculate implied volatility
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Option Type
                </label>
                <select
                  value={solverInputs.type}
                  onChange={(e) => handleSolverChange('type', e.target.value as 'call' | 'put')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="call">Call</option>
                  <option value="put">Put</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Spot Price ($)
                  </label>
                  <input
                    type="number"
                    value={solverInputs.S}
                    onChange={(e) => handleSolverChange('S', parseFloat(e.target.value) || 0)}
                    step="0.5"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Strike ($)
                  </label>
                  <input
                    type="number"
                    value={solverInputs.K}
                    onChange={(e) => handleSolverChange('K', parseFloat(e.target.value) || 0)}
                    step="0.5"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Days to Expiry
                </label>
                <input
                  type="number"
                  value={(solverInputs.T * 365).toFixed(0)}
                  onChange={(e) =>
                    handleSolverChange('T', parseFloat(e.target.value) / 365 || 0)
                  }
                  step="1"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Market Price ($)
                </label>
                <input
                  type="number"
                  value={solverInputs.marketPrice}
                  onChange={(e) =>
                    handleSolverChange('marketPrice', parseFloat(e.target.value) || 0)
                  }
                  step="0.01"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Risk-Free Rate (%)
                  </label>
                  <input
                    type="number"
                    value={(solverInputs.r * 100).toFixed(2)}
                    onChange={(e) =>
                      handleSolverChange('r', parseFloat(e.target.value) / 100 || 0)
                    }
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dividend Yield (%)
                  </label>
                  <input
                    type="number"
                    value={(solverInputs.q * 100).toFixed(2)}
                    onChange={(e) =>
                      handleSolverChange('q', parseFloat(e.target.value) / 100 || 0)
                    }
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* IV Result */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
              {ivResult.error ? (
                <>
                  <p className="text-sm font-medium text-red-800 mb-1">Error</p>
                  <p className="text-red-700">{ivResult.error}</p>
                </>
              ) : ivResult.impliedVol !== null ? (
                <>
                  <p className="text-sm text-blue-600 mb-1">Implied Volatility</p>
                  <p className="text-3xl font-bold text-blue-900">
                    {formatPercent(ivResult.impliedVol * 100, 2)}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs text-blue-700">
                    <span>Method: {ivResult.method}</span>
                    <span>Iterations: {ivResult.iterations}</span>
                  </div>
                </>
              ) : (
                <p className="text-sm text-gray-600">Enter parameters to calculate IV</p>
              )}
            </div>
          </div>

          {/* Price Calculator (reverse) */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Price Calculator</h2>
            <p className="text-sm text-gray-600 mb-6">
              Input implied volatility to calculate theoretical option price
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Option Type
                </label>
                <select
                  value={calcInputs.type}
                  onChange={(e) => handleCalcChange('type', e.target.value as 'call' | 'put')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="call">Call</option>
                  <option value="put">Put</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Spot Price ($)
                  </label>
                  <input
                    type="number"
                    value={calcInputs.S}
                    onChange={(e) => handleCalcChange('S', parseFloat(e.target.value) || 0)}
                    step="0.5"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Strike ($)
                  </label>
                  <input
                    type="number"
                    value={calcInputs.K}
                    onChange={(e) => handleCalcChange('K', parseFloat(e.target.value) || 0)}
                    step="0.5"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Days to Expiry
                </label>
                <input
                  type="number"
                  value={calcInputs.T}
                  onChange={(e) => handleCalcChange('T', parseFloat(e.target.value) || 0)}
                  step="1"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Implied Volatility (%)
                </label>
                <input
                  type="number"
                  value={(calcInputs.sigma * 100).toFixed(1)}
                  onChange={(e) =>
                    handleCalcChange('sigma', parseFloat(e.target.value) / 100 || 0)
                  }
                  step="1"
                  min="0.1"
                  max="500"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Risk-Free Rate (%)
                  </label>
                  <input
                    type="number"
                    value={(calcInputs.r * 100).toFixed(2)}
                    onChange={(e) => handleCalcChange('r', parseFloat(e.target.value) / 100 || 0)}
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dividend Yield (%)
                  </label>
                  <input
                    type="number"
                    value={(calcInputs.q * 100).toFixed(2)}
                    onChange={(e) => handleCalcChange('q', parseFloat(e.target.value) / 100 || 0)}
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Price Result */}
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
              {theoreticalPrice !== null ? (
                <>
                  <p className="text-sm text-green-600 mb-1">Theoretical Price</p>
                  <p className="text-3xl font-bold text-green-900">
                    ${theoreticalPrice.toFixed(2)}
                  </p>
                  <p className="mt-3 text-xs text-green-700">
                    Based on Black-Scholes model
                  </p>
                </>
              ) : (
                <p className="text-sm text-gray-600">Enter parameters to calculate price</p>
              )}
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About IV Tools</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">IV Solver</h3>
              <p className="text-sm text-gray-600 mb-2">
                The IV Solver uses Newton-Raphson method with bisection fallback to find the
                implied volatility that makes the Black-Scholes theoretical price equal to the
                market price.
              </p>
              <p className="text-sm text-gray-600">
                Implied volatility represents the market's expectation of future volatility and is
                a key metric for comparing options across different strikes and expirations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Price Calculator</h3>
              <p className="text-sm text-gray-600 mb-2">
                The Price Calculator uses the Black-Scholes formula to compute theoretical option
                prices given an implied volatility input.
              </p>
              <p className="text-sm text-gray-600">
                Use this to estimate fair values, identify mispriced options, or understand how
                volatility changes affect option prices.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm font-medium text-yellow-800 mb-1">Important Note</p>
            <p className="text-sm text-yellow-700">
              These tools use the Black-Scholes model which assumes European-style options,
              constant volatility, and no transaction costs. Real market prices may differ due to
              early exercise premiums (American options), volatility smile/skew, and other factors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
