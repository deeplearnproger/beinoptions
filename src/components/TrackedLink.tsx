'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { trackCTAClick, trackBrokerClick, trackOutboundLink } from '@/hooks/useAnalytics';

interface TrackedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  trackingType: 'cta' | 'broker' | 'outbound';
  trackingLabel: string;
  trackingLocation?: string;
  brokerLinkType?: 'signup' | 'website' | 'review';
  external?: boolean;
}

export default function TrackedLink({
  href,
  children,
  className = '',
  trackingType,
  trackingLabel,
  trackingLocation = '',
  brokerLinkType = 'signup',
  external = false,
}: TrackedLinkProps) {
  const handleClick = () => {
    switch (trackingType) {
      case 'cta':
        trackCTAClick(trackingLabel, trackingLocation);
        break;
      case 'broker':
        trackBrokerClick(trackingLabel, brokerLinkType);
        break;
      case 'outbound':
        trackOutboundLink(href, trackingLabel);
        break;
    }
  };

  if (external || href.startsWith('http')) {
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
