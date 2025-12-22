import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === 'de';

  return {
    title: isGerman
      ? 'Options-Trading Lernpfad | 4-Wochen Masterplan'
      : 'Options Trading Learning Path | 4-Week Masterplan',
    description: isGerman
      ? 'Strukturierter 4-Wochen-Plan zum Options-Trading: Von den Grundlagen bis zu fortgeschrittenen Strategien. Schritt-für-Schritt zum erfolgreichen Trader.'
      : 'Structured 4-week plan to options trading: From basics to advanced strategies. Step-by-step guide to becoming a successful trader.',
    alternates: {
      canonical: `https://beinoptions.com/${locale}/learning-path`,
      languages: {
        'de': 'https://beinoptions.com/de/learning-path',
        'en': 'https://beinoptions.com/en/learning-path',
      },
    },
  };
}

export default async function LearningPathPage({ params }: Props) {
  const { locale } = await params;
  const isGerman = locale === 'de';

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6">
              <span className="text-white text-sm font-medium">
                {isGerman ? '🎯 Strukturierter Lernplan' : '🎯 Structured Learning Plan'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {isGerman ? '4-Wochen' : '4-Week'}
              <br />
              <span className="text-emerald-200">
                Options Masterplan
              </span>
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              {isGerman
                ? 'Ihr strukturierter Weg vom Options-Anfänger zum kompetenten Trader. Täglich 1-2 Stunden für nachhaltigen Erfolg.'
                : 'Your structured path from options beginner to competent trader. 1-2 hours daily for sustainable success.'}
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-300 rounded-full"></span>
                {isGerman ? '4 Wochen' : '4 Weeks'}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                {isGerman ? '1-2 Std/Tag' : '1-2 hrs/day'}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-300 rounded-full"></span>
                {isGerman ? 'Inkl. Paper Trading' : 'Incl. Paper Trading'}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-300 rounded-full"></span>
                {isGerman ? 'Praxis-orientiert' : 'Practice-oriented'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Timeline */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">1</div>
              <div className="text-gray-900 font-semibold mb-1">
                {isGerman ? 'Woche 1' : 'Week 1'}
              </div>
              <div className="text-emerald-600 text-sm">
                {isGerman ? 'Fundament' : 'Foundation'}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-900 font-semibold mb-1">
                {isGerman ? 'Woche 2' : 'Week 2'}
              </div>
              <div className="text-blue-600 text-sm">
                {isGerman ? 'Strategien' : 'Strategies'}
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-900 font-semibold mb-1">
                {isGerman ? 'Woche 3' : 'Week 3'}
              </div>
              <div className="text-purple-600 text-sm">
                {isGerman ? 'Risiko & IV' : 'Risk & IV'}
              </div>
            </div>

            <div className="bg-pink-50 rounded-xl p-6 border border-pink-200 text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">4</div>
              <div className="text-gray-900 font-semibold mb-1">
                {isGerman ? 'Woche 4' : 'Week 4'}
              </div>
              <div className="text-pink-600 text-sm">
                {isGerman ? 'Live Trading' : 'Live Trading'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Week 1 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
              <span className="text-emerald-600 text-3xl font-bold">1</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {isGerman ? 'Woche 1: Das Fundament' : 'Week 1: The Foundation'}
              </h2>
              <p className="text-emerald-600">
                {isGerman ? 'Options-Grundlagen meistern' : 'Master Options Basics'}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-7 gap-4">
            {/* Day 1-2 */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-emerald-600 font-semibold mb-3">
                {isGerman ? 'Tag 1-2' : 'Day 1-2'}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'Was sind Optionen?' : 'What are Options?'}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>{isGerman ? 'Calls vs. Puts verstehen' : 'Understand Calls vs. Puts'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>{isGerman ? 'Strike, Premium, Expiration' : 'Strike, Premium, Expiration'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>{isGerman ? 'ITM, ATM, OTM' : 'ITM, ATM, OTM'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>{isGerman ? 'Intrinsischer vs. Zeitwert' : 'Intrinsic vs. Time Value'}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href={`/${locale}/basics`} className="text-emerald-600 text-sm hover:underline font-medium">
                  → {isGerman ? 'Grundlagen lesen' : 'Read Basics'}
                </Link>
              </div>
            </div>

            {/* Day 3-4 */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-emerald-600 font-semibold mb-3">
                {isGerman ? 'Tag 3-4' : 'Day 3-4'}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'Die Greeks verstehen' : 'Understanding the Greeks'}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span><strong>Delta</strong> - {isGerman ? 'Richtungsrisiko' : 'Directional risk'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span><strong>Theta</strong> - {isGerman ? 'Zeitverfall' : 'Time decay'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span><strong>Gamma</strong> - {isGerman ? 'Delta-Veränderung' : 'Delta change'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span><strong>Vega</strong> - {isGerman ? 'Volatilitätsrisiko' : 'Volatility risk'}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href={`/${locale}/greeks-explained`} className="text-emerald-600 text-sm hover:underline font-medium">
                  → {isGerman ? 'Greeks lernen' : 'Learn Greeks'}
                </Link>
              </div>
            </div>

            {/* Day 5-7 */}
            <div className="lg:col-span-3 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-emerald-600 font-semibold mb-3">
                {isGerman ? 'Tag 5-7' : 'Day 5-7'}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'Erste Praxis-Übungen' : 'First Practice Sessions'}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>{isGerman ? 'Paper Trading Account eröffnen' : 'Open Paper Trading Account'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>{isGerman ? 'Options-Kette lesen lernen' : 'Learn to read option chain'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>{isGerman ? 'Bid/Ask Spread verstehen' : 'Understand Bid/Ask Spread'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>{isGerman ? '3-5 virtuelle Long Calls/Puts kaufen' : 'Buy 3-5 virtual Long Calls/Puts'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>{isGerman ? 'P/L über Tage beobachten' : 'Observe P/L over days'}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href={`/${locale}/paper-trading`} className="text-emerald-600 text-sm hover:underline font-medium">
                  → {isGerman ? 'Paper Trading Setup' : 'Paper Trading Setup'}
                </Link>
              </div>
            </div>
          </div>

          {/* Week 1 Goals */}
          <div className="mt-6 bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <h3 className="text-lg font-semibold text-emerald-700 mb-4">
              {isGerman ? '🎯 Wochenziel:' : '🎯 Weekly Goal:'}
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-emerald-200 rounded flex items-center justify-center text-emerald-700">✓</span>
                <span>{isGerman ? 'Options-Terminologie beherrschen' : 'Master options terminology'}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-emerald-200 rounded flex items-center justify-center text-emerald-700">✓</span>
                <span>{isGerman ? 'Greeks grundlegend verstehen' : 'Understand Greeks fundamentals'}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-emerald-200 rounded flex items-center justify-center text-emerald-700">✓</span>
                <span>{isGerman ? '5+ Paper Trades ausgeführt' : '5+ paper trades executed'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Week 2 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
              <span className="text-blue-600 text-3xl font-bold">2</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {isGerman ? 'Woche 2: Basis-Strategien' : 'Week 2: Basic Strategies'}
              </h2>
              <p className="text-blue-600">
                {isGerman ? 'Erste Income-Strategien lernen' : 'Learn First Income Strategies'}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-7 gap-4">
            {/* Day 8-9 */}
            <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-blue-600 font-semibold mb-3">
                {isGerman ? 'Tag 8-9' : 'Day 8-9'}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Covered Calls
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{isGerman ? 'Strategie-Mechanik' : 'Strategy mechanics'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{isGerman ? 'Strike-Auswahl' : 'Strike selection'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{isGerman ? 'Wann rollen?' : 'When to roll?'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{isGerman ? '2 Paper Trades' : '2 Paper trades'}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link href={`/${locale}/covered-call-strategy`} className="text-blue-600 text-sm hover:underline font-medium">
                  → Covered Call Guide
                </Link>
              </div>
            </div>

            {/* Day 10-11 */}
            <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-blue-600 font-semibold mb-3">
                {isGerman ? 'Tag 10-11' : 'Day 10-11'}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Cash-Secured Puts
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{isGerman ? 'Das "Wheel" Konzept' : 'The "Wheel" concept'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{isGerman ? 'Delta-Auswahl (16-30)' : 'Delta selection (16-30)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{isGerman ? 'Kapitalanforderungen' : 'Capital requirements'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{isGerman ? '2 Paper Trades' : '2 Paper trades'}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link href={`/${locale}/cash-secured-put`} className="text-blue-600 text-sm hover:underline font-medium">
                  → Cash-Secured Put Guide
                </Link>
              </div>
            </div>

            {/* Day 12-14 */}
            <div className="lg:col-span-3 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-blue-600 font-semibold mb-3">
                {isGerman ? 'Tag 12-14' : 'Day 12-14'}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'Spreads einführen' : 'Introduction to Spreads'}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span><strong>Vertical Spreads:</strong> Bull Put, Bear Call</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{isGerman ? 'Credit vs. Debit Spreads' : 'Credit vs. Debit Spreads'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{isGerman ? 'Max Profit / Max Loss berechnen' : 'Calculate Max Profit / Max Loss'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{isGerman ? 'Spread-Width Auswahl' : 'Spread width selection'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{isGerman ? '3-4 Paper Spread Trades' : '3-4 paper spread trades'}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link href={`/${locale}/spreads-guide`} className="text-blue-600 text-sm hover:underline font-medium">
                  → Spreads Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Week 2 Goals */}
          <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">
              {isGerman ? '🎯 Wochenziel:' : '🎯 Weekly Goal:'}
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-200 rounded flex items-center justify-center text-blue-700">✓</span>
                <span>{isGerman ? '3 Strategien verstanden' : '3 strategies understood'}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-200 rounded flex items-center justify-center text-blue-700">✓</span>
                <span>{isGerman ? '8+ Paper Trades aktiv' : '8+ paper trades active'}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-200 rounded flex items-center justify-center text-blue-700">✓</span>
                <span>{isGerman ? 'Trading Journal gestartet' : 'Trading journal started'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Week 3 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
              <span className="text-purple-600 text-3xl font-bold">3</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {isGerman ? 'Woche 3: Risk & Volatility' : 'Week 3: Risk & Volatility'}
              </h2>
              <p className="text-purple-600">
                {isGerman ? 'Professionelles Risikomanagement' : 'Professional Risk Management'}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-7 gap-4">
            {/* Day 15-16 */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-purple-600 font-semibold mb-3">
                {isGerman ? 'Tag 15-16' : 'Day 15-16'}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'Risikomanagement' : 'Risk Management'}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>{isGerman ? '1-2% Regel pro Trade' : '1-2% rule per trade'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>{isGerman ? 'Position Sizing Methoden' : 'Position sizing methods'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>{isGerman ? '50% Profit / 200% Loss Regeln' : '50% profit / 200% loss rules'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>{isGerman ? 'Portfolio-Allokation' : 'Portfolio allocation'}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href={`/${locale}/risk-management`} className="text-purple-600 text-sm hover:underline font-medium">
                  → Risk Management Guide
                </Link>
              </div>
            </div>

            {/* Day 17-18 */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-purple-600 font-semibold mb-3">
                {isGerman ? 'Tag 17-18' : 'Day 17-18'}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Implied Volatility
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>{isGerman ? 'IV vs. Historical Volatility' : 'IV vs. Historical Volatility'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>IV Rank & IV Percentile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>IV Crush & Earnings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>{isGerman ? 'VIX verstehen' : 'Understanding VIX'}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href={`/${locale}/iv-guide`} className="text-purple-600 text-sm hover:underline font-medium">
                  → IV Guide
                </Link>
              </div>
            </div>

            {/* Day 19-21 */}
            <div className="lg:col-span-3 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-purple-600 font-semibold mb-3">
                {isGerman ? 'Tag 19-21' : 'Day 19-21'}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'Iron Condors & Fortgeschrittenes' : 'Iron Condors & Advanced'}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>{isGerman ? 'Iron Condor Mechanik' : 'Iron Condor mechanics'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>{isGerman ? 'Wing-Width und Delta-Auswahl' : 'Wing width and delta selection'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>{isGerman ? 'Adjustment-Techniken' : 'Adjustment techniques'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>{isGerman ? '45 DTE Regel anwenden' : 'Apply 45 DTE rule'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>{isGerman ? '3-4 Paper Iron Condors' : '3-4 paper Iron Condors'}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href={`/${locale}/iron-condor-strategy`} className="text-purple-600 text-sm hover:underline font-medium">
                  → Iron Condor Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Week 3 Goals */}
          <div className="mt-6 bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-700 mb-4">
              {isGerman ? '🎯 Wochenziel:' : '🎯 Weekly Goal:'}
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-purple-200 rounded flex items-center justify-center text-purple-700">✓</span>
                <span>{isGerman ? 'Risk Rules etabliert' : 'Risk rules established'}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-purple-200 rounded flex items-center justify-center text-purple-700">✓</span>
                <span>{isGerman ? 'IV für Strategie-Auswahl nutzen' : 'Use IV for strategy selection'}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-purple-200 rounded flex items-center justify-center text-purple-700">✓</span>
                <span>{isGerman ? '15+ Paper Trades total' : '15+ paper trades total'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Week 4 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center">
              <span className="text-pink-600 text-3xl font-bold">4</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {isGerman ? 'Woche 4: Go Live!' : 'Week 4: Go Live!'}
              </h2>
              <p className="text-pink-600">
                {isGerman ? 'Von Paper zu Real Trading' : 'From Paper to Real Trading'}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-7 gap-4">
            {/* Day 22-23 */}
            <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-pink-600 font-semibold mb-3">
                {isGerman ? 'Tag 22-23' : 'Day 22-23'}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'Paper Review' : 'Paper Review'}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{isGerman ? 'Alle Paper Trades analysieren' : 'Analyze all paper trades'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{isGerman ? 'Win Rate berechnen' : 'Calculate win rate'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{isGerman ? 'Beste/schlechteste Trades' : 'Best/worst trades'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{isGerman ? 'Fehler identifizieren' : 'Identify mistakes'}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link href={`/${locale}/trading-journal`} className="text-pink-600 text-sm hover:underline font-medium">
                  → Journal Analyse
                </Link>
              </div>
            </div>

            {/* Day 24-25 */}
            <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-pink-600 font-semibold mb-3">
                {isGerman ? 'Tag 24-25' : 'Day 24-25'}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'Broker & Setup' : 'Broker & Setup'}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{isGerman ? 'Live-Broker wählen' : 'Choose live broker'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{isGerman ? 'Options-Berechtigung beantragen' : 'Apply for options approval'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{isGerman ? 'Startkapital festlegen' : 'Set starting capital'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{isGerman ? 'Trading-Plan schreiben' : 'Write trading plan'}</span>
                </li>
              </ul>
            </div>

            {/* Day 26-28 */}
            <div className="lg:col-span-3 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-pink-600 font-semibold mb-3">
                {isGerman ? 'Tag 26-28' : 'Day 26-28'}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isGerman ? 'Erste Live Trades' : 'First Live Trades'}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{isGerman ? 'Start mit KLEINEN Positionen' : 'Start with SMALL positions'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{isGerman ? 'Max 1% Risiko pro Trade' : 'Max 1% risk per trade'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{isGerman ? 'Nur eine Strategie (z.B. Put Credit Spread)' : 'Only one strategy (e.g., Put Credit Spread)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{isGerman ? 'Jeden Trade journalen' : 'Journal every trade'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{isGerman ? '2-3 konservative Trades' : '2-3 conservative trades'}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Week 4 Goals */}
          <div className="mt-6 bg-pink-50 rounded-xl p-6 border border-pink-200">
            <h3 className="text-lg font-semibold text-pink-700 mb-4">
              {isGerman ? '🎯 Wochenziel:' : '🎯 Weekly Goal:'}
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-pink-200 rounded flex items-center justify-center text-pink-700">✓</span>
                <span>{isGerman ? 'Paper-Performance analysiert' : 'Paper performance analyzed'}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-pink-200 rounded flex items-center justify-center text-pink-700">✓</span>
                <span>{isGerman ? 'Live-Account bereit' : 'Live account ready'}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-pink-200 rounded flex items-center justify-center text-pink-700">✓</span>
                <span>{isGerman ? '2-3 Live Trades platziert' : '2-3 live trades placed'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* After 4 Weeks Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isGerman ? 'Nach den 4 Wochen...' : 'After 4 Weeks...'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-emerald-600 text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {isGerman ? 'Monat 2-3: Vertiefung' : 'Month 2-3: Deepening'}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• {isGerman ? 'Eine Strategie meistern' : 'Master one strategy'}</li>
                <li>• {isGerman ? '20-30 Trades sammeln' : 'Collect 20-30 trades'}</li>
                <li>• {isGerman ? 'Journal regelmäßig reviewen' : 'Review journal regularly'}</li>
                <li>• {isGerman ? 'Positions-Größe langsam erhöhen' : 'Slowly increase position size'}</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {isGerman ? 'Monat 4-6: Expansion' : 'Month 4-6: Expansion'}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• {isGerman ? 'Zweite Strategie hinzufügen' : 'Add second strategy'}</li>
                <li>• {isGerman ? 'Verschiedene Underlyings' : 'Different underlyings'}</li>
                <li>• {isGerman ? 'Adjustment-Skills verbessern' : 'Improve adjustment skills'}</li>
                <li>• {isGerman ? 'Earnings-Trades testen' : 'Test earnings trades'}</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {isGerman ? 'Jahr 1+: Meisterschaft' : 'Year 1+: Mastery'}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• {isGerman ? '100+ Trades analysieren' : 'Analyze 100+ trades'}</li>
                <li>• {isGerman ? 'Eigenen Trading-Stil entwickeln' : 'Develop own trading style'}</li>
                <li>• {isGerman ? 'Portfolio-Margin erwägen' : 'Consider portfolio margin'}</li>
                <li>• {isGerman ? 'Kontinuierlich lernen' : 'Continue learning'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Routine Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isGerman ? 'Empfohlene Tagesroutine' : 'Recommended Daily Routine'}
          </h2>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-20 text-right">
                  <span className="text-emerald-600 font-mono text-sm font-semibold">30 min</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-semibold mb-1">
                    {isGerman ? 'Lernen & Lesen' : 'Learn & Read'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {isGerman
                      ? 'BeInOption Guides lesen, Videos schauen, Konzepte verstehen'
                      : 'Read BeInOption guides, watch videos, understand concepts'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-20 text-right">
                  <span className="text-blue-600 font-mono text-sm font-semibold">30 min</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-semibold mb-1">
                    {isGerman ? 'Markt-Analyse' : 'Market Analysis'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {isGerman
                      ? 'VIX checken, Underlyings scannen, IV Rank prüfen, Events im Kalender'
                      : 'Check VIX, scan underlyings, review IV Rank, calendar events'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-20 text-right">
                  <span className="text-purple-600 font-mono text-sm font-semibold">30 min</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-semibold mb-1">
                    {isGerman ? 'Paper Trading' : 'Paper Trading'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {isGerman
                      ? 'Trades planen, Positionen überprüfen, neue Trades eingeben'
                      : 'Plan trades, review positions, enter new trades'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-20 text-right">
                  <span className="text-pink-600 font-mono text-sm font-semibold">15 min</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-semibold mb-1">
                    {isGerman ? 'Journal Update' : 'Journal Update'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {isGerman
                      ? 'Trades dokumentieren, Gedanken notieren, Lektionen festhalten'
                      : 'Document trades, note thoughts, record lessons'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                {isGerman
                  ? 'Total: ~2 Stunden pro Tag = Solide Grundlage für langfristigen Erfolg'
                  : 'Total: ~2 hours per day = Solid foundation for long-term success'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isGerman ? 'Begleitende Ressourcen' : 'Companion Resources'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href={`/${locale}/basics`}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all"
            >
              <div className="text-emerald-500 text-2xl mb-3">📚</div>
              <h3 className="text-gray-900 font-semibold mb-2">
                {isGerman ? 'Grundlagen' : 'Basics'}
              </h3>
              <p className="text-gray-600 text-sm">
                {isGerman ? 'Options-Fundament' : 'Options foundation'}
              </p>
            </Link>

            <Link
              href={`/${locale}/strategies`}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="text-blue-500 text-2xl mb-3">🎯</div>
              <h3 className="text-gray-900 font-semibold mb-2">
                {isGerman ? 'Strategien' : 'Strategies'}
              </h3>
              <p className="text-gray-600 text-sm">
                {isGerman ? 'Alle Strategie-Guides' : 'All strategy guides'}
              </p>
            </Link>

            <Link
              href={`/${locale}/paper-trading`}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
            >
              <div className="text-purple-500 text-2xl mb-3">🎮</div>
              <h3 className="text-gray-900 font-semibold mb-2">
                Paper Trading
              </h3>
              <p className="text-gray-600 text-sm">
                {isGerman ? 'Risikofrei üben' : 'Practice risk-free'}
              </p>
            </Link>

            <Link
              href={`/${locale}/trading-journal`}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all"
            >
              <div className="text-pink-500 text-2xl mb-3">📝</div>
              <h3 className="text-gray-900 font-semibold mb-2">
                Trading Journal
              </h3>
              <p className="text-gray-600 text-sm">
                {isGerman ? 'Trades dokumentieren' : 'Document trades'}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">
              {isGerman ? '⚠️ Wichtige Hinweise:' : '⚠️ Important Notes:'}
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-600">•</span>
                <span>
                  {isGerman
                    ? 'Dieser Plan ist ein Leitfaden – passen Sie das Tempo Ihren Bedürfnissen an.'
                    : 'This plan is a guide – adjust the pace to your needs.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">•</span>
                <span>
                  {isGerman
                    ? 'Investieren Sie nur Geld, dessen Verlust Sie sich leisten können.'
                    : 'Only invest money you can afford to lose.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">•</span>
                <span>
                  {isGerman
                    ? 'Paper Trading ersetzt keine echte Trading-Erfahrung – Emotionen sind anders.'
                    : 'Paper trading doesn\'t replace real trading experience – emotions are different.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">•</span>
                <span>
                  {isGerman
                    ? 'Konsistenz schlägt Geschwindigkeit. Besser langsam und stetig als schnell und pleite.'
                    : 'Consistency beats speed. Better slow and steady than fast and broke.'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isGerman
              ? 'Bereit, Ihre Reise zu starten?'
              : 'Ready to Start Your Journey?'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {isGerman
              ? 'Beginnen Sie heute mit Woche 1 und legen Sie das Fundament für Ihren Trading-Erfolg.'
              : 'Start today with Week 1 and lay the foundation for your trading success.'}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/basics`}
              className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              {isGerman ? 'Woche 1 starten' : 'Start Week 1'}
            </Link>
            <Link
              href={`/${locale}/paper-trading`}
              className="px-8 py-4 bg-white/20 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all"
            >
              {isGerman ? 'Paper Trading einrichten' : 'Set Up Paper Trading'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
