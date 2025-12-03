'use client';

import React from 'react';
import type { StrategyPL } from '@/lib/options/pl-simulator';
import { formatGreek } from '@/lib/options/utils';

interface GreeksDisplayProps {
  plResults: StrategyPL;
  showIndividualLegs?: boolean;
}

export function GreeksDisplay({ plResults, showIndividualLegs = false }: GreeksDisplayProps) {
  const greeks = [
    {
      name: 'Delta',
      value: plResults.totalDelta,
      description: 'Change in P/L for $1 move in underlying',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Gamma',
      value: plResults.totalGamma,
      description: 'Rate of change of Delta',
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Theta',
      value: plResults.totalTheta,
      description: 'P/L change per day (time decay)',
      color: 'text-orange-700',
      bgColor: 'bg-orange-50',
    },
    {
      name: 'Vega',
      value: plResults.totalVega,
      description: 'P/L change for 1% move in IV',
      color: 'text-green-700',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Rho',
      value: plResults.totalRho,
      description: 'P/L change for 1% move in interest rate',
      color: 'text-indigo-700',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <div className="space-y-4">
      {/* Total Greeks */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Position Greeks</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {greeks.map((greek) => (
            <div
              key={greek.name}
              className={`${greek.bgColor} border border-gray-200 rounded-lg p-3`}
            >
              <div className="text-xs text-gray-600 mb-1">{greek.name}</div>
              <div className={`text-lg font-semibold ${greek.color}`}>
                {formatGreek(greek.name.toLowerCase(), greek.value)}
              </div>
              <div className="text-xs text-gray-500 mt-1" title={greek.description}>
                {greek.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Leg Greeks */}
      {showIndividualLegs && plResults.legs.length > 1 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Greeks by Leg</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Leg
                  </th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">
                    Delta
                  </th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">
                    Gamma
                  </th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">
                    Theta
                  </th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">
                    Vega
                  </th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">
                    Rho
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {plResults.legs.map((leg, index) => (
                  <tr key={leg.legId}>
                    <td className="px-3 py-2 text-sm text-gray-900">Leg {index + 1}</td>
                    <td className="px-3 py-2 text-sm text-right text-gray-700">
                      {formatGreek('delta', leg.greeks.delta)}
                    </td>
                    <td className="px-3 py-2 text-sm text-right text-gray-700">
                      {formatGreek('gamma', leg.greeks.gamma)}
                    </td>
                    <td className="px-3 py-2 text-sm text-right text-gray-700">
                      {formatGreek('theta', leg.greeks.theta)}
                    </td>
                    <td className="px-3 py-2 text-sm text-right text-gray-700">
                      {formatGreek('vega', leg.greeks.vega)}
                    </td>
                    <td className="px-3 py-2 text-sm text-right text-gray-700">
                      {formatGreek('rho', leg.greeks.rho)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Greeks Explanation */}
      <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
        <details className="text-sm">
          <summary className="font-medium text-gray-700 cursor-pointer">
            What do these Greeks mean?
          </summary>
          <div className="mt-2 space-y-2 text-gray-600">
            <p>
              <strong>Delta:</strong> If the underlying moves $1, your position P/L changes by
              this amount. Positive = benefits from price increase.
            </p>
            <p>
              <strong>Gamma:</strong> How much Delta changes for a $1 move. High gamma means
              Delta is very sensitive to price changes.
            </p>
            <p>
              <strong>Theta:</strong> How much value you lose (or gain) each day from time decay.
              Negative = position loses value over time.
            </p>
            <p>
              <strong>Vega:</strong> How much P/L changes if implied volatility increases by 1%.
              Positive = benefits from volatility increase.
            </p>
            <p>
              <strong>Rho:</strong> How much P/L changes if interest rates increase by 1%.
              Usually the least important Greek for short-term trades.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
