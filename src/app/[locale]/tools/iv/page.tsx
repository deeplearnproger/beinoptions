'use client';

import React, { useState, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { impliedVol, type IVParams } from '@/lib/options/implied-volatility';
import { bsPrice } from '@/lib/options/black-scholes';
import { formatPercent } from '@/lib/options/utils';
import { ToolTutorial, useIVTutorialSteps } from '@/components/options/ToolTutorial';

export default function IVToolsPage() {
  const t = useTranslations('tools');
  const locale = useLocale();
  const tutorialSteps = useIVTutorialSteps(locale === 'de');

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('iv.title')}</h1>
          <p className="text-gray-600">
            {t('iv.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* IV Solver */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('iv.solver.title')}</h2>
            <p className="text-sm text-gray-600 mb-6">
              {t('iv.solver.description')}
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('common.optionType')}
                </label>
                <select
                  value={solverInputs.type}
                  onChange={(e) => handleSolverChange('type', e.target.value as 'call' | 'put')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="call">{t('common.call')}</option>
                  <option value="put">{t('common.put')}</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('common.spotPrice')}
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
                    {t('common.strike')}
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
                  {t('common.daysToExpiry')}
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
                  {t('common.marketPrice')}
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
                    {t('common.riskFreeRate')}
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
                    {t('common.dividendYield')}
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
                  <p className="text-sm font-medium text-red-800 mb-1">{t('common.error')}</p>
                  <p className="text-red-700">{ivResult.error}</p>
                </>
              ) : ivResult.impliedVol !== null ? (
                <>
                  <p className="text-sm text-blue-600 mb-1">{t('iv.solver.result')}</p>
                  <p className="text-3xl font-bold text-blue-900">
                    {formatPercent(ivResult.impliedVol * 100, 2)}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs text-blue-700">
                    <span>{t('iv.solver.method')}: {ivResult.method}</span>
                    <span>{t('iv.solver.iterations')}: {ivResult.iterations}</span>
                  </div>
                </>
              ) : (
                <p className="text-sm text-gray-600">{t('iv.solver.enterParams')}</p>
              )}
            </div>
          </div>

          {/* Price Calculator (reverse) */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('iv.calculator.title')}</h2>
            <p className="text-sm text-gray-600 mb-6">
              {t('iv.calculator.description')}
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('common.optionType')}
                </label>
                <select
                  value={calcInputs.type}
                  onChange={(e) => handleCalcChange('type', e.target.value as 'call' | 'put')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="call">{t('common.call')}</option>
                  <option value="put">{t('common.put')}</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('common.spotPrice')}
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
                    {t('common.strike')}
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
                  {t('common.daysToExpiry')}
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
                  {t('common.impliedVolatility')}
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
                    {t('common.riskFreeRate')}
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
                    {t('common.dividendYield')}
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
                  <p className="text-sm text-green-600 mb-1">{t('iv.calculator.result')}</p>
                  <p className="text-3xl font-bold text-green-900">
                    ${theoreticalPrice.toFixed(2)}
                  </p>
                  <p className="mt-3 text-xs text-green-700">
                    {t('iv.calculator.basedOn')}
                  </p>
                </>
              ) : (
                <p className="text-sm text-gray-600">{t('iv.calculator.enterParams')}</p>
              )}
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('iv.about.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{t('iv.about.solverTitle')}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {t('iv.about.solverDesc1')}
              </p>
              <p className="text-sm text-gray-600">
                {t('iv.about.solverDesc2')}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{t('iv.about.calcTitle')}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {t('iv.about.calcDesc1')}
              </p>
              <p className="text-sm text-gray-600">
                {t('iv.about.calcDesc2')}
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm font-medium text-yellow-800 mb-1">{t('iv.note.title')}</p>
            <p className="text-sm text-yellow-700">
              {t('iv.note.content')}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Tutorial */}
      <ToolTutorial
        toolName="iv"
        steps={tutorialSteps}
        storageKey="tutorial_iv_completed"
      />
    </div>
  );
}
