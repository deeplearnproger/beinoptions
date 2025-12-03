'use client';

import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { generatePayoffCurve, findBreakEvens } from '@/lib/options/strategies';
import { useOptionsStore } from '@/lib/store/options-store';
import { formatCurrency } from '@/lib/options/utils';

interface PayoffChartProps {
  showBreakEvens?: boolean;
}

export function PayoffChart({ showBreakEvens = true }: PayoffChartProps) {
  const strategy = useOptionsStore((state) => state.strategy);
  const priceRange = useOptionsStore((state) => state.priceRange);

  const { chartData, breakEvens } = useMemo(() => {
    if (strategy.legs.length === 0) {
      return { chartData: [], breakEvens: [] };
    }

    const curve = generatePayoffCurve(
      strategy.legs,
      strategy.underlyingPrice,
      priceRange
    );

    const breakEvenPoints = showBreakEvens
      ? findBreakEvens(strategy.legs, strategy.underlyingPrice, {
          min: priceRange.min,
          max: priceRange.max,
        })
      : [];

    const data = curve.map((point) => ({
      price: point.price,
      payoff: point.payoff,
    }));

    return { chartData: data, breakEvens: breakEvenPoints };
  }, [strategy.legs, strategy.underlyingPrice, priceRange, showBreakEvens]);

  if (chartData.length === 0) {
    return (
      <div className="h-96 flex items-center justify-center border border-gray-200 rounded-lg bg-gray-50">
        <p className="text-gray-500">Add option legs to see payoff diagram</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="price"
            label={{ value: 'Underlying Price ($)', position: 'insideBottom', offset: -5 }}
            tickFormatter={(value) => `$${value.toFixed(0)}`}
          />
          <YAxis
            label={{ value: 'Profit/Loss ($)', angle: -90, position: 'insideLeft' }}
            tickFormatter={(value) => `$${value.toFixed(0)}`}
          />
          <Tooltip
            formatter={(value: number) => formatCurrency(value)}
            labelFormatter={(label) => `Price: ${formatCurrency(label)}`}
          />
          <Legend />

          {/* Zero line */}
          <ReferenceLine y={0} stroke="#666" strokeDasharray="3 3" />

          {/* Current price line */}
          <ReferenceLine
            x={strategy.underlyingPrice}
            stroke="#2563eb"
            strokeDasharray="3 3"
            label={{ value: 'Current', position: 'top' }}
          />

          {/* Break-even lines */}
          {breakEvens.map((be, index) => (
            <ReferenceLine
              key={index}
              x={be}
              stroke="#10b981"
              strokeDasharray="5 5"
              label={{ value: 'B/E', position: 'top', fill: '#10b981' }}
            />
          ))}

          {/* Payoff line */}
          <Line
            type="monotone"
            dataKey="payoff"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={false}
            name="Payoff at Expiry"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-blue-600"></div>
          <span className="text-gray-600">Current Price</span>
        </div>
        {breakEvens.length > 0 && (
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-green-600 border-dashed"></div>
            <span className="text-gray-600">Break-even</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-purple-600"></div>
          <span className="text-gray-600">Payoff</span>
        </div>
      </div>

      {/* Break-even values */}
      {breakEvens.length > 0 && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm font-medium text-green-800 mb-1">Break-even Points:</p>
          <div className="flex flex-wrap gap-2">
            {breakEvens.map((be, index) => (
              <span key={index} className="text-sm text-green-700">
                {formatCurrency(be)}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
