# Options Toolkit - Quick Start Guide

## Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open in browser:**
Navigate to [http://localhost:3000/en/tools/payoff](http://localhost:3000/en/tools/payoff)

## First Steps

### 1. Payoff Calculator (`/en/tools/payoff`)

**Try a Covered Call:**
1. Visit `/en/tools/payoff`
2. Click "Covered Call" preset
3. Adjust strike price and premium
4. View payoff diagram and break-even points
5. Click "Share Link" to save your strategy

**Build Custom Strategy:**
1. Click "Add Leg"
2. Select Call/Put, Long/Short
3. Enter Strike, Premium, Expiry
4. Add more legs (up to 6)
5. View combined payoff

### 2. P/L Simulator (`/pl`)

**Calculate Current P/L:**
1. Visit `/pl`
2. Load a preset or build strategy
3. Adjust "Current Price" slider
4. Set Implied Volatility (%)
5. View current P/L and Greeks
6. Click "Show Greeks" for detailed analysis

**Understanding Greeks:**
- **Delta**: P/L change per $1 move in stock
- **Theta**: Daily time decay
- **Vega**: P/L change per 1% IV move

### 3. IV Tools (`/iv`)

**Calculate Implied Volatility:**
1. Visit `/iv`
2. Enter option parameters (Call/Put, Spot, Strike)
3. Enter market price
4. View calculated IV

**Calculate Theoretical Price:**
1. Use right panel
2. Enter IV percentage
3. View Black-Scholes theoretical price

## Common Strategies

### Bull Call Spread
- **Goal**: Profit from moderate price increase
- **Setup**: Buy lower strike call, sell higher strike call
- **Example**: Long 100 Call @ $4, Short 110 Call @ $1.50
- **Max Profit**: $6.50 (spread width - net debit)
- **Max Loss**: $2.50 (net debit)

### Iron Condor
- **Goal**: Profit from low volatility
- **Setup**: Sell put spread + sell call spread
- **Example**:
  - Long 90 Put @ $1, Short 95 Put @ $2.50
  - Short 105 Call @ $2.50, Long 110 Call @ $1
- **Max Profit**: $3 (net credit)
- **Max Loss**: $2 (spread width - net credit)

### Long Straddle
- **Goal**: Profit from high volatility
- **Setup**: Buy ATM call + buy ATM put
- **Example**: Long 100 Call @ $4, Long 100 Put @ $4
- **Max Profit**: Unlimited
- **Max Loss**: $8 (total premium paid)

## CSV Import/Export

### Export Strategy
1. Build your strategy
2. Click "Export CSV"
3. Save file to disk

### Import Strategy
CSV format:
```csv
# Strategy: My Strategy
# Underlying Price: 100

Leg,Type,Position,Quantity,Strike,Premium,Expiry (days)
1,call,long,1,100,4.0,30
2,call,short,1,110,1.5,30
```

## URL Sharing

### Share Strategy
1. Build strategy
2. Click "Share Link"
3. Copy URL from clipboard
4. Share with others

### Load Shared Strategy
1. Open shared URL
2. Strategy automatically loads
3. Modify as needed

## Tips & Best Practices

### Risk Management
- Always know your max loss
- Use stop losses for undefined risk strategies
- Size positions appropriately
- Monitor Greeks, especially Delta and Theta

### Using the Tools
1. **Start with Payoff Calculator** - understand strategy at expiration
2. **Use P/L Simulator** - see current value and Greeks
3. **Check IV Tools** - ensure fair pricing

### Common Mistakes to Avoid
- Ignoring time decay (Theta)
- Not accounting for IV changes (Vega)
- Overleveraging with too many contracts
- Trading illiquid options
- Not having an exit plan

## Keyboard Shortcuts

- **Tab**: Navigate between inputs
- **Enter**: Add new leg (when "Add Leg" focused)
- **Ctrl/Cmd + S**: Export CSV (when available)

## Troubleshooting

### Chart Not Showing
- Ensure at least one leg is added
- Check that all inputs are valid (positive strikes, etc.)
- Try refreshing the page

### IV Solver Not Converging
- Check that market price > intrinsic value
- Ensure reasonable inputs (not extreme values)
- Try adjusting time to expiration

### Greeks Look Wrong
- Verify volatility input (should be 0.01 to 5.0)
- Check risk-free rate (typically 0.03 to 0.07)
- Ensure expiry is in days, not years

## Testing

Run tests:
```bash
npm test
```

Run with UI:
```bash
npm run test:ui
```

Generate coverage:
```bash
npm run test:coverage
```

## Example Workflows

### Workflow 1: Analyzing a Trade Idea
1. Go to Payoff Calculator
2. Select preset or build custom
3. Adjust strikes/premiums to match market
4. Review max profit/loss and break-evens
5. Go to P/L Simulator
6. Check current Greeks
7. Simulate price moves
8. Make trading decision

### Workflow 2: Comparing Strategies
1. Open two browser tabs
2. Build Strategy A in tab 1
3. Build Strategy B in tab 2
4. Compare:
   - Max profit/loss
   - Break-even points
   - Greeks (especially Theta and Vega)
   - Risk/reward ratio

### Workflow 3: Education/Learning
1. Load preset strategies
2. Observe payoff diagrams
3. Adjust underlying price
4. Watch P/L change in real-time
5. Study Greeks behavior
6. Experiment with different scenarios

## Next Steps

- Read full documentation: `OPTIONS_TOOLKIT_README.md`
- Explore example CSV files in `examples/`
- Run test suite to understand the code
- Customize presets for your trading style
- Build your own analysis tools on top

## Support

For questions and issues:
- Check README for detailed documentation
- Review test files for usage examples
- Check browser console for errors

## Resources

- [Options Greeks Explained](https://www.optionseducation.org/greeks)
- [Black-Scholes Model](https://en.wikipedia.org/wiki/Black%E2%80%93Scholes_model)
- [Options Strategies](https://www.optionseducation.org/strategies)
