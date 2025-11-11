import { Metadata } from 'next';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noindex = false,
}: SEOHeadProps): Metadata {
  return {
    title: `${title} | BeInOptions`,
    description: description,
    keywords: keywords?.join(', '),
    ...(canonical && { alternates: { canonical } }),
    openGraph: {
      title: `${title} | BeInOptions`,
      description: description,
      type: 'website',
      ...(ogImage && { images: [ogImage] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | BeInOptions`,
      description: description,
      ...(ogImage && { images: [ogImage] }),
    },
    ...(noindex && { robots: { index: false, follow: false } }),
  };
}
