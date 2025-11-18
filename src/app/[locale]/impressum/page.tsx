import { useTranslations } from 'next-intl';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Impressum' : 'Imprint',
    description: locale === 'de' ? 'Impressum und Kontaktinformationen' : 'Imprint and contact information',
    noindex: true,
  });
}

export default function ImpressumPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('legal');

  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title mb-8">{t('impressum_title')}</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              {locale === 'de' ? 'Kontakt' : 'Contact'}
            </h2>
            <p className="text-gray-700">
              <strong>E-Mail:</strong> info@beinoptions.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              {locale === 'de' ? 'Haftungsausschluss' : 'Disclaimer'}
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'de' ? 'Haftung für Inhalte' : 'Liability for Content'}
            </h3>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.'
                : 'The content of our pages was created with the greatest care. However, we cannot guarantee the accuracy, completeness and timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with Section 7 (1) TMG.'}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'de' ? 'Haftung für Links' : 'Liability for Links'}
            </h3>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.'
                : 'Our website contains links to external third-party websites, over whose content we have no control. Therefore, we cannot accept any liability for these external contents. The respective provider or operator of the linked pages is always responsible for the content of the linked pages.'}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'de' ? 'Urheberrecht' : 'Copyright'}
            </h3>
            <p className="text-gray-700">
              {locale === 'de'
                ? 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.'
                : 'The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              {locale === 'de' ? 'Streitschlichtung' : 'Dispute Resolution'}
            </h2>
            <p className="text-gray-700">
              {locale === 'de'
                ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                : 'The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr. We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
