import Image from 'next/image';
import Link from 'next/link';
import FAQSchema from '@/components/seo/FAQSchema';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';
import { FAQAccordion, GlossaryAccordion, TOCSidebar, ArticlesCarousel } from './ClientComponents';

// ============================================
// METADATA
// ============================================
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://beinoptions.com';

  return genMeta({
    title: locale === 'de'
      ? 'Optionen erklärt, als wärst du 5 Jahre alt'
      : 'Options Explained Like You\'re 5 Years Old',
    description: locale === 'de'
      ? 'Optionen ganz einfach erklärt mit dem Eis-Beispiel. Ohne Finanz-Blabla. Call und Put verstehen in 5 Minuten.'
      : 'Options explained simply with the ice cream example. No scary finance words. Understand Call and Put in 5 minutes.',
    keywords: locale === 'de'
      ? ['optionen erklärt', 'optionen für anfänger', 'call option', 'put option', 'optionen einfach', 'was sind optionen']
      : ['options explained', 'options for beginners', 'call option', 'put option', 'options simply', 'what are options'],
    canonical: `${baseUrl}/${locale}/blog/options-explained-simply`,
    ogImage: `${baseUrl}/images/blog/options-explained-hero.png`,
    type: 'article',
    publishedTime: '2025-12-31T00:00:00Z',
    modifiedTime: '2025-12-31T00:00:00Z',
    author: 'BeInOptions Team',
    section: locale === 'de' ? 'Einsteiger-Guide' : 'Beginner Guide',
    locale,
  });
}

// ============================================
// TYPES
// ============================================
interface FAQItem {
  question: string;
  answer: string;
}

interface GlossaryItem {
  term: string;
  definition: string;
}

interface TOCItem {
  id: string;
  title: string;
}

// ============================================
// CONTENT DATA
// ============================================
const getContent = (locale: string) => ({
  meta: {
    title: locale === 'de'
      ? 'Optionen erklärt, als wärst du 5 Jahre alt'
      : 'Options Explained Like You\'re 5 Years Old',
    subtitle: locale === 'de'
      ? 'Ganz einfach. Ohne Finanz-Blabla.'
      : 'Very simple. No scary finance words.',
    category: locale === 'de' ? 'Einsteiger-Guide' : 'Beginner Guide',
    readTime: locale === 'de' ? '5 Min. Lesezeit' : '5 min read',
  },
  whatYouLearn: {
    title: locale === 'de' ? 'Was du lernen wirst' : 'What You\'ll Learn',
    items: locale === 'de'
      ? [
          'Was eine Option wirklich ist (ohne Fachjargon)',
          'Der Unterschied zwischen Call und Put',
          'Wie du mit Optionen Geld verdienen kannst',
          'Warum Profis Optionen jeden Tag nutzen',
        ]
      : [
          'What an option really is (no jargon)',
          'The difference between Call and Put',
          'How you can make money with options',
          'Why professionals use options every day',
        ],
  },
  keyTakeaways: {
    title: locale === 'de' ? 'Wichtigste Erkenntnisse' : 'Key Takeaways',
    items: locale === 'de'
      ? [
          'Eine Option ist ein Vertrag, der dir eine Wahl gibt – keine Pflicht',
          'Call = du rechnest mit steigenden Preisen',
          'Put = du rechnest mit fallenden Preisen',
          'Dein maximales Risiko ist der gezahlte Preis (Premium)',
          'Du handelst das Versprechen, nicht den Vermögenswert selbst',
        ]
      : [
          'An option is a contract that gives you a choice – not an obligation',
          'Call = you expect prices to rise',
          'Put = you expect prices to fall',
          'Your maximum risk is the price paid (premium)',
          'You trade the promise, not the asset itself',
        ],
  },
  glossary: [
    {
      term: locale === 'de' ? 'Option' : 'Option',
      definition: locale === 'de'
        ? 'Ein Vertrag, der das Recht (aber nicht die Pflicht) gibt, einen Vermögenswert zu einem festgelegten Preis zu kaufen oder zu verkaufen.'
        : 'A contract that gives the right (but not obligation) to buy or sell an asset at a fixed price.',
    },
    {
      term: locale === 'de' ? 'Premium' : 'Premium',
      definition: locale === 'de'
        ? 'Der Preis, den du für die Option bezahlst. Wie die 10 Cent im Eis-Beispiel.'
        : 'The price you pay for the option. Like the 10 cents in the ice cream example.',
    },
    {
      term: locale === 'de' ? 'Strike-Preis' : 'Strike Price',
      definition: locale === 'de'
        ? 'Der festgelegte Preis, zu dem du kaufen oder verkaufen darfst. Im Beispiel: 1 Euro für das Eis.'
        : 'The fixed price at which you can buy or sell. In the example: 1 euro for ice cream.',
    },
    {
      term: locale === 'de' ? 'Verfallsdatum' : 'Expiration Date',
      definition: locale === 'de'
        ? 'Der Tag, bis zu dem du deine Option nutzen kannst. Danach wird sie wertlos.'
        : 'The day until which you can use your option. After that, it becomes worthless.',
    },
    {
      term: locale === 'de' ? 'In the Money (ITM)' : 'In the Money (ITM)',
      definition: locale === 'de'
        ? 'Wenn deine Option einen inneren Wert hat – also Gewinn bringen würde, wenn du sie jetzt ausübst.'
        : 'When your option has intrinsic value – meaning it would bring profit if exercised now.',
    },
    {
      term: locale === 'de' ? 'Out of the Money (OTM)' : 'Out of the Money (OTM)',
      definition: locale === 'de'
        ? 'Wenn deine Option keinen inneren Wert hat – sie wäre aktuell nicht profitabel.'
        : 'When your option has no intrinsic value – it would not be profitable currently.',
    },
  ] as GlossaryItem[],
  faqs: [
    {
      question: locale === 'de'
        ? 'Was ist eine Option einfach erklärt?'
        : 'What is an option in simple terms?',
      answer: locale === 'de'
        ? 'Eine Option ist ein Versprechen, das du kaufen kannst. Du zahlst einen kleinen Betrag heute, um das Recht zu haben, später etwas zu einem festgelegten Preis zu kaufen oder zu verkaufen. Du musst dieses Recht aber nicht nutzen.'
        : 'An option is a promise you can buy. You pay a small amount today to have the right to buy or sell something at a fixed price later. But you don\'t have to use this right.',
    },
    {
      question: locale === 'de'
        ? 'Was ist der Unterschied zwischen Call und Put?'
        : 'What is the difference between Call and Put?',
      answer: locale === 'de'
        ? 'Eine Call-Option nutzt du, wenn du glaubst, dass der Preis steigt – du sicherst dir das Recht zu kaufen. Eine Put-Option nutzt du, wenn du glaubst, dass der Preis fällt – du sicherst dir das Recht zu verkaufen.'
        : 'A Call option is used when you believe the price will rise – you secure the right to buy. A Put option is used when you believe the price will fall – you secure the right to sell.',
    },
    {
      question: locale === 'de'
        ? 'Kann ich mit Optionen Geld verlieren?'
        : 'Can I lose money with options?',
      answer: locale === 'de'
        ? 'Ja, du kannst den Betrag verlieren, den du für die Option bezahlt hast (das Premium). Aber im Gegensatz zu anderen Instrumenten ist dein Verlust auf diesen Betrag begrenzt – keine Überraschungen.'
        : 'Yes, you can lose the amount you paid for the option (the premium). But unlike other instruments, your loss is limited to this amount – no surprises.',
    },
    {
      question: locale === 'de'
        ? 'Brauche ich viel Geld, um mit Optionen zu handeln?'
        : 'Do I need a lot of money to trade options?',
      answer: locale === 'de'
        ? 'Nein! Das ist einer der Vorteile von Optionen. Du kannst mit kleinen Beträgen große Positionen kontrollieren. Im Eis-Beispiel: Mit nur 10 Cent kontrollierst du ein Eis im Wert von 1 Euro.'
        : 'No! That\'s one of the advantages of options. You can control large positions with small amounts. In the ice cream example: With just 10 cents, you control ice cream worth 1 euro.',
    },
    {
      question: locale === 'de'
        ? 'Sind Optionen dasselbe wie Aktien?'
        : 'Are options the same as stocks?',
      answer: locale === 'de'
        ? 'Nein. Wenn du eine Aktie kaufst, besitzt du einen Teil des Unternehmens. Bei einer Option besitzt du nur das Recht, die Aktie zu einem bestimmten Preis zu kaufen oder zu verkaufen.'
        : 'No. When you buy a stock, you own a part of the company. With an option, you only own the right to buy or sell the stock at a certain price.',
    },
    {
      question: locale === 'de'
        ? 'Was passiert, wenn meine Option verfällt?'
        : 'What happens when my option expires?',
      answer: locale === 'de'
        ? 'Wenn deine Option zum Verfallsdatum keinen Wert hat (out of the money), verlierst du das bezahlte Premium. Wenn sie Wert hat (in the money), kannst du sie ausüben oder vorher verkaufen.'
        : 'If your option has no value at expiration (out of the money), you lose the premium paid. If it has value (in the money), you can exercise it or sell it before expiration.',
    },
    {
      question: locale === 'de'
        ? 'Kann ich Optionen auf Kryptowährungen handeln?'
        : 'Can I trade options on cryptocurrencies?',
      answer: locale === 'de'
        ? 'Ja! Bitcoin- und Ethereum-Optionen sind bei vielen Brokern verfügbar. Das Prinzip ist genau dasselbe wie bei Aktienoptionen – nur der Basiswert ist eine Kryptowährung.'
        : 'Yes! Bitcoin and Ethereum options are available at many brokers. The principle is exactly the same as stock options – only the underlying asset is a cryptocurrency.',
    },
    {
      question: locale === 'de'
        ? 'Warum nutzen Profis Optionen?'
        : 'Why do professionals use options?',
      answer: locale === 'de'
        ? 'Profis nutzen Optionen zur Absicherung (Hedging), zur Einkommensgenerierung und für strategische Wetten mit begrenztem Risiko. Sie bieten Flexibilität und Risikokontrolle, die andere Instrumente nicht haben.'
        : 'Professionals use options for hedging, income generation, and strategic bets with limited risk. They offer flexibility and risk control that other instruments don\'t have.',
    },
    {
      question: locale === 'de'
        ? 'Was bedeutet "die Option ausüben"?'
        : 'What does "exercising the option" mean?',
      answer: locale === 'de'
        ? 'Ausüben bedeutet, dass du dein Recht nutzt, den Vermögenswert zum festgelegten Preis zu kaufen (Call) oder zu verkaufen (Put). Du musst aber nicht ausüben – du kannst die Option auch einfach verkaufen.'
        : 'Exercising means using your right to buy (Call) or sell (Put) the asset at the fixed price. But you don\'t have to exercise – you can simply sell the option instead.',
    },
    {
      question: locale === 'de'
        ? 'Sind Optionen für Anfänger geeignet?'
        : 'Are options suitable for beginners?',
      answer: locale === 'de'
        ? 'Ja, wenn du mit den Grundlagen beginnst! Einfache Strategien wie der Kauf von Calls oder Puts sind leicht zu verstehen. Wichtig ist, dass du zuerst lernst und dann mit kleinen Beträgen übst.'
        : 'Yes, if you start with the basics! Simple strategies like buying Calls or Puts are easy to understand. The important thing is to learn first and then practice with small amounts.',
    },
  ] as FAQItem[],
  toc: [
    { id: 'story', title: locale === 'de' ? 'Die Geschichte' : 'The Story' },
    { id: 'what-is-option', title: locale === 'de' ? 'Was ist eine Option?' : 'What is an Option?' },
    { id: 'call-vs-put', title: locale === 'de' ? 'Call vs Put' : 'Call vs Put' },
    { id: 'make-money', title: locale === 'de' ? 'Geld verdienen' : 'Making Money' },
    { id: 'secret', title: locale === 'de' ? 'Das Geheimnis' : 'The Secret' },
    { id: 'real-examples', title: locale === 'de' ? 'Echte Beispiele' : 'Real Examples' },
    { id: 'why-use', title: locale === 'de' ? 'Warum Optionen?' : 'Why Options?' },
    { id: 'important-rule', title: locale === 'de' ? 'Wichtige Regel' : 'Important Rule' },
    { id: 'glossary', title: locale === 'de' ? 'Glossar' : 'Glossary' },
    { id: 'faq', title: 'FAQ' },
  ] as TOCItem[],
});

// ============================================
// COMPONENTS
// ============================================

// Info Card Component (Server Component)
function InfoCard({
  title,
  items,
  variant = 'default'
}: {
  title: string;
  items: string[];
  variant?: 'default' | 'highlight'
}) {
  const isHighlight = variant === 'highlight';

  return (
    <div
      className={`rounded-2xl p-6 md:p-8 ${
        isHighlight
          ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200'
          : 'bg-white border border-slate-200 shadow-sm'
      }`}
    >
      <h3 className={`text-lg font-bold mb-4 ${isHighlight ? 'text-amber-900' : 'text-slate-900'}`}>
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold ${
              isHighlight
                ? 'bg-amber-500 text-white'
                : 'bg-emerald-500 text-white'
            }`}>
              {isHighlight ? '✓' : (i + 1)}
            </span>
            <span className={isHighlight ? 'text-amber-900' : 'text-slate-700'}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Compare Card Component (Server Component)
function CompareCard({ locale }: { locale: string }) {
  return (
    <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg">
      {/* Call Option */}
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 md:p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold">Call-Option</h3>
            <p className="text-emerald-100 text-sm">
              {locale === 'de' ? '„Ich will später kaufen"' : '"I want to buy later"'}
            </p>
          </div>
        </div>
        <ul className="space-y-3 text-emerald-50">
          <li className="flex items-start gap-2">
            <span className="text-emerald-200">→</span>
            <span>{locale === 'de' ? 'Du glaubst, der Preis steigt' : 'You think price will go up'}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-200">→</span>
            <span>{locale === 'de' ? 'Du sicherst dir den heutigen Preis' : 'You lock today\'s cheap price'}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-200">→</span>
            <span>{locale === 'de' ? 'Steigt der Preis → du gewinnst' : 'If price goes up → you win'}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-200">→</span>
            <span>{locale === 'de' ? 'Steigt er nicht → kleine Gebühr verloren' : 'If not → you just lose the small fee'}</span>
          </li>
        </ul>
        <div className="mt-6 pt-4 border-t border-emerald-400/30 flex items-center gap-2">
          <svg className="w-4 h-4 text-emerald-200" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
          </svg>
          <p className="text-sm text-emerald-100">
            {locale === 'de'
              ? 'Nutze Call, wenn du denkst, der Preis wird steigen'
              : 'Use Call when you think the price will go up'}
          </p>
        </div>
      </div>

      {/* Put Option */}
      <div className="bg-gradient-to-br from-rose-500 to-rose-600 p-6 md:p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold">Put-Option</h3>
            <p className="text-rose-100 text-sm">
              {locale === 'de' ? '„Ich will später verkaufen"' : '"I want to sell later"'}
            </p>
          </div>
        </div>
        <ul className="space-y-3 text-rose-50">
          <li className="flex items-start gap-2">
            <span className="text-rose-200">→</span>
            <span>{locale === 'de' ? 'Du hast Angst, der Preis fällt' : 'You\'re scared the price will go down'}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-200">→</span>
            <span>{locale === 'de' ? 'Du sicherst dir einen Verkaufspreis' : 'You lock a selling price'}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-200">→</span>
            <span>{locale === 'de' ? 'Fällt der Markt → du bist geschützt' : 'If price crashes → you\'re protected'}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-200">→</span>
            <span>{locale === 'de' ? 'Passiert es nicht → kleine Gebühr verloren' : 'If not → you only lose the small fee'}</span>
          </li>
        </ul>
        <div className="mt-6 pt-4 border-t border-rose-400/30 flex items-center gap-2">
          <svg className="w-4 h-4 text-rose-200" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
          </svg>
          <p className="text-sm text-rose-100">
            {locale === 'de'
              ? 'Nutze Put, wenn du mit fallenden Preisen rechnest'
              : 'Use Put when you think the price will go down'}
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function OptionsExplainedSimplyPage({ params: { locale } }: { params: { locale: string } }) {
  const content = getContent(locale);

  return (
    <>
      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={content.faqs} />

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-white border-b border-slate-200">
          <div className="container-custom py-12 md:py-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Left: Content */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                      {content.meta.category}
                    </span>
                    <span className="text-slate-500 text-sm">{content.meta.readTime}</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                    {content.meta.title}
                  </h1>

                  <p className="text-xl md:text-2xl text-slate-600 mb-8">
                    {content.meta.subtitle}
                  </p>

                  {/* Learning Promise */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="font-bold text-emerald-900 mb-2">
                          {locale === 'de' ? 'Unser Versprechen' : 'Our Promise'}
                        </h2>
                        <p className="text-emerald-800">
                          {locale === 'de'
                            ? 'Nach diesem Artikel wirst du Optionen besser verstehen als 90% der Menschen. Garantiert ohne Fachjargon.'
                            : 'After this article, you\'ll understand options better than 90% of people. Guaranteed jargon-free.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Illustration */}
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/blog/options-explained-hero.png"
                      alt={locale === 'de' ? 'Optionen einfach erklärt' : 'Options Explained Simply'}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                        <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                          {/* Cone */}
                          <path d="M10 14L16 28L22 14H10Z" fill="#D97706"/>
                          <path d="M11 14L16 26L21 14H11Z" fill="#F59E0B"/>
                          {/* Waffle pattern */}
                          <path d="M12 16L16 24M14 14L16 18M18 14L16 18M20 16L16 24" stroke="#D97706" strokeWidth="0.5"/>
                          {/* Bottom scoop - vanilla */}
                          <ellipse cx="16" cy="12" rx="6" ry="4" fill="#FEF3C7"/>
                          <ellipse cx="16" cy="11.5" rx="5.5" ry="3.5" fill="#FDE68A"/>
                          {/* Top scoop - pink */}
                          <ellipse cx="16" cy="7" rx="5" ry="4" fill="#FBCFE8"/>
                          <ellipse cx="16" cy="6.5" rx="4.5" ry="3.5" fill="#F9A8D4"/>
                          {/* Cherry */}
                          <circle cx="16" cy="3.5" r="2" fill="#EF4444"/>
                          <path d="M16 2C16 2 17 1 17.5 0" stroke="#22C55E" strokeWidth="1" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">
                          {locale === 'de' ? 'Das Eis-Beispiel' : 'The Ice Cream Example'}
                        </p>
                        <p className="text-sm text-slate-500">
                          {locale === 'de' ? 'So einfach kann es sein' : 'It can be this simple'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="container-custom py-12 md:py-20">
          <div className="max-w-6xl mx-auto flex gap-12">
            {/* Main Article */}
            <article className="flex-1 min-w-0">
              {/* What You'll Learn + Key Takeaways */}
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <InfoCard
                  title={content.whatYouLearn.title}
                  items={content.whatYouLearn.items}
                />
                <InfoCard
                  title={content.keyTakeaways.title}
                  items={content.keyTakeaways.items}
                  variant="highlight"
                />
              </div>

              {/* Ice Cream Story */}
              <section id="story" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {locale === 'de' ? 'Stell dir Folgendes vor' : 'Imagine this'}
                </h2>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="p-6">
                    <Image
                      src="/images/blog/options-explained-ice-cream.png"
                      alt={locale === 'de' ? 'Eis Beispiel' : 'Ice cream example'}
                      width={700}
                      height={400}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>

                  <div className="p-6 md:p-8 space-y-6">
                    <div className="space-y-3 text-lg text-slate-700">
                      <p>{locale === 'de' ? 'Du bist 5 Jahre alt.' : 'You\'re 5 years old.'}</p>
                      <p>{locale === 'de' ? 'Du liebst Eis.' : 'You love ice cream.'}</p>
                      <p>{locale === 'de' ? 'Deine Lieblingssorte ist Schokolade.' : 'Your favorite flavor is chocolate.'}</p>
                    </div>

                    <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                      <p className="text-slate-700 mb-2">
                        {locale === 'de'
                          ? 'Heute kostet das Schoko-Eis 1 Euro.'
                          : 'Today, chocolate ice cream costs 1 euro.'}
                      </p>
                      <p className="text-slate-700 mb-2">
                        {locale === 'de' ? 'Aber du hast Angst:' : 'But you\'re worried:'}
                      </p>
                      <p className="text-2xl font-bold text-slate-900">
                        {locale === 'de'
                          ? '„Was, wenn es morgen 3 Euro kostet?!"'
                          : '"What if tomorrow it costs 3 euros?!"'}
                      </p>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                      <p className="text-emerald-800 mb-2">
                        {locale === 'de' ? 'Der Eisverkäufer sagt:' : 'So the ice cream seller says:'}
                      </p>
                      <p className="text-lg italic text-emerald-900">
                        {locale === 'de'
                          ? '„Gib mir heute 10 Cent, und ich verspreche dir, dass du morgen Schoko-Eis für 1 Euro kaufen darfst – egal, wie teuer es wird."'
                          : '"Give me 10 cents today, and I promise you can buy chocolate ice cream tomorrow for 1 euro, no matter the price."'}
                      </p>
                    </div>

                    <div className="text-center space-y-4 text-lg text-slate-700 py-4">
                      <p className="font-medium">
                        {locale === 'de'
                          ? 'Du musst es morgen nicht kaufen.'
                          : 'You don\'t have to buy it tomorrow.'}
                      </p>
                      <p>
                        {locale === 'de'
                          ? 'Du bekommst nur das Recht, es zu kaufen.'
                          : 'You just get the right to buy it.'}
                      </p>

                      <div className="flex justify-center gap-6 pt-4">
                        <div className="flex items-center gap-2 text-emerald-600 font-medium">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{locale === 'de' ? 'den Deal nutzen' : 'use the deal'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-rose-600 font-medium">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span>{locale === 'de' ? 'ignorieren' : 'ignore it'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-6 border-t border-slate-200">
                      <p className="text-2xl font-bold text-slate-900">
                        {locale === 'de' ? 'Dieses Versprechen nennt man eine OPTION.' : 'That promise is called an OPTION.'}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What is an Option */}
              <section id="what-is-option" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {locale === 'de' ? 'Was ist eine Option? (Kinder-Version)' : 'What is an Option? (Kid version)'}
                </h2>

                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-sky-200">
                  <p className="text-slate-700 mb-4">
                    {locale === 'de' ? 'Eine Option ist:' : 'An option is:'}
                  </p>
                  <ul className="space-y-3 text-xl text-slate-900 mb-8">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                      <span>{locale === 'de' ? 'ein Versprechen' : 'a promise'}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                      <span>{locale === 'de' ? 'das du später nutzen kannst' : 'that you can use later'}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                      <span>{locale === 'de' ? 'aber nicht nutzen musst' : 'but you don\'t have to'}</span>
                    </li>
                  </ul>

                  <div className="bg-white rounded-2xl p-6">
                    <p className="text-slate-700 mb-4">
                      {locale === 'de'
                        ? 'Du zahlst einen kleinen Betrag heute, um dir einen Deal für die Zukunft zu sichern.'
                        : 'You pay a small price now to lock in a deal for the future.'}
                    </p>
                    <p className="text-lg font-semibold text-slate-900 mb-4">
                      {locale === 'de'
                        ? 'Kurz gesagt: Eine Option ist ein Vertrag, der dir eine Wahl gibt.'
                        : 'So an option is a contract that gives you a choice.'}
                    </p>
                    <p className="text-slate-700 mb-6">
                      {locale === 'de'
                        ? 'Du zahlst wenig Geld heute, um das Recht (aber keine Pflicht) zu haben, später etwas zu einem festen Preis zu kaufen oder zu verkaufen.'
                        : 'You pay a small amount today to get the right (but not the obligation) to buy or sell something later at a fixed price.'}
                    </p>
                    <p className="text-xl font-bold text-center text-slate-900">
                      {locale === 'de' ? 'Das war\'s. Kein Stress. Keine Magie.' : 'That\'s it. No stress. No magic.'}
                    </p>
                  </div>
                </div>
              </section>

              {/* Call vs Put */}
              <section id="call-vs-put" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {locale === 'de' ? 'Zwei Arten von Optionen' : 'Two Types of Options'}
                </h2>

                <div className="mb-8">
                  <Image
                    src="/images/blog/options-explained-price-movement.png"
                    alt={locale === 'de' ? 'Kursbewegungen' : 'Price movements'}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>

                <CompareCard locale={locale} />
              </section>

              {/* How to Make Money */}
              <section id="make-money" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {locale === 'de'
                    ? 'Wie verdient man mit Optionen Geld? (Erklärt für 5-Jährige)'
                    : 'How Do You Make Money With Options? (Explained Like You\'re 5)'}
                </h2>

                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
                  <p className="text-xl text-center text-slate-900 mb-8">
                    {locale === 'de' ? 'Wieder das Eis-Beispiel' : 'Let\'s go back to the ice cream example'}
                  </p>

                  <div className="bg-amber-50 rounded-2xl p-6 mb-8 border border-amber-200 text-center">
                    <p className="text-slate-700">
                      {locale === 'de'
                        ? 'Du hast 10 Cent bezahlt für das Versprechen, morgen Eis für 1 Euro zu kaufen.'
                        : 'You paid 10 cents for the promise to buy ice cream tomorrow for 1 euro.'}
                    </p>
                    <p className="text-lg font-semibold text-slate-900 mt-3">
                      {locale === 'de' ? 'Was passiert dann?' : 'What happens next?'}
                    </p>
                  </div>

                  {/* Case 1: Price goes up */}
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 mb-6 border border-emerald-200">
                    <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{locale === 'de' ? 'Fall 1: Der Preis steigt' : 'Case 1: Price goes up'}</span>
                    </h3>
                    <div className="space-y-3 text-emerald-800">
                      <p>{locale === 'de' ? 'Morgen kostet das Eis 3 Euro.' : 'Tomorrow, ice cream costs 3 euros.'}</p>
                      <p>{locale === 'de' ? 'Aber DU darfst es für 1 Euro kaufen.' : 'But YOU can still buy it for 1 euro.'}</p>
                      <p>
                        {locale === 'de' ? 'Andere Kinder sagen:' : 'Other kids say:'}{' '}
                        <span className="font-semibold">
                          {locale === 'de' ? '„Wow, das ist ein super Deal!"' : '"Wow! That deal is amazing!"'}
                        </span>
                      </p>
                      <p>
                        {locale === 'de' ? 'Du sagst:' : 'So you say:'}{' '}
                        <span className="font-semibold italic">
                          {locale === 'de'
                            ? '„Okay, ihr könnt meinen Deal haben – aber gebt mir 2 Euro dafür."'
                            : '"Okay, you can have my deal… but pay me 2 euros for it."'}
                        </span>
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 mt-5 space-y-2">
                      <div className="flex justify-between text-slate-700">
                        <span>{locale === 'de' ? 'Du hast bezahlt:' : 'You paid:'}</span>
                        <span className="font-bold">0,10 €</span>
                      </div>
                      <div className="flex justify-between text-slate-700">
                        <span>{locale === 'de' ? 'Du verkaufst die Option für:' : 'You sold the option for:'}</span>
                        <span className="font-bold">2,00 €</span>
                      </div>
                      <div className="flex justify-between text-lg pt-3 mt-2 border-t border-emerald-200 text-emerald-900">
                        <span className="font-semibold">{locale === 'de' ? 'Gewinn:' : 'Profit:'}</span>
                        <span className="font-bold">+1,90 €</span>
                      </div>
                    </div>
                  </div>

                  {/* Case 2: Price doesn't go up */}
                  <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>{locale === 'de' ? 'Fall 2: Der Preis steigt nicht' : 'Case 2: Price does NOT go up'}</span>
                    </h3>
                    <div className="space-y-3 text-slate-600">
                      <p>{locale === 'de' ? 'Das Eis kostet weiter 1 Euro.' : 'Ice cream still costs 1 euro.'}</p>
                      <p>{locale === 'de' ? 'Dein Deal ist nichts Besonderes mehr.' : 'Your deal is not special anymore.'}</p>
                      <p>{locale === 'de' ? 'Du nutzt ihn nicht.' : 'You don\'t use it.'}</p>
                      <p className="text-lg font-semibold text-slate-700 pt-2">
                        {locale === 'de'
                          ? 'Du verlierst nur die 10 Cent. Mehr nicht.'
                          : 'You lose only the 10 cents you paid. That\'s it. No more loss.'}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* The Big Secret */}
              <section id="secret" className="mb-16 scroll-mt-24">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 md:p-10 text-center text-white">
                  <h2 className="text-3xl font-bold mb-6">
                    {locale === 'de' ? 'Das Geheimnis (Sogar Erwachsene verpassen das)' : 'The Big Secret (Even Adults Miss This)'}
                  </h2>
                  <p className="text-xl text-purple-100 mb-6">
                    {locale === 'de' ? 'Du musst:' : 'You don\'t need to:'}
                  </p>
                  <div className="space-y-3 text-lg text-purple-100 mb-8">
                    <p>{locale === 'de' ? '• kein Eis kaufen' : '• buy the ice cream'}</p>
                    <p>{locale === 'de' ? '• keine Aktie besitzen' : '• buy the stock'}</p>
                    <p>{locale === 'de' ? '• nichts wirklich haben' : '• own anything'}</p>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold">
                    {locale === 'de' ? 'Du handelst nur das Versprechen.' : 'You just trade the promise.'}
                  </p>
                </div>
              </section>

              {/* How Traders Make Money */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {locale === 'de'
                    ? 'Wie Trader mit Optionen Geld verdienen (Kinder-Version)'
                    : 'How Traders Make Money With Options (Kid Version)'}
                </h2>

                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
                  <div className="p-6">
                    <Image
                      src="/images/blog/options-explained-trading.png"
                      alt={locale === 'de' ? 'Trading' : 'Trading'}
                      width={700}
                      height={400}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-lg text-slate-700 mb-5">
                      {locale === 'de' ? 'Menschen verdienen Geld, wenn:' : 'People make money when:'}
                    </p>
                    <ul className="space-y-3 mb-6 text-slate-700">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                        <span>{locale === 'de' ? 'Preise steigen (Call-Option)' : 'prices move up (Call option)'}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                        <span>{locale === 'de' ? 'Preise fallen (Put-Option)' : 'prices move down (Put option)'}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                        <span>{locale === 'de' ? 'Zeit richtig genutzt wird' : 'time works in their favor'}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                        <span>{locale === 'de' ? 'sie einen guten Plan haben' : 'they choose the right moment'}</span>
                      </li>
                    </ul>
                    <p className="text-lg text-slate-700 mb-3">{locale === 'de' ? 'Sie:' : 'They:'}</p>
                    <ul className="space-y-2 text-slate-700">
                      <li>• {locale === 'de' ? 'kaufen Optionen günstig' : 'buy options cheap'}</li>
                      <li>• {locale === 'de' ? 'verkaufen sie teurer' : 'sell them more expensive'}</li>
                    </ul>
                    <p className="text-lg font-semibold text-slate-900 mt-6">
                      {locale === 'de' ? 'Wie beim Tauschen von Spielzeug.' : 'Just like trading toys.'}
                    </p>
                  </div>
                </div>
              </section>

              {/* Real World Examples */}
              <section id="real-examples" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {locale === 'de' ? 'Echte Beispiele: Aktien & Krypto' : 'Real Examples: Stocks & Crypto'}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Stock Example */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-blue-900">
                        {locale === 'de' ? 'Aktien-Beispiel' : 'Stock Example'}
                      </h3>
                    </div>
                    <p className="text-blue-800 mb-4">
                      {locale === 'de'
                        ? 'Apple (AAPL) kostet aktuell $150. Du glaubst, der Preis steigt auf $180.'
                        : 'Apple (AAPL) currently costs $150. You believe the price will rise to $180.'}
                    </p>
                    <div className="bg-white rounded-xl p-4 text-sm text-blue-900">
                      <p className="mb-2">
                        <span className="font-semibold">Call-Option:</span>{' '}
                        {locale === 'de'
                          ? 'Strike $160, Premium $5'
                          : 'Strike $160, Premium $5'}
                      </p>
                      <p className="mb-2">
                        {locale === 'de'
                          ? 'Wenn AAPL auf $180 steigt → Option ist $20 wert'
                          : 'If AAPL rises to $180 → Option is worth $20'}
                      </p>
                      <p className="font-bold text-emerald-600">
                        {locale === 'de' ? 'Gewinn: $15 (300% Return!)' : 'Profit: $15 (300% Return!)'}
                      </p>
                    </div>
                  </div>

                  {/* Crypto Example */}
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.5 8.8v1.7a3.5 3.5 0 010 7v1.7h-1v-1.7a3.5 3.5 0 010-7V8.8h1zm0 1.7V12h1.5a1.5 1.5 0 000-3h-1.5v1.5zm-1 5v1.5H10a1.5 1.5 0 010-3h1.5V15.5zm0-3V14H10a1.5 1.5 0 010-3h1.5v1.5zm1-3V12h1.5a1.5 1.5 0 010 3H12.5v-2.5zm-4-6.3V5h8v2.2h-8z"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-orange-900">
                        {locale === 'de' ? 'Krypto-Beispiel' : 'Crypto Example'}
                      </h3>
                    </div>
                    <p className="text-orange-800 mb-4">
                      {locale === 'de'
                        ? 'Bitcoin (BTC) kostet $40.000. Du hast Angst vor einem Crash auf $30.000.'
                        : 'Bitcoin (BTC) costs $40,000. You\'re worried about a crash to $30,000.'}
                    </p>
                    <div className="bg-white rounded-xl p-4 text-sm text-orange-900">
                      <p className="mb-2">
                        <span className="font-semibold">Put-Option:</span>{' '}
                        {locale === 'de'
                          ? 'Strike $38.000, Premium $500'
                          : 'Strike $38,000, Premium $500'}
                      </p>
                      <p className="mb-2">
                        {locale === 'de'
                          ? 'Wenn BTC auf $30.000 fällt → Option ist $8.000 wert'
                          : 'If BTC falls to $30,000 → Option is worth $8,000'}
                      </p>
                      <p className="font-bold text-emerald-600">
                        {locale === 'de' ? 'Absicherung: $7.500 Gewinn' : 'Protection: $7,500 Profit'}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Options Are Used */}
              <section id="why-use" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {locale === 'de' ? 'Warum werden Optionen im Trading genutzt?' : 'Why Options Are Used in Trading'}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Limit risk */}
                  <div className="bg-white rounded-2xl p-5 text-center border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-slate-700">{locale === 'de' ? 'Risiken begrenzen' : 'Limit risk'}</p>
                  </div>
                  {/* Protect investments */}
                  <div className="bg-white rounded-2xl p-5 text-center border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-slate-700">{locale === 'de' ? 'Investments absichern' : 'Protect investments'}</p>
                  </div>
                  {/* Trade with a clear plan */}
                  <div className="bg-white rounded-2xl p-5 text-center border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-slate-700">{locale === 'de' ? 'Mit klarem Plan handeln' : 'Trade with a clear plan'}</p>
                  </div>
                  {/* Control more with less capital */}
                  <div className="bg-white rounded-2xl p-5 text-center border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-slate-700">{locale === 'de' ? 'Mit wenig Kapital mehr steuern' : 'Control more with less capital'}</p>
                  </div>
                  {/* Make smart bets */}
                  <div className="bg-white rounded-2xl p-5 text-center border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-slate-700">{locale === 'de' ? 'Smarte Entscheidungen treffen' : 'Make smart bets'}</p>
                  </div>
                  {/* Sleep better at night */}
                  <div className="bg-white rounded-2xl p-5 text-center border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-slate-700">{locale === 'de' ? 'Ruhiger schlafen' : 'Sleep better at night'}</p>
                  </div>
                </div>

                <p className="text-center mt-8 text-slate-500">
                  {locale === 'de'
                    ? 'Große Investoren, Banken und Trader nutzen Optionen jeden Tag.'
                    : 'Big investors, banks, and traders use options every day.'}
                </p>
              </section>

              {/* Important Rule */}
              <section id="important-rule" className="mb-16 scroll-mt-24">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-6 md:p-8 border-2 border-amber-300">
                  <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
                    {locale === 'de' ? 'Die wichtigste Regel (auch für Erwachsene)' : 'The Most Important Rule (Even for Adults)'}
                  </h2>

                  <div className="text-center mb-6 text-amber-800">
                    <p className="text-lg mb-2 flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Optionen sind KEINE Zauberei.' : 'Options are NOT magic.'}
                    </p>
                    <p className="text-lg flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Du kannst das Geld verlieren, das du für die Option bezahlt hast.' : 'You can lose the money you paid for the option.'}
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 mb-6">
                    <p className="font-semibold text-slate-900 mb-4">{locale === 'de' ? 'Aber:' : 'But:'}</p>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span>{locale === 'de' ? 'Der Verlust ist begrenzt' : 'Loss is limited'}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span>{locale === 'de' ? 'Das Risiko ist vorher bekannt' : 'Risk is known in advance'}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span>{locale === 'de' ? 'Keine überraschenden Margin Calls (bei korrekter Nutzung)' : 'No surprise margin calls (if used correctly)'}</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-slate-600">
                      {locale === 'de'
                        ? 'Genau das unterscheidet Optionen von vielen anderen Finanzinstrumenten.'
                        : 'This makes options different from many other instruments.'}
                    </p>
                  </div>

                  <div className="space-y-2 text-center text-amber-900 font-medium">
                    <p className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Optionen sind Werkzeuge, kein Glücksspiel' : 'Options are tools, not gambling'}
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Strategie ist wichtiger als Glück' : 'Strategy matters more than luck'}
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {locale === 'de' ? 'Wissen kommt vor Profit' : 'Education comes before profit'}
                    </p>
                  </div>

                  <p className="text-center text-lg font-bold text-amber-900 mt-6">
                    {locale === 'de' ? 'Genau deshalb gibt es BeInOption.' : 'That\'s exactly why BeInOption exists.'}
                  </p>
                </div>
              </section>

              {/* Summary */}
              <section className="mb-16">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 md:p-10 text-center text-white">
                  <h2 className="text-2xl font-bold mb-5">
                    {locale === 'de' ? 'Ein-Satz-Zusammenfassung' : 'One-Sentence Summary'}
                  </h2>
                  <p className="text-2xl md:text-3xl font-bold mb-6">
                    {locale === 'de'
                      ? 'Eine Option bedeutet: heute wenig zahlen, um morgen wählen zu dürfen.'
                      : 'An option means paying a little today to get a choice tomorrow.'}
                  </p>
                  <p className="text-lg text-sky-100">
                    {locale === 'de'
                      ? 'Einfach genug für ein Kind. Stark genug für Profis.'
                      : 'Simple enough for a child. Powerful enough for professionals.'}
                  </p>
                  <p className="mt-6 text-sky-200">
                    {locale === 'de'
                      ? 'Wenn das sogar ein 5-Jähriger versteht, dann ist Finanzwissen vielleicht gar nicht so beängstigend.'
                      : 'If a 5-year-old understands it, maybe finance isn\'t that scary after all.'}
                  </p>
                </div>
              </section>

              {/* Glossary */}
              <section id="glossary" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {locale === 'de' ? 'Glossar' : 'Glossary'}
                </h2>
                <GlossaryAccordion items={content.glossary} />
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {locale === 'de' ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
                </h2>
                <FAQAccordion faqs={content.faqs} />
              </section>

              {/* CTA Section */}
              <section className="mb-16">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 text-center text-white">
                  <h2 className="text-2xl font-bold mb-5">
                    {locale === 'de' ? 'Optionen richtig lernen' : 'Learn Options the Smart Way'}
                  </h2>
                  <p className="text-slate-300 mb-6">
                    {locale === 'de'
                      ? 'Bei BeInOption erklären wir Optionen:'
                      : 'At BeInOption, we explain options:'}
                  </p>
                  <ul className="space-y-2 mb-8 text-slate-300">
                    <li>• {locale === 'de' ? 'Schritt für Schritt' : 'Step by step'}</li>
                    <li>• {locale === 'de' ? 'Ohne Hype' : 'Without hype'}</li>
                    <li>• {locale === 'de' ? 'Ohne leere Versprechen' : 'Without empty promises'}</li>
                  </ul>
                  <p className="text-xl font-semibold mb-8">
                    {locale === 'de'
                      ? 'Starte mit Wissen. Handle mit Vertrauen.'
                      : 'Start with knowledge. Trade with confidence.'}
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href={`/${locale}/tools/payoff`}
                      className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-xl font-semibold transition-colors"
                    >
                      {locale === 'de' ? 'Payoff-Rechner' : 'Payoff Calculator'}
                    </Link>
                    <Link
                      href={`/${locale}/basics`}
                      className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-semibold transition-colors"
                    >
                      {locale === 'de' ? 'Einsteiger-Kurs' : 'Beginner Course'}
                    </Link>
                    <Link
                      href={`/${locale}/newsletter`}
                      className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-colors border border-slate-600"
                    >
                      Newsletter
                    </Link>
                  </div>
                </div>
              </section>

              {/* Articles Carousel */}
              <section className="mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {locale === 'de' ? 'Mehr Artikel für dich' : 'More Articles for You'}
                </h3>
                <ArticlesCarousel locale={locale} />
              </section>

              {/* Disclaimer */}
              <section className="mb-16">
                <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">
                    {locale === 'de' ? 'Haftungsausschluss' : 'Disclaimer'}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {locale === 'de'
                      ? 'Die Informationen auf dieser Seite dienen nur zu Bildungszwecken und stellen keine Anlageberatung dar. Der Handel mit Optionen birgt erhebliche Risiken und ist nicht für alle Anleger geeignet. Sie können mehr verlieren als Ihre ursprüngliche Investition. Konsultieren Sie einen qualifizierten Finanzberater, bevor Sie Handelsentscheidungen treffen.'
                      : 'The information on this page is for educational purposes only and does not constitute investment advice. Options trading involves significant risks and is not suitable for all investors. You can lose more than your initial investment. Consult a qualified financial advisor before making trading decisions.'}
                  </p>
                </div>
              </section>

              {/* Sources */}
              <section className="mb-10">
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">
                    {locale === 'de' ? 'Quellen & Weiterführende Literatur' : 'Sources & Further Reading'}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://www.cboe.com/education" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        CBOE Options Education
                      </a>
                    </li>
                    <li>
                      <a href="https://www.investopedia.com/options-basics-tutorial-4583012" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Investopedia: Options Basics Tutorial
                      </a>
                    </li>
                    <li>
                      <a href="https://www.optionseducation.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        OCC Options Education
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Author Box */}
              <div className="pt-10 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                      BO
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">BeInOptions Team</p>
                      <p className="text-sm text-slate-500">
                        {locale === 'de' ? 'Optionen einfach erklärt' : 'Options made simple'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">
                      {locale === 'de' ? 'Veröffentlicht' : 'Published'}
                    </p>
                    <time className="text-sm font-medium text-slate-900">31. Dezember 2025</time>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <TOCSidebar items={content.toc} locale={locale} />
          </div>
        </div>
      </div>
    </>
  );
}
