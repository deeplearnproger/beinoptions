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
            <span key={key++} className="inline-flex items-center gap-0.5">
              {match[0]}
              <Link
                href={`/${locale}/glossary#${termId}`}
                className="inline-flex items-center justify-center w-3.5 h-3.5 text-gray-400 hover:text-primary-600 rounded-full text-[9px] transition-colors shrink-0 opacity-60 hover:opacity-100"
                title={locale === 'de' ? `Begriff im Glossar ansehen: ${match[0]}` : `View in glossary: ${match[0]}`}
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
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
      className="inline-flex items-center gap-0.5 hover:opacity-80 transition-opacity cursor-pointer"
      title={locale === 'de' ? `Begriff im Glossar ansehen: ${term}` : `View in glossary: ${term}`}
    >
      {children || term}
      <span className="inline-flex items-center justify-center w-3.5 h-3.5 text-gray-400 hover:text-primary-600 rounded-full transition-colors opacity-60 hover:opacity-100 shrink-0">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </span>
    </Link>
  );
}
