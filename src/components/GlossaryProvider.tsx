'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { glossaryTermsMap, getSortedTerms } from '@/lib/glossaryTerms';

export default function GlossaryProvider() {
  const locale = useLocale();

  useEffect(() => {
    const sortedTerms = getSortedTerms();
    const processedNodes = new WeakSet<Node>();

    const createGlossaryLink = (term: string, termId: string): HTMLElement => {
      const link = document.createElement('a');
      link.href = `/${locale}/glossary#${termId}`;
      link.className = 'text-gray-700 no-underline border-b border-gray-300 hover:text-primary-600 hover:border-primary-600 transition-colors cursor-pointer';
      link.title = locale === 'de' ? `Begriff im Glossar ansehen: ${term}` : `View in glossary: ${term}`;
      link.textContent = term;

      return link;
    };

    const processTextNode = (textNode: Text) => {
      if (processedNodes.has(textNode)) return;

      const parent = textNode.parentElement;
      if (!parent) return;

      // Skip if parent is already a glossary link, script, style, or input
      if (
        parent.tagName === 'SCRIPT' ||
        parent.tagName === 'STYLE' ||
        parent.tagName === 'TEXTAREA' ||
        parent.tagName === 'INPUT' ||
        parent.tagName === 'A' ||
        parent.closest('a') ||
        parent.closest('[data-no-glossary]') ||
        parent.classList.contains('no-glossary')
      ) {
        return;
      }

      let text = textNode.textContent || '';
      if (!text.trim()) return;

      const fragment = document.createDocumentFragment();
      let hasMatch = false;

      for (const term of sortedTerms) {
        const regex = new RegExp(`\\b(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
        const match = text.match(regex);

        if (match) {
          hasMatch = true;
          const parts = text.split(regex);

          parts.forEach((part, index) => {
            if (index % 2 === 0) {
              // Regular text
              if (part) {
                fragment.appendChild(document.createTextNode(part));
              }
            } else {
              // Matched term
              const termId = glossaryTermsMap[term];
              if (termId) {
                const link = createGlossaryLink(part, termId);
                fragment.appendChild(link);
              } else {
                fragment.appendChild(document.createTextNode(part));
              }
            }
          });

          break; // Process one term at a time to avoid conflicts
        }
      }

      if (hasMatch && fragment.childNodes.length > 0) {
        processedNodes.add(textNode);
        parent.replaceChild(fragment, textNode);
      }
    };

    const walkTextNodes = (root: Node) => {
      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;

            // Skip certain elements
            if (
              parent.tagName === 'SCRIPT' ||
              parent.tagName === 'STYLE' ||
              parent.tagName === 'TEXTAREA' ||
              parent.tagName === 'INPUT' ||
              parent.tagName === 'A' ||
              parent.closest('a') ||
              parent.closest('[data-no-glossary]')
            ) {
              return NodeFilter.FILTER_REJECT;
            }

            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      const textNodes: Text[] = [];
      let node;
      while ((node = walker.nextNode())) {
        textNodes.push(node as Text);
      }

      // Process in reverse to avoid index issues
      textNodes.reverse().forEach(processTextNode);
    };

    // Initial processing with delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      walkTextNodes(document.body);
    }, 500);

    // Watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            walkTextNodes(node);
          } else if (node.nodeType === Node.TEXT_NODE) {
            processTextNode(node as Text);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [locale]);

  return null;
}
