import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Put vs Call Optionen: Der ultimative Vergleich | BeInOptions' : 'Put vs Call Options: The Ultimate Comparison | BeInOptions',
    description: locale === 'de'
      ? 'Verstehen Sie den Unterschied zwischen Put und Call Optionen. Praktische Beispiele, Strategien und wie Sie mit Libertex starten.'
      : 'Understand the difference between Put and Call options. Practical examples, strategies and how to start with Libertex.',
  });
}

export default function PutVsCallPost({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link href={`/${locale}/blog`} className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {locale === 'de' ? 'Zurück zum Blog' : 'Back to Blog'}
            </Link>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Put vs Call Optionen: Der ultimative Vergleich' : 'Put vs Call Options: The Ultimate Comparison'}
            </h1>

            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span className="font-medium">BeInOptions Team</span>
              <span>•</span>
              <time>18. Januar 2025</time>
              <span>•</span>
              <span>{locale === 'de' ? '10 Min. Lesezeit' : '10 min read'}</span>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white mb-8">
              <p className="text-xl leading-relaxed flex items-start gap-3">
                <svg className="w-8 h-8 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>
                  {locale === 'de'
                    ? 'Bereit für den Einstieg? Starten Sie jetzt mit Libertex - dem führenden Broker für Options Trading!'
                    : 'Ready to get started? Start now with Libertex - the leading broker for Options Trading!'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                {locale === 'de' ? 'Einführung: Was sind Optionen?' : 'Introduction: What are Options?'}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {locale === 'de'
                  ? 'Optionen sind Finanzderivate, die Ihnen das Recht (aber nicht die Pflicht) geben, einen Basiswert zu einem bestimmten Preis (Strike-Preis) vor oder zu einem festgelegten Datum zu kaufen oder zu verkaufen. Die zwei grundlegenden Arten von Optionen sind Call-Optionen und Put-Optionen.'
                  : 'Options are financial derivatives that give you the right (but not the obligation) to buy or sell an underlying asset at a specific price (strike price) before or on a specified date. The two basic types of options are Call options and Put options.'}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {locale === 'de'
                  ? 'In diesem umfassenden Guide erklären wir Ihnen den Unterschied zwischen beiden, zeigen praktische Beispiele und verraten Ihnen, wie Sie erfolgreich mit Optionen handeln können.'
                  : 'In this comprehensive guide, we explain the difference between both, show practical examples, and reveal how you can successfully trade options.'}
              </p>
            </div>

            {/* Call Options */}
            <div className="card mb-8 border-l-4 border-green-500">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {locale === 'de' ? 'Call-Optionen: Das Recht zu kaufen' : 'Call Options: The Right to Buy'}
              </h2>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {locale === 'de' ? 'Was ist eine Call-Option?' : 'What is a Call Option?'}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {locale === 'de'
                  ? 'Eine Call-Option gibt dem Käufer das Recht, den zugrunde liegenden Vermögenswert zum Strike-Preis zu KAUFEN. Sie profitieren von STEIGENDEN Kursen.'
                  : 'A Call option gives the buyer the right to BUY the underlying asset at the strike price. You profit from RISING prices.'}
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                  {locale === 'de' ? 'Praktisches Beispiel:' : 'Practical Example:'}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'de'
                    ? 'Sie kaufen eine Call-Option auf eine Aktie, die aktuell bei 100€ steht, mit einem Strike-Preis von 110€. Die Option kostet 5€ (Prämie). Wenn die Aktie auf 130€ steigt, können Sie sie zum Strike-Preis von 110€ kaufen und sofort für 130€ verkaufen - ein Gewinn von 15€ (20€ Differenz minus 5€ Prämie)!'
                    : 'You buy a Call option on a stock currently trading at €100, with a strike price of €110. The option costs €5 (premium). If the stock rises to €130, you can buy it at the strike price of €110 and immediately sell it for €130 - a profit of €15 (€20 difference minus €5 premium)!'}
                </p>
              </div>

              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                {locale === 'de' ? 'Vorteile von Call-Optionen:' : 'Advantages of Call Options:'}
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>{locale === 'de' ? 'Unbegrenztes Gewinnpotenzial (theoretisch)' : 'Unlimited profit potential (theoretically)'}</li>
                <li>{locale === 'de' ? 'Begrenztes Risiko (nur die Prämie)' : 'Limited risk (only the premium)'}</li>
                <li>{locale === 'de' ? 'Hebelwirkung - große Positionen mit wenig Kapital' : 'Leverage - large positions with little capital'}</li>
                <li>{locale === 'de' ? 'Ideal für bullische Markterwartungen' : 'Ideal for bullish market expectations'}</li>
              </ul>
            </div>

            {/* Put Options */}
            <div className="card mb-8 border-l-4 border-red-500">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
                {locale === 'de' ? 'Put-Optionen: Das Recht zu verkaufen' : 'Put Options: The Right to Sell'}
              </h2>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {locale === 'de' ? 'Was ist eine Put-Option?' : 'What is a Put Option?'}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {locale === 'de'
                  ? 'Eine Put-Option gibt dem Käufer das Recht, den zugrunde liegenden Vermögenswert zum Strike-Preis zu VERKAUFEN. Sie profitieren von FALLENDEN Kursen.'
                  : 'A Put option gives the buyer the right to SELL the underlying asset at the strike price. You profit from FALLING prices.'}
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                  {locale === 'de' ? 'Praktisches Beispiel:' : 'Practical Example:'}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'de'
                    ? 'Sie kaufen eine Put-Option auf eine Aktie bei 100€ mit einem Strike-Preis von 90€. Die Option kostet 4€. Wenn die Aktie auf 70€ fällt, können Sie sie zum Marktpreis kaufen und zum Strike-Preis von 90€ verkaufen - ein Gewinn von 16€ (20€ Differenz minus 4€ Prämie)!'
                    : 'You buy a Put option on a stock at €100 with a strike price of €90. The option costs €4. If the stock falls to €70, you can buy it at market price and sell it at the strike price of €90 - a profit of €16 (€20 difference minus €4 premium)!'}
                </p>
              </div>

              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                {locale === 'de' ? 'Vorteile von Put-Optionen:' : 'Advantages of Put Options:'}
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>{locale === 'de' ? 'Profitieren von fallenden Märkten' : 'Profit from falling markets'}</li>
                <li>{locale === 'de' ? 'Portfolio-Absicherung (Hedging)' : 'Portfolio hedging'}</li>
                <li>{locale === 'de' ? 'Begrenztes Risiko (nur die Prämie)' : 'Limited risk (only the premium)'}</li>
                <li>{locale === 'de' ? 'Ideal für bearische Markterwartungen' : 'Ideal for bearish market expectations'}</li>
              </ul>
            </div>

            {/* Comparison Table */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {locale === 'de' ? 'Direkter Vergleich' : 'Direct Comparison'}
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold"></th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-700">Call-Option</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-red-700">Put-Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">{locale === 'de' ? 'Recht' : 'Right'}</td>
                      <td className="border border-gray-300 px-4 py-3">{locale === 'de' ? 'Zu KAUFEN' : 'To BUY'}</td>
                      <td className="border border-gray-300 px-4 py-3">{locale === 'de' ? 'Zu VERKAUFEN' : 'To SELL'}</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">{locale === 'de' ? 'Profit bei' : 'Profit when'}</td>
                      <td className="border border-gray-300 px-4 py-3">{locale === 'de' ? 'Steigenden Kursen' : 'Rising prices'}</td>
                      <td className="border border-gray-300 px-4 py-3">{locale === 'de' ? 'Fallenden Kursen' : 'Falling prices'}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">{locale === 'de' ? 'Markterwartung' : 'Market expectation'}</td>
                      <td className="border border-gray-300 px-4 py-3">Bullish (↗)</td>
                      <td className="border border-gray-300 px-4 py-3">Bearish (↘)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">{locale === 'de' ? 'Max. Verlust' : 'Max. loss'}</td>
                      <td className="border border-gray-300 px-4 py-3">{locale === 'de' ? 'Prämie' : 'Premium'}</td>
                      <td className="border border-gray-300 px-4 py-3">{locale === 'de' ? 'Prämie' : 'Premium'}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">{locale === 'de' ? 'Max. Gewinn' : 'Max. profit'}</td>
                      <td className="border border-gray-300 px-4 py-3">{locale === 'de' ? 'Unbegrenzt' : 'Unlimited'}</td>
                      <td className="border border-gray-300 px-4 py-3">{locale === 'de' ? 'Begrenzt (Strike - Prämie)' : 'Limited (Strike - Premium)'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4">
                {locale === 'de' ? 'Bereit, mit Options Trading zu starten?' : 'Ready to Start Options Trading?'}
              </h3>
              <p className="text-xl mb-6 text-blue-100">
                {locale === 'de'
                  ? 'Eröffnen Sie jetzt Ihr kostenloses Konto bei Libertex und profitieren Sie von:'
                  : 'Open your free Libertex account now and benefit from:'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de' ? 'Zero-Spread Trading' : 'Zero-Spread Trading'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de' ? 'Über 350 Instrumente' : 'Over 350 instruments'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de' ? 'MT4/MT5 + eigene Plattform' : 'MT4/MT5 + proprietary platform'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de' ? '40+ Internationale Auszeichnungen' : '40+ International awards'}</span>
                </div>
              </div>
              <a
                href="https://libertex.com/de/signup"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {locale === 'de' ? 'Jetzt kostenlos registrieren bei Libertex' : 'Register for free at Libertex now'}
              </a>
              <p className="text-sm text-blue-200 mt-4">
                {locale === 'de' ? 'Nur 100€ Mindesteinlage - CySEC reguliert - 3 Millionen Nutzer weltweit' : 'Only €100 minimum deposit - CySEC regulated - 3 million users worldwide'}
              </p>
            </div>

            {/* When to Use */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {locale === 'de' ? 'Wann welche Option nutzen?' : 'When to Use Which Option?'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                  <h4 className="font-bold text-xl text-green-800 mb-3">
                    {locale === 'de' ? 'Nutzen Sie Call-Optionen wenn:' : 'Use Call Options when:'}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">▸</span>
                      <span>{locale === 'de' ? 'Sie erwarten steigende Kurse' : 'You expect rising prices'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">▸</span>
                      <span>{locale === 'de' ? 'Sie von einem Durchbruch profitieren wollen' : 'You want to profit from a breakout'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">▸</span>
                      <span>{locale === 'de' ? 'Sie Hebelwirkung für Long-Positionen nutzen möchten' : 'You want to use leverage for long positions'}</span>
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50">
                  <h4 className="font-bold text-xl text-red-800 mb-3">
                    {locale === 'de' ? 'Nutzen Sie Put-Optionen wenn:' : 'Use Put Options when:'}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">▸</span>
                      <span>{locale === 'de' ? 'Sie erwarten fallende Kurse' : 'You expect falling prices'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">▸</span>
                      <span>{locale === 'de' ? 'Sie Ihr Portfolio absichern wollen' : 'You want to hedge your portfolio'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">▸</span>
                      <span>{locale === 'de' ? 'Sie von Marktkrisen profitieren möchten' : 'You want to profit from market crises'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Risks */}
            <div className="card mb-8 bg-yellow-50 border-2 border-yellow-300">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {locale === 'de' ? 'Wichtige Risiken und Hinweise' : 'Important Risks and Notes'}
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 text-xl">▸</span>
                  <span><strong>{locale === 'de' ? 'Zeitverfall:' : 'Time Decay:'}</strong> {locale === 'de' ? 'Optionen verlieren mit der Zeit an Wert (Theta)' : 'Options lose value over time (Theta)'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 text-xl">▸</span>
                  <span><strong>{locale === 'de' ? 'Totalverlust möglich:' : 'Total loss possible:'}</strong> {locale === 'de' ? 'Sie können die gesamte Prämie verlieren' : 'You can lose the entire premium'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 text-xl">▸</span>
                  <span><strong>{locale === 'de' ? 'Volatilität:' : 'Volatility:'}</strong> {locale === 'de' ? 'Hohe Schwankungen können Ihre Position beeinflussen' : 'High fluctuations can affect your position'}</span>
                </li>
              </ul>
            </div>

            {/* Final CTA */}
            <div className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center">
              <h3 className="text-2xl font-heading font-bold mb-4 flex items-center justify-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                </svg>
                {locale === 'de' ? 'Starten Sie Ihre Options Trading Reise mit Libertex' : 'Start Your Options Trading Journey with Libertex'}
              </h3>
              <p className="text-lg mb-6 text-primary-100">
                {locale === 'de'
                  ? 'Registrieren Sie sich jetzt und erhalten Sie Zugang zu über 350 Handelsinstrumenten, Zero-Spread Trading und professionellen Tools!'
                  : 'Register now and get access to over 350 trading instruments, Zero-Spread Trading and professional tools!'}
              </p>
              <a
                href="https://libertex.com/de/signup"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                {locale === 'de' ? 'Jetzt bei Libertex registrieren' : 'Register at Libertex now'}
              </a>
            </div>

          </article>
        </div>
      </div>
    </>
  );
}
