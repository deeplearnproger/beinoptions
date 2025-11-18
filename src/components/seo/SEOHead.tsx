import { Metadata } from 'next';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  locale?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

const SITE_NAME = 'BeInOptions';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://beinoptions.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noindex = false,
  locale = 'de',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
}: SEOHeadProps): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const imageUrl = ogImage || DEFAULT_OG_IMAGE;
  const canonicalUrl = canonical || `${SITE_URL}${locale === 'de' ? '' : `/${locale}`}`;

  return {
    title: fullTitle,
    description: description,
    keywords: keywords?.join(', '),
    authors: author ? [{ name: author }] : [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'de': `${SITE_URL}/de`,
        'en': `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: fullTitle,
      description: description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      type: type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && publishedTime && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        section,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description,
      images: [imageUrl],
      creator: '@BeInOptions',
      site: '@BeInOptions',
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    category: section,
  };
}
