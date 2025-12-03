/**
 * Utility functions for options toolkit
 */

import type { Strategy, OptionLeg } from './strategies';
import type { StrategyPL } from './pl-simulator';

/**
 * Format number as currency
 */
export function formatCurrency(value: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Format number as percentage
 */
export function formatPercent(value: number, decimals: number = 2): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(decimals)}%`;
}

/**
 * Format Greek value
 */
export function formatGreek(greek: string, value: number): string {
  const decimals = greek === 'delta' ? 3 : 2;
  return value.toFixed(decimals);
}

/**
 * Export strategy to CSV
 */
export function exportStrategyToCSV(strategy: Strategy): string {
  const headers = ['Leg', 'Type', 'Position', 'Quantity', 'Strike', 'Premium', 'Expiry (days)'];
  const rows = strategy.legs.map((leg, index) => [
    (index + 1).toString(),
    leg.type,
    leg.position,
    leg.quantity.toString(),
    leg.strike.toString(),
    leg.premium.toString(),
    leg.expiry.toString(),
  ]);

  const csv = [
    `# Strategy: ${strategy.name}`,
    `# Underlying Price: ${strategy.underlyingPrice}`,
    '',
    headers.join(','),
    ...rows.map(row => row.join(',')),
  ].join('\n');

  return csv;
}

/**
 * Export P/L results to CSV
 */
export function exportPLResultsToCSV(
  strategy: Strategy,
  plResults: StrategyPL
): string {
  const headers = [
    'Leg',
    'Type',
    'Position',
    'Strike',
    'Entry Price',
    'Current Price',
    'P/L',
    'P/L %',
    'Delta',
    'Gamma',
    'Theta',
    'Vega',
    'Rho',
  ];

  const rows = plResults.legs.map((legPL, index) => {
    const leg = strategy.legs.find(l => l.id === legPL.legId);
    if (!leg) return [];

    return [
      (index + 1).toString(),
      leg.type,
      leg.position,
      leg.strike.toString(),
      legPL.entryPrice.toFixed(2),
      legPL.currentPrice.toFixed(2),
      legPL.pl.toFixed(2),
      legPL.plPercent.toFixed(2),
      legPL.greeks.delta.toFixed(3),
      legPL.greeks.gamma.toFixed(4),
      legPL.greeks.theta.toFixed(2),
      legPL.greeks.vega.toFixed(2),
      legPL.greeks.rho.toFixed(2),
    ];
  });

  const csv = [
    `# Strategy: ${strategy.name}`,
    `# Total P/L: ${plResults.totalPL.toFixed(2)}`,
    `# Total P/L %: ${plResults.totalPLPercent.toFixed(2)}%`,
    '',
    headers.join(','),
    ...rows.map(row => row.join(',')),
    '',
    '# Total Greeks',
    `Delta,${plResults.totalDelta.toFixed(3)}`,
    `Gamma,${plResults.totalGamma.toFixed(4)}`,
    `Theta,${plResults.totalTheta.toFixed(2)}`,
    `Vega,${plResults.totalVega.toFixed(2)}`,
    `Rho,${plResults.totalRho.toFixed(2)}`,
  ].join('\n');

  return csv;
}

/**
 * Parse CSV to import strategy
 */
export function parseStrategyFromCSV(csv: string): Partial<Strategy> | null {
  try {
    const lines = csv.split('\n').filter(line => line.trim() && !line.startsWith('#'));
    if (lines.length < 2) return null;

    const headers = lines[0].split(',');
    const legs: OptionLeg[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      if (values.length < 7) continue;

      legs.push({
        id: crypto.randomUUID(),
        type: values[1].trim() as 'call' | 'put',
        position: values[2].trim() as 'long' | 'short',
        quantity: parseInt(values[3]),
        strike: parseFloat(values[4]),
        premium: parseFloat(values[5]),
        expiry: parseFloat(values[6]),
      });
    }

    return { legs };
  } catch {
    return null;
  }
}

/**
 * Encode strategy to URL parameters
 */
export function encodeStrategyToURL(strategy: Strategy): string {
  const params = new URLSearchParams();
  params.set('name', strategy.name);
  params.set('underlying', strategy.underlyingPrice.toString());
  params.set('legs', encodeURIComponent(JSON.stringify(strategy.legs)));

  return params.toString();
}

/**
 * Decode strategy from URL parameters
 */
export function decodeStrategyFromURL(url: string): Partial<Strategy> | null {
  try {
    const params = new URLSearchParams(url);
    const name = params.get('name');
    const underlying = params.get('underlying');
    const legsStr = params.get('legs');

    if (!legsStr) return null;

    const legs = JSON.parse(decodeURIComponent(legsStr)) as OptionLeg[];

    return {
      name: name || 'Shared Strategy',
      underlyingPrice: underlying ? parseFloat(underlying) : 100,
      legs,
    };
  } catch {
    return null;
  }
}

/**
 * Download file helper
 */
export function downloadFile(content: string, filename: string, mimeType: string = 'text/csv'): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Copy to clipboard helper
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch {
      document.body.removeChild(textArea);
      return false;
    }
  }
}

/**
 * Generate shareable link
 */
export function generateShareableLink(strategy: Strategy, baseUrl?: string): string {
  const params = encodeStrategyToURL(strategy);
  const base = baseUrl || (typeof window !== 'undefined' ? window.location.origin : '');
  return `${base}/tools/payoff?${params}`;
}

/**
 * Calculate risk/reward ratio
 */
export function calculateRiskRewardRatio(
  maxProfit: number | null,
  maxLoss: number | null
): number | null {
  if (maxProfit === null || maxLoss === null || maxLoss === 0) {
    return null;
  }
  return Math.abs(maxProfit / maxLoss);
}

/**
 * Get position description
 */
export function getPositionDescription(leg: OptionLeg): string {
  const position = leg.position === 'long' ? 'Long' : 'Short';
  const type = leg.type === 'call' ? 'Call' : 'Put';
  return `${position} ${leg.quantity}x ${type} @ ${leg.strike}`;
}

/**
 * Get strategy complexity level
 */
export function getStrategyComplexity(legCount: number): 'Simple' | 'Moderate' | 'Complex' {
  if (legCount <= 1) return 'Simple';
  if (legCount <= 3) return 'Moderate';
  return 'Complex';
}

/**
 * Validate price range
 */
export function validatePriceRange(min: number, max: number, underlyingPrice: number): string | null {
  if (min <= 0) return 'Minimum price must be positive';
  if (max <= min) return 'Maximum price must be greater than minimum';
  if (underlyingPrice < min || underlyingPrice > max) {
    return 'Underlying price should be within the range';
  }
  return null;
}

/**
 * Calculate days to expiration from date
 */
export function calculateDaysToExpiration(expiryDate: Date): number {
  const now = new Date();
  const diff = expiryDate.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

/**
 * Format expiry display
 */
export function formatExpiry(days: number): string {
  if (days === 0) return 'Today';
  if (days === 1) return '1 day';
  if (days < 30) return `${days} days`;
  const weeks = Math.floor(days / 7);
  if (weeks < 8) return `${weeks} week${weeks > 1 ? 's' : ''}`;
  const months = Math.floor(days / 30);
  return `${months} month${months > 1 ? 's' : ''}`;
}

/**
 * Get color for P/L value
 */
export function getPLColor(value: number): string {
  if (value > 0) return 'text-green-600';
  if (value < 0) return 'text-red-600';
  return 'text-gray-600';
}

/**
 * Round to tick size
 */
export function roundToTickSize(value: number, tickSize: number = 0.01): number {
  return Math.round(value / tickSize) * tickSize;
}

/**
 * Generate default strategy name
 */
export function generateDefaultStrategyName(legs: OptionLeg[]): string {
  if (legs.length === 0) return 'Custom Strategy';

  const hasCall = legs.some(l => l.type === 'call');
  const hasPut = legs.some(l => l.type === 'put');
  const hasLong = legs.some(l => l.position === 'long');
  const hasShort = legs.some(l => l.position === 'short');

  if (legs.length === 1) {
    const leg = legs[0];
    return `${leg.position === 'long' ? 'Long' : 'Short'} ${leg.type === 'call' ? 'Call' : 'Put'}`;
  }

  if (legs.length === 2 && hasCall && hasPut && hasLong && !hasShort) {
    return 'Straddle';
  }

  if (legs.length === 2 && hasCall && !hasPut) {
    return 'Call Spread';
  }

  if (legs.length === 2 && hasPut && !hasCall) {
    return 'Put Spread';
  }

  if (legs.length === 4 && hasCall && hasPut) {
    return 'Iron Condor';
  }

  return 'Custom Strategy';
}
