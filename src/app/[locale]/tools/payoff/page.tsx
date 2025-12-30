'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { useOptionsStore, createNewLeg } from '@/lib/store/options-store';
import { OptionLegInput } from '@/components/options/OptionLegInput';
import { PayoffChart } from '@/components/options/PayoffChart';
import { StrategyPresets } from '@/components/options/StrategyPresets';
import { ToolTutorial, usePayoffTutorialSteps } from '@/components/options/ToolTutorial';
import {
  calculateMaxProfitLoss,
  getNetPremium,
  validateStrategy,
} from '@/lib/options/strategies';
import {
  formatCurrency,
  exportStrategyToCSV,
  downloadFile,
  generateShareableLink,
  copyToClipboard,
} from '@/lib/options/utils';
import { decodeStrategyFromURL } from '@/lib/options/utils';

export default function PayoffCalculatorPage() {
  const t = useTranslations('tools');
  const locale = useLocale();
  const tutorialSteps = usePayoffTutorialSteps(locale === 'de');
  const searchParams = useSearchParams();
  const strategy = useOptionsStore((state) => state.strategy);
  const addLeg = useOptionsStore((state) => state.addLeg);
  const removeLeg = useOptionsStore((state) => state.removeLeg);
  const updateUnderlyingPrice = useOptionsStore((state) => state.updateUnderlyingPrice);
  const updateStrategyName = useOptionsStore((state) => state.updateStrategyName);
  const autoAdjustPriceRange = useOptionsStore((state) => state.autoAdjustPriceRange);
  const reset = useOptionsStore((state) => state.reset);

  // Load strategy from URL params on mount
  useEffect(() => {
    const urlParams = searchParams.toString();
    if (urlParams) {
      const decoded = decodeStrategyFromURL(urlParams);
      if (decoded && decoded.legs) {
        if (decoded.name) updateStrategyName(decoded.name);
        if (decoded.underlyingPrice) updateUnderlyingPrice(decoded.underlyingPrice);
        decoded.legs.forEach((leg) => addLeg(leg));
        autoAdjustPriceRange();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddLeg = () => {
    if (strategy.legs.length >= 6) {
      alert('Maximum 6 legs allowed');
      return;
    }
    const newLeg = createNewLeg();
    addLeg(newLeg);
    autoAdjustPriceRange();
  };

  const handleRemoveLeg = (legId: string) => {
    removeLeg(legId);
    autoAdjustPriceRange();
  };

  const handleExportCSV = () => {
    const csv = exportStrategyToCSV(strategy);
    downloadFile(csv, `${strategy.name.replace(/\s+/g, '_')}_strategy.csv`);
  };

  const handleShare = async () => {
    const link = generateShareableLink(strategy);
    const success = await copyToClipboard(link);
    if (success) {
      alert('Share link copied to clipboard!');
    } else {
      alert('Failed to copy link');
    }
  };

  const validationErrors = validateStrategy(strategy);
  const hasErrors = validationErrors.length > 0;

  const { maxProfit, maxLoss } = calculateMaxProfitLoss(strategy.legs, strategy.underlyingPrice, {
    min: strategy.underlyingPrice * 0.5,
    max: strategy.underlyingPrice * 1.5,
  });

  const netPremium = getNetPremium(strategy.legs);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('payoff.title')}</h1>
          <p className="text-gray-600">
            {t('payoff.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Strategy Builder */}
          <div className="lg:col-span-1 space-y-6">
            {/* Strategy Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('payoff.strategy.title')}</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="strategy-name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('payoff.strategy.name')}
                  </label>
                  <input
                    id="strategy-name"
                    type="text"
                    value={strategy.name}
                    onChange={(e) => updateStrategyName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="underlying-price" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('payoff.strategy.underlyingPrice')}
                  </label>
                  <input
                    id="underlying-price"
                    type="number"
                    value={strategy.underlyingPrice}
                    onChange={(e) => {
                      updateUnderlyingPrice(parseFloat(e.target.value) || 0);
                      autoAdjustPriceRange();
                    }}
                    step="0.5"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Presets */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <StrategyPresets onSelect={autoAdjustPriceRange} />
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-3">
              <button
                onClick={handleAddLeg}
                disabled={strategy.legs.length >= 6}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {t('payoff.actions.addLeg')} ({strategy.legs.length}/6)
              </button>

              <button
                onClick={handleExportCSV}
                disabled={strategy.legs.length === 0}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {t('payoff.actions.exportCSV')}
              </button>

              <button
                onClick={handleShare}
                disabled={strategy.legs.length === 0}
                className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {t('payoff.actions.shareLink')}
              </button>

              <button
                onClick={reset}
                className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                {t('payoff.actions.reset')}
              </button>
            </div>
          </div>

          {/* Right Column - Legs & Chart */}
          <div className="lg:col-span-2 space-y-6">
            {/* Option Legs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('payoff.legs.title')}</h2>

              {strategy.legs.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">{t('payoff.legs.noLegs')}</p>
                  <button
                    onClick={handleAddLeg}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    {t('payoff.legs.addFirst')}
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {strategy.legs.map((leg) => (
                    <OptionLegInput
                      key={leg.id}
                      leg={leg}
                      onRemove={() => handleRemoveLeg(leg.id)}
                    />
                  ))}
                </div>
              )}

              {/* Validation Errors */}
              {hasErrors && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm font-medium text-red-800 mb-1">{t('payoff.legs.validationErrors')}</p>
                  <ul className="list-disc list-inside text-sm text-red-700">
                    {validationErrors.map((error, index) => (
                      <li key={index}>{error.message}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Payoff Summary */}
            {strategy.legs.length > 0 && !hasErrors && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('payoff.summary.title')}</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-blue-600 mb-1">{t('payoff.summary.netPremium')}</p>
                    <p className={`text-lg font-semibold ${netPremium >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                      {formatCurrency(netPremium)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {netPremium >= 0 ? t('payoff.summary.credit') : t('payoff.summary.debit')}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-xs text-green-600 mb-1">{t('payoff.summary.maxProfit')}</p>
                    <p className="text-lg font-semibold text-green-700">
                      {maxProfit === null ? t('payoff.summary.unlimited') : formatCurrency(maxProfit)}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <p className="text-xs text-red-600 mb-1">{t('payoff.summary.maxLoss')}</p>
                    <p className="text-lg font-semibold text-red-700">
                      {maxLoss === null ? t('payoff.summary.unlimited') : formatCurrency(maxLoss)}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Payoff Chart */}
            {strategy.legs.length > 0 && !hasErrors && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('payoff.chart.title')}</h2>
                <PayoffChart />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Tutorial */}
      <ToolTutorial
        toolName="payoff"
        steps={tutorialSteps}
        storageKey="tutorial_payoff_completed"
      />
    </div>
  );
}
