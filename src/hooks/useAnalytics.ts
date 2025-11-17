'use client';

import { useEffect, useCallback, useRef } from 'react';
import { trackEvent } from '@/components/GoogleAnalytics';

// Track CTA button clicks
export const trackCTAClick = (buttonName: string, location: string) => {
  trackEvent('cta_click', 'CTA', `${buttonName} - ${location}`);
};

// Track affiliate/broker link clicks
export const trackBrokerClick = (brokerName: string, linkType: 'signup' | 'website' | 'review') => {
  trackEvent('broker_click', 'Affiliate', `${brokerName} - ${linkType}`);
};

// Track outbound links
export const trackOutboundLink = (url: string, linkText: string) => {
  trackEvent('outbound_click', 'External Link', `${linkText} - ${url}`);
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', 'Form', formName);
};

// Track content engagement
export const trackContentView = (contentType: string, contentName: string) => {
  trackEvent('content_view', contentType, contentName);
};

// Track search
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', 'Site Search', searchTerm, resultsCount);
};

// Hook for scroll depth tracking
export function useScrollDepthTracking(pageName: string) {
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      const milestones = [25, 50, 75, 90, 100];

      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !trackedDepths.current.has(milestone)) {
          trackedDepths.current.add(milestone);
          trackEvent('scroll_depth', 'Engagement', `${pageName} - ${milestone}%`, milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pageName]);
}

// Hook for time on page tracking
export function useEngagementTimeTracking(pageName: string) {
  const startTime = useRef<number>(Date.now());
  const trackedIntervals = useRef<Set<number>>(new Set());

  useEffect(() => {
    const intervals = [30, 60, 120, 300]; // seconds

    const checkTime = () => {
      const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);

      intervals.forEach((interval) => {
        if (timeSpent >= interval && !trackedIntervals.current.has(interval)) {
          trackedIntervals.current.add(interval);
          trackEvent('time_on_page', 'Engagement', `${pageName} - ${interval}s`, interval);
        }
      });
    };

    const timer = setInterval(checkTime, 10000); // Check every 10 seconds

    return () => {
      clearInterval(timer);
      // Track total time when leaving
      const totalTime = Math.floor((Date.now() - startTime.current) / 1000);
      if (totalTime > 5) {
        trackEvent('page_exit', 'Engagement', pageName, totalTime);
      }
    };
  }, [pageName]);
}

// Hook for tracking visible elements (e.g., when user sees a specific section)
export function useVisibilityTracking(elementId: string, eventName: string) {
  const hasTracked = useRef(false);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            trackEvent('element_visible', 'Visibility', eventName);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementId, eventName]);
}

// Component wrapper for tracking clicks
export function useClickTracking() {
  const trackClick = useCallback((category: string, action: string, label?: string) => {
    trackEvent(action, category, label);
  }, []);

  return { trackClick };
}
