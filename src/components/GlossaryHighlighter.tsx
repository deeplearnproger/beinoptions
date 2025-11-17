'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { glossaryTermsMap, getSortedTerms } from '@/lib/glossaryTerms';
import { ReactNode } from 'react';

interface GlossaryHighlighterProps {
  children: string;
  className?: string;
}

export default function GlossaryHighlighter({ children, className = '' }: GlossaryHighlighterProps) {
  const locale = useLocale();
  const sortedTerms = getSortedTerms();

  // Function to highlight terms in text
  const highlightTerms = (text: string): ReactNode[] => {
    const result: ReactNode[] = [];
    let remainingText = text;
    let key = 0;

    while (remainingText.length > 0) {
      let foundMatch = false;

      for (const term of sortedTerms) {
        // Create regex that matches whole words only
        const regex = new RegExp(`\\b(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'i');
        const match = remainingText.match(regex);

        if (match && match.index !== undefined) {
          // Add text before match
          if (match.index > 0) {
            result.push(remainingText.substring(0, match.index));
          }

          // Add highlighted term with info icon
          const termId = glossaryTermsMap[term];
          result.push(
            <span key={key++} className="inline-flex items-center gap-1">
              {match[0]}
              <Link
                href={`/${locale}/glossary#${termId}`}
                className="inline-flex items-center justify-center w-4 h-4 bg-white/90 hover:bg-white text-primary-600 hover:text-primary-700 rounded-full text-[10px] font-bold border border-primary-300 hover:border-primary-500 transition-all hover:scale-110 shrink-0"
                title={locale === 'de' ? `Begriff im Glossar ansehen: ${match[0]}` : `View in glossary: ${match[0]}`}
              >
                i
              </Link>
            </span>
          );

          // Continue with remaining text
          remainingText = remainingText.substring(match.index + match[0].length);
          foundMatch = true;
          break;
        }
      }

      // If no match found, add remaining text and exit
      if (!foundMatch) {
        result.push(remainingText);
        break;
      }
    }

    return result;
  };

  return <span className={className}>{highlightTerms(children)}</span>;
}

// Simpler version for single term linking
interface GlossaryTermProps {
  term: string;
  children?: ReactNode;
}

export function GlossaryTerm({ term, children }: GlossaryTermProps) {
  const locale = useLocale();
  const termId = glossaryTermsMap[term];

  if (!termId) {
    return <>{children || term}</>;
  }

  return (
    <Link
      href={`/${locale}/glossary#${termId}`}
      className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer"
      title={locale === 'de' ? `Begriff im Glossar ansehen: ${term}` : `View in glossary: ${term}`}
    >
      {children || term}
      <span className="inline-flex items-center justify-center w-4 h-4 bg-white/90 text-primary-600 rounded-full text-[10px] font-bold border border-primary-300 shrink-0">
        i
      </span>
    </Link>
  );
}
