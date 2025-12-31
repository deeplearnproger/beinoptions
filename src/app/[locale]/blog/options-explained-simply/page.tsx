import Image from 'next/image';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/components/seo/SEOHead';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return genMeta({
    title: locale === 'de'
      ? 'Optionen einfach erklärt – So versteht es jeder | BeInOptions'
      : 'Options Explained Simply – Anyone Can Understand | BeInOptions',
    description: locale === 'de'
      ? 'Optionen verständlich erklärt mit dem Eis-Beispiel. Lernen Sie Call- und Put-Optionen ohne komplizierte Fachbegriffe. Der perfekte Einstieg für Anfänger.'
      : 'Options explained simply with the ice cream example. Learn Call and Put options without complicated jargon. The perfect introduction for beginners.',
  });
}

export default function OptionsExplainedSimplyPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/blog/options-explained-hero.png"
            alt={locale === 'de' ? 'Optionen einfach erklärt' : 'Options Explained Simply'}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-sm font-medium border border-white/30">
                {locale === 'de' ? 'Einsteiger-Guide' : 'Beginner Guide'}
              </span>
              <span className="px-3 py-1 bg-white/10 text-white/90 rounded text-sm">
                {locale === 'de' ? '8 Min. Lesezeit' : '8 min read'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight text-white drop-shadow-sm">
              {locale === 'de'
                ? 'Optionen erklärt, als wärst du 5 Jahre alt'
                : 'Options Explained Like You\'re 5 Years Old'}
            </h1>
            <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-3xl">
              {locale === 'de'
                ? 'Ganz einfach. Ohne Finanz-Blabla. Mit dem Eis-Beispiel, das jeder versteht.'
                : 'Very simple. No scary finance words. With the ice cream example anyone can understand.'}
            </p>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span>BeInOptions Team</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <time>31. Dezember 2025</time>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">

            {/* Hero Image */}
            <figure className="mb-12">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/blog/options-explained-hero.png"
                  alt={locale === 'de' ? 'Optionen einfach erklärt Illustration' : 'Options Explained Simply Illustration'}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </figure>

            {/* Introduction Story */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  {locale === 'de' ? 'Stell dir Folgendes vor...' : 'Imagine this...'}
                </h2>

                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    {locale === 'de'
                      ? 'Du bist 5 Jahre alt. Du liebst Eis. Deine Lieblingssorte ist Schokolade.'
                      : 'You\'re 5 years old. You love ice cream. Your favorite flavor is chocolate.'}
                  </p>
                  <p className="font-medium text-gray-900">
                    {locale === 'de'
                      ? 'Heute kostet das Schoko-Eis 1 Euro.'
                      : 'Today, chocolate ice cream costs 1 euro.'}
                  </p>
                  <p>
                    {locale === 'de'
                      ? 'Aber du hast Angst: „Was, wenn es morgen 3 Euro kostet?!"'
                      : 'But you\'re worried: "What if tomorrow it costs 3 euros?!"'}
                  </p>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="w-64">
                    <Image
                      src="/images/blog/options-explained-ice-cream.png"
                      alt={locale === 'de' ? 'Eis-Beispiel' : 'Ice cream example'}
                      width={256}
                      height={180}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                </div>

                <div className="mt-8 bg-white rounded-xl p-6 border border-amber-200">
                  <p className="text-gray-800 mb-4">
                    <span className="font-bold">{locale === 'de' ? 'Der Eisverkäufer sagt:' : 'The ice cream seller says:'}</span>
                  </p>
                  <blockquote className="text-lg text-amber-800 italic border-l-4 border-amber-400 pl-4">
                    {locale === 'de'
                      ? '„Gib mir heute 10 Cent, und ich verspreche dir, dass du morgen Schoko-Eis für 1 Euro kaufen darfst – egal, wie teuer es wird."'
                      : '"Give me 10 cents today, and I promise you can buy chocolate ice cream tomorrow for 1 euro, no matter the price."'}
                  </blockquote>
                </div>

                <div className="mt-6 space-y-3 text-gray-700">
                  <p>
                    {locale === 'de'
                      ? 'Du musst es morgen nicht kaufen. Du bekommst nur das Recht, es zu kaufen.'
                      : 'You don\'t have to buy it tomorrow. You just get the right to buy it.'}
                  </p>
                  <p className="font-medium">
                    {locale === 'de' ? 'Du kannst:' : 'You can:'}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">+</span>
                      <span>{locale === 'de' ? 'den Deal nutzen' : 'use the deal'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold text-sm">-</span>
                      <span>{locale === 'de' ? 'oder ihn einfach ignorieren' : 'or ignore it'}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 bg-amber-100 rounded-xl p-6 text-center">
                  <p className="text-xl font-bold text-amber-900">
                    {locale === 'de'
                      ? 'Dieses Versprechen nennt man eine OPTION.'
                      : 'That promise is called an OPTION.'}
                  </p>
                </div>
              </div>
            </section>

            {/* What is an Option */}
            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Was ist eine Option?' : 'What is an Option?'}
              </h2>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <p className="text-lg text-gray-700 mb-6">
                  {locale === 'de' ? 'Eine Option ist:' : 'An option is:'}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold">1</span>
                    <span className="text-gray-700 text-lg">{locale === 'de' ? 'ein Versprechen' : 'a promise'}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold">2</span>
                    <span className="text-gray-700 text-lg">{locale === 'de' ? 'das du später nutzen kannst' : 'that you can use later'}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold">3</span>
                    <span className="text-gray-700 text-lg">{locale === 'de' ? 'aber nicht nutzen musst' : 'but you don\'t have to'}</span>
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                  <p className="text-gray-800 leading-relaxed">
                    {locale === 'de'
                      ? 'Du zahlst einen kleinen Betrag heute, um dir einen Deal für die Zukunft zu sichern. Eine Option ist ein Vertrag, der dir eine Wahl gibt.'
                      : 'You pay a small price now to lock in a deal for the future. An option is a contract that gives you a choice.'}
                  </p>
                  <p className="mt-4 text-gray-700">
                    {locale === 'de'
                      ? 'Du zahlst wenig Geld heute, um das Recht (aber keine Pflicht) zu haben, später etwas zu einem festen Preis zu kaufen oder zu verkaufen.'
                      : 'You pay a small amount today to get the right (but not the obligation) to buy or sell something later at a fixed price.'}
                  </p>
                </div>

                <p className="mt-6 text-center text-lg font-medium text-gray-800">
                  {locale === 'de' ? 'Das war\'s. Kein Stress. Keine Magie.' : 'That\'s it. No stress. No magic.'}
                </p>
              </div>
            </section>

            {/* Two Types of Options */}
            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Zwei Arten von Optionen' : 'Two Types of Options'}
              </h2>

              <div className="flex justify-center mb-8">
                <div className="w-80">
                  <Image
                    src="/images/blog/options-explained-price-movement.png"
                    alt={locale === 'de' ? 'Preisbewegungen' : 'Price movements'}
                    width={320}
                    height={200}
                    className="rounded-xl shadow-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Call Option */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Call-Option</h3>
                  </div>
                  <p className="text-green-800 font-medium mb-4">
                    {locale === 'de' ? '„Ich will später kaufen"' : '"I want to buy later"'}
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">—</span>
                      <span>{locale === 'de' ? 'Du glaubst, der Preis steigt' : 'You think the price will go up'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">—</span>
                      <span>{locale === 'de' ? 'Du sicherst dir den heutigen, günstigen Preis' : 'You lock today\'s cheap price'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">—</span>
                      <span>{locale === 'de' ? 'Steigt der Preis: du gewinnst' : 'If price goes up: you win'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">—</span>
                      <span>{locale === 'de' ? 'Steigt er nicht: du verlierst nur die kleine Gebühr' : 'If not: you just lose the small fee'}</span>
                    </li>
                  </ul>
                </div>

                {/* Put Option */}
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Put-Option</h3>
                  </div>
                  <p className="text-red-800 font-medium mb-4">
                    {locale === 'de' ? '„Ich will später verkaufen"' : '"I want to sell later"'}
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">—</span>
                      <span>{locale === 'de' ? 'Du hast Angst, dass der Preis fällt' : 'You\'re scared the price will go down'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">—</span>
                      <span>{locale === 'de' ? 'Du sicherst dir einen Verkaufspreis' : 'You lock a selling price'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">—</span>
                      <span>{locale === 'de' ? 'Fällt der Markt: du bist geschützt' : 'If price crashes: you\'re protected'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">—</span>
                      <span>{locale === 'de' ? 'Passiert es nicht: du verlierst nur die kleine Gebühr' : 'If not: you only lose the small fee'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How to Make Money */}
            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Wie verdient man mit Optionen Geld?' : 'How Do You Make Money With Options?'}
              </h2>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <p className="text-lg text-gray-700 mb-6">
                  {locale === 'de'
                    ? 'Wieder das Eis-Beispiel: Du hast 10 Cent bezahlt für das Versprechen, morgen Eis für 1 Euro zu kaufen.'
                    : 'Let\'s go back to the ice cream: You paid 10 cents for the promise to buy ice cream tomorrow for 1 euro.'}
                </p>

                {/* Case 1 */}
                <div className="bg-green-50 rounded-xl p-6 mb-6 border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                    {locale === 'de' ? 'Fall 1: Der Preis steigt' : 'Case 1: Price goes up'}
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      {locale === 'de'
                        ? 'Morgen kostet das Eis 3 Euro. Aber du darfst es für 1 Euro kaufen.'
                        : 'Tomorrow, ice cream costs 3 euros. But YOU can still buy it for 1 euro.'}
                    </p>
                    <p>
                      {locale === 'de'
                        ? 'Andere Kinder sagen: „Wow, das ist ein super Deal!"'
                        : 'Other kids say: "Wow! That deal is amazing!"'}
                    </p>
                    <p>
                      {locale === 'de'
                        ? 'Du sagst: „Okay, ihr könnt meinen Deal haben – aber gebt mir 2 Euro dafür."'
                        : 'So you say: "Okay, you can have my deal… but pay me 2 euros for it."'}
                    </p>
                  </div>
                  <div className="mt-4 bg-white rounded-lg p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{locale === 'de' ? 'Du hast bezahlt:' : 'You paid:'}</span>
                      <span className="font-bold text-gray-900">0,10 EUR</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-gray-600">{locale === 'de' ? 'Du hast verkauft für:' : 'You sold for:'}</span>
                      <span className="font-bold text-gray-900">2,00 EUR</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2 pt-2 border-t border-gray-200">
                      <span className="text-gray-600">{locale === 'de' ? 'Gewinn:' : 'Profit:'}</span>
                      <span className="font-bold text-green-600">+1,90 EUR</span>
                    </div>
                  </div>
                </div>

                {/* Case 2 */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                    {locale === 'de' ? 'Fall 2: Der Preis steigt nicht' : 'Case 2: Price does NOT go up'}
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      {locale === 'de'
                        ? 'Das Eis kostet weiter 1 Euro. Dein Deal ist nichts Besonderes mehr.'
                        : 'Ice cream still costs 1 euro. Your deal is not special anymore.'}
                    </p>
                    <p>
                      {locale === 'de'
                        ? 'Du nutzt ihn nicht. Du verlierst nur die 10 Cent. Mehr nicht.'
                        : 'You don\'t use it. You lose only the 10 cents you paid. That\'s it. No more loss.'}
                    </p>
                  </div>
                  <div className="mt-4 bg-white rounded-lg p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{locale === 'de' ? 'Maximaler Verlust:' : 'Maximum loss:'}</span>
                      <span className="font-bold text-red-600">-0,10 EUR</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* The Secret */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  {locale === 'de' ? 'Das Geheimnis' : 'The Big Secret'}
                </h2>

                <div className="flex justify-center mb-6">
                  <div className="w-64">
                    <Image
                      src="/images/blog/options-explained-trading.png"
                      alt={locale === 'de' ? 'Trading-Beispiel' : 'Trading example'}
                      width={256}
                      height={180}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-4">
                  {locale === 'de' ? 'Du musst:' : 'You don\'t need to:'}
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">—</span>
                    <span>{locale === 'de' ? 'kein Eis kaufen' : 'buy the ice cream'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">—</span>
                    <span>{locale === 'de' ? 'keine Aktie besitzen' : 'buy the stock'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">—</span>
                    <span>{locale === 'de' ? 'nichts wirklich haben' : 'own anything'}</span>
                  </li>
                </ul>

                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-xl font-bold text-purple-800">
                    {locale === 'de'
                      ? 'Du handelst nur das Versprechen.'
                      : 'You just trade the promise.'}
                  </p>
                </div>
              </div>
            </section>

            {/* How Traders Make Money */}
            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Wie Trader mit Optionen Geld verdienen' : 'How Traders Make Money With Options'}
              </h2>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <p className="text-lg text-gray-700 mb-4">
                  {locale === 'de' ? 'Menschen verdienen Geld, wenn:' : 'People make money when:'}
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>{locale === 'de' ? 'Preise steigen (Call-Option)' : 'prices move up (Call option)'}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>{locale === 'de' ? 'Preise fallen (Put-Option)' : 'prices move down (Put option)'}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>{locale === 'de' ? 'Zeit richtig genutzt wird' : 'time works in their favor'}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>{locale === 'de' ? 'sie einen guten Plan haben' : 'they choose the right moment'}</span>
                  </li>
                </ul>

                <div className="bg-amber-50 rounded-xl p-6">
                  <p className="text-gray-800">
                    {locale === 'de'
                      ? 'Sie kaufen Optionen günstig und verkaufen sie teurer. Wie beim Tauschen von Spielzeug.'
                      : 'They buy options cheap and sell them more expensive. Just like trading toys.'}
                  </p>
                </div>
              </div>
            </section>

            {/* Why Options Are Used */}
            <section className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Warum werden Optionen im Trading genutzt?' : 'Why Options Are Used in Trading'}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {locale === 'de' ? 'Risiken begrenzen' : 'Limit risk'}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {locale === 'de' ? 'Investments absichern' : 'Protect investments'}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {locale === 'de' ? 'Mit klarem Plan handeln' : 'Trade with a clear plan'}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {locale === 'de' ? 'Mit wenig Kapital mehr steuern' : 'Control more with less capital'}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {locale === 'de' ? 'Smarte Entscheidungen' : 'Make smart bets'}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {locale === 'de' ? 'Ruhiger schlafen' : 'Sleep better at night'}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-center text-gray-600">
                {locale === 'de'
                  ? 'Große Investoren, Banken und Trader nutzen Optionen jeden Tag.'
                  : 'Big investors, banks, and traders use options every day.'}
              </p>
            </section>

            {/* Important Rule */}
            <section className="mb-12">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  {locale === 'de' ? 'Die wichtigste Regel' : 'The Most Important Rule'}
                </h2>

                <div className="bg-white rounded-xl p-6 mb-6 border border-amber-200">
                  <p className="text-lg text-gray-800 mb-4">
                    {locale === 'de'
                      ? 'Optionen sind KEINE Zauberei. Du kannst das Geld verlieren, das du für die Option bezahlt hast.'
                      : 'Options are NOT magic. You can lose the money you paid for the option.'}
                  </p>
                  <p className="text-gray-700">
                    {locale === 'de' ? 'Aber:' : 'But:'}
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{locale === 'de' ? 'Der Verlust ist begrenzt' : 'Loss is limited'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{locale === 'de' ? 'Das Risiko ist vorher bekannt' : 'Risk is known in advance'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{locale === 'de' ? 'Keine überraschenden Margin Calls (bei korrekter Nutzung)' : 'No surprise margin calls (if used correctly)'}</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-sm flex-shrink-0">!</span>
                    <p className="text-gray-700">{locale === 'de' ? 'Optionen sind Werkzeuge, kein Glücksspiel' : 'Options are tools, not gambling'}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-sm flex-shrink-0">!</span>
                    <p className="text-gray-700">{locale === 'de' ? 'Strategie ist wichtiger als Glück' : 'Strategy matters more than luck'}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-sm flex-shrink-0">!</span>
                    <p className="text-gray-700">{locale === 'de' ? 'Wissen kommt vor Profit' : 'Education comes before profit'}</p>
                  </div>
                </div>

                <p className="mt-6 text-center text-amber-800 font-medium">
                  {locale === 'de'
                    ? 'Genau deshalb gibt es BeInOption.'
                    : 'That\'s exactly why BeInOption exists.'}
                </p>
              </div>
            </section>

            {/* Summary */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl p-8 text-white">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  {locale === 'de' ? 'Ein-Satz-Zusammenfassung' : 'One-Sentence Summary'}
                </h2>
                <p className="text-2xl font-medium leading-relaxed">
                  {locale === 'de'
                    ? 'Eine Option bedeutet: heute wenig zahlen, um morgen wählen zu dürfen.'
                    : 'An option means paying a little today to get a choice tomorrow.'}
                </p>
                <div className="mt-6 pt-6 border-t border-white/30">
                  <p className="text-white/90">
                    {locale === 'de'
                      ? 'Einfach genug für ein Kind. Stark genug für Profis.'
                      : 'Simple enough for a child. Powerful enough for professionals.'}
                  </p>
                  <p className="mt-2 text-white/80 text-sm">
                    {locale === 'de'
                      ? 'Wenn das sogar ein 5-Jähriger versteht, dann ist Finanzwissen vielleicht gar nicht so beängstigend.'
                      : 'If a 5-year-old understands it, maybe finance isn\'t that scary after all.'}
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-slate-800 rounded-xl p-8 text-white text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  {locale === 'de' ? 'Optionen richtig lernen' : 'Learn Options the Smart Way'}
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  {locale === 'de'
                    ? 'Bei BeInOption erklären wir Optionen: Schritt für Schritt, ohne Hype, ohne leere Versprechen.'
                    : 'At BeInOption, we explain options: step by step, without hype, without empty promises.'}
                </p>
                <p className="text-lg font-medium text-amber-400">
                  {locale === 'de'
                    ? 'Starte mit Wissen. Handle mit Vertrauen.'
                    : 'Start with knowledge. Trade with confidence.'}
                </p>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Weiterführende Artikel' : 'Further Reading'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href={`/${locale}/blog/put-vs-call-optionen`} className="group">
                  <div className="bg-white rounded-lg p-5 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all h-full">
                    <div className="text-xs text-amber-600 font-medium mb-2">
                      {locale === 'de' ? 'GRUNDLAGEN' : 'BASICS'}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {locale === 'de' ? 'Put vs Call Optionen' : 'Put vs Call Options'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {locale === 'de' ? 'Der ultimative Vergleich' : 'The ultimate comparison'}
                    </p>
                  </div>
                </Link>
                <Link href={`/${locale}/blog/options-cfds-teil-1`} className="group">
                  <div className="bg-white rounded-lg p-5 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all h-full">
                    <div className="text-xs text-amber-600 font-medium mb-2">
                      {locale === 'de' ? 'TRADING' : 'TRADING'}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {locale === 'de' ? 'Options CFDs verstehen' : 'Understanding Options CFDs'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {locale === 'de' ? 'Teil 1: Grundlagen' : 'Part 1: Basics'}
                    </p>
                  </div>
                </Link>
                <Link href={`/${locale}/blog/understanding-the-greeks`} className="group">
                  <div className="bg-white rounded-lg p-5 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all h-full">
                    <div className="text-xs text-amber-600 font-medium mb-2">
                      {locale === 'de' ? 'FORTGESCHRITTEN' : 'ADVANCED'}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {locale === 'de' ? 'Die Griechen verstehen' : 'Understanding the Greeks'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {locale === 'de' ? 'Delta, Gamma, Theta' : 'Delta, Gamma, Theta'}
                    </p>
                  </div>
                </Link>
              </div>
            </section>

            {/* Author & Date */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">BO</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">BeInOptions Team</p>
                    <p className="text-sm text-gray-500">
                      {locale === 'de' ? 'Bildung & Einsteiger-Content' : 'Education & Beginner Content'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    {locale === 'de' ? 'Veröffentlicht' : 'Published'}
                  </p>
                  <time className="text-sm font-medium text-gray-700">31. Dezember 2025</time>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
