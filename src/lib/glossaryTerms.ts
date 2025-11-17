// Map of glossary terms to their IDs for linking
export const glossaryTermsMap: Record<string, string> = {
  // Regulators
  'CySEC': 'cysec',
  'SEC': 'sec',
  'FCA': 'fca',
  'AFM': 'afm',

  // Basics
  'Call': 'call',
  'Call-Option': 'call',
  'Call Option': 'call',
  'Put': 'put',
  'Put-Option': 'put',
  'Put Option': 'put',
  'Strike': 'strike',
  'Strike-Preis': 'strike',
  'Strike Price': 'strike',
  'Ausübungspreis': 'strike',
  'Premium': 'premium',
  'Prämie': 'premium',
  'Optionsprämie': 'premium',
  'Verfall': 'expiration',
  'Verfallsdatum': 'expiration',
  'Expiration': 'expiration',
  'Kontrakt': 'contract',
  'Contract': 'contract',
  'Basiswert': 'underlying',
  'Underlying': 'underlying',
  'Long': 'long_short',
  'Short': 'long_short',

  // Option Values
  'ATM': 'atm',
  'At-the-Money': 'atm',
  'At the Money': 'atm',
  'ITM': 'itm',
  'In-the-Money': 'itm',
  'In the Money': 'itm',
  'OTM': 'otm',
  'Out-of-the-Money': 'otm',
  'Out of the Money': 'otm',
  'Intrinsic Value': 'intrinsic',
  'Innerer Wert': 'intrinsic',
  'Extrinsic Value': 'extrinsic',
  'Zeitwert': 'extrinsic',

  // Greeks
  'Delta': 'delta',
  'Gamma': 'gamma',
  'Theta': 'theta',
  'Vega': 'vega',
  'Rho': 'rho',

  // Advanced
  'Implizite Volatilität': 'iv',
  'Implied Volatility': 'iv',
  'IV': 'iv',
  'Historische Volatilität': 'hv',
  'Historical Volatility': 'hv',
  'Open Interest': 'oi',
  'Volumen': 'volume',
  'Volume': 'volume',
  'Bid-Ask': 'bid_ask',
  'Bid-Ask-Spread': 'bid_ask',
  'Spread': 'spread',
  'Liquidität': 'liquidity',
  'Liquidity': 'liquidity',

  // Trading Actions
  'Assignment': 'assignment',
  'Zuweisung': 'assignment',
  'Exercise': 'exercise',
  'Ausübung': 'exercise',
  'Roll': 'roll',
  'Rollen': 'roll',
  'Close': 'close',
  'Buy to Open': 'bto',
  'BTO': 'bto',
  'Sell to Open': 'sto',
  'STO': 'sto',
  'Buy to Close': 'btc',
  'BTC': 'btc',
  'Sell to Close': 'stc',
  'STC': 'stc',

  // Strategies
  'Covered Call': 'cc',
  'Protective Put': 'pp',
  'Iron Condor': 'ic',
  'Bull Spread': 'bull',
  'Bear Spread': 'bear',
  'Straddle': 'straddle',
  'Strangle': 'strangle',
  'Butterfly': 'butterfly',
  'Calendar Spread': 'calendar',

  // Risk Management
  'Max Profit': 'max_profit',
  'Maximaler Gewinn': 'max_profit',
  'Max Loss': 'max_loss',
  'Maximaler Verlust': 'max_loss',
  'Break-Even': 'breakeven',
  'Breakeven': 'breakeven',
  'Margin': 'margin',
  'Sicherheitsleistung': 'margin',
  'Naked Option': 'naked',
  'Ungedeckte Option': 'naked',
};

// Get all terms sorted by length (longest first) to avoid partial matches
export const getSortedTerms = () => {
  return Object.keys(glossaryTermsMap).sort((a, b) => b.length - a.length);
};
