import { useTranslations } from 'next-intl';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import ArticleSchema from '@/components/seo/ArticleSchema';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Regulierung in Deutschland' : 'Regulation in Germany',
    description: locale === 'de'
      ? 'Alles über die Regulierung des Optionshandels in Deutschland: BaFin, MiFID II, ESMA und Anlegerschutz.'
      : 'Everything about options trading regulation in Germany: BaFin, MiFID II, ESMA and investor protection.',
  });
}

export default function RegulationPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('regulation');

  const regulators = [
    {
      title: t('bafin'),
      description: t('bafin_desc'),
      iconBg: 'from-blue-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      website: 'https://www.bafin.de',
    },
    {
      title: t('mifid'),
      description: t('mifid_desc'),
      iconBg: 'from-purple-50 to-violet-100',
      iconColor: 'text-purple-600',
      iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      website: 'https://ec.europa.eu',
    },
    {
      title: t('esma'),
      description: t('esma_desc'),
      iconBg: 'from-green-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      website: 'https://www.esma.europa.eu',
    },
    {
      title: t('investor_protection'),
      description: t('investor_protection_desc'),
      iconBg: 'from-yellow-50 to-amber-100',
      iconColor: 'text-amber-600',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      website: 'https://www.bvi.de',
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={t('title')}
        description={t('bafin_desc')}
        author="BeInOptions"
        datePublished="2025-01-01"
        url={`https://beinoption.de/${locale}/regulation`}
      />

      <div className="bg-gradient-to-br from-primary-50 to-blue-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {locale === 'de'
                ? 'Der deutsche und europäische Rechtsrahmen bietet umfassenden Schutz für Anleger.'
                : 'The German and European legal framework provides comprehensive protection for investors.'}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {regulators.map((regulator, index) => (
              <div key={index} className="card border-l-4 border-primary-600">
                <div className={`w-16 h-16 bg-gradient-to-br ${regulator.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                  <svg className={`w-8 h-8 ${regulator.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={regulator.iconPath} />
                  </svg>
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                  {regulator.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">{regulator.description}</p>
                <a
                  href={regulator.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  {locale === 'de' ? 'Mehr erfahren' : 'Learn more'}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Requirements for Brokers */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              {locale === 'de' ? 'Anforderungen an Broker' : 'Requirements for Brokers'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✓</span>
                  {locale === 'de' ? 'Lizenzierung' : 'Licensing'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Alle Broker müssen von der BaFin oder einer anderen EU-Aufsichtsbehörde lizenziert sein. EU-Passporting ermöglicht grenzüberschreitende Dienstleistungen.'
                    : 'All brokers must be licensed by BaFin or another EU supervisory authority. EU passporting enables cross-border services.'}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✓</span>
                  {locale === 'de' ? 'Einlagensicherung' : 'Deposit Protection'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Kundengelder sind bis zu 100.000 € pro Kunde durch die gesetzliche Einlagensicherung geschützt. Zusätzliche freiwillige Sicherungssysteme bieten oft höheren Schutz.'
                    : 'Customer funds are protected up to €100,000 per customer by statutory deposit insurance. Additional voluntary protection schemes often offer higher coverage.'}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✓</span>
                  {locale === 'de' ? 'Getrennte Konten' : 'Segregated Accounts'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Broker müssen Kundengelder getrennt vom Firmenvermögen aufbewahren. Dies schützt Ihr Kapital im Falle einer Insolvenz des Brokers.'
                    : 'Brokers must keep customer funds separate from company assets. This protects your capital in case of broker insolvency.'}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✓</span>
                  {locale === 'de' ? 'Transparenz' : 'Transparency'}
                </h3>
                <p className="text-gray-700">
                  {locale === 'de'
                    ? 'Broker müssen alle Kosten, Risiken und Interessenkonflikte offenlegen. Kunden erhalten detaillierte Produktinformationsblätter (KIDs).'
                    : 'Brokers must disclose all costs, risks and conflicts of interest. Customers receive detailed Key Information Documents (KIDs).'}
                </p>
              </div>
            </div>
          </div>

          {/* Investor Rights */}
          <div className="bg-primary-600 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-heading font-bold mb-6">
              {locale === 'de' ? 'Ihre Rechte als Anleger' : 'Your Rights as an Investor'}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-4">→</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {locale === 'de' ? 'Eignungsprüfung' : 'Suitability Assessment'}
                  </h3>
                  <p className="text-primary-100">
                    {locale === 'de'
                      ? 'Broker müssen Ihre Kenntnisse und Erfahrungen prüfen, bevor Sie komplexe Produkte wie Optionen handeln dürfen.'
                      : 'Brokers must assess your knowledge and experience before you can trade complex products like options.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">→</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {locale === 'de' ? 'Risikoaufklärung' : 'Risk Disclosure'}
                  </h3>
                  <p className="text-primary-100">
                    {locale === 'de'
                      ? 'Sie müssen umfassend über die Risiken des Optionshandels aufgeklärt werden, bevor Sie handeln.'
                      : 'You must be comprehensively informed about the risks of options trading before you trade.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">→</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {locale === 'de' ? 'Beschwerderecht' : 'Right to Complain'}
                  </h3>
                  <p className="text-primary-100">
                    {locale === 'de'
                      ? 'Bei Problemen können Sie sich an die BaFin oder die Ombudsstelle für Investmentfonds wenden.'
                      : 'If you have problems, you can contact BaFin or the Ombudsman for Investment Funds.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">→</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {locale === 'de' ? 'Best Execution' : 'Best Execution'}
                  </h3>
                  <p className="text-primary-100">
                    {locale === 'de'
                      ? 'Broker sind verpflichtet, die bestmögliche Ausführung Ihrer Orders zu gewährleisten.'
                      : 'Brokers are obligated to ensure the best possible execution of your orders.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
