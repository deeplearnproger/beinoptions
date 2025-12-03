# Options Toolkit

A production-ready options trading toolkit with P/L simulator, payoff calculator, and implied volatility tools for equity options.

## Features

### 1. Payoff Calculator (`/payoff`)
- **Multi-leg strategies**: Support for up to 6 option legs
- **Instruments**: Call/Put, Long/Short positions
- **Inputs per leg**: Type, position, quantity, strike, premium, expiry
- **Outputs**: Payoff at expiration, break-even points, max profit/loss, risk graph
- **Presets**: Covered Call, Protective Put, Bull Call Spread, Iron Condor, Straddle, Strangle
- **Export**: CSV export, URL sharing

### 2. P/L Simulator (`/pl`)
- **Real-time P/L**: Calculate current profit/loss before expiration
- **Black-Scholes pricing**: Accurate theoretical values
- **Greeks**: Delta, Gamma, Theta, Vega, Rho for position and individual legs
- **Inputs**: Current price, implied volatility, risk-free rate, dividend yield
- **Visualization**: P/L curve across price range, Greeks display
- **Export**: CSV export with detailed Greeks

### 3. IV Tools (`/iv`)
- **IV Solver**: Calculate implied volatility from market price
- **Price Calculator**: Calculate theoretical price from IV
- **Solver method**: Newton-Raphson with bisection fallback
- **Support**: Call/Put options with dividends
- **Validation**: Intrinsic value checks, arbitrage detection

## Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **State Management**: Zustand with persistence
- **Validation**: Zod schemas
- **Testing**: Vitest

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## Project Structure

```
lib/
├── options/
│   ├── black-scholes.ts          # BS pricing and Greeks
│   ├── implied-volatility.ts     # IV solver
│   ├── math-utils.ts             # Mathematical utilities
│   ├── strategies.ts             # Multi-leg strategy management
│   ├── pl-simulator.ts           # P/L calculation with Greeks
│   ├── schemas.ts                # Zod validation schemas
│   └── utils.ts                  # Utility functions
├── store/
│   └── options-store.ts          # Zustand state management

components/
├── options/
│   ├── OptionLegInput.tsx        # Option leg input form
│   ├── PayoffChart.tsx           # Payoff diagram
│   ├── PLChart.tsx               # P/L curve chart
│   ├── GreeksDisplay.tsx         # Greeks visualization
│   └── StrategyPresets.tsx       # Strategy preset selector

app/
├── (tools)/
│   ├── payoff/
│   │   └── page.tsx              # Payoff Calculator page
│   ├── pl/
│   │   └── page.tsx              # P/L Simulator page
│   └── iv/
│       └── page.tsx              # IV Tools page
```

## Mathematical Formulas

### Black-Scholes Model

**Call Option Price:**
```
C = S·e^(-q·T)·N(d1) - K·e^(-r·T)·N(d2)
```

**Put Option Price:**
```
P = K·e^(-r·T)·N(-d2) - S·e^(-q·T)·N(-d1)
```

Where:
```
d1 = [ln(S/K) + (r - q + σ²/2)·T] / (σ·√T)
d2 = d1 - σ·√T
```

**Parameters:**
- `S`: Current underlying price
- `K`: Strike price
- `T`: Time to expiration (years)
- `r`: Risk-free interest rate (annualized)
- `q`: Dividend yield (annualized)
- `σ`: Volatility (annualized)
- `N(x)`: Standard normal cumulative distribution function

### Greeks

**Delta (Δ):**
- Call: `Δ_call = e^(-q·T)·N(d1)`
- Put: `Δ_put = -e^(-q·T)·N(-d1)`
- Interpretation: Change in option price for $1 move in underlying

**Gamma (Γ):**
```
Γ = [e^(-q·T)·n(d1)] / (S·σ·√T)
```
- Same for calls and puts
- Interpretation: Rate of change of Delta

**Theta (Θ):**
- Call: `Θ_call = [-S·e^(-q·T)·n(d1)·σ / (2·√T) + q·S·e^(-q·T)·N(d1) - r·K·e^(-r·T)·N(d2)] / 365`
- Put: `Θ_put = [-S·e^(-q·T)·n(d1)·σ / (2·√T) - q·S·e^(-q·T)·N(-d1) + r·K·e^(-r·T)·N(-d2)] / 365`
- Interpretation: Change in option price per day (time decay)

**Vega (ν):**
```
ν = S·e^(-q·T)·n(d1)·√T / 100
```
- Same for calls and puts
- Interpretation: Change in option price for 1% move in implied volatility

**Rho (ρ):**
- Call: `ρ_call = K·T·e^(-r·T)·N(d2) / 100`
- Put: `ρ_put = -K·T·e^(-r·T)·N(-d2) / 100`
- Interpretation: Change in option price for 1% move in interest rate

Where `n(x)` is the standard normal probability density function:
```
n(x) = e^(-x²/2) / √(2π)
```

### Implied Volatility

The implied volatility solver uses the Newton-Raphson method:

```
σ_n+1 = σ_n - [BS(σ_n) - P_market] / Vega(σ_n)
```

With fallback to bisection method if Newton-Raphson fails to converge.

**Initial guess** (Brenner-Subrahmanyam approximation):
```
σ_0 = √(2π/T) · (P_market / S)
```

## Assumptions and Limitations

### Black-Scholes Assumptions
1. **European exercise**: No early exercise allowed
2. **Constant volatility**: Volatility remains constant until expiration
3. **Constant interest rate**: Risk-free rate is known and constant
4. **No transaction costs**: No commissions or bid-ask spreads
5. **Continuous dividends**: Dividend yield is continuous and constant
6. **Efficient markets**: No arbitrage opportunities exist
7. **Log-normal distribution**: Underlying price follows log-normal distribution

### Limitations
1. **American options**: Does not account for early exercise premium
2. **Volatility smile/skew**: Assumes flat volatility across strikes
3. **Term structure**: Does not model volatility term structure
4. **Discrete dividends**: Uses continuous yield approximation
5. **Transaction costs**: Real trading involves costs not modeled here
6. **Liquidity**: Does not account for market liquidity and slippage

### Real-World Considerations
- **Pin risk**: Risk near expiration when spot price is close to strike
- **Assignment risk**: Short options can be assigned early (American style)
- **Margin requirements**: Varies by broker and position complexity
- **Corporate actions**: Splits, mergers, special dividends affect positions
- **Market hours**: Options can only be traded during market hours

## Usage Examples

### Creating a Covered Call Strategy

```typescript
import { useOptionsStore, createNewLeg } from '@/lib/store/options-store';

// Load preset
loadPreset('covered-call');

// Or create manually
const call = createNewLeg();
call.type = 'call';
call.position = 'short';
call.strike = 105;
call.premium = 2.5;
call.expiry = 30;

addLeg(call);
```

### Calculating P/L

```typescript
import { calculateStrategyPL } from '@/lib/options/pl-simulator';

const plResults = calculateStrategyPL({
  legs: strategy.legs,
  currentPrice: 102,
  volatility: 0.25,
  riskFreeRate: 0.05,
  dividendYield: 0.0,
});

console.log(`Total P/L: ${plResults.totalPL}`);
console.log(`Delta: ${plResults.totalDelta}`);
```

### Calculating Implied Volatility

```typescript
import { impliedVol } from '@/lib/options/implied-volatility';

const result = impliedVol({
  type: 'call',
  S: 100,
  K: 100,
  T: 30 / 365,
  r: 0.05,
  q: 0.0,
  marketPrice: 5.0,
});

if (result.impliedVol !== null) {
  console.log(`IV: ${(result.impliedVol * 100).toFixed(2)}%`);
  console.log(`Method: ${result.method}`);
}
```

### Exporting Strategy

```typescript
import { exportStrategyToCSV, downloadFile } from '@/lib/options/utils';

const csv = exportStrategyToCSV(strategy);
downloadFile(csv, 'my_strategy.csv');
```

### Sharing Strategy via URL

```typescript
import { generateShareableLink, copyToClipboard } from '@/lib/options/utils';

const link = generateShareableLink(strategy);
await copyToClipboard(link);
```

## Testing

The toolkit includes comprehensive unit tests using Vitest:

```bash
# Run all tests
npm test

# Run with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

Test files should be placed in `__tests__/` directories or named with `.test.ts` suffix.

Example test:

```typescript
import { describe, it, expect } from 'vitest';
import { bsPrice } from '@/lib/options/black-scholes';

describe('Black-Scholes pricing', () => {
  it('should calculate ATM call price correctly', () => {
    const price = bsPrice({
      type: 'call',
      S: 100,
      K: 100,
      T: 0.25,
      r: 0.05,
      q: 0.0,
      sigma: 0.20,
    });

    expect(price).toBeCloseTo(4.78, 2);
  });
});
```

## Performance Considerations

- **Memoization**: React components use `useMemo` for expensive calculations
- **State persistence**: Zustand store persists to localStorage
- **Chart optimization**: Recharts configured for optimal performance
- **Validation**: Zod schemas provide runtime type safety
- **Bundle size**: Tree-shaking ensures minimal bundle size

## Browser Compatibility

- Chrome/Edge: ✅ Fully supported
- Firefox: ✅ Fully supported
- Safari: ✅ Fully supported
- Mobile browsers: ✅ Responsive design

## Contributing

When contributing, please:
1. Write tests for new features
2. Follow TypeScript strict mode
3. Use Zod for validation
4. Add JSDoc comments for complex functions
5. Update this README for new features

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- GitHub Issues: https://github.com/yourusername/beinoptions/issues
- Documentation: See this README

## References

- Black, F., & Scholes, M. (1973). "The Pricing of Options and Corporate Liabilities"
- Hull, J. C. (2018). "Options, Futures, and Other Derivatives" (10th ed.)
- Brenner, M., & Subrahmanyam, M. G. (1988). "A Simple Formula to Compute the Implied Standard Deviation"
