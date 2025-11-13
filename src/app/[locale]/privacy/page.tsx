import { useTranslations } from 'next-intl';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy',
    description: locale === 'de' ? 'Datenschutzerklärung und Informationen zur Datenverarbeitung' : 'Privacy policy and data processing information',
    noindex: true,
  });
}

export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('legal');

  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title mb-8">{t('privacy_title')}</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              1. {locale === 'de' ? 'Datenschutz auf einen Blick' : 'Privacy at a Glance'}
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'de' ? 'Allgemeine Hinweise' : 'General Information'}
            </h3>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.'
                : 'The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              2. {locale === 'de' ? 'Datenerfassung auf dieser Website' : 'Data Collection on This Website'}
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'de' ? 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?' : 'Who is responsible for data collection on this website?'}
            </h3>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.'
                : 'Data processing on this website is carried out by the website operator. You can find their contact details in the imprint of this website.'}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'de' ? 'Wie erfassen wir Ihre Daten?' : 'How do we collect your data?'}
            </h3>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).'
                : 'Your data is collected in part by you providing it to us. This may be data that you enter in a contact form, for example. Other data is collected automatically or after your consent when you visit the website by our IT systems. This is mainly technical data (e.g. internet browser, operating system or time of page access).'}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'de' ? 'Wofür nutzen wir Ihre Daten?' : 'What do we use your data for?'}
            </h3>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.'
                : 'Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              3. {locale === 'de' ? 'Hosting und Content Delivery Networks (CDN)' : 'Hosting and Content Delivery Networks (CDN)'}
            </h2>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Vercel erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien.'
                : 'We host the content of our website with the following provider: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Vercel automatically collects and stores information in so-called server log files.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              4. {locale === 'de' ? 'Ihre Rechte' : 'Your Rights'}
            </h2>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.'
                : 'You have the right at any time to receive information free of charge about the origin, recipient and purpose of your stored personal data. You also have the right to request the correction or deletion of this data.'}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>{locale === 'de' ? 'Recht auf Auskunft (Art. 15 DSGVO)' : 'Right to information (Art. 15 GDPR)'}</li>
              <li>{locale === 'de' ? 'Recht auf Berichtigung (Art. 16 DSGVO)' : 'Right to rectification (Art. 16 GDPR)'}</li>
              <li>{locale === 'de' ? 'Recht auf Löschung (Art. 17 DSGVO)' : 'Right to erasure (Art. 17 GDPR)'}</li>
              <li>{locale === 'de' ? 'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)' : 'Right to restriction of processing (Art. 18 GDPR)'}</li>
              <li>{locale === 'de' ? 'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)' : 'Right to data portability (Art. 20 GDPR)'}</li>
              <li>{locale === 'de' ? 'Widerspruchsrecht (Art. 21 DSGVO)' : 'Right to object (Art. 21 GDPR)'}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              5. {locale === 'de' ? 'Cookies' : 'Cookies'}
            </h2>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Unsere Website verwendet sogenannte "Cookies". Cookies sind kleine Textdateien, die im Browser Ihres Endgeräts gespeichert werden. Sie richten keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.'
                : 'Our website uses so-called "cookies". Cookies are small text files that are stored in the browser of your end device. They do not cause any damage and do not contain viruses. Cookies serve to make our offer more user-friendly, effective and secure.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              6. {locale === 'de' ? 'Kontakt' : 'Contact'}
            </h2>
            <p className="text-gray-700">
              {locale === 'de'
                ? 'Wenn Sie Fragen zum Datenschutz haben, kontaktieren Sie uns bitte:'
                : 'If you have any questions about data protection, please contact us:'}
            </p>
            <p className="text-gray-700 mt-2">
              <strong>E-Mail:</strong> info@beinoptions.de
            </p>
          </section>

          <p className="text-sm text-gray-600 mt-8">
            {locale === 'de' ? 'Stand: Januar 2025' : 'Last updated: January 2025'}
          </p>
        </div>
      </div>
    </div>
  );
}
