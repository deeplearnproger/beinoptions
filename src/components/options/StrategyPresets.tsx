'use client';

import React from 'react';
import { useOptionsStore } from '@/lib/store/options-store';

const PRESETS = [
  {
    key: 'covered-call',
    name: 'Covered Call',
    description: 'Short call + long stock (represented as short call)',
    level: 'Beginner',
  },
  {
    key: 'protective-put',
    name: 'Protective Put',
    description: 'Long put + long stock (represented as long put)',
    level: 'Beginner',
  },
  {
    key: 'bull-call-spread',
    name: 'Bull Call Spread',
    description: 'Long lower strike call + short higher strike call',
    level: 'Intermediate',
  },
  {
    key: 'iron-condor',
    name: 'Iron Condor',
    description: 'Short put spread + short call spread',
    level: 'Advanced',
  },
  {
    key: 'straddle',
    name: 'Long Straddle',
    description: 'Long call + long put at same strike',
    level: 'Intermediate',
  },
];

interface StrategyPresetsProps {
  onSelect?: (presetKey: string) => void;
}

export function StrategyPresets({ onSelect }: StrategyPresetsProps) {
  const loadPreset = useOptionsStore((state) => state.loadPreset);

  const handleSelect = (presetKey: string) => {
    loadPreset(presetKey);
    onSelect?.(presetKey);
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-700">Quick Start Presets</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {PRESETS.map((preset) => (
          <button
            key={preset.key}
            onClick={() => handleSelect(preset.key)}
            className="text-left p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start justify-between mb-1">
              <span className="font-medium text-gray-900">{preset.name}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  preset.level === 'Beginner'
                    ? 'bg-green-100 text-green-700'
                    : preset.level === 'Intermediate'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {preset.level}
              </span>
            </div>
            <p className="text-sm text-gray-600">{preset.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
