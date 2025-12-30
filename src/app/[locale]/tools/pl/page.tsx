'use client';

import React, { useMemo, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useOptionsStore, createNewLeg } from '@/lib/store/options-store';
import { OptionLegInput } from '@/components/options/OptionLegInput';
import { PLChart } from '@/components/options/PLChart';
import { GreeksDisplay } from '@/components/options/GreeksDisplay';
import { StrategyPresets } from '@/components/options/StrategyPresets';
import { ToolTutorial, usePLTutorialSteps } from '@/components/options/ToolTutorial';
import { calculateStrategyPL } from '@/lib/options/pl-simulator';
import { validateStrategy } from '@/lib/options/strategies';
import {
  formatCurrency,
  formatPercent,
  exportPLResultsToCSV,
  downloadFile,
  getPLColor,
} from '@/lib/options/utils';

export default function PLSimulatorPage() {
  const t = useTranslations('tools');
  const locale = useLocale();
  const tutorialSteps = usePLTutorialSteps(locale === 'de');

  const strategy = useOptionsStore((state) => state.strategy);
  const addLeg = useOptionsStore((state) => state.addLeg);
  const removeLeg = useOptionsStore((state) => state.removeLeg);
  const updateUnderlyingPrice = useOptionsStore((state) => state.updateUnderlyingPrice);
  const updateStrategyName = useOptionsStore((state) => state.updateStrategyName);
  const volatility = useOptionsStore((state) => state.volatility);
  const riskFreeRate = useOptionsStore((state) => state.riskFreeRate);
  const dividendYield = useOptionsStore((state) => state.dividendYield);
  const setVolatility = useOptionsStore((state) => state.setVolatility);
  const setRiskFreeRate = useOptionsStore((state) => state.setRiskFreeRate);
  const setDividendYield = useOptionsStore((state) => state.setDividendYield);
  const showGreeks = useOptionsStore((state) => state.showGreeks);
  const toggleGreeks = useOptionsStore((state) => state.toggleGreeks);
  const autoAdjustPriceRange = useOptionsStore((state) => state.autoAdjustPriceRange);
  const reset = useOptionsStore((state) => state.reset);

  const [currentPrice, setCurrentPrice] = useState(strategy.underlyingPrice);

  const plResults = useMemo(() => {
    if (strategy.legs.length === 0) return null;

    return calculateStrategyPL({
      legs: strategy.legs,
      currentPrice,
      volatility,
      riskFreeRate,
      dividendYield,
    });
  }, [strategy.legs, currentPrice, volatility, riskFreeRate, dividendYield]);

  const validationErrors = validateStrategy(strategy);
  const hasErrors = validationErrors.length > 0;

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
    if (!plResults) return;
    const csv = exportPLResultsToCSV(strategy, plResults);
    downloadFile(csv, `${strategy.name.replace(/\s+/g, '_')}_pl_results.csv`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('pl.title')}</h1>
          <p className="text-gray-600">
            {t('pl.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Strategy Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('pl.strategy.title')}</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="strategy-name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('pl.strategy.name')}
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
                    {t('pl.strategy.entryPrice')}
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

                <div>
                  <label htmlFor="current-price" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('pl.strategy.currentPrice')}
                  </label>
                  <input
                    id="current-price"
                    type="number"
                    value={currentPrice}
                    onChange={(e) => setCurrentPrice(parseFloat(e.target.value) || 0)}
                    step="0.5"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Market Parameters */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('pl.marketParams.title')}</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="volatility" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('pl.marketParams.impliedVolatility')}
                  </label>
                  <input
                    id="volatility"
                    type="number"
                    value={(volatility * 100).toFixed(1)}
                    onChange={(e) => setVolatility(parseFloat(e.target.value) / 100 || 0)}
                    step="1"
                    min="0.1"
                    max="500"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="risk-free-rate" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('pl.marketParams.riskFreeRate')}
                  </label>
                  <input
                    id="risk-free-rate"
                    type="number"
                    value={(riskFreeRate * 100).toFixed(2)}
                    onChange={(e) => setRiskFreeRate(parseFloat(e.target.value) / 100 || 0)}
                    step="0.1"
                    min="-10"
                    max="50"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="dividend-yield" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('pl.marketParams.dividendYield')}
                  </label>
                  <input
                    id="dividend-yield"
                    type="number"
                    value={(dividendYield * 100).toFixed(2)}
                    onChange={(e) => setDividendYield(parseFloat(e.target.value) / 100 || 0)}
                    step="0.1"
                    min="0"
                    max="50"
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
                {t('pl.actions.addLeg')} ({strategy.legs.length}/6)
              </button>

              <button
                onClick={toggleGreeks}
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                {showGreeks ? t('pl.actions.hideGreeks') : t('pl.actions.showGreeks')}
              </button>

              <button
                onClick={handleExportCSV}
                disabled={!plResults}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {t('pl.actions.exportResults')}
              </button>

              <button
                onClick={reset}
                className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                {t('pl.actions.reset')}
              </button>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Option Legs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('pl.legs.title')}</h2>

              {strategy.legs.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">{t('pl.legs.noLegs')}</p>
                  <button
                    onClick={handleAddLeg}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    {t('pl.legs.addFirst')}
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
                  <p className="text-sm font-medium text-red-800 mb-1">{t('pl.legs.validationErrors')}</p>
                  <ul className="list-disc list-inside text-sm text-red-700">
                    {validationErrors.map((error, index) => (
                      <li key={index}>{error.message}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* P/L Summary */}
            {plResults && !hasErrors && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('pl.results.currentPL')}</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">{t('pl.results.totalPL')}</p>
                    <p className={`text-2xl font-bold ${getPLColor(plResults.totalPL)}`}>
                      {formatCurrency(plResults.totalPL)}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">{t('pl.results.plPercent')}</p>
                    <p className={`text-2xl font-bold ${getPLColor(plResults.totalPLPercent)}`}>
                      {formatPercent(plResults.totalPLPercent)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-xs text-blue-600 mb-1">{t('pl.results.netPremium')}</p>
                  <p className={`text-lg font-semibold ${plResults.netPremium >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                    {formatCurrency(plResults.netPremium)}
                  </p>
                </div>
              </div>
            )}

            {/* Greeks */}
            {plResults && showGreeks && !hasErrors && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <GreeksDisplay plResults={plResults} showIndividualLegs={true} />
              </div>
            )}

            {/* P/L Chart */}
            {plResults && !hasErrors && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('pl.chart.title')}</h2>
                <PLChart currentPrice={currentPrice} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Tutorial */}
      <ToolTutorial
        toolName="pl"
        steps={tutorialSteps}
        storageKey="tutorial_pl_completed"
      />
    </div>
  );
}
