import { useTranslations } from 'next-intl';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de' ? 'Haftungsausschluss' : 'Disclaimer',
    description: locale === 'de' ? 'Haftungsausschluss und rechtliche Hinweise' : 'Disclaimer and legal notices',
    noindex: true,
  });
}

export default function DisclaimerPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('legal');

  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title mb-8">{t('disclaimer_title')}</h1>

        <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <span className="text-4xl mr-4">⚠️</span>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {locale === 'de' ? 'WICHTIGER HINWEIS' : 'IMPORTANT NOTICE'}
              </h2>
              <p className="text-gray-700 font-medium">
                {locale === 'de'
                  ? 'Diese Website bietet keine Anlageberatung. Alle Inhalte dienen ausschließlich Informations- und Bildungszwecken.'
                  : 'This website does not provide investment advice. All content is for informational and educational purposes only.'}
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              1. {locale === 'de' ? 'Keine Anlageberatung' : 'No Investment Advice'}
            </h2>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Die Informationen auf dieser Website stellen keine Anlageberatung, Finanzberatung, Handelsberatung oder sonstige Art von Beratung dar und sollten nicht als solche interpretiert werden. BeInOption empfiehlt nicht, dass irgendwelche Wertpapiere gekauft, verkauft oder gehalten werden sollten.'
                : 'The information on this website does not constitute investment advice, financial advice, trading advice or any other kind of advice and should not be interpreted as such. BeInOption does not recommend that any securities should be bought, sold or held.'}
            </p>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Vor einer Investitionsentscheidung sollten Sie professionelle Beratung von einem zugelassenen Finanzberater einholen.'
                : 'Before making any investment decision, you should seek professional advice from a licensed financial advisor.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              2. {locale === 'de' ? 'Risikohinweis' : 'Risk Disclosure'}
            </h2>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Der Handel mit Optionen birgt erhebliche Risiken und ist nicht für jeden Anleger geeignet. Sie können Ihr gesamtes eingesetztes Kapital verlieren. Folgende Risiken bestehen:'
                : 'Options trading involves significant risks and is not suitable for every investor. You can lose all of your invested capital. The following risks exist:'}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li className="text-gray-700">
                {locale === 'de'
                  ? 'Totalverlustrisiko: Optionen können wertlos verfallen'
                  : 'Total loss risk: Options can expire worthless'}
              </li>
              <li className="text-gray-700">
                {locale === 'de'
                  ? 'Hebelwirkung: Verluste können den Einsatz übersteigen'
                  : 'Leverage: Losses can exceed the investment'}
              </li>
              <li className="text-gray-700">
                {locale === 'de'
                  ? 'Komplexität: Optionen erfordern Verständnis komplexer Mechanismen'
                  : 'Complexity: Options require understanding of complex mechanisms'}
              </li>
              <li className="text-gray-700">
                {locale === 'de'
                  ? 'Marktvolatilität: Schnelle Kursbewegungen können zu hohen Verlusten führen'
                  : 'Market volatility: Rapid price movements can lead to high losses'}
              </li>
              <li className="text-gray-700">
                {locale === 'de'
                  ? 'Liquiditätsrisiko: Nicht immer können Positionen zum gewünschten Preis geschlossen werden'
                  : 'Liquidity risk: Positions cannot always be closed at the desired price'}
              </li>
            </ul>
            <p className="text-gray-700 font-medium">
              {locale === 'de'
                ? 'Handeln Sie nur mit Geld, dessen Verlust Sie sich leisten können.'
                : 'Only trade with money you can afford to lose.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              3. {locale === 'de' ? 'Keine Garantie für Richtigkeit' : 'No Guarantee of Accuracy'}
            </h2>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Obwohl wir uns bemühen, genaue und aktuelle Informationen bereitzustellen, übernehmen wir keine Gewähr für die Vollständigkeit, Richtigkeit und Aktualität der Inhalte. Marktbedingungen, Gesetze und Regulierungen ändern sich ständig.'
                : 'Although we strive to provide accurate and current information, we make no warranty as to the completeness, accuracy and timeliness of the content. Market conditions, laws and regulations are constantly changing.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              4. {locale === 'de' ? 'Vergangene Performance' : 'Past Performance'}
            </h2>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Vergangene Wertentwicklungen, Simulationen oder Prognosen sind kein verlässlicher Indikator für die künftige Wertentwicklung. Historische Ergebnisse garantieren keine zukünftigen Renditen.'
                : 'Past performance, simulations or forecasts are not a reliable indicator of future performance. Historical results do not guarantee future returns.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              5. {locale === 'de' ? 'Externe Links' : 'External Links'}
            </h2>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Diese Website kann Links zu externen Websites Dritter enthalten. Wir haben keinen Einfluss auf deren Inhalte und übernehmen keine Haftung für diese. Für die Inhalte externer Websites sind ausschließlich deren Betreiber verantwortlich.'
                : 'This website may contain links to external third-party websites. We have no control over their content and assume no liability for them. The operators of external websites are solely responsible for their content.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              6. {locale === 'de' ? 'Broker-Empfehlungen' : 'Broker Recommendations'}
            </h2>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Die auf dieser Website aufgeführten Broker dienen rein informativen Zwecken. BeInOption erhält möglicherweise Provisionen von Brokern, was unsere Objektivität beeinflussen kann. Wir empfehlen Ihnen, eigene Recherchen durchzuführen und mehrere Broker zu vergleichen.'
                : 'The brokers listed on this website are for informational purposes only. BeInOption may receive commissions from brokers, which may affect our objectivity. We recommend that you conduct your own research and compare multiple brokers.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              7. {locale === 'de' ? 'Steuerliche und rechtliche Hinweise' : 'Tax and Legal Notices'}
            </h2>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Die auf dieser Website bereitgestellten Informationen stellen keine Steuer- oder Rechtsberatung dar. Steuerliche und rechtliche Angelegenheiten können komplex sein und sich je nach individueller Situation unterscheiden. Konsultieren Sie einen Steuerberater oder Rechtsanwalt für spezifische Beratung.'
                : 'The information provided on this website does not constitute tax or legal advice. Tax and legal matters can be complex and vary depending on individual circumstances. Consult a tax advisor or lawyer for specific advice.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              8. {locale === 'de' ? 'Haftungsbeschränkung' : 'Limitation of Liability'}
            </h2>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'BeInOption haftet nicht für direkte oder indirekte Schäden, die durch die Nutzung oder Nichtnutzung der auf dieser Website bereitgestellten Informationen entstehen. Dies schließt entgangene Gewinne, Datenverluste oder andere wirtschaftliche Schäden ein.'
                : 'BeInOption is not liable for direct or indirect damages arising from the use or non-use of the information provided on this website. This includes lost profits, data loss or other economic damages.'}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              9. {locale === 'de' ? 'Änderungen' : 'Changes'}
            </h2>
            <p className="text-gray-700 mb-4">
              {locale === 'de'
                ? 'Wir behalten uns das Recht vor, diesen Haftungsausschluss jederzeit ohne vorherige Ankündigung zu ändern. Bitte überprüfen Sie diese Seite regelmäßig auf Aktualisierungen.'
                : 'We reserve the right to change this disclaimer at any time without prior notice. Please check this page regularly for updates.'}
            </p>
          </section>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-6 mt-8">
            <p className="text-gray-700 font-medium">
              {locale === 'de'
                ? 'Durch die Nutzung dieser Website erklären Sie sich mit diesem Haftungsausschluss einverstanden. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, nutzen Sie diese Website bitte nicht.'
                : 'By using this website, you agree to this disclaimer. If you do not agree with these terms, please do not use this website.'}
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-8">
            {locale === 'de' ? 'Stand: Januar 2025' : 'Last updated: January 2025'}
          </p>
        </div>
      </div>
    </div>
  );
}
