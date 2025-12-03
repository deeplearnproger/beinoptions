import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Options Trading: Ihr Weg zum erfolgreichen Händler | BeInOptions'
      : 'Options Trading: Your Path to Successful Trading | BeInOptions',
    description: locale === 'de'
      ? 'Alles was Sie über Options Trading wissen müssen: Von den Grundlagen bis zu fortgeschrittenen Strategien. Eröffnen Sie Ihr Konto bei Libertex und starten Sie professionell!'
      : 'Everything you need to know about Options Trading: From basics to advanced strategies. Open your Libertex account and start professionally!',
  });
}

export default function OptionsTradingGuidePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {locale === 'de' ? 'Strategie-Guide' : 'Strategy Guide'}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {locale === 'de'
                ? 'Options Trading: Ihr Weg zum erfolgreichen Händler'
                : 'Options Trading: Your Path to Successful Trading'}
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              {locale === 'de'
                ? 'Von den Grundlagen bis zu fortgeschrittenen Strategien – alles, was Sie für erfolgreiches Options Trading benötigen.'
                : 'From basics to advanced strategies – everything you need for successful options trading.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://libertex.com/de/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-primary-700 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {locale === 'de' ? 'Jetzt mit Libertex starten' : 'Start with Libertex Now'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                {locale === 'de' ? 'Was ist Options Trading?' : 'What is Options Trading?'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {locale === 'de'
                  ? 'Options Trading ist eine der vielseitigsten Handelsformen an den Finanzmärkten. Eine Option gibt Ihnen das Recht (aber nicht die Pflicht), einen Basiswert zu einem festgelegten Preis innerhalb eines bestimmten Zeitraums zu kaufen oder zu verkaufen.'
                  : 'Options trading is one of the most versatile forms of trading in financial markets. An option gives you the right (but not the obligation) to buy or sell an underlying asset at a specified price within a certain timeframe.'}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {locale === 'de'
                  ? 'Im Gegensatz zum direkten Aktienhandel bieten Optionen einzigartige Vorteile wie Hebelwirkung, begrenzte Risiken bei bestimmten Strategien und die Möglichkeit, sowohl von steigenden als auch von fallenden Märkten zu profitieren.'
                  : 'Unlike direct stock trading, options offer unique advantages such as leverage, limited risks with certain strategies, and the ability to profit from both rising and falling markets.'}
              </p>
            </div>

            {/* Why Trade Options */}
            <div className="card bg-gradient-to-br from-emerald-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Warum Options Trading?' : 'Why Trade Options?'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <svg className="w-10 h-10 text-green-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Hebelwirkung' : 'Leverage'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Mit einem Bruchteil des Kapitals können Sie an großen Preisbewegungen partizipieren.'
                      : 'Participate in large price movements with a fraction of the capital.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <svg className="w-10 h-10 text-green-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Risikomanagement' : 'Risk Management'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Absicherung Ihres Portfolios gegen Marktschwankungen.'
                      : 'Hedge your portfolio against market fluctuations.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <svg className="w-10 h-10 text-blue-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Einnahmen generieren' : 'Generate Income'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Regelmäßige Prämien durch den Verkauf von Optionen erzielen.'
                      : 'Generate regular premiums by selling options.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <svg className="w-10 h-10 text-purple-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Flexibilität' : 'Flexibility'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'de'
                      ? 'Profitieren Sie von steigenden, fallenden oder seitwärts tendierenden Märkten.'
                      : 'Profit from rising, falling, or sideways trending markets.'}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box 1 */}
            <div className="card bg-gradient-to-br from-primary-600 to-primary-700 text-white mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {locale === 'de'
                    ? 'Bereit für Options Trading?'
                    : 'Ready for Options Trading?'}
                </h3>
                <p className="text-primary-100 mb-6 text-lg">
                  {locale === 'de'
                    ? 'Eröffnen Sie Ihr kostenloses Konto bei Libertex und handeln Sie über 300 CFDs auf Optionen mit Zero-Spread!'
                    : 'Open your free Libertex account and trade over 300 options CFDs with zero spread!'}
                </p>
                <a
                  href="https://libertex.com/de/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white text-primary-700 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                >
                  {locale === 'de' ? 'Kostenloses Konto eröffnen ' : 'Open Free Account '}
                </a>
              </div>
            </div>

            {/* Basic Concepts */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Grundlegende Konzepte' : 'Basic Concepts'}
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Strike-Preis (Ausübungspreis)' : 'Strike Price'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Der Preis, zu dem der Basiswert gekauft oder verkauft werden kann. Die Wahl des Strike-Preises ist entscheidend für Ihre Trading-Strategie.'
                      : 'The price at which the underlying asset can be bought or sold. Choosing the strike price is crucial for your trading strategy.'}
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Verfallsdatum' : 'Expiration Date'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Der letzte Tag, an dem die Option ausgeübt werden kann. Optionen können kurzfristig (Tage) oder langfristig (Monate/Jahre) sein.'
                      : 'The last day on which the option can be exercised. Options can be short-term (days) or long-term (months/years).'}
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'Prämie' : 'Premium'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'Der Preis der Option. Als Käufer zahlen Sie die Prämie, als Verkäufer erhalten Sie diese. Die Prämie setzt sich aus innerem Wert und Zeitwert zusammen.'
                      : 'The price of the option. As a buyer you pay the premium, as a seller you receive it. The premium consists of intrinsic value and time value.'}
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {locale === 'de' ? 'In-the-Money (ITM) / Out-of-the-Money (OTM)' : 'In-the-Money (ITM) / Out-of-the-Money (OTM)'}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'de'
                      ? 'ITM-Optionen haben einen inneren Wert und würden bei sofortiger Ausübung profitabel sein. OTM-Optionen haben keinen inneren Wert, nur Zeitwert.'
                      : 'ITM options have intrinsic value and would be profitable if exercised immediately. OTM options have no intrinsic value, only time value.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Popular Strategies */}
            <div className="card bg-gradient-to-br from-blue-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Beliebte Options-Strategien' : 'Popular Options Strategies'}
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'Covered Call' : 'Covered Call'}
                      </h3>
                      <p className="text-gray-700 mb-2">
                        {locale === 'de'
                          ? 'Sie besitzen Aktien und verkaufen Call-Optionen darauf. Ideal für Seitwärtsmärkte zur Generierung zusätzlicher Einnahmen.'
                          : 'You own stocks and sell call options on them. Ideal for sideways markets to generate additional income.'}
                      </p>
                      <div className="text-sm text-gray-600">
                        <strong>{locale === 'de' ? 'Risiko:' : 'Risk:'}</strong> {locale === 'de' ? 'Begrenzt' : 'Limited'} |
                        <strong className="ml-2">{locale === 'de' ? 'Gewinnpotenzial:' : 'Profit Potential:'}</strong> {locale === 'de' ? 'Begrenzt' : 'Limited'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                  <div className="flex items-start gap-4">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'Protective Put' : 'Protective Put'}
                      </h3>
                      <p className="text-gray-700 mb-2">
                        {locale === 'de'
                          ? 'Absicherung Ihrer Aktienposition durch den Kauf von Put-Optionen. Funktioniert wie eine Versicherung gegen Kursverluste.'
                          : 'Hedging your stock position by buying put options. Works like insurance against price losses.'}
                      </p>
                      <div className="text-sm text-gray-600">
                        <strong>{locale === 'de' ? 'Risiko:' : 'Risk:'}</strong> {locale === 'de' ? 'Begrenzt' : 'Limited'} |
                        <strong className="ml-2">{locale === 'de' ? 'Gewinnpotenzial:' : 'Profit Potential:'}</strong> {locale === 'de' ? 'Unbegrenzt' : 'Unlimited'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
                  <div className="flex items-start gap-4">
                    <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'Long Straddle' : 'Long Straddle'}
                      </h3>
                      <p className="text-gray-700 mb-2">
                        {locale === 'de'
                          ? 'Kauf von Call und Put mit gleichem Strike. Profitiert von starken Kursbewegungen in beide Richtungen. Ideal vor wichtigen Ereignissen.'
                          : 'Buy call and put with same strike. Profits from strong price movements in both directions. Ideal before major events.'}
                      </p>
                      <div className="text-sm text-gray-600">
                        <strong>{locale === 'de' ? 'Risiko:' : 'Risk:'}</strong> {locale === 'de' ? 'Begrenzt (Prämien)' : 'Limited (premiums)'} |
                        <strong className="ml-2">{locale === 'de' ? 'Gewinnpotenzial:' : 'Profit Potential:'}</strong> {locale === 'de' ? 'Hoch' : 'High'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
                  <div className="flex items-start gap-4">
                    <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {locale === 'de' ? 'Iron Condor' : 'Iron Condor'}
                      </h3>
                      <p className="text-gray-700 mb-2">
                        {locale === 'de'
                          ? 'Kombination aus Bull Put Spread und Bear Call Spread. Profitiert von geringer Volatilität. Für fortgeschrittene Trader.'
                          : 'Combination of bull put spread and bear call spread. Profits from low volatility. For advanced traders.'}
                      </p>
                      <div className="text-sm text-gray-600">
                        <strong>{locale === 'de' ? 'Risiko:' : 'Risk:'}</strong> {locale === 'de' ? 'Definiert' : 'Defined'} |
                        <strong className="ml-2">{locale === 'de' ? 'Gewinnpotenzial:' : 'Profit Potential:'}</strong> {locale === 'de' ? 'Begrenzt aber attraktiv' : 'Limited but attractive'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box 2 */}
            <div className="card bg-gradient-to-br from-emerald-600 to-emerald-700 text-white mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {locale === 'de'
                    ? 'Professionelles Trading beginnt hier'
                    : 'Professional Trading Starts Here'}
                </h3>
                <p className="text-emerald-100 mb-6 text-lg">
                  {locale === 'de'
                    ? 'Libertex bietet Ihnen die perfekte Plattform für Options Trading: Zero-Spreads, schnelle Ausführung und über 300 Handelsinstrumente!'
                    : 'Libertex offers you the perfect platform for options trading: zero spreads, fast execution, and over 300 trading instruments!'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://libertex.com/de/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-emerald-700 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                  >
                    {locale === 'de' ? 'Jetzt Konto eröffnen ' : 'Open Account Now '}
                  </a>
                </div>
              </div>
            </div>

            {/* Risk Management */}
            <div className="card mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Risikomanagement beim Options Trading' : 'Risk Management in Options Trading'}
              </h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {locale === 'de' ? 'Wichtig zu beachten:' : 'Important to Note:'}
                    </h3>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Options Trading bietet große Chancen, birgt aber auch Risiken. Investieren Sie nur Geld, dessen Verlust Sie sich leisten können.'
                        : 'Options trading offers great opportunities but also involves risks. Only invest money you can afford to lose.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600 inline-block" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    {locale === 'de' ? 'Best Practices' : 'Best Practices'}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Definieren Sie Ihr Risiko vor jedem Trade' : 'Define your risk before each trade'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Verwenden Sie Stop-Loss-Orders' : 'Use stop-loss orders'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Diversifizieren Sie Ihr Portfolio' : 'Diversify your portfolio'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Handeln Sie nur Strategien, die Sie verstehen' : 'Only trade strategies you understand'}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-600 inline-block" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                    {locale === 'de' ? 'Häufige Fehler' : 'Common Mistakes'}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Zu großes Risiko pro Trade' : 'Too much risk per trade'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Optionen bis zum Verfall halten' : 'Holding options until expiration'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Komplexe Strategien ohne Verständnis' : 'Complex strategies without understanding'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">-</span>
                      <span>{locale === 'de' ? 'Emotionales Trading' : 'Emotional trading'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="card bg-gradient-to-br from-indigo-50 to-white mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'So starten Sie mit Options Trading' : 'How to Start with Options Trading'}
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {locale === 'de' ? 'Bildung & Vorbereitung' : 'Education & Preparation'}
                    </h4>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Lernen Sie die Grundlagen, verstehen Sie verschiedene Strategien und deren Risiken. Nutzen Sie Demo-Konten zum Üben.'
                        : 'Learn the basics, understand different strategies and their risks. Use demo accounts to practice.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {locale === 'de' ? 'Broker auswählen' : 'Choose a Broker'}
                    </h4>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Wählen Sie einen regulierten Broker mit guten Konditionen. Libertex bietet Zero-Spreads und über 300 CFDs auf Optionen.'
                        : 'Choose a regulated broker with good conditions. Libertex offers zero spreads and over 300 options CFDs.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {locale === 'de' ? 'Klein anfangen' : 'Start Small'}
                    </h4>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Beginnen Sie mit einfachen Strategien und kleinen Positionen. Erhöhen Sie das Risiko erst, wenn Sie konstant profitabel sind.'
                        : 'Start with simple strategies and small positions. Only increase risk when you are consistently profitable.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {locale === 'de' ? 'Kontinuierliches Lernen' : 'Continuous Learning'}
                    </h4>
                    <p className="text-gray-700">
                      {locale === 'de'
                        ? 'Analysieren Sie Ihre Trades, lernen Sie aus Fehlern und bleiben Sie am Ball. Die besten Trader lernen nie aus.'
                        : 'Analyze your trades, learn from mistakes, and stay committed. The best traders never stop learning.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="card bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700 text-white">
              <div className="text-center">
                <svg className="w-16 h-16 text-primary-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <h3 className="text-3xl font-bold mb-4">
                  {locale === 'de'
                    ? 'Starten Sie jetzt Ihre Trading-Karriere!'
                    : 'Start Your Trading Career Now!'}
                </h3>
                <p className="text-primary-100 mb-6 text-lg max-w-2xl mx-auto">
                  {locale === 'de'
                    ? 'Eröffnen Sie Ihr kostenloses Konto bei Libertex und profitieren Sie von professionellen Trading-Bedingungen: Zero-Spreads, schnelle Ausführung, über 300 Handelsinstrumente und eine benutzerfreundliche Plattform.'
                    : 'Open your free Libertex account and benefit from professional trading conditions: zero spreads, fast execution, over 300 trading instruments, and a user-friendly platform.'}
                </p>
                <a
                  href="https://libertex.com/de/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-5 bg-white text-primary-700 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                >
                  {locale === 'de' ? 'Kostenloses Konto eröffnen' : 'Open Free Account'}
                </a>
                <p className="text-primary-200 text-sm mt-4">
                  {locale === 'de'
                    ? 'In nur 2 Minuten startklar | Über 2.9M zufriedene Trader weltweit'
                    : 'Ready in just 2 minutes | Over 2.9M satisfied traders worldwide'}
                </p>
              </div>
            </div>

            {/* Risk Warning */}
            <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-300">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>{locale === 'de' ? 'Risikohinweis:' : 'Risk Warning:'}</strong>{' '}
                {locale === 'de'
                  ? 'Der Handel mit Optionen und CFDs birgt erhebliche Risiken und ist möglicherweise nicht für alle Anleger geeignet. Sie können Ihr gesamtes investiertes Kapital verlieren. Stellen Sie sicher, dass Sie die Risiken vollständig verstehen und holen Sie sich gegebenenfalls unabhängigen Rat. Die Wertentwicklung in der Vergangenheit ist keine Garantie für zukünftige Ergebnisse.'
                  : 'Trading options and CFDs involves significant risks and may not be suitable for all investors. You may lose all your invested capital. Make sure you fully understand the risks and seek independent advice if necessary. Past performance is not a guarantee of future results.'}
              </p>
            </div>

            {/* Author & Date */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">BeInOptions Team</span>
                </div>
                <time>2025-01-17</time>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
