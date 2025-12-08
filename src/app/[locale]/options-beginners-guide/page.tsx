import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Optionshandel für Anfänger - Der komplette Leitfaden 2025'
      : 'Options Trading for Beginners - The Complete Guide 2025',
    description: locale === 'de'
      ? 'Lernen Sie Optionshandel von Grund auf. Schritt-für-Schritt Anleitung für deutsche Anfänger. Broker, erste Trades, Strategien und Steuern erklärt.'
      : 'Learn options trading from scratch. Step-by-step guide for beginners in Germany. Brokers, first trades, strategies and taxes explained.',
    keywords: locale === 'de'
      ? ['Optionshandel Anfänger', 'Optionen lernen', 'Optionen für Einsteiger', 'Options Trading Deutschland', 'Optionen Anleitung']
      : ['options trading beginners', 'learn options', 'options for beginners', 'options trading germany', 'options guide'],
  });
}

export default function OptionsBeginnersGuidePage({ params: { locale } }: { params: { locale: string } }) {
  const isGerman = locale === 'de';

  const steps = [
    {
      number: 1,
      title: isGerman ? 'Verstehen Sie, was Optionen sind' : 'Understand What Options Are',
      content: isGerman
        ? 'Eine Option ist ein Vertrag, der Ihnen das Recht (aber nicht die Pflicht) gibt, einen Basiswert zu einem festgelegten Preis vor einem bestimmten Datum zu kaufen oder zu verkaufen.'
        : 'An option is a contract that gives you the right (but not the obligation) to buy or sell an underlying asset at a set price before a specific date.',
      details: [
        {
          term: isGerman ? 'Call Option' : 'Call Option',
          desc: isGerman
            ? 'Recht zu KAUFEN. Profitiert von steigenden Kursen.'
            : 'Right to BUY. Profits from rising prices.',
        },
        {
          term: isGerman ? 'Put Option' : 'Put Option',
          desc: isGerman
            ? 'Recht zu VERKAUFEN. Profitiert von fallenden Kursen.'
            : 'Right to SELL. Profits from falling prices.',
        },
        {
          term: isGerman ? 'Strike-Preis' : 'Strike Price',
          desc: isGerman
            ? 'Der Preis, zu dem Sie kaufen/verkaufen können.'
            : 'The price at which you can buy/sell.',
        },
        {
          term: isGerman ? 'Verfallsdatum' : 'Expiration Date',
          desc: isGerman
            ? 'Das Datum, bis zu dem die Option ausgeübt werden kann.'
            : 'The date by which the option can be exercised.',
        },
        {
          term: isGerman ? 'Prämie' : 'Premium',
          desc: isGerman
            ? 'Der Preis, den Sie für die Option zahlen.'
            : 'The price you pay for the option.',
        },
      ],
      iconBg: 'from-blue-500 to-indigo-600',
      link: `/${locale}/basics`,
      linkText: isGerman ? 'Mehr zu Grundlagen' : 'More on Basics',
    },
    {
      number: 2,
      title: isGerman ? 'Wählen Sie den richtigen Broker' : 'Choose the Right Broker',
      content: isGerman
        ? 'Für deutsche Trader gibt es mehrere Optionen. Wichtig: Achten Sie auf EU-Regulierung, Gebühren und Steuerreporting.'
        : 'For German traders, there are several options. Important: Pay attention to EU regulation, fees, and tax reporting.',
      recommendations: [
        {
          name: 'Interactive Brokers',
          pros: isGerman ? 'Niedrigste Gebühren, beste Plattform' : 'Lowest fees, best platform',
          cons: isGerman ? 'Komplexe Oberfläche, manuelle Steuern' : 'Complex interface, manual taxes',
          best: isGerman ? 'Aktive Trader' : 'Active traders',
        },
        {
          name: 'LYNX Broker',
          pros: isGerman ? 'Deutscher Support, automatische Steuern' : 'German support, automatic taxes',
          cons: isGerman ? 'Höhere Gebühren als IBKR' : 'Higher fees than IBKR',
          best: isGerman ? 'Deutsche Trader, die Komfort wollen' : 'German traders wanting convenience',
        },
        {
          name: 'DEGIRO',
          pros: isGerman ? 'Sehr einfach, günstig für EUREX' : 'Very simple, cheap for EUREX',
          cons: isGerman ? 'Limitierte US-Optionen' : 'Limited US options',
          best: isGerman ? 'Absolute Anfänger' : 'Absolute beginners',
        },
      ],
      iconBg: 'from-green-500 to-emerald-600',
      link: `/${locale}/brokers`,
      linkText: isGerman ? 'Broker-Vergleich' : 'Broker Comparison',
    },
    {
      number: 3,
      title: isGerman ? 'Lernen Sie die "Greeks"' : 'Learn the Greeks',
      content: isGerman
        ? 'Die Greeks sind Kennzahlen, die zeigen, wie sich Ihr Optionspreis verhält. Sie müssen sie nicht auswendig kennen, aber verstehen.'
        : 'The Greeks are metrics that show how your option price behaves. You don\'t need to memorize them, but understand them.',
      greeks: [
        {
          name: 'Delta (Δ)',
          meaning: isGerman
            ? 'Preisänderung pro 1€ Aktienbewegung'
            : 'Price change per €1 stock move',
          example: 'Delta 0.50 → €1 up = €0.50 up',
        },
        {
          name: 'Theta (Θ)',
          meaning: isGerman
            ? 'Täglicher Zeitwertverlust'
            : 'Daily time decay',
          example: isGerman ? 'Theta -0.10 → -10€/Tag' : 'Theta -0.10 → -€10/day',
        },
        {
          name: 'Vega (ν)',
          meaning: isGerman
            ? 'Änderung bei 1% IV-Bewegung'
            : 'Change per 1% IV move',
          example: isGerman ? 'Hohe IV = teure Optionen' : 'High IV = expensive options',
        },
        {
          name: 'Gamma (Γ)',
          meaning: isGerman
            ? 'Wie schnell sich Delta ändert'
            : 'How fast Delta changes',
          example: isGerman ? 'Hoch bei ATM + kurzer Laufzeit' : 'High at ATM + short expiry',
        },
      ],
      iconBg: 'from-purple-500 to-violet-600',
      link: `/${locale}/greeks-explained`,
      linkText: isGerman ? 'Greeks im Detail' : 'Greeks in Detail',
    },
    {
      number: 4,
      title: isGerman ? 'Starten Sie mit einfachen Strategien' : 'Start with Simple Strategies',
      content: isGerman
        ? 'Beginnen Sie NICHT mit komplexen Spreads. Starten Sie mit einfachen Long Calls oder Long Puts und lernen Sie das Verhalten.'
        : 'Do NOT start with complex spreads. Start with simple long calls or long puts and learn the behavior.',
      strategies: [
        {
          name: isGerman ? '1. Long Call (Anfänger)' : '1. Long Call (Beginner)',
          when: isGerman ? 'Sie erwarten, dass die Aktie steigt' : 'You expect the stock to rise',
          risk: isGerman ? 'Max Verlust: Gezahlte Prämie' : 'Max Loss: Premium paid',
          reward: isGerman ? 'Theoretisch unbegrenzt' : 'Theoretically unlimited',
        },
        {
          name: isGerman ? '2. Long Put (Anfänger)' : '2. Long Put (Beginner)',
          when: isGerman ? 'Sie erwarten, dass die Aktie fällt' : 'You expect the stock to fall',
          risk: isGerman ? 'Max Verlust: Gezahlte Prämie' : 'Max Loss: Premium paid',
          reward: isGerman ? 'Max: Strike - Prämie' : 'Max: Strike - Premium',
        },
        {
          name: isGerman ? '3. Covered Call (Fortgeschritten)' : '3. Covered Call (Intermediate)',
          when: isGerman ? 'Sie besitzen Aktien und wollen Zusatzeinkommen' : 'You own shares and want extra income',
          risk: isGerman ? 'Begrenzte Kursgewinne' : 'Limited upside',
          reward: isGerman ? 'Prämie + begrenzte Kursgewinne' : 'Premium + limited upside',
        },
      ],
      iconBg: 'from-orange-500 to-amber-600',
      link: `/${locale}/strategies`,
      linkText: isGerman ? 'Alle Strategien' : 'All Strategies',
    },
    {
      number: 5,
      title: isGerman ? 'Verstehen Sie die Risiken' : 'Understand the Risks',
      content: isGerman
        ? 'Optionen sind Hebelprodukte. Sie können schnell viel gewinnen - aber auch alles verlieren. Managen Sie Ihr Risiko!'
        : 'Options are leveraged products. You can win big quickly - but also lose everything. Manage your risk!',
      risks: [
        {
          risk: isGerman ? 'Totalverlust' : 'Total Loss',
          explanation: isGerman
            ? 'Long-Optionen können auf 0 fallen. Riskieren Sie nie mehr als Sie verlieren können.'
            : 'Long options can go to zero. Never risk more than you can afford to lose.',
        },
        {
          risk: isGerman ? 'Zeitverfall' : 'Time Decay',
          explanation: isGerman
            ? 'Jeden Tag verliert Ihre Option an Zeitwert. Je näher am Verfall, desto schneller.'
            : 'Every day your option loses time value. Closer to expiration = faster decay.',
        },
        {
          risk: isGerman ? 'IV Crush' : 'IV Crush',
          explanation: isGerman
            ? 'Nach Events (Earnings) kann IV 30-50% fallen und Ihre Option mit.'
            : 'After events (earnings) IV can drop 30-50% and so can your option.',
        },
        {
          risk: isGerman ? 'Liquidität' : 'Liquidity',
          explanation: isGerman
            ? 'Illiquide Optionen haben hohe Spreads. Sie verlieren sofort beim Kauf.'
            : 'Illiquid options have high spreads. You lose immediately when buying.',
        },
      ],
      iconBg: 'from-red-500 to-rose-600',
      link: `/${locale}/options-mistakes`,
      linkText: isGerman ? 'Fehler vermeiden' : 'Avoid Mistakes',
    },
    {
      number: 6,
      title: isGerman ? 'Steuern nicht vergessen!' : "Don't Forget Taxes!",
      content: isGerman
        ? 'In Deutschland unterliegen Optionsgewinne der Abgeltungsteuer. Planen Sie Ihre Steuerlast ein!'
        : 'In Germany, options profits are subject to capital gains tax. Plan for your tax burden!',
      taxInfo: [
        {
          item: isGerman ? 'Abgeltungsteuer' : 'Capital Gains Tax',
          value: '25%',
        },
        {
          item: isGerman ? 'Solidaritätszuschlag' : 'Solidarity Surcharge',
          value: '5.5%',
        },
        {
          item: isGerman ? 'Gesamt (ohne Kirchensteuer)' : 'Total (without church tax)',
          value: '~26.375%',
        },
        {
          item: isGerman ? 'Freibetrag (Sparerpauschbetrag)' : 'Tax-free allowance',
          value: '1.000€ / 2.000€',
        },
      ],
      iconBg: 'from-cyan-500 to-teal-600',
      link: `/${locale}/taxes`,
      linkText: isGerman ? 'Steuern im Detail' : 'Taxes in Detail',
    },
  ];

  const checklist = [
    {
      item: isGerman ? 'Broker-Konto eröffnet' : 'Broker account opened',
      details: isGerman ? 'IBKR, LYNX oder DEGIRO' : 'IBKR, LYNX or DEGIRO',
    },
    {
      item: isGerman ? 'Paper Trading (Demo) getestet' : 'Paper trading (demo) tested',
      details: isGerman ? 'Mindestens 20 virtuelle Trades' : 'At least 20 virtual trades',
    },
    {
      item: isGerman ? 'Greeks verstanden' : 'Greeks understood',
      details: isGerman ? 'Delta, Theta, Vega kennen' : 'Know Delta, Theta, Vega',
    },
    {
      item: isGerman ? 'Risikomanagement-Regeln festgelegt' : 'Risk management rules set',
      details: isGerman ? 'Max 1-2% pro Trade' : 'Max 1-2% per trade',
    },
    {
      item: isGerman ? 'Trading-Journal angelegt' : 'Trading journal created',
      details: isGerman ? 'Jeden Trade dokumentieren' : 'Document every trade',
    },
    {
      item: isGerman ? 'Startkapital festgelegt' : 'Starting capital set',
      details: isGerman ? 'Nur Geld, das Sie verlieren können' : 'Only money you can afford to lose',
    },
  ];

  const faqs = [
    {
      question: isGerman
        ? 'Wie viel Geld brauche ich, um mit Optionshandel anzufangen?'
        : 'How much money do I need to start trading options?',
      answer: isGerman
        ? 'Technisch ab 500€, aber für vernünftiges Risikomanagement empfehlen wir mindestens 2.000-5.000€. Mit zu wenig Kapital sind Sie gezwungen, sehr riskante OTM-Optionen zu handeln.'
        : 'Technically from €500, but for reasonable risk management we recommend at least €2,000-5,000. With too little capital, you\'re forced to trade very risky OTM options.',
    },
    {
      question: isGerman
        ? 'Sind Optionen gefährlicher als Aktien?'
        : 'Are options more dangerous than stocks?',
      answer: isGerman
        ? 'Optionen haben Hebelwirkung und ein Verfallsdatum - das macht sie riskanter. ABER: Mit richtiger Positionsgröße und Strategie können Sie Ihr Risiko besser kontrollieren als bei Aktien. Der Hebel wirkt in beide Richtungen.'
        : 'Options have leverage and an expiration date - making them riskier. BUT: With proper position sizing and strategy, you can control your risk better than with stocks. The leverage works both ways.',
    },
    {
      question: isGerman
        ? 'Welche Strategie ist die beste für Anfänger?'
        : 'What strategy is best for beginners?',
      answer: isGerman
        ? 'Beginnen Sie mit Long Calls auf Aktien, die Sie gut kennen. Später: Covered Calls wenn Sie bereits Aktien besitzen. Vermeiden Sie am Anfang: Naked Selling, komplexe Spreads, 0DTE.'
        : 'Start with long calls on stocks you know well. Later: Covered calls if you already own shares. Avoid at first: Naked selling, complex spreads, 0DTE.',
    },
    {
      question: isGerman
        ? 'Muss ich die Aktien kaufen, wenn meine Call-Option im Geld ist?'
        : 'Do I have to buy the shares if my call option is in the money?',
      answer: isGerman
        ? 'Nein! Sie können die Option jederzeit vor dem Verfall verkaufen und Ihren Gewinn (oder Verlust) mitnehmen. Die meisten Trader üben nie aus - sie verkaufen einfach die Option.'
        : 'No! You can sell the option at any time before expiration and take your profit (or loss). Most traders never exercise - they just sell the option.',
    },
    {
      question: isGerman
        ? 'Wie lange sollte ich Paper Trading betreiben?'
        : 'How long should I paper trade?',
      answer: isGerman
        ? 'Mindestens 1-2 Monate oder bis Sie 50+ Paper Trades gemacht haben. Sie sollten verstehen, wie Optionen auf Kursbewegungen, Zeit und Volatilität reagieren, bevor Sie echtes Geld einsetzen.'
        : 'At least 1-2 months or until you\'ve made 50+ paper trades. You should understand how options react to price movements, time, and volatility before using real money.',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={isGerman ? 'Optionshandel für Anfänger' : 'Options Trading for Beginners'}
        description={isGerman
          ? 'Der komplette Leitfaden für Einsteiger in den Optionshandel in Deutschland.'
          : 'The complete guide for beginners to options trading in Germany.'}
        author="BeInOptions"
        datePublished="2025-01-08"
        url={`https://beinoptions.com/${locale}/options-beginners-guide`}
      />
      <BreadcrumbSchema
        items={[
          { name: isGerman ? 'Startseite' : 'Home', url: `https://beinoptions.com/${locale}` },
          { name: isGerman ? 'Lernen' : 'Learn', url: `https://beinoptions.com/${locale}/basics` },
          { name: isGerman ? 'Anfänger Guide' : 'Beginners Guide', url: `https://beinoptions.com/${locale}/options-beginners-guide` },
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              {isGerman ? 'Kompletter Leitfaden' : 'Complete Guide'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isGerman
                ? 'Optionshandel für Anfänger'
                : 'Options Trading for Beginners'}
            </h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              {isGerman
                ? 'Von Null zum ersten Trade. Alles was Sie wissen müssen, um mit Optionen in Deutschland zu starten - Schritt für Schritt erklärt.'
                : 'From zero to your first trade. Everything you need to know to start trading options in Germany - explained step by step.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#steps"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Jetzt starten' : 'Start Now'}
              </Link>
              <Link
                href={`/${locale}/tools`}
                className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-colors"
              >
                {isGerman ? 'Kostenlose Tools' : 'Free Tools'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div id="steps" className="container-custom py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            {isGerman ? '6 Schritte zum erfolgreichen Start' : '6 Steps to a Successful Start'}
          </h2>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-gray-300 to-transparent -z-10"></div>
                )}

                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.iconBg} rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {step.content}
                    </p>

                    {/* Details */}
                    {step.details && (
                      <div className="bg-gray-50 rounded-xl p-6 mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <p className="font-semibold text-gray-900">{detail.term}</p>
                                <p className="text-sm text-gray-600">{detail.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Broker Recommendations */}
                    {step.recommendations && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {step.recommendations.map((broker, idx) => (
                          <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-gray-900 mb-2">{broker.name}</h4>
                            <div className="space-y-2 text-sm">
                              <p className="text-green-600">✓ {broker.pros}</p>
                              <p className="text-red-600">✗ {broker.cons}</p>
                              <p className="text-primary-600 font-medium">{isGerman ? 'Ideal für: ' : 'Best for: '}{broker.best}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Greeks */}
                    {step.greeks && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {step.greeks.map((greek, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-100">
                            <p className="font-bold text-purple-900">{greek.name}</p>
                            <p className="text-sm text-purple-700">{greek.meaning}</p>
                            <p className="text-xs font-mono bg-purple-100 px-2 py-1 rounded mt-2 inline-block">{greek.example}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Strategies */}
                    {step.strategies && (
                      <div className="space-y-4 mb-4">
                        {step.strategies.map((strategy, idx) => (
                          <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4">
                            <h4 className="font-bold text-gray-900 mb-2">{strategy.name}</h4>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-gray-500">{isGerman ? 'Wann:' : 'When:'}</p>
                                <p className="font-medium">{strategy.when}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">{isGerman ? 'Max Verlust:' : 'Max Loss:'}</p>
                                <p className="font-medium text-red-600">{strategy.risk}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">{isGerman ? 'Max Gewinn:' : 'Max Profit:'}</p>
                                <p className="font-medium text-green-600">{strategy.reward}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Risks */}
                    {step.risks && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {step.risks.map((risk, idx) => (
                          <div key={idx} className="bg-red-50 border border-red-100 rounded-xl p-4">
                            <p className="font-bold text-red-900">{risk.risk}</p>
                            <p className="text-sm text-red-700">{risk.explanation}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tax Info */}
                    {step.taxInfo && (
                      <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {step.taxInfo.map((tax, idx) => (
                            <div key={idx} className="text-center">
                              <p className="text-sm text-cyan-700">{tax.item}</p>
                              <p className="text-2xl font-bold text-cyan-900">{tax.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      href={step.link}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      {step.linkText}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Checklist Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              {isGerman ? 'Anfänger-Checkliste' : 'Beginner Checklist'}
            </h2>
            <p className="text-gray-600 text-center mb-12">
              {isGerman
                ? 'Haken Sie diese Punkte ab, bevor Sie Ihren ersten echten Trade machen.'
                : 'Check off these items before making your first real trade.'}
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="space-y-4">
                {checklist.map((item, index) => (
                  <label key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                        {item.item}
                      </p>
                      <p className="text-sm text-gray-500">{item.details}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {isGerman ? 'Häufige Anfänger-Fragen' : 'Common Beginner Questions'}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-gray-200">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-primary-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isGerman
                ? 'Bereit für den ersten Trade?'
                : 'Ready for Your First Trade?'}
            </h2>
            <p className="text-xl mb-8 opacity-80">
              {isGerman
                ? 'Nutzen Sie unsere kostenlosen Tools, um Ihre ersten Trades zu planen und zu analysieren.'
                : 'Use our free tools to plan and analyze your first trades.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/tools/payoff`}
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-500 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {isGerman ? 'Payoff Calculator' : 'Payoff Calculator'}
              </Link>
              <Link
                href={`/${locale}/brokers`}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {isGerman ? 'Broker finden' : 'Find a Broker'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
