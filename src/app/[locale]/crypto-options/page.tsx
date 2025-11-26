import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Krypto-Optionen – Vollständiger Leitfaden für Trader in Europa (2025) | BeInOptions'
      : 'Crypto Options – Complete Guide for European Traders (2025) | BeInOptions',
    description: locale === 'de'
      ? 'Krypto-Optionen sind ein flexibles und risikobegrenztes Instrument für Bitcoin und Ethereum. Nur über EU-regulierte Broker legal in Deutschland.'
      : 'Crypto options are a flexible and risk-controlled way to trade Bitcoin and Ethereum. Legal in Germany only through EU-regulated brokers.',
  });
}

export default function CryptoOptionsPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-500 via-purple-600 to-blue-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              {locale === 'de'
                ? 'Krypto-Optionen – Vollständiger Leitfaden für Trader in Europa (2025)'
                : 'Crypto Options – Complete Guide for European Traders (2025)'}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              {locale === 'de'
                ? 'Krypto-Optionen sind ein flexibles und risikobegrenztes Instrument, um Bitcoin, Ethereum und andere digitale Vermögenswerte zu handeln. Für Trader in Deutschland und der EU sind Krypto-Optionen nur über vollständig EU-regulierte Broker verfügbar, die Transparenz, Anlegerschutz und MiFID-II-Konformität gewährleisten.'
                : 'Crypto options are a flexible and risk-controlled way to trade Bitcoin, Ethereum, and other digital assets. For traders in Germany and the European Union, crypto options are available only through fully EU-regulated brokers, ensuring transparency, investor protection, and compliance with MiFID II.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* What Are Crypto Options */}
          <section className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900">
                {locale === 'de' ? 'Was sind Krypto-Optionen?' : 'What Are Crypto Options?'}
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {locale === 'de'
                ? 'Krypto-Optionen sind Finanzverträge, die Ihnen das Recht – aber nicht die Pflicht – geben, eine Kryptowährung zu einem bestimmten Preis (Strike) vor einem festgelegten Ablaufdatum zu kaufen oder zu verkaufen.'
                : 'Crypto options are financial contracts that give you the right – but not the obligation – to buy or sell a cryptocurrency at a specific price (strike price) before a selected expiration date.'}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700">
                <strong>{locale === 'de' ? 'Wichtig:' : 'Important:'}</strong> {locale === 'de' ? 'Sie kaufen nicht die Kryptowährung selbst. Sie kaufen die Möglichkeit, später zu handeln.' : 'You are not buying the cryptocurrency itself. You are buying the possibility to buy or sell it later.'}
              </p>
            </div>
            <p className="text-gray-700 text-lg">
              {locale === 'de'
                ? 'In Europa werden Krypto-Optionen typischerweise als CFD-basierte Optionen angeboten: gleiche Logik wie klassische Optionen, aber einfacher und verständlicher.'
                : 'In Europe, crypto options are typically offered as CFD-based options, which follow the same logic as traditional options but are simpler and easier for beginners.'}
            </p>
          </section>

          {/* How Crypto Options Work */}
          <section className="card">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Wie funktionieren Krypto-Optionen?' : 'How Crypto Options Work'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Call Option */}
              <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  {locale === 'de' ? 'Call-Option (bullisch)' : 'Call Option (bullish)'}
                </h3>
                <p className="text-gray-700 mb-3">
                  {locale === 'de'
                    ? 'Sie profitieren, wenn der Preis von BTC oder ETH steigt. Sie haben das Recht, zum Strike-Preis zu kaufen.'
                    : 'You profit if the price of BTC or ETH moves up. A call option gives you the right to buy the asset at a fixed strike price.'}
                </p>
              </div>

              {/* Put Option */}
              <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">📉</span>
                  {locale === 'de' ? 'Put-Option (bärisch)' : 'Put Option (bearish)'}
                </h3>
                <p className="text-gray-700 mb-3">
                  {locale === 'de'
                    ? 'Sie profitieren, wenn der Preis fällt. Sie haben das Recht, zum Strike-Preis zu verkaufen.'
                    : 'You profit if the price moves down. A put option gives you the right to sell the asset at a fixed strike price.'}
                </p>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-gray-700 font-semibold">
                <strong>{locale === 'de' ? 'Maximales Risiko = Prämie' : 'Maximum Risk = Premium'}</strong>
              </p>
              <p className="text-gray-700">
                {locale === 'de'
                  ? 'Ihr maximaler Verlust ist immer auf die Optionsprämie begrenzt.'
                  : 'Your loss is always limited to the price you pay for the option.'}
              </p>
            </div>
          </section>

          {/* Why Trade Crypto Options */}
          <section className="card bg-gradient-to-br from-purple-50 to-blue-50">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Warum Krypto-Optionen handeln?' : 'Why Trade Crypto Options?'}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {locale === 'de' ? 'Begrenztes, klar definiertes Risiko' : 'Limited, Defined Risk'}
                  </h4>
                  <p className="text-gray-700">
                    {locale === 'de' ? 'Sie können nie mehr verlieren als die Prämie.' : 'You can never lose more than the premium.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {locale === 'de' ? 'Gewinnchancen bei jeder Marktbewegung' : 'Profit in Any Market Direction'}
                  </h4>
                  <p className="text-gray-700">
                    {locale === 'de' ? 'Steigend, fallend, seitwärts, hohe Volatilität, niedrige Volatilität.' : 'Up, down, sideways, low volatility, high volatility.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {locale === 'de' ? 'Geringes Startkapital' : 'Low Capital Requirement'}
                  </h4>
                  <p className="text-gray-700">
                    {locale === 'de' ? 'Kein Kauf eines ganzen Bitcoins erforderlich.' : 'No need to buy a full Bitcoin.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {locale === 'de' ? 'Ideal für volatile Märkte' : 'Perfect for Volatile Markets'}
                  </h4>
                  <p className="text-gray-700">
                    {locale === 'de' ? 'Krypto ist natürlich volatil → Optionen nutzen dies aus.' : 'Crypto is naturally volatile → options use this to your advantage.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {locale === 'de' ? 'Absicherung des Portfolios (Hedging)' : 'Portfolio Protection (Hedging)'}
                  </h4>
                  <p className="text-gray-700">
                    {locale === 'de' ? 'Sie können langfristige Positionen schützen.' : 'You can protect your long-term crypto positions.'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="card">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Krypto-Optionen vs Krypto-CFDs vs Spot-Handel' : 'Crypto Options vs Crypto CFDs vs Spot Trading'}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {locale === 'de' ? 'Merkmal' : 'Feature'}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {locale === 'de' ? 'Krypto-Optionen' : 'Crypto Options'}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {locale === 'de' ? 'Krypto-CFDs' : 'Crypto CFDs'}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {locale === 'de' ? 'Spot-Krypto' : 'Spot Crypto'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {locale === 'de' ? 'Risiko' : 'Risk'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Begrenztes Risiko' : 'Limited'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Mittel' : 'Medium'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Hoch' : 'High'}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {locale === 'de' ? 'Gewinn' : 'Profit'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Steigend/Fallend/Seitwärts' : 'Up/Down/Sideways'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Steigend/Fallend' : 'Up/Down'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Nur steigend' : 'Only Up'}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {locale === 'de' ? 'Kapitalbedarf' : 'Capital Needed'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Gering' : 'Low'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Mittel' : 'Medium'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Hoch' : 'High'}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {locale === 'de' ? 'Ablauf' : 'Expiry'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Ja' : 'Yes'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Nein' : 'No'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Nein' : 'No'}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {locale === 'de' ? 'Geeignet für' : 'Suitable for'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Einsteiger + Profis' : 'Beginners + Advanced'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Einsteiger' : 'Beginners'}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {locale === 'de' ? 'Einsteiger' : 'Beginners'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Legality and Regulation */}
          <section className="card bg-blue-50 border-2 border-blue-300">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Rechtliche Lage in Deutschland und der EU' : 'Legality and Regulation in Germany and the EU'}
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              {locale === 'de'
                ? 'Krypto-Optionen sind legal, wenn sie über regulierte EU-Broker gehandelt werden.'
                : 'Crypto options are legal in Germany and the EU only through licensed and regulated brokers.'}
            </p>
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-3">
                {locale === 'de' ? 'BaFin und MiFID II verlangen:' : 'Requirements under BaFin and MiFID II:'}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{locale === 'de' ? 'Begrenztes Risiko' : 'Defined risk'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{locale === 'de' ? 'Transparente Preisgestaltung' : 'Transparent pricing'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{locale === 'de' ? 'Keine irreführende Hebelwirkung' : 'No misleading leverage'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{locale === 'de' ? 'Aufsicht durch EU-Behörden (CySEC, FCA, BaFin-Pass-Regeln)' : 'EU regulatory oversight (CySEC, FCA, BaFin passporting)'}</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-gray-700 font-semibold">
                <strong>{locale === 'de' ? 'Wichtig:' : 'Important:'}</strong>
              </p>
              <p className="text-gray-700">
                {locale === 'de'
                  ? 'Plattformen wie Deribit, Bybit oder Delta Exchange sind nicht für EU-Privatkunden zugelassen.'
                  : 'Platforms such as Deribit, Bybit or Delta Exchange are not authorised for EU retail clients.'}
              </p>
            </div>
          </section>

          {/* Where to Trade */}
          <section className="card">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Wo kann man in Europa Krypto-Optionen handeln?' : 'Where to Trade Crypto Options in Europe?'}
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              {locale === 'de'
                ? 'Auf BeInOptions listen wir nur vollständig regulierte Anbieter, die in Deutschland verfügbar sind:'
                : 'On BeInOptions, we list only brokers that are fully compliant with EU regulations and available in Germany:'}
            </p>

            {/* Libertex */}
            <div className="mb-8 border-2 border-orange-200 rounded-xl p-6 bg-orange-50">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    1. Libertex – {locale === 'de' ? 'Ideal für einfache Krypto-Optionen' : 'Best for Simple Crypto Options'}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                      {locale === 'de' ? 'Regulierung: CySEC (EU)' : 'Regulation: CySEC (EU)'}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
                      {locale === 'de' ? 'Deutschland: ✔ Ja' : 'Available in Germany: ✔ Yes'}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                {locale === 'de'
                  ? 'Libertex bietet unkomplizierte CFD-Krypto-Optionen auf Bitcoin und Ethereum an. Die Optionen sind einfach, risikoarm und perfekt für Einsteiger.'
                  : 'Libertex offers straightforward CFD crypto options on Bitcoin and Ethereum. These options are simple, low-threshold, and ideal for beginners.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Hauptmerkmale:' : 'Key Features:'}</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{locale === 'de' ? 'Call- und Put-Optionen' : 'Call and Put crypto options'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{locale === 'de' ? 'Klar begrenztes Risiko' : 'Clear and limited risk'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{locale === 'de' ? 'Geringe Mindesteinsätze' : 'Low minimum investment'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{locale === 'de' ? 'Intuitive Plattform' : 'Easy, intuitive platform'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{locale === 'de' ? 'Vollständig EU-konform' : 'Fully compliant with EU rules'}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Ideal für:' : 'Best for:'}</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span>{locale === 'de' ? 'Einsteiger' : 'Beginners'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span>{locale === 'de' ? 'Risikokontrollierte Trades' : 'Risk-controlled trading'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span>{locale === 'de' ? 'Einfache Handelsstrategien' : 'Simple, directional strategies'}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href={`/${locale}/brokers/libertex`}
                className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                {locale === 'de' ? 'Mehr über Libertex erfahren →' : 'Learn more about Libertex →'}
              </Link>
            </div>

            {/* AvaTrade */}
            <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    2. AvaTrade / AvaOptions – {locale === 'de' ? 'Für erfahrene Trader' : 'Best for Advanced Strategies'}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                      {locale === 'de' ? 'Regulierung: Zentralbank von Irland (EU)' : 'Regulation: Central Bank of Ireland (EU)'}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
                      {locale === 'de' ? 'Deutschland: ✔ Ja' : 'Available in Germany: ✔ Yes'}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                {locale === 'de'
                  ? 'AvaOptions bietet fortgeschrittene Optionsstrukturen, einschließlich Krypto-Index-Optionen.'
                  : 'AvaOptions offers more advanced option structures, including crypto index options.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Hauptmerkmale:' : 'Key Features:'}</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{locale === 'de' ? 'Professionelle Optionskette' : 'Professional options chain'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{locale === 'de' ? 'Strategien wie Straddles, Spreads, Condors' : 'Strategy templates (straddles, spreads, condors)'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{locale === 'de' ? 'Viele Laufzeiten' : 'Multiple expiries'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{locale === 'de' ? 'Tiefgehende Analysen' : 'In-depth analytics'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{locale === 'de' ? 'MiFID-II-konform' : 'MiFID II compliant'}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{locale === 'de' ? 'Ideal für:' : 'Best for:'}</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span>{locale === 'de' ? 'Erfahrene Trader' : 'Advanced traders'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span>{locale === 'de' ? 'Volatilitätsstrategien' : 'Volatility strategies'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span>{locale === 'de' ? 'Komplexe Optionensysteme' : 'Multi-leg option setups'}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href={`/${locale}/brokers/avatrade`}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {locale === 'de' ? 'Mehr über AvaTrade erfahren →' : 'Learn more about AvaTrade →'}
              </Link>
            </div>
          </section>

          {/* Popular Strategies */}
          <section className="card bg-gradient-to-br from-green-50 to-emerald-50">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Beliebte Strategien' : 'Popular Crypto Options Strategies'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-green-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Long Call</h4>
                <p className="text-gray-700 text-sm">
                  {locale === 'de' ? 'Bullische Bewegung handeln.' : 'Bullish directional trade.'}
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Long Put</h4>
                <p className="text-gray-700 text-sm">
                  {locale === 'de' ? 'Bärische Bewegung handeln.' : 'Bearish directional trade.'}
                </p>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">{locale === 'de' ? 'Schutz-Put' : 'Protective Put'}</h4>
                <p className="text-gray-700 text-sm">
                  {locale === 'de' ? 'Absicherung für langfristige Krypto-Investoren.' : 'Hedging for long-term holders.'}
                </p>
              </div>
              <div className="bg-white border border-yellow-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Covered Call</h4>
                <p className="text-gray-700 text-sm">
                  {locale === 'de' ? 'Prämieneinnahmen auf bestehende Krypto-Bestände.' : 'Earning premium on existing crypto.'}
                </p>
              </div>
              <div className="bg-white border border-purple-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Straddle</h4>
                <p className="text-gray-700 text-sm">
                  {locale === 'de' ? 'Große Kursschwankungen handeln.' : 'Trading large price swings.'}
                </p>
              </div>
            </div>
          </section>

          {/* Beginner Tips */}
          <section className="card bg-yellow-50 border-2 border-yellow-300">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Tipps für Einsteiger (EU/Deutschland)' : 'Beginner Tips (EU/Germany)'}
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  {locale === 'de' ? 'Mit einfachen Call/Put-Optionen beginnen' : 'Start with simple Call and Put options'}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  {locale === 'de' ? 'Kleine Positionsgrößen nutzen' : 'Keep position sizes small'}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  {locale === 'de' ? 'Verfallzeiten genau prüfen' : 'Avoid short-dated expiries at first'}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  {locale === 'de' ? 'Nur regulierte EU-Broker verwenden' : 'Only trade with regulated EU brokers'}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  {locale === 'de' ? 'Volatilität und Risiko verstehen' : 'Understand volatility and risk'}
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
