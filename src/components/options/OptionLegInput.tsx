'use client';

import React from 'react';
import type { OptionLeg } from '@/lib/options/strategies';
import { useOptionsStore } from '@/lib/store/options-store';

interface OptionLegInputProps {
  leg: OptionLeg;
  onRemove?: () => void;
  showRemove?: boolean;
}

export function OptionLegInput({ leg, onRemove, showRemove = true }: OptionLegInputProps) {
  const updateLeg = useOptionsStore((state) => state.updateLeg);
  const selectedLegId = useOptionsStore((state) => state.selectedLegId);
  const setSelectedLegId = useOptionsStore((state) => state.setSelectedLegId);

  const isSelected = selectedLegId === leg.id;

  const handleChange = (field: keyof OptionLeg, value: string | number) => {
    updateLeg(leg.id, { [field]: value });
  };

  return (
    <div
      className={`border rounded-lg p-4 space-y-3 transition-colors ${
        isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={() => setSelectedLegId(leg.id)}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`font-medium ${isSelected ? 'text-blue-700' : 'text-gray-700'}`}>
            Leg {leg.id.slice(0, 4)}
          </span>
          <span className="text-xs text-gray-500">
            {leg.position === 'long' ? 'Long' : 'Short'} {leg.type === 'call' ? 'Call' : 'Put'}
          </span>
        </div>
        {showRemove && onRemove && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="text-red-600 hover:text-red-800 text-sm"
            aria-label="Remove leg"
          >
            Remove
          </button>
        )}
      </div>

      {/* Type and Position */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`type-${leg.id}`} className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            id={`type-${leg.id}`}
            value={leg.type}
            onChange={(e) => handleChange('type', e.target.value as 'call' | 'put')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="call">Call</option>
            <option value="put">Put</option>
          </select>
        </div>

        <div>
          <label htmlFor={`position-${leg.id}`} className="block text-sm font-medium text-gray-700 mb-1">
            Position
          </label>
          <select
            id={`position-${leg.id}`}
            value={leg.position}
            onChange={(e) => handleChange('position', e.target.value as 'long' | 'short')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="long">Long</option>
            <option value="short">Short</option>
          </select>
        </div>
      </div>

      {/* Strike and Premium */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`strike-${leg.id}`} className="block text-sm font-medium text-gray-700 mb-1">
            Strike ($)
          </label>
          <input
            id={`strike-${leg.id}`}
            type="number"
            value={leg.strike}
            onChange={(e) => handleChange('strike', parseFloat(e.target.value) || 0)}
            step="0.5"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor={`premium-${leg.id}`} className="block text-sm font-medium text-gray-700 mb-1">
            Premium ($)
          </label>
          <input
            id={`premium-${leg.id}`}
            type="number"
            value={leg.premium}
            onChange={(e) => handleChange('premium', parseFloat(e.target.value) || 0)}
            step="0.01"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Quantity and Expiry */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`quantity-${leg.id}`} className="block text-sm font-medium text-gray-700 mb-1">
            Quantity
          </label>
          <input
            id={`quantity-${leg.id}`}
            type="number"
            value={leg.quantity}
            onChange={(e) => handleChange('quantity', parseInt(e.target.value) || 1)}
            step="1"
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor={`expiry-${leg.id}`} className="block text-sm font-medium text-gray-700 mb-1">
            Expiry (days)
          </label>
          <input
            id={`expiry-${leg.id}`}
            type="number"
            value={leg.expiry}
            onChange={(e) => handleChange('expiry', parseFloat(e.target.value) || 0)}
            step="1"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
