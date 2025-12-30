import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Optionshandel in Deutschland' : 'Options Trading in Germany',
    description: locale === 'de'
      ? 'Ihr umfassender Leitfaden für erfolgreiches Options-Trading in Deutschland. Strategien, Steuern, Broker und mehr.'
      : 'Your comprehensive guide to successful options trading in Germany. Strategies, taxes, brokers and more.',
    keywords: locale === 'de'
      ? ['Optionshandel', 'Optionen', 'Trading', 'Deutschland', 'BaFin', 'Broker', 'Steuern']
      : ['options trading', 'options', 'trading', 'Germany', 'BaFin', 'broker', 'taxes'],
  });
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('home');
  const tNav = useTranslations('nav');
  const isGerman = locale === 'de';

  const stats = [
    {
      value: '15+',
      label: isGerman ? 'Strategy Guides' : 'Strategy Guides',
    },
    {
      value: '50+',
      label: isGerman ? 'Lern-Artikel' : 'Learning Articles',
    },
    {
      value: '9',
      label: isGerman ? 'Broker Reviews' : 'Broker Reviews',
    },
    {
      value: '100%',
      label: isGerman ? 'Kostenlos' : 'Free',
    },
  ];

  const featuredGuides = [
    {
      title: 'Covered Call',
      description: isGerman
        ? 'Generieren Sie regelmäßiges Einkommen aus Ihren Aktien. Die beliebteste Einkommensstrategie.'
        : 'Generate regular income from your stocks. The most popular income strategy.',
      href: `/${locale}/covered-call-strategy`,
      gradient: 'from-emerald-500 to-teal-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: isGerman ? 'Für Anfänger' : 'For Beginners',
    },
    {
      title: 'Iron Condor',
      description: isGerman
        ? 'Profitieren Sie von Seitwärtsmärkten mit definiertem Risiko.'
        : 'Profit from sideways markets with defined risk.',
      href: `/${locale}/iron-condor-strategy`,
      gradient: 'from-violet-500 to-purple-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      badge: isGerman ? 'Fortgeschritten' : 'Advanced',
    },
    {
      title: isGerman ? 'Options Chain lesen' : 'Reading Options Chain',
      description: isGerman
        ? 'Verstehen Sie Bid, Ask, Open Interest und alle wichtigen Kennzahlen.'
        : 'Understand Bid, Ask, Open Interest and all key metrics.',
      href: `/${locale}/options-chain-guide`,
      gradient: 'from-indigo-500 to-blue-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
        </svg>
      ),
      badge: isGerman ? 'Grundlagen' : 'Fundamentals',
    },
  ];

  const learningPaths = [
    {
      title: isGerman ? 'Anfänger Guide' : 'Beginners Guide',
      description: isGerman
        ? 'Von Null zum ersten Trade - verstehen Sie Calls, Puts und die Grundkonzepte.'
        : 'From zero to first trade - understand calls, puts and core concepts.',
      href: `/${locale}/options-beginners-guide`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'blue',
      step: '1',
    },
    {
      title: isGerman ? 'Greeks verstehen' : 'Understanding Greeks',
      description: isGerman
        ? 'Delta, Gamma, Theta, Vega - die Sensitivitäten einfach erklärt.'
        : 'Delta, Gamma, Theta, Vega - sensitivities explained simply.',
      href: `/${locale}/greeks-explained`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: 'purple',
      step: '2',
    },
    {
      title: isGerman ? 'Strategien lernen' : 'Learn Strategies',
      description: isGerman
        ? 'Von Covered Call bis Iron Condor - alle wichtigen Strategien im Detail.'
        : 'From Covered Call to Iron Condor - all important strategies in detail.',
      href: `/${locale}/strategies`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'emerald',
      step: '3',
    },
    {
      title: isGerman ? 'Broker wählen' : 'Choose Broker',
      description: isGerman
        ? 'Die besten Broker für Optionshandel in Deutschland im Vergleich.'
        : 'The best brokers for options trading in Germany compared.',
      href: `/${locale}/brokers`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'amber',
      step: '4',
    },
  ];

  const tools = [
    {
      title: isGerman ? 'Payoff-Diagramm' : 'Payoff Diagram',
      description: isGerman ? 'Visualisieren Sie Ihre Strategien' : 'Visualize your strategies',
      href: `/${locale}/tools/payoff`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
    {
      title: isGerman ? 'P/L Simulator' : 'P/L Simulator',
      description: isGerman ? 'Gewinn/Verlust berechnen' : 'Calculate profit/loss',
      href: `/${locale}/tools/pl`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: isGerman ? 'IV Rechner' : 'IV Calculator',
      description: isGerman ? 'Implizite Volatilität analysieren' : 'Analyze implied volatility',
      href: `/${locale}/tools/iv`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const essentialTopics = [
    {
      title: isGerman ? 'Risikomanagement' : 'Risk Management',
      href: `/${locale}/risks`,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: isGerman ? 'Steuern' : 'Taxes',
      href: `/${locale}/taxes`,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
        </svg>
      ),
    },
    {
      title: isGerman ? 'Regulierung' : 'Regulation',
      href: `/${locale}/regulation`,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      title: isGerman ? '10 Trading-Fehler' : '10 Trading Mistakes',
      href: `/${locale}/options-mistakes`,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      title: isGerman ? 'Assignment & Verfall' : 'Assignment & Expiration',
      href: `/${locale}/options-assignment`,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: isGerman ? 'Krypto Optionen' : 'Crypto Options',
      href: `/${locale}/crypto-options`,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container-custom py-20 md:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {isGerman ? 'Ihr Leitfaden für Options-Trading in Deutschland' : 'Your Guide to Options Trading in Germany'}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {isGerman
                ? 'Optionshandel meistern'
                : 'Master Options Trading'}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-400">
                {isGerman ? 'von Grund auf.' : 'from scratch.'}
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {isGerman
                ? 'Kostenlose Guides, Strategy-Tutorials und Tools für Anfänger und Fortgeschrittene. Alles, was Sie für erfolgreiches Trading brauchen.'
                : 'Free guides, strategy tutorials and tools for beginners and advanced traders. Everything you need for successful trading.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href={`/${locale}/options-beginners-guide`}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 flex items-center justify-center gap-2"
              >
                {isGerman ? 'Jetzt starten' : 'Start Now'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/tools`}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {isGerman ? 'Kostenlose Tools' : 'Free Tools'}
              </Link>
              <Link
                href={`/${locale}/news`}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                {isGerman ? 'News' : 'News'}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Why We're #1 - USP Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {isGerman ? '#1 Options-Bildungsplattform in Deutschland' : '#1 Options Education Platform in Germany'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isGerman ? 'Warum BeInOptions?' : 'Why BeInOptions?'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isGerman
                ? 'Die führende deutschsprachige Plattform für Options-Education. Hier ist, was uns auszeichnet.'
                : 'The leading German-language platform for options education. Here\'s what sets us apart.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* USP 1 - Expert Content */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {isGerman ? 'Experten-Content' : 'Expert Content'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {isGerman
                    ? 'Alle Inhalte werden von erfahrenen Tradern erstellt und regelmäßig aktualisiert. Praxisnah, verständlich und auf den deutschen Markt zugeschnitten.'
                    : 'All content is created by experienced traders and regularly updated. Practical, understandable and tailored to the German market.'}
                </p>
              </div>
            </div>

            {/* USP 2 - 100% Free */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {isGerman ? '100% Kostenlos' : '100% Free'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {isGerman
                    ? 'Keine versteckten Kosten, keine Abonnements. Alle Guides, Tools und Ressourcen sind komplett kostenlos zugänglich.'
                    : 'No hidden costs, no subscriptions. All guides, tools and resources are completely free to access.'}
                </p>
              </div>
            </div>

            {/* USP 3 - German Focus */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {isGerman ? 'Made in Germany' : 'Made in Germany'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {isGerman
                    ? 'Speziell für den deutschen Markt: Steuertipps, BaFin-konforme Broker, Euro-Beispiele und deutsche Rechtslage.'
                    : 'Specifically for the German market: tax tips, BaFin-compliant brokers, Euro examples and German legal situation.'}
                </p>
              </div>
            </div>

            {/* USP 4 - Interactive Tools */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {isGerman ? 'Interaktive Tools' : 'Interactive Tools'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {isGerman
                    ? 'Professionelle Rechner und Visualisierungen: Payoff-Diagramme, IV-Analyse, P/L-Simulation - direkt im Browser nutzbar.'
                    : 'Professional calculators and visualizations: payoff diagrams, IV analysis, P/L simulation - usable directly in the browser.'}
                </p>
              </div>
            </div>

            {/* USP 5 - Structured Learning */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {isGerman ? 'Strukturiertes Lernen' : 'Structured Learning'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {isGerman
                    ? 'Klarer Lernpfad vom Anfänger zum fortgeschrittenen Trader. Schritt-für-Schritt Guides mit praktischen Beispielen.'
                    : 'Clear learning path from beginner to advanced trader. Step-by-step guides with practical examples.'}
                </p>
              </div>
            </div>

            {/* USP 6 - Community */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {isGerman ? 'Aktive Community' : 'Active Community'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {isGerman
                    ? 'Tauschen Sie sich mit anderen Tradern aus. Diskutieren Sie Strategien und lernen Sie von der Community.'
                    : 'Connect with other traders. Discuss strategies and learn from the community.'}
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">10K+</div>
                <div className="text-gray-600">{isGerman ? 'Monatliche Leser' : 'Monthly Readers'}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">{isGerman ? 'Detaillierte Guides' : 'Detailed Guides'}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">4.9</div>
                <div className="text-gray-600 flex items-center justify-center gap-1">
                  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {isGerman ? 'Bewertung' : 'Rating'}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">2024</div>
                <div className="text-gray-600">{isGerman ? 'Gegründet' : 'Founded'}</div>
              </div>
            </div>

            {/* About Us CTA */}
            <div className="mt-12 text-center">
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50"
              >
                {isGerman ? 'Mehr über uns erfahren' : 'Learn more about us'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Strategy Guides */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isGerman ? 'Vollständige Strategy Guides' : 'Complete Strategy Guides'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isGerman
                ? 'Schritt-für-Schritt Anleitungen mit Beispielen, Szenarien und FAQ.'
                : 'Step-by-step tutorials with examples, scenarios and FAQ.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGuides.map((guide, index) => (
              <Link
                key={index}
                href={guide.href}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${guide.gradient} text-white text-xs font-medium rounded-full`}>
                    {guide.badge}
                  </span>
                </div>
                <div className={`w-14 h-14 bg-gradient-to-br ${guide.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {guide.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center text-primary-600 font-medium text-sm">
                  {isGerman ? 'Guide lesen' : 'Read Guide'}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={`/${locale}/strategies`}
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              {isGerman ? 'Alle Strategien ansehen' : 'View All Strategies'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isGerman ? 'Ihr Lernpfad' : 'Your Learning Path'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isGerman
                ? 'Strukturiertes Lernen von den Grundlagen bis zum fortgeschrittenen Trading.'
                : 'Structured learning from basics to advanced trading.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, index) => (
              <Link
                key={index}
                href={path.href}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all"
              >
                {/* Step Number */}
                <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                  path.color === 'blue' ? 'bg-blue-600' :
                  path.color === 'purple' ? 'bg-purple-600' :
                  path.color === 'emerald' ? 'bg-emerald-600' :
                  'bg-amber-500'
                }`}>
                  {path.step}
                </div>

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  path.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  path.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  path.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                  'bg-amber-100 text-amber-600'
                }`}>
                  {path.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {path.title}
                </h3>
                <p className="text-gray-600 text-sm">{path.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {isGerman ? 'Interaktive Tools' : 'Interactive Tools'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {isGerman
                  ? 'Kostenlose Options-Rechner'
                  : 'Free Options Calculators'}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {isGerman
                  ? 'Visualisieren Sie Strategien, berechnen Sie Gewinn/Verlust und analysieren Sie die implizite Volatilität - alles direkt im Browser.'
                  : 'Visualize strategies, calculate profit/loss and analyze implied volatility - all directly in your browser.'}
              </p>
              <Link
                href={`/${locale}/tools`}
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                {isGerman ? 'Alle Tools entdecken' : 'Discover All Tools'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {tools.map((tool, index) => (
                <Link
                  key={index}
                  href={tool.href}
                  className="group flex items-center gap-4 bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Essential Topics */}
      <section className="py-20 bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isGerman ? 'Wichtige Themen' : 'Essential Topics'}
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {isGerman
                ? 'Alles, was Sie außerdem wissen müssen.'
                : 'Everything else you need to know.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {essentialTopics.map((topic, index) => (
              <Link
                key={index}
                href={topic.href}
                className="group bg-white/5 hover:bg-white/10 backdrop-blur border border-white/10 rounded-xl p-5 text-center transition-all"
              >
                <div className="text-white/80 group-hover:text-primary-400 flex justify-center mb-3 transition-colors">{topic.icon}</div>
                <h3 className="font-medium text-white text-sm group-hover:text-primary-400 transition-colors">
                  {topic.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Broker Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {isGerman ? 'Unabhängiger Vergleich' : 'Independent Comparison'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {isGerman
                ? 'Die besten Broker für Deutschland'
                : 'Best Brokers for Germany'}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {isGerman
                ? 'Wir haben 9 Broker analysiert und verglichen. Finden Sie den perfekten Broker für Ihre Bedürfnisse.'
                : 'We analyzed and compared 9 brokers. Find the perfect broker for your needs.'}
            </p>
            <Link
              href={`/${locale}/brokers`}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-emerald-600/30"
            >
              {isGerman ? 'Broker-Vergleich ansehen' : 'View Broker Comparison'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isGerman
                ? 'Bereit, Options-Trading zu lernen?'
                : 'Ready to Learn Options Trading?'}
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              {isGerman
                ? 'Starten Sie mit unserem kostenlosen Anfänger-Guide und werden Sie zum erfolgreichen Options-Trader.'
                : 'Start with our free beginners guide and become a successful options trader.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/options-beginners-guide`}
                className="bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                {isGerman ? 'Kostenlos starten' : 'Start for Free'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/glossary`}
                className="bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-400 transition-colors"
              >
                {isGerman ? 'Glossar durchsuchen' : 'Browse Glossary'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
