import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import TrustpilotReviews from '@/components/TrustpilotReviews';
import TrustpilotBanner from '@/components/TrustpilotBanner';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Über uns - BeInOptions' : 'About Us - BeInOptions',
    description: locale === 'de'
      ? 'Erfahren Sie mehr über BeInOptions - Ihre umfassende Ressource für Optionshandel in Deutschland mit Fokus auf Bildung, Transparenz und Vertrauen.'
      : 'Learn more about BeInOptions - Your comprehensive resource for options trading in Germany with focus on education, transparency and trust.',
    keywords: locale === 'de'
      ? ['Über BeInOptions', 'Optionshandel Deutschland', 'Trading Bildung', 'Broker Vergleich']
      : ['About BeInOptions', 'Options trading Germany', 'Trading education', 'Broker comparison'],
  });
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const values = [
    {
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      title: locale === 'de' ? 'Bildung & Aufklärung' : 'Education & Enlightenment',
      description: locale === 'de'
        ? 'Wir glauben, dass fundiertes Wissen die Grundlage für erfolgreichen Optionshandel ist. Deshalb bieten wir umfassende Bildungsressourcen für alle Erfahrungsstufen.'
        : 'We believe that sound knowledge is the foundation for successful options trading. That\'s why we offer comprehensive educational resources for all experience levels.',
    },
    {
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: locale === 'de' ? 'Transparenz & Vertrauen' : 'Transparency & Trust',
      description: locale === 'de'
        ? 'Ehrliche Broker-Bewertungen, keine versteckten Empfehlungen. Wir kennzeichnen alle Partner-Links klar und bleiben unabhängig in unseren Analysen.'
        : 'Honest broker reviews, no hidden recommendations. We clearly mark all partner links and remain independent in our analyses.',
    },
    {
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: locale === 'de' ? 'Community-Fokus' : 'Community Focus',
      description: locale === 'de'
        ? 'Wir bauen eine Community von informierten Tradern auf, die voneinander lernen und sich gegenseitig unterstützen auf ihrem Trading-Weg.'
        : 'We build a community of informed traders who learn from each other and support each other on their trading journey.',
    },
    {
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
      iconPath: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
      title: locale === 'de' ? 'Deutscher Markt' : 'German Market',
      description: locale === 'de'
        ? 'Fokus auf den deutschen Markt mit spezifischen Informationen zu BaFin-Regulierung, Steuern und lokalen Brokern für deutschsprachige Trader.'
        : 'Focus on the German market with specific information on BaFin regulation, taxes and local brokers for German-speaking traders.',
    },
  ];

  const team = [
    {
      role: locale === 'de' ? 'Finanzmarkt-Experten' : 'Financial Market Experts',
      description: locale === 'de'
        ? 'Unser Team besteht aus erfahrenen Tradern und Finanzanalysten mit jahrelanger Erfahrung im Optionshandel.'
        : 'Our team consists of experienced traders and financial analysts with years of experience in options trading.',
    },
    {
      role: locale === 'de' ? 'Content-Spezialisten' : 'Content Specialists',
      description: locale === 'de'
        ? 'Wir erstellen leicht verständliche Inhalte, die komplexe Finanzthemen zugänglich machen.'
        : 'We create easy-to-understand content that makes complex financial topics accessible.',
    },
    {
      role: locale === 'de' ? 'Technologie-Team' : 'Technology Team',
      description: locale === 'de'
        ? 'Entwickler, die eine moderne, schnelle und benutzerfreundliche Plattform bereitstellen.'
        : 'Developers who provide a modern, fast and user-friendly platform.',
    },
  ];

  const milestones = [
    {
      year: '2024',
      title: locale === 'de' ? 'Platform-Start' : 'Platform Launch',
      description: locale === 'de'
        ? 'BeInOptions wurde mit dem Ziel gegründet, die beste deutschsprachige Ressource für Optionshandel zu werden.'
        : 'BeInOptions was founded with the goal of becoming the best German-language resource for options trading.',
    },
    {
      year: '2024',
      title: locale === 'de' ? 'Broker-Vergleiche' : 'Broker Comparisons',
      description: locale === 'de'
        ? 'Einführung umfassender Broker-Vergleiche mit Fokus auf deutsche und europäische Anbieter.'
        : 'Introduction of comprehensive broker comparisons focusing on German and European providers.',
    },
    {
      year: '2025',
      title: locale === 'de' ? 'Community-Wachstum' : 'Community Growth',
      description: locale === 'de'
        ? 'Aufbau einer aktiven Community von Optionshändlern, die voneinander lernen und sich austauschen.'
        : 'Building an active community of options traders who learn from each other and exchange ideas.',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={locale === 'de' ? 'Über BeInOptions' : 'About BeInOptions'}
        description={locale === 'de'
          ? 'Erfahren Sie mehr über BeInOptions - Ihre umfassende Ressource für Optionshandel in Deutschland'
          : 'Learn more about BeInOptions - Your comprehensive resource for options trading in Germany'}
        author="BeInOptions"
        datePublished="2024-11-27"
        url={`https://beinoptions.com/${locale}/about`}
      />
      <BreadcrumbSchema
        items={[
          { name: locale === 'de' ? 'Home' : 'Home', url: `https://beinoptions.com/${locale}` },
          { name: locale === 'de' ? 'Über uns' : 'About Us', url: `https://beinoptions.com/${locale}/about` },
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {locale === 'de' ? 'Über BeInOptions' : 'About BeInOptions'}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              {locale === 'de'
                ? 'Ihre vertrauenswürdige Quelle für Optionshandel in Deutschland - Bildung, Transparenz und fundierte Analysen seit 2024'
                : 'Your trusted source for options trading in Germany - Education, transparency and in-depth analysis since 2024'}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-gradient-to-br from-blue-50 to-indigo-50">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
              {locale === 'de' ? 'Unsere Mission' : 'Our Mission'}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {locale === 'de'
                ? 'BeInOptions wurde mit einer klaren Mission gegründet: Deutschsprachigen Tradern den Zugang zu qualitativ hochwertigen, unabhängigen Informationen über Optionshandel zu ermöglichen.'
                : 'BeInOptions was founded with a clear mission: to provide German-speaking traders with access to high-quality, independent information about options trading.'}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {locale === 'de'
                ? 'Wir glauben, dass jeder die Möglichkeit haben sollte, fundierte Entscheidungen über seine Investments zu treffen. Deshalb bieten wir umfassende Bildungsressourcen, ehrliche Broker-Vergleiche und aktuelle Marktanalysen - alles auf Deutsch und speziell auf den deutschen Markt zugeschnitten.'
                : 'We believe everyone should have the opportunity to make informed decisions about their investments. That\'s why we offer comprehensive educational resources, honest broker comparisons and current market analysis - all in German and specifically tailored to the German market.'}
            </p>
          </div>
        </div>
      </div>

      {/* Trustpilot Reviews */}
      <TrustpilotReviews locale={locale} />

      {/* Values */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
              {locale === 'de' ? 'Unsere Werte' : 'Our Values'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card hover:shadow-xl transition-all">
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <svg className={`w-7 h-7 ${value.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Was wir bieten' : 'What We Offer'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {locale === 'de' ? 'Bildungsressourcen' : 'Educational Resources'}
              </h3>
              <p className="text-gray-700">
                {locale === 'de'
                  ? 'Von Grundlagen bis zu fortgeschrittenen Strategien - alles verständlich erklärt'
                  : 'From basics to advanced strategies - everything explained clearly'}
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {locale === 'de' ? 'Broker-Vergleiche' : 'Broker Comparisons'}
              </h3>
              <p className="text-gray-700">
                {locale === 'de'
                  ? 'Detaillierte, unabhängige Bewertungen deutscher und europäischer Broker'
                  : 'Detailed, independent reviews of German and European brokers'}
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {locale === 'de' ? 'Marktanalysen' : 'Market Analysis'}
              </h3>
              <p className="text-gray-700">
                {locale === 'de'
                  ? 'Aktuelle Analysen zu Markttrends, Strategien und Trading-Chancen'
                  : 'Current analysis of market trends, strategies and trading opportunities'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
              {locale === 'de' ? 'Unser Team' : 'Our Team'}
            </h2>
            <div className="space-y-6">
              {team.map((member, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.role}</h3>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Unsere Reise' : 'Our Journey'}
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trustpilot Review Banner */}
      <TrustpilotBanner locale={locale} />

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-600 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              {locale === 'de' ? 'Bereit, Ihre Trading-Reise zu beginnen?' : 'Ready to Start Your Trading Journey?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {locale === 'de'
                ? 'Entdecken Sie unsere umfassenden Ressourcen und finden Sie den perfekten Broker für Ihren Optionshandel.'
                : 'Discover our comprehensive resources and find the perfect broker for your options trading.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/basics`}
                className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl inline-block"
              >
                {locale === 'de' ? 'Grundlagen lernen' : 'Learn the Basics'}
              </a>
              <a
                href={`/${locale}/brokers`}
                className="px-8 py-4 bg-primary-700 text-white rounded-xl font-bold hover:bg-primary-800 transition-all shadow-xl inline-block"
              >
                {locale === 'de' ? 'Broker vergleichen' : 'Compare Brokers'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
