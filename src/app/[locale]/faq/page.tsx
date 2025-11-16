import { useTranslations } from 'next-intl';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import FAQSchema from '@/components/seo/FAQSchema';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions',
    description: locale === 'de'
      ? 'Antworten auf die wichtigsten Fragen zum Optionshandel in Deutschland.'
      : 'Answers to the most important questions about options trading in Germany.',
  });
}

export default function FAQPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('faq');

  const faqs = [
    { question: t('q1'), answer: t('a1') },
    { question: t('q2'), answer: t('a2') },
    { question: t('q3'), answer: t('a3') },
    { question: t('q4'), answer: t('a4') },
    { question: t('q5'), answer: t('a5') },
    { question: t('q6'), answer: t('a6') },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {locale === 'de'
                ? 'Antworten auf die häufigsten Fragen rund um den Optionshandel.'
                : 'Answers to the most frequently asked questions about options trading.'}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3 flex items-start">
                  <span className="text-primary-600 mr-3 flex-shrink-0">Q{index + 1}.</span>
                  <span>{faq.question}</span>
                </h2>
                <div className="pl-9">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-heading font-bold mb-3">
              {locale === 'de' ? 'Ihre Frage ist nicht dabei?' : 'Your question is not listed?'}
            </h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              {locale === 'de'
                ? 'Kontaktieren Sie uns und wir helfen Ihnen gerne weiter. Häufig gestellte Fragen werden wir zu dieser Seite hinzufügen.'
                : 'Contact us and we will be happy to help. Frequently asked questions will be added to this page.'}
            </p>
            <a
              href="mailto:info@beinoption.de"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {locale === 'de' ? 'Kontakt aufnehmen' : 'Get in Touch'}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
