import Image from 'next/image';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://beinoptions.com';

  return genMeta({
    title: locale === 'de'
      ? 'Optionen einfach erklärt – Der ultimative Einsteiger-Guide'
      : 'Options Explained Simply – The Ultimate Beginner\'s Guide',
    description: locale === 'de'
      ? 'Optionen verständlich erklärt mit praktischen Beispielen. Lernen Sie Call- und Put-Optionen Schritt für Schritt. Der perfekte Einstieg für Anfänger.'
      : 'Options explained simply with practical examples. Learn Call and Put options step by step. The perfect introduction for beginners.',
    keywords: locale === 'de'
      ? ['optionen erklärt', 'optionen für anfänger', 'call option', 'put option', 'optionen lernen', 'optionshandel grundlagen', 'was sind optionen']
      : ['options explained', 'options for beginners', 'call option', 'put option', 'learn options', 'options trading basics', 'what are options'],
    canonical: `${baseUrl}/${locale}/blog/options-explained-simply`,
    ogImage: `${baseUrl}/images/blog/options-explained-hero.png`,
    type: 'article',
    publishedTime: '2025-12-31T00:00:00Z',
    modifiedTime: '2025-12-31T00:00:00Z',
    author: 'BeInOptions Education Team',
    section: locale === 'de' ? 'Einsteiger-Guide' : 'Beginner Guide',
    locale,
  });
}

export default function OptionsExplainedSimplyPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/blog/options-explained-hero.png"
            alt={locale === 'de' ? 'Optionen einfach erklärt' : 'Options Explained Simply'}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded text-sm font-medium border border-emerald-500/30">
                {locale === 'de' ? 'Einsteiger-Guide' : 'Beginner Guide'}
              </span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 rounded text-sm">
                {locale === 'de' ? '8 Min. Lesezeit' : '8 min read'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {locale === 'de'
                ? 'Optionen verständlich erklärt'
                : 'Options Explained Simply'}
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl">
              {locale === 'de'
                ? 'Eine praxisnahe Einführung in die Welt der Optionen. Verstehen Sie die Grundlagen mit anschaulichen Beispielen – ohne Fachjargon.'
                : 'A practical introduction to the world of options. Understand the basics with clear examples – without jargon.'}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>BeInOptions Education Team</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <time>31. Dezember 2025</time>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">

            {/* Key Takeaways */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-12">
              <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                {locale === 'de' ? 'Das Wichtigste in Kürze' : 'Key Takeaways'}
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de'
                    ? 'Eine Option ist ein Vertrag, der Ihnen das Recht (nicht die Pflicht) gibt, einen Basiswert zu einem festgelegten Preis zu kaufen oder zu verkaufen'
                    : 'An option is a contract that gives you the right (not the obligation) to buy or sell an underlying asset at a fixed price'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de'
                    ? 'Call-Optionen profitieren von steigenden Kursen, Put-Optionen von fallenden Kursen'
                    : 'Call options profit from rising prices, Put options from falling prices'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de'
                    ? 'Der maximale Verlust beim Kauf einer Option ist auf die gezahlte Prämie begrenzt'
                    : 'The maximum loss when buying an option is limited to the premium paid'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'de'
                    ? 'Optionen werden sowohl zur Spekulation als auch zur Absicherung (Hedging) eingesetzt'
                    : 'Options are used for both speculation and hedging purposes'}</span>
                </li>
              </ul>
            </div>

            {/* Hero Image */}
            <figure className="mb-12">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/blog/options-explained-hero.png"
                  alt={locale === 'de' ? 'Optionen Grundlagen Illustration' : 'Options Basics Illustration'}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-center text-sm text-gray-500 mt-3">
                {locale === 'de'
                  ? 'Optionen: Ein fundamentales Instrument der modernen Finanzmärkte'
                  : 'Options: A fundamental instrument of modern financial markets'}
              </figcaption>
            </figure>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Das Grundprinzip einer Option' : 'The Basic Principle of an Option'}
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {locale === 'de'
                  ? 'Um das Konzept einer Option zu verstehen, betrachten wir zunächst ein alltägliches Beispiel:'
                  : 'To understand the concept of an option, let\'s first look at an everyday example:'}
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 mb-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-4">
                      {locale === 'de' ? 'Das Preissicherungs-Szenario' : 'The Price Lock Scenario'}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {locale === 'de'
                        ? 'Stellen Sie sich vor, ein Produkt kostet heute 100 Euro. Sie vermuten, dass der Preis in Zukunft steigen könnte, haben aber aktuell nicht das Kapital oder möchten sich absichern.'
                        : 'Imagine a product costs 100 euros today. You suspect the price might rise in the future, but you don\'t have the capital right now or want to hedge.'}
                    </p>
                    <p className="text-gray-700 mb-4">
                      {locale === 'de'
                        ? 'Der Verkäufer bietet Ihnen an: „Zahlen Sie mir heute 5 Euro, und ich garantiere Ihnen, dass Sie das Produkt innerhalb der nächsten 30 Tage für 100 Euro kaufen können – unabhängig vom tatsächlichen Marktpreis."'
                        : 'The seller offers: "Pay me 5 euros today, and I guarantee you can buy the product within the next 30 days for 100 euros – regardless of the actual market price."'}
                    </p>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Sie erhalten damit das Recht, aber nicht die Pflicht, zu diesem Preis zu kaufen. Diese Vereinbarung entspricht dem Grundprinzip einer Option.'
                        : 'You receive the right, but not the obligation, to buy at this price. This agreement corresponds to the basic principle of an option.'}
                    </p>
                  </div>
                  <div className="w-full md:w-64 flex-shrink-0">
                    <Image
                      src="/images/blog/options-explained-ice-cream.png"
                      alt={locale === 'de' ? 'Preissicherung Beispiel' : 'Price lock example'}
                      width={256}
                      height={180}
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">
                  {locale === 'de' ? 'Fachbegriffe im Überblick' : 'Key Terms Overview'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <span className="font-semibold text-gray-900">{locale === 'de' ? 'Prämie' : 'Premium'}</span>
                    <p className="text-gray-600 mt-1">
                      {locale === 'de' ? 'Der Betrag, den Sie für das Optionsrecht zahlen (im Beispiel: 5 Euro)' : 'The amount you pay for the option right (in the example: 5 euros)'}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <span className="font-semibold text-gray-900">{locale === 'de' ? 'Strike-Preis' : 'Strike Price'}</span>
                    <p className="text-gray-600 mt-1">
                      {locale === 'de' ? 'Der festgelegte Kauf- oder Verkaufspreis (im Beispiel: 100 Euro)' : 'The fixed buy or sell price (in the example: 100 euros)'}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <span className="font-semibold text-gray-900">{locale === 'de' ? 'Verfallsdatum' : 'Expiration Date'}</span>
                    <p className="text-gray-600 mt-1">
                      {locale === 'de' ? 'Der Zeitpunkt, bis zu dem das Optionsrecht ausgeübt werden kann' : 'The date by which the option right can be exercised'}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <span className="font-semibold text-gray-900">{locale === 'de' ? 'Basiswert' : 'Underlying Asset'}</span>
                    <p className="text-gray-600 mt-1">
                      {locale === 'de' ? 'Das Finanzinstrument, auf das sich die Option bezieht (Aktie, Index, etc.)' : 'The financial instrument the option refers to (stock, index, etc.)'}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Formal Definition */}
            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Definition: Was ist eine Option?' : 'Definition: What is an Option?'}
              </h2>

              <div className="bg-slate-800 text-white rounded-xl p-8 mb-6">
                <p className="text-lg leading-relaxed">
                  {locale === 'de'
                    ? 'Eine Option ist ein standardisierter Finanzkontrakt, der dem Käufer das Recht – aber nicht die Verpflichtung – einräumt, einen bestimmten Basiswert (z.B. Aktie, Index, Währung) zu einem vorher festgelegten Preis innerhalb eines definierten Zeitraums zu kaufen oder zu verkaufen.'
                    : 'An option is a standardized financial contract that gives the buyer the right – but not the obligation – to buy or sell a specific underlying asset (e.g., stock, index, currency) at a predetermined price within a defined time period.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{locale === 'de' ? 'Recht, keine Pflicht' : 'Right, Not Obligation'}</h4>
                  <p className="text-sm text-gray-600">
                    {locale === 'de'
                      ? 'Der Käufer kann die Option ausüben oder verfallen lassen'
                      : 'The buyer can exercise or let the option expire'}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{locale === 'de' ? 'Definiertes Risiko' : 'Defined Risk'}</h4>
                  <p className="text-sm text-gray-600">
                    {locale === 'de'
                      ? 'Maximaler Verlust ist auf die gezahlte Prämie begrenzt'
                      : 'Maximum loss is limited to the premium paid'}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{locale === 'de' ? 'Zeitlich begrenzt' : 'Time-Limited'}</h4>
                  <p className="text-sm text-gray-600">
                    {locale === 'de'
                      ? 'Jede Option hat ein festgelegtes Verfallsdatum'
                      : 'Every option has a fixed expiration date'}
                  </p>
                </div>
              </div>
            </section>

            {/* Two Types of Options */}
            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Die zwei Grundtypen: Call und Put' : 'The Two Basic Types: Call and Put'}
              </h2>

              <div className="flex justify-center mb-8">
                <div className="w-80">
                  <Image
                    src="/images/blog/options-explained-price-movement.png"
                    alt={locale === 'de' ? 'Kursbewegungen' : 'Price movements'}
                    width={320}
                    height={200}
                    className="rounded-xl shadow-md"
                  />
                  <p className="text-center text-sm text-gray-500 mt-2">
                    {locale === 'de' ? 'Call profitiert von steigenden, Put von fallenden Kursen' : 'Call profits from rising, Put from falling prices'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Call Option */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="bg-emerald-600 text-white px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Call-Option</h3>
                        <p className="text-emerald-100 text-sm">{locale === 'de' ? 'Kaufrecht' : 'Right to Buy'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      {locale === 'de'
                        ? 'Eine Call-Option gibt Ihnen das Recht, den Basiswert zum Strike-Preis zu kaufen.'
                        : 'A Call option gives you the right to buy the underlying asset at the strike price.'}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1 font-bold">+</span>
                        <span className="text-gray-700">{locale === 'de' ? 'Profitabel bei steigenden Kursen' : 'Profitable when prices rise'}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1 font-bold">+</span>
                        <span className="text-gray-700">{locale === 'de' ? 'Unbegrenztes Gewinnpotenzial' : 'Unlimited profit potential'}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1 font-bold">+</span>
                        <span className="text-gray-700">{locale === 'de' ? 'Begrenztes Verlustrisiko (Prämie)' : 'Limited loss risk (premium)'}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">{locale === 'de' ? 'Anwendung:' : 'Use case:'}</span> {locale === 'de' ? 'Wenn Sie steigende Kurse erwarten' : 'When you expect rising prices'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Put Option */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="bg-red-600 text-white px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Put-Option</h3>
                        <p className="text-red-100 text-sm">{locale === 'de' ? 'Verkaufsrecht' : 'Right to Sell'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      {locale === 'de'
                        ? 'Eine Put-Option gibt Ihnen das Recht, den Basiswert zum Strike-Preis zu verkaufen.'
                        : 'A Put option gives you the right to sell the underlying asset at the strike price.'}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-red-600 mt-1 font-bold">+</span>
                        <span className="text-gray-700">{locale === 'de' ? 'Profitabel bei fallenden Kursen' : 'Profitable when prices fall'}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600 mt-1 font-bold">+</span>
                        <span className="text-gray-700">{locale === 'de' ? 'Ideal zur Portfolio-Absicherung' : 'Ideal for portfolio hedging'}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600 mt-1 font-bold">+</span>
                        <span className="text-gray-700">{locale === 'de' ? 'Begrenztes Verlustrisiko (Prämie)' : 'Limited loss risk (premium)'}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">{locale === 'de' ? 'Anwendung:' : 'Use case:'}</span> {locale === 'de' ? 'Wenn Sie fallende Kurse erwarten oder absichern möchten' : 'When you expect falling prices or want to hedge'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Practical Example */}
            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Praxisbeispiel: Gewinn- und Verlustszenarien' : 'Practical Example: Profit and Loss Scenarios'}
              </h2>

              <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">
                  {locale === 'de' ? 'Ausgangssituation' : 'Initial Situation'}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <span className="text-gray-500">{locale === 'de' ? 'Aktueller Kurs' : 'Current Price'}</span>
                    <p className="font-bold text-gray-900 text-lg">100 EUR</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <span className="text-gray-500">Strike-Preis</span>
                    <p className="font-bold text-gray-900 text-lg">100 EUR</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <span className="text-gray-500">{locale === 'de' ? 'Prämie' : 'Premium'}</span>
                    <p className="font-bold text-gray-900 text-lg">5 EUR</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <span className="text-gray-500">{locale === 'de' ? 'Laufzeit' : 'Duration'}</span>
                    <p className="font-bold text-gray-900 text-lg">30 {locale === 'de' ? 'Tage' : 'Days'}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Scenario 1 */}
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                    <h3 className="font-bold text-gray-900">{locale === 'de' ? 'Kurs steigt auf 120 EUR' : 'Price rises to 120 EUR'}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {locale === 'de'
                      ? 'Der Basiswert notiert bei Verfall über dem Strike-Preis. Die Option ist „im Geld".'
                      : 'The underlying asset is trading above the strike price at expiration. The option is "in the money".'}
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-emerald-100">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">{locale === 'de' ? 'Innerer Wert' : 'Intrinsic Value'}</span>
                        <span className="font-medium">120 - 100 = 20 EUR</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{locale === 'de' ? 'Gezahlte Prämie' : 'Premium Paid'}</span>
                        <span className="font-medium">- 5 EUR</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-gray-100">
                        <span className="font-semibold text-gray-900">{locale === 'de' ? 'Nettogewinn' : 'Net Profit'}</span>
                        <span className="font-bold text-emerald-600">+ 15 EUR</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{locale === 'de' ? 'Rendite auf Prämie' : 'Return on Premium'}</span>
                        <span>+ 300%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scenario 2 */}
                <div className="bg-gray-100 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                    <h3 className="font-bold text-gray-900">{locale === 'de' ? 'Kurs bleibt bei 100 EUR' : 'Price stays at 100 EUR'}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {locale === 'de'
                      ? 'Der Basiswert notiert bei Verfall auf dem Strike-Preis. Die Option ist „am Geld".'
                      : 'The underlying asset is trading at the strike price at expiration. The option is "at the money".'}
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">{locale === 'de' ? 'Innerer Wert' : 'Intrinsic Value'}</span>
                        <span className="font-medium">100 - 100 = 0 EUR</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{locale === 'de' ? 'Gezahlte Prämie' : 'Premium Paid'}</span>
                        <span className="font-medium">- 5 EUR</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-gray-100">
                        <span className="font-semibold text-gray-900">{locale === 'de' ? 'Nettoverlust' : 'Net Loss'}</span>
                        <span className="font-bold text-red-600">- 5 EUR</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{locale === 'de' ? 'Option verfällt wertlos' : 'Option expires worthless'}</span>
                        <span>- 100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <h4 className="font-bold text-gray-900 mb-2">
                  {locale === 'de' ? 'Wichtige Erkenntnis' : 'Key Insight'}
                </h4>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Beim Kauf einer Option ist Ihr maximaler Verlust stets auf die gezahlte Prämie begrenzt – unabhängig davon, wie stark der Kurs in die entgegengesetzte Richtung läuft. Dies unterscheidet Optionen fundamental von vielen anderen derivativen Instrumenten.'
                    : 'When buying an option, your maximum loss is always limited to the premium paid – regardless of how far the price moves in the opposite direction. This fundamentally distinguishes options from many other derivative instruments.'}
                </p>
              </div>
            </section>

            {/* Trading the Contract */}
            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Der Handel mit Optionskontrakten' : 'Trading Option Contracts'}
              </h2>

              <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {locale === 'de'
                      ? 'Ein wichtiger Aspekt des Optionshandels: Sie müssen eine Option nicht bis zum Verfallsdatum halten. Optionen können jederzeit während der Laufzeit am Markt gekauft und verkauft werden.'
                      : 'An important aspect of options trading: You don\'t have to hold an option until expiration. Options can be bought and sold on the market at any time during their lifetime.'}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {locale === 'de'
                      ? 'Viele Trader handeln ausschließlich die Optionskontrakte selbst und üben sie nie aus. Steigt der Wert einer Option aufgrund von Kursbewegungen des Basiswerts, kann sie mit Gewinn verkauft werden – ohne dass je eine Aktie den Besitzer wechselt.'
                      : 'Many traders exclusively trade the option contracts themselves and never exercise them. If the value of an option rises due to price movements of the underlying, it can be sold at a profit – without any shares ever changing hands.'}
                  </p>
                </div>
                <div className="w-full md:w-64 flex-shrink-0">
                  <Image
                    src="/images/blog/options-explained-trading.png"
                    alt={locale === 'de' ? 'Optionshandel' : 'Options trading'}
                    width={256}
                    height={180}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-gray-900 mb-4">
                  {locale === 'de' ? 'Drei Möglichkeiten bei einer Option' : 'Three Possibilities With an Option'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-slate-100">
                    <span className="text-sm font-semibold text-blue-600">{locale === 'de' ? 'AUSÜBEN' : 'EXERCISE'}</span>
                    <p className="text-sm text-gray-600 mt-2">
                      {locale === 'de'
                        ? 'Das Recht nutzen und den Basiswert zum Strike-Preis kaufen/verkaufen'
                        : 'Use the right to buy/sell the underlying at the strike price'}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-slate-100">
                    <span className="text-sm font-semibold text-green-600">{locale === 'de' ? 'VERKAUFEN' : 'SELL'}</span>
                    <p className="text-sm text-gray-600 mt-2">
                      {locale === 'de'
                        ? 'Die Option am Markt verkaufen und den Gewinn/Verlust realisieren'
                        : 'Sell the option on the market and realize the profit/loss'}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-slate-100">
                    <span className="text-sm font-semibold text-gray-500">{locale === 'de' ? 'VERFALLEN LASSEN' : 'LET EXPIRE'}</span>
                    <p className="text-sm text-gray-600 mt-2">
                      {locale === 'de'
                        ? 'Die Option wertlos verfallen lassen (Verlust = Prämie)'
                        : 'Let the option expire worthless (loss = premium)'}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Use Options */}
            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Warum Optionen im Portfolio?' : 'Why Options in Your Portfolio?'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{locale === 'de' ? 'Risikomanagement' : 'Risk Management'}</h4>
                  <p className="text-sm text-gray-600">
                    {locale === 'de'
                      ? 'Optionen ermöglichen die Absicherung bestehender Positionen gegen Kursverluste (Hedging)'
                      : 'Options enable hedging existing positions against price losses'}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{locale === 'de' ? 'Hebelwirkung' : 'Leverage'}</h4>
                  <p className="text-sm text-gray-600">
                    {locale === 'de'
                      ? 'Mit geringem Kapitaleinsatz können überproportionale Gewinne erzielt werden'
                      : 'Disproportionate gains can be achieved with small capital investment'}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{locale === 'de' ? 'Einkommensgenerierung' : 'Income Generation'}</h4>
                  <p className="text-sm text-gray-600">
                    {locale === 'de'
                      ? 'Durch den Verkauf von Optionen können regelmäßige Prämieneinnahmen erzielt werden'
                      : 'Regular premium income can be generated by selling options'}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{locale === 'de' ? 'Strategische Flexibilität' : 'Strategic Flexibility'}</h4>
                  <p className="text-sm text-gray-600">
                    {locale === 'de'
                      ? 'Zahlreiche Strategien für verschiedene Marktszenarien verfügbar'
                      : 'Numerous strategies available for different market scenarios'}
                  </p>
                </div>
              </div>
            </section>

            {/* Risk Notice */}
            <section className="mb-12">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">
                      {locale === 'de' ? 'Wichtige Hinweise zum Optionshandel' : 'Important Notes on Options Trading'}
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">—</span>
                        <span>{locale === 'de' ? 'Optionen sind komplexe Finanzinstrumente und nicht für jeden Anleger geeignet' : 'Options are complex financial instruments and not suitable for every investor'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">—</span>
                        <span>{locale === 'de' ? 'Der Zeitwertverfall arbeitet gegen den Optionskäufer' : 'Time value decay works against the option buyer'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">—</span>
                        <span>{locale === 'de' ? 'Eine fundierte Ausbildung vor dem ersten Trade ist unerlässlich' : 'A solid education before the first trade is essential'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">—</span>
                        <span>{locale === 'de' ? 'Strategiekenntnis ist wichtiger als Glück' : 'Strategy knowledge is more important than luck'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Summary */}
            <section className="mb-12">
              <div className="bg-slate-800 text-white rounded-xl p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  {locale === 'de' ? 'Zusammenfassung' : 'Summary'}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {locale === 'de'
                    ? 'Eine Option ist ein Finanzkontrakt, der Ihnen gegen Zahlung einer Prämie das Recht einräumt, einen Basiswert zu einem festgelegten Preis innerhalb eines bestimmten Zeitraums zu kaufen (Call) oder zu verkaufen (Put). Der maximale Verlust beim Kauf einer Option ist auf die gezahlte Prämie begrenzt, während das Gewinnpotenzial bei Call-Optionen theoretisch unbegrenzt ist.'
                    : 'An option is a financial contract that, in exchange for a premium, gives you the right to buy (Call) or sell (Put) an underlying asset at a fixed price within a specific time period. The maximum loss when buying an option is limited to the premium paid, while the profit potential for Call options is theoretically unlimited.'}
                </p>
                <div className="border-t border-slate-700 pt-6">
                  <p className="text-lg font-medium text-white">
                    {locale === 'de'
                      ? 'Optionen: Heute eine Prämie zahlen, um morgen eine Wahl zu haben.'
                      : 'Options: Pay a premium today to have a choice tomorrow.'}
                  </p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Weiterführende Artikel' : 'Further Reading'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href={`/${locale}/blog/put-vs-call-optionen`} className="group">
                  <div className="bg-white rounded-lg p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                    <div className="text-xs text-blue-600 font-medium mb-2">
                      {locale === 'de' ? 'VERTIEFUNG' : 'DEEP DIVE'}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {locale === 'de' ? 'Put vs Call Optionen' : 'Put vs Call Options'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {locale === 'de' ? 'Detaillierter Vergleich der beiden Optionstypen' : 'Detailed comparison of the two option types'}
                    </p>
                  </div>
                </Link>
                <Link href={`/${locale}/blog/options-cfds-teil-1`} className="group">
                  <div className="bg-white rounded-lg p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                    <div className="text-xs text-blue-600 font-medium mb-2">
                      {locale === 'de' ? 'TRADING' : 'TRADING'}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {locale === 'de' ? 'Options CFDs verstehen' : 'Understanding Options CFDs'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {locale === 'de' ? 'Eine Alternative zum klassischen Optionshandel' : 'An alternative to traditional options trading'}
                    </p>
                  </div>
                </Link>
                <Link href={`/${locale}/blog/understanding-the-greeks`} className="group">
                  <div className="bg-white rounded-lg p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                    <div className="text-xs text-blue-600 font-medium mb-2">
                      {locale === 'de' ? 'FORTGESCHRITTEN' : 'ADVANCED'}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {locale === 'de' ? 'Die Griechen verstehen' : 'Understanding the Greeks'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {locale === 'de' ? 'Delta, Gamma, Theta und Vega erklärt' : 'Delta, Gamma, Theta and Vega explained'}
                    </p>
                  </div>
                </Link>
              </div>
            </section>

            {/* Author & Date */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">BO</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">BeInOptions Education Team</p>
                    <p className="text-sm text-gray-500">
                      {locale === 'de' ? 'Grundlagen & Einsteiger-Content' : 'Fundamentals & Beginner Content'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    {locale === 'de' ? 'Veröffentlicht' : 'Published'}
                  </p>
                  <time className="text-sm font-medium text-gray-700">31. Dezember 2025</time>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
