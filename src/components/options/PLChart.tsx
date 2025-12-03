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
import { generatePLCurve } from '@/lib/options/pl-simulator';
import { useOptionsStore } from '@/lib/store/options-store';
import { formatCurrency } from '@/lib/options/utils';

interface PLChartProps {
  currentPrice: number;
}

export function PLChart({ currentPrice }: PLChartProps) {
  const strategy = useOptionsStore((state) => state.strategy);
  const priceRange = useOptionsStore((state) => state.priceRange);
  const volatility = useOptionsStore((state) => state.volatility);
  const riskFreeRate = useOptionsStore((state) => state.riskFreeRate);
  const dividendYield = useOptionsStore((state) => state.dividendYield);

  const chartData = useMemo(() => {
    if (strategy.legs.length === 0) {
      return [];
    }

    const curve = generatePLCurve(
      {
        legs: strategy.legs,
        currentPrice: strategy.underlyingPrice,
        volatility,
        riskFreeRate,
        dividendYield,
      },
      priceRange
    );

    return curve.map((point) => ({
      price: point.price,
      pl: point.pl,
      delta: point.delta,
    }));
  }, [
    strategy.legs,
    strategy.underlyingPrice,
    priceRange,
    volatility,
    riskFreeRate,
    dividendYield,
  ]);

  if (chartData.length === 0) {
    return (
      <div className="h-96 flex items-center justify-center border border-gray-200 rounded-lg bg-gray-50">
        <p className="text-gray-500">Add option legs to see P/L curve</p>
      </div>
    );
  }

  const maxPL = Math.max(...chartData.map((d) => d.pl));
  const minPL = Math.min(...chartData.map((d) => d.pl));

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
            label={{ value: 'Current P/L ($)', angle: -90, position: 'insideLeft' }}
            tickFormatter={(value) => `$${value.toFixed(0)}`}
          />
          <Tooltip
            formatter={(value: number, name: string) => {
              if (name === 'pl') return [formatCurrency(value), 'P/L'];
              if (name === 'delta') return [value.toFixed(3), 'Delta'];
              return [value, name];
            }}
            labelFormatter={(label) => `Price: ${formatCurrency(label)}`}
          />
          <Legend />

          {/* Zero line */}
          <ReferenceLine y={0} stroke="#666" strokeDasharray="3 3" />

          {/* Current price line */}
          <ReferenceLine
            x={currentPrice}
            stroke="#2563eb"
            strokeDasharray="3 3"
            label={{ value: 'Current', position: 'top' }}
          />

          {/* P/L line */}
          <Line
            type="monotone"
            dataKey="pl"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={false}
            name="Current P/L"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* P/L Summary */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-xs text-green-600 mb-1">Max Profit (in range)</p>
          <p className="text-lg font-semibold text-green-700">{formatCurrency(maxPL)}</p>
        </div>
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-xs text-red-600 mb-1">Max Loss (in range)</p>
          <p className="text-lg font-semibold text-red-700">{formatCurrency(minPL)}</p>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          This shows current P/L based on Black-Scholes pricing before expiration. The P/L will
          change as the underlying price moves and time passes.
        </p>
      </div>
    </div>
  );
}
