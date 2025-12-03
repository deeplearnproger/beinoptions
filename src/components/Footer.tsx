import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const quickLinks = [
    { name: tNav('basics'), href: `/${locale}/basics` },
    { name: tNav('strategies'), href: `/${locale}/strategies` },
    { name: tNav('brokers'), href: `/${locale}/brokers` },
    { name: tNav('tutorials'), href: `/${locale}/tutorials` },
  ];

  const legalLinks = [
    { name: t('about'), href: `/${locale}/about` },
    { name: t('impressum'), href: `/${locale}/impressum` },
    { name: t('privacy'), href: `/${locale}/privacy` },
    { name: t('disclaimer'), href: `/${locale}/disclaimer` },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div className="font-heading font-bold text-xl text-white flex items-baseline">
                <span>Be</span>
                <span className="mx-1 relative">
                  In
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></span>
                </span>
                <span>Options</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('about_text')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('quick_links')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('disclaimer_text')}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('disclaimer_full')}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
