import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isGerman = locale === 'de';

  return {
    title: isGerman ? 'Cash-Secured Put Strategie' : 'Cash-Secured Put Strategy',
    description: isGerman
      ? 'Lernen Sie die Cash-Secured Put Strategie: Verkaufen Sie Puts mit ausreichend Bargeld und generieren Sie regelmäßige Prämieneinnahmen beim Optionshandel.'
      : 'Learn the Cash-Secured Put strategy: Sell puts with sufficient cash reserves and generate regular premium income in options trading.',
    keywords: isGerman
      ? ['Cash-Secured Put', 'Put verkaufen', 'Optionsstrategie', 'Prämieneinnahmen', 'Optionshandel Deutschland']
      : ['Cash-Secured Put', 'Sell puts', 'Options strategy', 'Premium income', 'Options trading'],
    alternates: {
      canonical: `https://beinoptions.com/${locale}/cash-secured-put`,
      languages: {
        'de': 'https://beinoptions.com/de/cash-secured-put',
        'en': 'https://beinoptions.com/en/cash-secured-put',
      },
    },
  };
}

export default function CashSecuredPutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const isGerman = locale === 'de';

  const content = {
    badge: isGerman ? 'Einkommensstrategie' : 'Income Strategy',
    title: isGerman ? 'Cash-Secured Put' : 'Cash-Secured Put',
    subtitle: isGerman
      ? 'Generieren Sie regelmäßige Prämieneinnahmen durch den Verkauf von Put-Optionen mit ausreichender Bargelddeckung.'
      : 'Generate regular premium income by selling put options with sufficient cash coverage.',

    whatIs: {
      title: isGerman ? 'Was ist ein Cash-Secured Put?' : 'What is a Cash-Secured Put?',
      content: isGerman
        ? 'Ein Cash-Secured Put ist eine Optionsstrategie, bei der Sie eine Put-Option verkaufen und gleichzeitig genügend Bargeld auf Ihrem Konto halten, um die zugrunde liegenden Aktien zu kaufen, falls die Option ausgeübt wird. Diese Strategie eignet sich besonders für Anleger, die eine Aktie zu einem niedrigeren Preis kaufen möchten oder regelmäßige Prämieneinnahmen erzielen wollen.'
        : 'A Cash-Secured Put is an options strategy where you sell a put option while keeping enough cash in your account to purchase the underlying shares if the option is exercised. This strategy is particularly suitable for investors who want to buy a stock at a lower price or generate regular premium income.',
    },

    howItWorks: {
      title: isGerman ? 'Wie funktioniert es?' : 'How Does It Work?',
      steps: isGerman ? [
        {
          step: '1',
          title: 'Aktie auswählen',
          description: 'Wählen Sie eine Aktie, die Sie gerne zu einem niedrigeren Preis besitzen würden.',
        },
        {
          step: '2',
          title: 'Put verkaufen',
          description: 'Verkaufen Sie eine Put-Option mit einem Strike-Preis, zu dem Sie die Aktie kaufen würden.',
        },
        {
          step: '3',
          title: 'Prämie kassieren',
          description: 'Sie erhalten sofort die Optionsprämie auf Ihr Konto gutgeschrieben.',
        },
        {
          step: '4',
          title: 'Bargeld reservieren',
          description: 'Halten Sie genug Bargeld bereit (Strike × 100), um die Aktien ggf. zu kaufen.',
        },
      ] : [
        {
          step: '1',
          title: 'Select Stock',
          description: 'Choose a stock you would like to own at a lower price.',
        },
        {
          step: '2',
          title: 'Sell Put',
          description: 'Sell a put option with a strike price at which you would buy the stock.',
        },
        {
          step: '3',
          title: 'Collect Premium',
          description: 'You immediately receive the option premium credited to your account.',
        },
        {
          step: '4',
          title: 'Reserve Cash',
          description: 'Keep enough cash ready (Strike × 100) to potentially buy the shares.',
        },
      ],
    },

    example: {
      title: isGerman ? 'Praxisbeispiel' : 'Practical Example',
      scenario: isGerman
        ? 'Sie möchten Apple-Aktien kaufen, aber nicht zum aktuellen Preis von 180€. Sie verkaufen einen Put mit Strike 170€.'
        : 'You want to buy Apple shares, but not at the current price of $180. You sell a put with a $170 strike.',
      details: isGerman ? [
        { label: 'Aktueller Aktienkurs', value: '180€' },
        { label: 'Strike-Preis', value: '170€' },
        { label: 'Erhaltene Prämie', value: '3€ pro Aktie (300€ total)' },
        { label: 'Benötigtes Bargeld', value: '17.000€ (170€ × 100)' },
        { label: 'Break-Even', value: '167€ (170€ - 3€ Prämie)' },
      ] : [
        { label: 'Current Stock Price', value: '$180' },
        { label: 'Strike Price', value: '$170' },
        { label: 'Premium Received', value: '$3 per share ($300 total)' },
        { label: 'Cash Required', value: '$17,000 ($170 × 100)' },
        { label: 'Break-Even', value: '$167 ($170 - $3 premium)' },
      ],
    },

    scenarios: {
      title: isGerman ? 'Mögliche Szenarien bei Verfall' : 'Possible Scenarios at Expiration',
      items: isGerman ? [
        {
          title: 'Aktie bleibt über Strike (z.B. 175€)',
          outcome: 'Put verfällt wertlos',
          result: 'Sie behalten die 300€ Prämie als Gewinn',
          icon: 'profit',
        },
        {
          title: 'Aktie fällt unter Strike (z.B. 165€)',
          outcome: 'Put wird ausgeübt',
          result: 'Sie kaufen 100 Aktien für 170€, effektiver Kaufpreis: 167€',
          icon: 'assigned',
        },
        {
          title: 'Aktie genau am Strike (170€)',
          outcome: 'Ungewiss',
          result: 'Put kann ausgeübt werden oder verfallen',
          icon: 'neutral',
        },
      ] : [
        {
          title: 'Stock stays above strike (e.g., $175)',
          outcome: 'Put expires worthless',
          result: 'You keep the $300 premium as profit',
          icon: 'profit',
        },
        {
          title: 'Stock falls below strike (e.g., $165)',
          outcome: 'Put is exercised',
          result: 'You buy 100 shares at $170, effective price: $167',
          icon: 'assigned',
        },
        {
          title: 'Stock exactly at strike ($170)',
          outcome: 'Uncertain',
          result: 'Put may be exercised or expire',
          icon: 'neutral',
        },
      ],
    },

    pros: {
      title: isGerman ? 'Vorteile' : 'Advantages',
      items: isGerman ? [
        'Regelmäßige Prämieneinnahmen',
        'Aktien unter Marktwert kaufen',
        'Definiertes Risiko',
        'Funktioniert auch in Seitwärtsmärkten',
        'Einfach zu verstehen und umzusetzen',
        'Geringeres Risiko als direkter Aktienkauf',
      ] : [
        'Regular premium income',
        'Buy stocks below market value',
        'Defined risk',
        'Works in sideways markets',
        'Easy to understand and implement',
        'Lower risk than direct stock purchase',
      ],
    },

    cons: {
      title: isGerman ? 'Nachteile & Risiken' : 'Disadvantages & Risks',
      items: isGerman ? [
        'Kapital ist gebunden (Opportunitätskosten)',
        'Verlustrisiko bei starkem Kursrückgang',
        'Begrenzte Gewinnmöglichkeit (nur Prämie)',
        'Verpflichtung zum Aktienkauf bei Ausübung',
        'Margin-Anforderungen beachten',
      ] : [
        'Capital is tied up (opportunity cost)',
        'Loss risk in sharp price decline',
        'Limited profit potential (premium only)',
        'Obligation to buy shares if exercised',
        'Consider margin requirements',
      ],
    },

    bestPractices: {
      title: isGerman ? 'Best Practices' : 'Best Practices',
      items: isGerman ? [
        {
          title: 'Aktien wählen, die Sie besitzen möchten',
          description: 'Verkaufen Sie nur Puts auf Aktien, die Sie langfristig halten würden.',
        },
        {
          title: 'Strike-Preis mit Bedacht wählen',
          description: 'Wählen Sie einen Strike, bei dem Sie die Aktie gerne kaufen würden.',
        },
        {
          title: 'Laufzeit beachten',
          description: '30-45 Tage bieten oft das beste Verhältnis von Prämie zu Risiko.',
        },
        {
          title: 'Implizite Volatilität prüfen',
          description: 'Höhere IV = höhere Prämien, aber auch höheres Risiko.',
        },
        {
          title: 'Earnings vermeiden',
          description: 'Verkaufen Sie keine Puts direkt vor Quartalszahlen.',
        },
      ] : [
        {
          title: 'Choose stocks you want to own',
          description: 'Only sell puts on stocks you would hold long-term.',
        },
        {
          title: 'Select strike price carefully',
          description: 'Choose a strike at which you would be happy to buy the stock.',
        },
        {
          title: 'Consider expiration',
          description: '30-45 days often offers the best premium-to-risk ratio.',
        },
        {
          title: 'Check implied volatility',
          description: 'Higher IV = higher premiums, but also higher risk.',
        },
        {
          title: 'Avoid earnings',
          description: 'Don\'t sell puts right before quarterly reports.',
        },
      ],
    },

    comparison: {
      title: isGerman ? 'Cash-Secured Put vs. Covered Call' : 'Cash-Secured Put vs. Covered Call',
      headers: isGerman
        ? ['Aspekt', 'Cash-Secured Put', 'Covered Call']
        : ['Aspect', 'Cash-Secured Put', 'Covered Call'],
      rows: isGerman ? [
        ['Position', 'Short Put + Bargeld', 'Long Aktien + Short Call'],
        ['Ziel', 'Aktien günstig kaufen', 'Zusatzertrag auf Aktien'],
        ['Maximaler Gewinn', 'Erhaltene Prämie', 'Prämie + Kursgewinn bis Strike'],
        ['Maximales Risiko', 'Strike - Prämie (wenn Aktie auf 0)', 'Aktienkurs - Prämie'],
        ['Benötigtes Kapital', 'Strike × 100 in bar', 'Aktien im Depot'],
      ] : [
        ['Position', 'Short Put + Cash', 'Long Stock + Short Call'],
        ['Goal', 'Buy stocks cheaply', 'Additional income on stocks'],
        ['Max Profit', 'Premium received', 'Premium + gains up to strike'],
        ['Max Risk', 'Strike - Premium (if stock goes to 0)', 'Stock price - Premium'],
        ['Capital Required', 'Strike × 100 in cash', 'Shares in portfolio'],
      ],
    },

    wheelStrategy: {
      title: isGerman ? 'Die Wheel-Strategie' : 'The Wheel Strategy',
      description: isGerman
        ? 'Die Wheel-Strategie kombiniert Cash-Secured Puts mit Covered Calls in einem Kreislauf:'
        : 'The Wheel Strategy combines Cash-Secured Puts with Covered Calls in a cycle:',
      steps: isGerman ? [
        'Verkaufen Sie Cash-Secured Puts und kassieren Sie Prämien',
        'Wenn ausgeübt: Sie erhalten die Aktien',
        'Verkaufen Sie nun Covered Calls auf die Aktien',
        'Wenn ausgeübt: Aktien werden verkauft',
        'Wiederholen Sie ab Schritt 1',
      ] : [
        'Sell Cash-Secured Puts and collect premiums',
        'If assigned: You receive the shares',
        'Now sell Covered Calls on the shares',
        'If called away: Shares are sold',
        'Repeat from step 1',
      ],
    },

    cta: {
      title: isGerman ? 'Bereit für Cash-Secured Puts?' : 'Ready for Cash-Secured Puts?',
      description: isGerman
        ? 'Lernen Sie weitere Strategien kennen und finden Sie den passenden Broker für Ihren Optionshandel.'
        : 'Learn more strategies and find the right broker for your options trading.',
      brokers: isGerman ? 'Broker vergleichen' : 'Compare Brokers',
      strategies: isGerman ? 'Alle Strategien' : 'All Strategies',
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/10 to-transparent"></div>

        <div className="container-custom py-16 md:py-24 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {content.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {content.title}
              <span className="block text-emerald-400 mt-2">{isGerman ? 'Strategie' : 'Strategy'}</span>
            </h1>

            <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed">
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* What Is Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.whatIs.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{content.whatIs.content}</p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.howItWorks.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.howItWorks.steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-bold text-xl mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Example */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-emerald-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.example.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{content.example.scenario}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {content.example.details.map((detail, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">{detail.label}</div>
                  <div className="text-lg font-bold text-gray-900">{detail.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.scenarios.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.scenarios.items.map((scenario, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border ${
                  scenario.icon === 'profit'
                    ? 'bg-green-50 border-green-200'
                    : scenario.icon === 'assigned'
                    ? 'bg-amber-50 border-amber-200'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  scenario.icon === 'profit'
                    ? 'bg-green-100 text-green-600'
                    : scenario.icon === 'assigned'
                    ? 'bg-amber-100 text-amber-600'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {scenario.icon === 'profit' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {scenario.icon === 'assigned' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  )}
                  {scenario.icon === 'neutral' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{scenario.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{scenario.outcome}</p>
                <p className="text-gray-700">{scenario.result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {content.pros.title}
              </h2>
              <ul className="space-y-3">
                {content.pros.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
                {content.cons.title}
              </h2>
              <ul className="space-y-3">
                {content.cons.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.bestPractices.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.bestPractices.items.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.comparison.title}</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    {content.comparison.headers.map((header, index) => (
                      <th key={index} className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {content.comparison.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className={`px-6 py-4 text-sm ${cellIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Wheel Strategy */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">{content.wheelStrategy.title}</h2>
            <p className="text-slate-300 mb-8">{content.wheelStrategy.description}</p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {content.wheelStrategy.steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-slate-700 rounded-xl px-4 py-3 text-sm">
                    <span className="text-emerald-400 font-bold mr-2">{index + 1}.</span>
                    {step}
                  </div>
                  {index < content.wheelStrategy.steps.length - 1 && (
                    <svg className="w-6 h-6 text-slate-600 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{content.cta.title}</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">{content.cta.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/brokers`}
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                {content.cta.brokers}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/strategies`}
                className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-400 transition-colors"
              >
                {content.cta.strategies}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
