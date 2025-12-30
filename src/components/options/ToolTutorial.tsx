'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { createPortal } from 'react-dom';

export type TutorialStep = {
  id: string;
  title: string;
  description: string;
  theory?: string;
  targetSelector?: string;
  action?: string;
  tip?: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
};

interface ToolTutorialProps {
  toolName: 'payoff' | 'pl' | 'iv';
  steps: TutorialStep[];
  onComplete?: () => void;
  storageKey?: string;
}

interface TooltipPosition {
  top: number;
  left: number;
}

// Helper to find element by various methods (not just querySelector)
function findElement(selector: string): Element | null {
  if (!selector) return null;

  // Try standard querySelector first (for IDs and classes)
  try {
    const element = document.querySelector(selector);
    if (element) return element;
  } catch {
    // Invalid selector, try other methods
  }

  // For button text matching - find by text content
  if (selector.includes('button') && selector.includes('text')) {
    const match = selector.match(/text\(["']([^"']+)["']\)/i) || selector.match(/text-\(["']([^"']+)["']\)/i);
    if (match) {
      const searchText = match[1].toLowerCase();
      const buttons = document.querySelectorAll('button');
      for (const btn of buttons) {
        if (btn.textContent?.toLowerCase().includes(searchText)) {
          return btn;
        }
      }
    }
  }

  return null;
}

export function ToolTutorial({ toolName, steps, onComplete, storageKey }: ToolTutorialProps) {
  const t = useTranslations('tools.tutorial');
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSeenTutorial, setHasSeenTutorial] = useState(true);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition | null>(null);
  const [highlightRect, setHighlightRect] = useState<DOMRect | null>(null);
  const [mounted, setMounted] = useState(false);

  const completedKey = storageKey || `tutorial_${toolName}_completed`;
  const stepKey = `tutorial_${toolName}_step`;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = localStorage.getItem(completedKey);
    if (!seen) {
      setHasSeenTutorial(false);
    }
    // Restore last step
    const savedStep = localStorage.getItem(stepKey);
    if (savedStep) {
      const step = parseInt(savedStep, 10);
      if (!isNaN(step) && step >= 0 && step < steps.length) {
        setCurrentStep(step);
      }
    }
    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [completedKey, stepKey, steps.length]);

  // Save current step when it changes
  useEffect(() => {
    if (isActive) {
      localStorage.setItem(stepKey, currentStep.toString());
    }
  }, [currentStep, isActive, stepKey]);

  const calculatePosition = useCallback((targetSelector?: string, position?: string, shouldScroll?: boolean) => {
    if (!targetSelector || position === 'center') {
      setTooltipPosition({
        top: window.innerHeight / 2 - 150,
        left: window.innerWidth / 2 - 190,
      });
      setHighlightRect(null);
      return;
    }

    const element = findElement(targetSelector);
    if (!element) {
      setTooltipPosition({
        top: window.innerHeight / 2 - 150,
        left: window.innerWidth / 2 - 190,
      });
      setHighlightRect(null);
      return;
    }

    const rect = element.getBoundingClientRect();
    setHighlightRect(rect);

    // Auto-scroll to element if not fully visible (only on step change)
    if (shouldScroll) {
      const isMobileView = window.innerWidth < 768;
      const tooltipHeightEstimate = isMobileView ? window.innerHeight * 0.45 : 300;
      const visibleTop = 0;
      const visibleBottom = window.innerHeight - tooltipHeightEstimate;

      if (rect.top < 80 || rect.bottom > visibleBottom) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Recalculate position after scroll animation
        setTimeout(() => {
          const newRect = element.getBoundingClientRect();
          setHighlightRect(newRect);
        }, 400);
      }
    }

    const tooltipWidth = 380;
    const tooltipHeight = 280;
    const padding = 16;
    const arrowOffset = 16;

    let top = 0;
    let left = 0;

    switch (position || 'bottom') {
      case 'top':
        top = rect.top - tooltipHeight - arrowOffset;
        left = rect.left + rect.width / 2 - tooltipWidth / 2;
        break;
      case 'bottom':
        top = rect.bottom + arrowOffset;
        left = rect.left + rect.width / 2 - tooltipWidth / 2;
        break;
      case 'left':
        top = rect.top + rect.height / 2 - tooltipHeight / 2;
        left = rect.left - tooltipWidth - arrowOffset;
        break;
      case 'right':
        top = rect.top + rect.height / 2 - tooltipHeight / 2;
        left = rect.right + arrowOffset;
        break;
    }

    left = Math.max(padding, Math.min(left, window.innerWidth - tooltipWidth - padding));
    top = Math.max(padding, Math.min(top, window.innerHeight - tooltipHeight - padding));

    setTooltipPosition({ top, left });
  }, []);

  useEffect(() => {
    if (isActive && steps[currentStep]) {
      // Initial calculation with auto-scroll
      calculatePosition(steps[currentStep].targetSelector, steps[currentStep].position, true);

      const handleResize = () => {
        calculatePosition(steps[currentStep].targetSelector, steps[currentStep].position, false);
      };

      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleResize, true);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleResize, true);
      };
    }
  }, [isActive, currentStep, steps, calculatePosition]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    localStorage.setItem(completedKey, 'true');
    localStorage.removeItem(stepKey);
    setHasSeenTutorial(true);
    setIsActive(false);
    onComplete?.();
  };

  // Pause tutorial but save progress
  const handlePause = () => {
    setIsActive(false);
  };

  // Resume from saved step
  const handleResume = () => {
    setIsActive(true);
  };

  const handleSkip = () => {
    localStorage.setItem(completedKey, 'true');
    localStorage.removeItem(stepKey);
    setHasSeenTutorial(true);
    setIsActive(false);
  };

  const handleStart = () => {
    setCurrentStep(0);
    localStorage.removeItem(stepKey);
    setIsActive(true);
  };

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  if (!mounted) return null;

  return (
    <>
      {/* Start/Resume Tutorial Button */}
      <button
        onClick={handleResume}
        className="fixed bottom-6 right-6 z-40 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
        title={t('startTutorial')}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-medium">{t('startTutorial')}</span>
      </button>

      {/* Welcome Banner for first-time users */}
      {!hasSeenTutorial && !isActive && (
        <div className="fixed bottom-24 right-6 z-40 max-w-sm">
          <div className="bg-white rounded-xl p-5 shadow-xl border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{t('welcomeTitle')}</h3>
                <p className="text-gray-600 text-sm mb-3">{t('welcomeDescription')}</p>
                <button
                  onClick={handleStart}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                  {t('letsGo')}
                </button>
              </div>
              <button
                onClick={() => setHasSeenTutorial(true)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Tutorial Overlay */}
      {isActive && createPortal(
        <>
          {/* Dark overlay with hole for highlighted element */}
          <div className="fixed inset-0 z-[9998] pointer-events-none">
            <svg className="w-full h-full">
              <defs>
                <mask id={`tutorial-mask-${toolName}`}>
                  <rect x="0" y="0" width="100%" height="100%" fill="white" />
                  {highlightRect && (
                    <rect
                      x={highlightRect.left - 8}
                      y={highlightRect.top - 8}
                      width={highlightRect.width + 16}
                      height={highlightRect.height + 16}
                      rx="8"
                      fill="black"
                    />
                  )}
                </mask>
              </defs>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="rgba(0,0,0,0.5)"
                mask={`url(#tutorial-mask-${toolName})`}
              />
            </svg>
          </div>

          {/* Highlight border */}
          {highlightRect && (
            <div
              className="fixed z-[9999] pointer-events-none border-2 border-primary-500 rounded-lg"
              style={{
                top: highlightRect.top - 8,
                left: highlightRect.left - 8,
                width: highlightRect.width + 16,
                height: highlightRect.height + 16,
                boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.2)'
              }}
            />
          )}

          {/* Tooltip */}
          {tooltipPosition && (
            <div
              className={`fixed z-[10000] bg-white shadow-2xl border border-gray-200 overflow-hidden ${
                isMobile
                  ? 'bottom-0 left-0 right-0 w-full rounded-t-xl'
                  : 'w-[380px] rounded-xl'
              }`}
              style={isMobile ? undefined : {
                top: tooltipPosition.top,
                left: tooltipPosition.left,
              }}
            >
              {/* Progress bar */}
              <div className="h-1 bg-gray-100">
                <div
                  className="h-full bg-primary-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Header */}
              <div className="px-5 py-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                      {currentStep + 1}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{t('step')} {currentStep + 1} {t('of')} {steps.length}</p>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <button
                    onClick={handlePause}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                    title="Pause"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className={`px-4 py-3 flex flex-col gap-2 overflow-y-auto ${isMobile ? 'max-h-[35vh]' : 'max-h-[50vh]'}`}>
                <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>

                {/* Theory Block */}
                {step.theory && (
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 flex-shrink-0">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-blue-900 text-xs mb-0.5">{t('theory')}</h4>
                        <p className="text-blue-800 text-xs leading-relaxed">{step.theory}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Block */}
                {step.action && (
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200 flex-shrink-0">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-green-900 text-xs mb-0.5">{t('yourTurn')}</h4>
                        <p className="text-green-800 text-xs leading-relaxed">{step.action}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tip Block */}
                {step.tip && (
                  <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 flex-shrink-0">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-amber-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-amber-900 text-xs mb-0.5">{t('proTip')}</h4>
                        <p className="text-amber-800 text-xs leading-relaxed">{step.tip}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={handleSkip}
                  className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
                >
                  {t('skipTutorial')}
                </button>

                <div className="flex items-center gap-2">
                  {currentStep > 0 && (
                    <button
                      onClick={handlePrev}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium flex items-center gap-1 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      {t('previous')}
                    </button>
                  )}

                  <button
                    onClick={handleNext}
                    className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2 text-sm"
                  >
                    {currentStep === steps.length - 1 ? (
                      t('finish')
                    ) : step.action ? (
                      <>
                        {t('done')}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        {t('next')}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Step indicators */}
              <div className="px-5 pb-4 flex justify-center gap-1.5">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentStep
                        ? 'bg-primary-500 w-6'
                        : index < currentStep
                        ? 'bg-primary-300 w-1.5'
                        : 'bg-gray-300 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </>,
        document.body
      )}
    </>
  );
}

// Tutorial steps for Payoff Calculator
export function usePayoffTutorialSteps(isGerman: boolean): TutorialStep[] {
  return isGerman ? [
    {
      id: 'welcome',
      title: 'Willkommen zum Payoff-Rechner',
      description: 'In diesem Tutorial lernen Sie Schritt für Schritt, wie Sie Optionsstrategien erstellen und deren Payoff-Profil analysieren.',
      theory: 'Ein Payoff-Diagramm zeigt Ihren Gewinn oder Verlust bei verschiedenen Aktienkursen zum Verfallstag. Es ist das wichtigste Werkzeug, um Optionsstrategien zu verstehen.',
      position: 'center',
    },
    {
      id: 'underlying',
      title: 'Aktienkurs eingeben',
      description: 'Hier geben Sie den aktuellen Kurs der Aktie ein, für die Sie Optionen handeln möchten.',
      targetSelector: '#underlying-price',
      position: 'right',
      action: 'Geben Sie einen Kurs ein, z.B. 100 für eine Aktie bei $100.',
      tip: 'Schauen Sie den aktuellen Kurs bei Ihrem Broker nach für realistische Analysen.',
    },
    {
      id: 'add-leg',
      title: 'Option hinzufügen',
      description: 'Jetzt fügen wir unsere erste Option hinzu. Jede Option in einer Strategie nennt man "Leg".',
      targetSelector: '.space-y-3 button',
      position: 'bottom',
      theory: 'Eine einfache Strategie hat 1-2 Legs. Komplexe Strategien wie der Iron Condor haben 4 Legs.',
      action: 'Klicken Sie auf "Leg hinzufügen" um Ihre erste Option zu erstellen.',
    },
    {
      id: 'configure-type',
      title: 'Call oder Put wählen',
      description: 'Wählen Sie, ob Sie eine Call-Option (bullish) oder Put-Option (bearish) möchten.',
      targetSelector: '[id^="type-"]',
      position: 'right',
      theory: 'Call = Sie profitieren wenn der Kurs steigt. Put = Sie profitieren wenn der Kurs fällt.',
      action: 'Wählen Sie "Call" für eine bullische Position.',
    },
    {
      id: 'configure-position',
      title: 'Long oder Short',
      description: 'Long = Sie kaufen die Option (zahlen Prämie). Short = Sie verkaufen die Option (erhalten Prämie).',
      targetSelector: '[id^="position-"]',
      position: 'right',
      theory: 'Long Call: Begrenztes Risiko, unbegrenztes Gewinnpotential. Short Call: Begrenzte Einnahme, hohes Risiko.',
      action: 'Wählen Sie "Long" - wir kaufen die Option.',
      tip: 'Als Anfänger sollten Sie mit Long-Positionen starten. Short-Positionen haben höhere Risiken.',
    },
    {
      id: 'configure-strike',
      title: 'Strike-Preis festlegen',
      description: 'Der Strike ist der Preis, zu dem Sie die Aktie kaufen (Call) oder verkaufen (Put) können.',
      targetSelector: '[id^="strike-"]',
      position: 'right',
      theory: 'Strike < Aktienkurs = "In-the-Money" (teurer). Strike > Aktienkurs = "Out-of-the-Money" (billiger).',
      action: 'Setzen Sie den Strike auf 105 (leicht über dem Aktienkurs).',
    },
    {
      id: 'configure-premium',
      title: 'Prämie eingeben',
      description: 'Die Prämie ist der Preis, den Sie für die Option zahlen (oder erhalten bei Short).',
      targetSelector: '[id^="premium-"]',
      position: 'right',
      action: 'Geben Sie eine Prämie von 3 ein (= $3 pro Aktie, also $300 pro Kontrakt).',
      tip: 'Die Prämie ist Ihr maximales Risiko bei Long-Positionen.',
    },
    {
      id: 'view-chart',
      title: 'Ergebnis analysieren',
      description: 'Das Payoff-Diagramm zeigt Ihren Gewinn/Verlust bei verschiedenen Aktienkursen.',
      targetSelector: '.recharts-wrapper',
      position: 'bottom',
      theory: 'Wo die Linie über 0 ist = Gewinn. Wo sie unter 0 ist = Verlust. Der Break-Even-Punkt ist wo sie die 0-Linie kreuzt.',
      tip: 'Bewegen Sie die Maus über das Diagramm für genaue Werte bei jedem Preis.',
    },
    {
      id: 'presets',
      title: 'Fertige Strategien',
      description: 'Probieren Sie die vordefinierten Strategien aus, um zu sehen, wie Profis verschiedene Marktszenarien handeln.',
      targetSelector: '.bg-white.rounded-lg.shadow-sm.p-6:nth-child(2)',
      position: 'right',
      action: 'Klicken Sie auf eine Strategie wie "Bull Call Spread" oder "Iron Condor".',
      tip: 'Jede Strategie hat eigene Vor- und Nachteile. Experimentieren Sie!',
    },
    // Result explanation steps
    {
      id: 'result-chart-analysis',
      title: 'Ihr Ergebnis: Das Payoff-Diagramm',
      description: 'Dies ist das Herzstück Ihrer Analyse - hier sehen Sie genau, wann Sie Gewinn oder Verlust machen.',
      targetSelector: '.recharts-wrapper',
      position: 'top',
      theory: 'Die X-Achse zeigt den Aktienkurs am Verfall. Die Y-Achse zeigt Ihren Gewinn/Verlust. Wo die Linie die 0-Linie kreuzt ist Ihr Break-Even-Punkt.',
      tip: 'Bewegen Sie die Maus über das Diagramm um genaue Werte zu sehen. Die gestrichelte Linie zeigt den aktuellen Aktienkurs.',
    },
    {
      id: 'result-max-profit',
      title: 'Maximaler Gewinn verstehen',
      description: 'Schauen Sie auf den höchsten Punkt der Kurve - das ist Ihr maximaler Gewinn.',
      targetSelector: '.recharts-wrapper',
      position: 'top',
      theory: 'Long Call: Unbegrenzter Gewinn möglich. Long Put: Maximaler Gewinn wenn Aktie auf 0 fällt. Spreads: Begrenzter aber definierter max. Gewinn.',
      tip: 'Fragen Sie sich: "Ist das Gewinnpotential das Risiko wert?" Das ist die wichtigste Frage beim Options-Trading.',
    },
    {
      id: 'result-max-loss',
      title: 'Maximaler Verlust - Ihr Risiko',
      description: 'Der tiefste Punkt der Kurve zeigt Ihren maximalen Verlust - Ihr Risiko.',
      targetSelector: '.recharts-wrapper',
      position: 'top',
      theory: 'Long Optionen: Max. Verlust = gezahlte Prämie. Short Optionen: Kann unbegrenzt sein! Spreads: Definiertes, begrenztes Risiko.',
      tip: 'Regel #1: Riskieren Sie nie mehr als Sie bereit sind zu verlieren. Kennen Sie IMMER Ihren maximalen Verlust bevor Sie handeln.',
    },
    {
      id: 'result-breakeven',
      title: 'Break-Even-Punkt',
      description: 'Der Punkt, ab dem Sie Gewinn machen. Links oder rechts davon - je nach Strategie.',
      targetSelector: '.recharts-wrapper',
      position: 'top',
      theory: 'Call Break-Even = Strike + Prämie. Put Break-Even = Strike - Prämie. Bei Spreads gibt es oft zwei Break-Even-Punkte.',
      tip: 'Je weiter der Break-Even vom aktuellen Kurs entfernt ist, desto unwahrscheinlicher ist Ihr Gewinn - aber desto günstiger ist die Option.',
    },
    {
      id: 'conclusion-payoff',
      title: 'Zusammenfassung',
      description: 'Sie können jetzt Optionsstrategien visuell analysieren. Das Payoff-Diagramm ist Ihr wichtigstes Werkzeug!',
      position: 'center',
      theory: 'Merken Sie sich: 1) Verstehen Sie IMMER Ihren max. Verlust. 2) Kennen Sie Ihren Break-Even. 3) Das Gewinn-Risiko-Verhältnis entscheidet über langfristigen Erfolg.',
      tip: 'Nächster Schritt: Probieren Sie den P/L-Simulator um zu sehen, wie Ihre Position sich VOR dem Verfall verhält.',
    },
  ] : [
    {
      id: 'welcome',
      title: 'Welcome to the Payoff Calculator',
      description: 'In this tutorial, you\'ll learn step by step how to create options strategies and analyze their payoff profile.',
      theory: 'A payoff diagram shows your profit or loss at different stock prices on expiration day. It\'s the most important tool for understanding options strategies.',
      position: 'center',
    },
    {
      id: 'underlying',
      title: 'Enter Stock Price',
      description: 'Here you enter the current price of the stock you want to trade options on.',
      targetSelector: '#underlying-price',
      position: 'right',
      action: 'Enter a price, e.g., 100 for a stock at $100.',
      tip: 'Look up the current price at your broker for realistic analysis.',
    },
    {
      id: 'add-leg',
      title: 'Add an Option',
      description: 'Now let\'s add our first option. Each option in a strategy is called a "leg".',
      targetSelector: '.space-y-3 button',
      position: 'bottom',
      theory: 'A simple strategy has 1-2 legs. Complex strategies like Iron Condor have 4 legs.',
      action: 'Click "Add Leg" to create your first option.',
    },
    {
      id: 'configure-type',
      title: 'Choose Call or Put',
      description: 'Choose whether you want a call option (bullish) or put option (bearish).',
      targetSelector: '[id^="type-"]',
      position: 'right',
      theory: 'Call = You profit when price rises. Put = You profit when price falls.',
      action: 'Select "Call" for a bullish position.',
    },
    {
      id: 'configure-position',
      title: 'Long or Short',
      description: 'Long = You buy the option (pay premium). Short = You sell the option (receive premium).',
      targetSelector: '[id^="position-"]',
      position: 'right',
      theory: 'Long Call: Limited risk, unlimited profit potential. Short Call: Limited income, high risk.',
      action: 'Select "Long" - we\'re buying the option.',
      tip: 'As a beginner, start with long positions. Short positions have higher risks.',
    },
    {
      id: 'configure-strike',
      title: 'Set Strike Price',
      description: 'The strike is the price at which you can buy (call) or sell (put) the stock.',
      targetSelector: '[id^="strike-"]',
      position: 'right',
      theory: 'Strike < Stock price = "In-the-Money" (expensive). Strike > Stock price = "Out-of-the-Money" (cheaper).',
      action: 'Set the strike to 105 (slightly above the stock price).',
    },
    {
      id: 'configure-premium',
      title: 'Enter Premium',
      description: 'The premium is the price you pay for the option (or receive if short).',
      targetSelector: '[id^="premium-"]',
      position: 'right',
      action: 'Enter a premium of 3 (= $3 per share, so $300 per contract).',
      tip: 'The premium is your maximum risk on long positions.',
    },
    {
      id: 'view-chart',
      title: 'Analyze the Result',
      description: 'The payoff diagram shows your profit/loss at different stock prices.',
      targetSelector: '.recharts-wrapper',
      position: 'bottom',
      theory: 'Where the line is above 0 = profit. Where it\'s below 0 = loss. The break-even point is where it crosses the 0 line.',
      tip: 'Hover over the chart for exact values at each price.',
    },
    {
      id: 'presets',
      title: 'Ready-Made Strategies',
      description: 'Try the predefined strategies to see how professionals trade different market scenarios.',
      targetSelector: '.bg-white.rounded-lg.shadow-sm.p-6:nth-child(2)',
      position: 'right',
      action: 'Click on a strategy like "Bull Call Spread" or "Iron Condor".',
      tip: 'Each strategy has its own pros and cons. Experiment!',
    },
    // Result explanation steps
    {
      id: 'result-chart-analysis',
      title: 'Your Result: The Payoff Diagram',
      description: 'This is the heart of your analysis - here you see exactly when you profit or lose.',
      targetSelector: '.recharts-wrapper',
      position: 'top',
      theory: 'The X-axis shows stock price at expiration. The Y-axis shows your profit/loss. Where the line crosses the 0-line is your break-even point.',
      tip: 'Hover over the chart to see exact values. The dashed line shows the current stock price.',
    },
    {
      id: 'result-max-profit',
      title: 'Understanding Maximum Profit',
      description: 'Look at the highest point of the curve - that\'s your maximum profit.',
      targetSelector: '.recharts-wrapper',
      position: 'top',
      theory: 'Long Call: Unlimited profit possible. Long Put: Maximum profit when stock falls to 0. Spreads: Limited but defined max profit.',
      tip: 'Ask yourself: "Is the profit potential worth the risk?" This is the most important question in options trading.',
    },
    {
      id: 'result-max-loss',
      title: 'Maximum Loss - Your Risk',
      description: 'The lowest point of the curve shows your maximum loss - your risk.',
      targetSelector: '.recharts-wrapper',
      position: 'top',
      theory: 'Long options: Max loss = premium paid. Short options: Can be unlimited! Spreads: Defined, limited risk.',
      tip: 'Rule #1: Never risk more than you can afford to lose. ALWAYS know your maximum loss before trading.',
    },
    {
      id: 'result-breakeven',
      title: 'Break-Even Point',
      description: 'The point where you start making profit. Left or right of it - depending on strategy.',
      targetSelector: '.recharts-wrapper',
      position: 'top',
      theory: 'Call break-even = Strike + Premium. Put break-even = Strike - Premium. Spreads often have two break-even points.',
      tip: 'The further the break-even from current price, the less likely your profit - but the cheaper the option.',
    },
    {
      id: 'conclusion-payoff',
      title: 'Summary',
      description: 'You can now visually analyze options strategies. The payoff diagram is your most important tool!',
      position: 'center',
      theory: 'Remember: 1) ALWAYS understand your max loss. 2) Know your break-even. 3) Risk-reward ratio determines long-term success.',
      tip: 'Next step: Try the P/L Simulator to see how your position behaves BEFORE expiration.',
    },
  ];
}

// Tutorial steps for P/L Simulator
export function usePLTutorialSteps(isGerman: boolean): TutorialStep[] {
  return isGerman ? [
    {
      id: 'welcome',
      title: 'P/L Simulator - Live Bewertung',
      description: 'Hier sehen Sie, was Ihre Optionen JETZT wert sind - nicht erst am Verfallstag.',
      theory: 'Anders als der Payoff-Rechner berücksichtigt der P/L-Simulator den Zeitwert, Volatilität und die Greeks.',
      position: 'center',
    },
    {
      id: 'entry-price',
      title: 'Einstiegspreis',
      description: 'Das war der Aktienkurs, als Sie die Position eröffnet haben.',
      targetSelector: '#underlying-price',
      position: 'bottom',
      action: 'Geben Sie 100 ein - Ihr Einstiegskurs.',
    },
    {
      id: 'current-price',
      title: 'Aktueller Kurs',
      description: 'Hier geben Sie ein, wo die Aktie JETZT steht.',
      targetSelector: '#current-price',
      position: 'bottom',
      action: 'Ändern Sie den Wert auf 105 und beobachten Sie die P/L-Änderung.',
    },
    {
      id: 'volatility',
      title: 'Volatilität verstehen',
      description: 'IV (Implizite Volatilität) beeinflusst den Optionspreis massiv.',
      targetSelector: '#volatility',
      position: 'bottom',
      theory: 'Hohe IV = teure Optionen. Nach Earnings fällt die IV oft stark ("IV Crush") und Optionen verlieren Wert.',
      action: 'Erhöhen Sie die IV auf 40% und sehen Sie, wie der Optionswert steigt.',
      tip: 'IV Crush kann Ihre profitable Position ruinieren. Achten Sie auf Earnings-Termine.',
    },
    {
      id: 'greeks',
      title: 'Die Greeks',
      description: 'Greeks zeigen, wie sensibel Ihre Position auf verschiedene Faktoren reagiert.',
      targetSelector: '.space-y-3 button:nth-child(2)',
      position: 'bottom',
      theory: 'Delta = Preisbewegung. Theta = Täglicher Zeitverfall. Vega = Volatilitätssensitivität.',
      action: 'Klicken Sie auf "Greeks anzeigen".',
      tip: 'Theta ist bei kurzlaufenden Optionen Ihr größter Feind (als Käufer) oder bester Freund (als Verkäufer).',
    },
    // Result explanation steps
    {
      id: 'result-pl-summary',
      title: 'Ihr Ergebnis: P/L Übersicht',
      description: 'Hier sehen Sie Ihren aktuellen Gewinn oder Verlust basierend auf den eingegebenen Parametern.',
      targetSelector: '.grid.grid-cols-2.gap-4',
      position: 'bottom',
      theory: 'Total P/L zeigt den absoluten Gewinn/Verlust in Dollar. P/L % zeigt die prozentuale Rendite bezogen auf Ihren Kapitaleinsatz (die gezahlte Prämie).',
      tip: 'Grüne Zahlen = Gewinn, Rote Zahlen = Verlust. Das ist Ihr aktueller "Paper Profit" - realisiert erst beim Verkauf.',
    },
    {
      id: 'result-net-premium',
      title: 'Netto-Prämie verstehen',
      description: 'Die Netto-Prämie zeigt, wie viel Kapital Sie insgesamt für die Strategie eingesetzt haben.',
      targetSelector: '.bg-blue-50.border.border-blue-200',
      position: 'bottom',
      theory: 'Positiv = Sie haben Prämie gezahlt (Debit-Strategie). Negativ = Sie haben Prämie erhalten (Credit-Strategie). Bei Credit-Strategien ist dies Ihr maximaler Gewinn.',
      tip: 'Debit-Strategien brauchen Kursbewegung um profitabel zu sein. Credit-Strategien profitieren von Zeitverfall.',
    },
    {
      id: 'result-greeks-explained',
      title: 'Greeks im Detail',
      description: 'Jetzt verstehen Sie, was die Greeks für IHRE Position bedeuten.',
      targetSelector: '.bg-white.rounded-lg.shadow-sm.p-6:has(.grid.grid-cols-2.md\\:grid-cols-4)',
      position: 'bottom',
      theory: 'Delta: Wie viel $ gewinnen/verlieren Sie pro $1 Kursbewegung. Theta: Wie viel $ verlieren Sie pro Tag durch Zeitverfall. Gamma: Wie schnell ändert sich Ihr Delta. Vega: Wie viel $ gewinnen/verlieren Sie pro 1% IV-Änderung.',
      tip: 'Achten Sie besonders auf Theta bei Positionen mit weniger als 30 Tagen bis zum Verfall - der Zeitverfall beschleunigt sich exponentiell.',
    },
    {
      id: 'result-chart',
      title: 'Das P/L Diagramm lesen',
      description: 'Das Diagramm visualisiert Ihren Gewinn/Verlust über verschiedene Aktienkurse.',
      targetSelector: '.recharts-wrapper',
      position: 'bottom',
      theory: 'Die Kurve zeigt nicht nur den Verfall, sondern auch den AKTUELLEN Wert Ihrer Position. Der Unterschied zum Payoff-Diagramm: Hier ist Zeitwert eingerechnet.',
      tip: 'Vergleichen Sie die aktuelle Kurve mit der Verfallslinie - die Differenz ist Ihr verbleibender Zeitwert.',
    },
    {
      id: 'conclusion',
      title: 'Zusammenfassung',
      description: 'Sie haben gelernt, wie Sie Live-P/L einer Optionsstrategie analysieren. Experimentieren Sie mit verschiedenen Szenarien!',
      position: 'center',
      theory: 'Wichtige Erkenntnisse: 1) Optionen verlieren täglich an Zeitwert (Theta). 2) Volatilitätsänderungen können Ihre Position stark beeinflussen. 3) Die Greeks helfen Ihnen, Risiken zu managen.',
      tip: 'Probieren Sie verschiedene "Was-wäre-wenn" Szenarien: Was passiert bei einem Crash? Bei steigender IV? Kurz vor dem Verfall?',
    },
  ] : [
    {
      id: 'welcome',
      title: 'P/L Simulator - Live Valuation',
      description: 'Here you see what your options are worth NOW - not just on expiration day.',
      theory: 'Unlike the Payoff Calculator, the P/L Simulator accounts for time value, volatility, and Greeks.',
      position: 'center',
    },
    {
      id: 'entry-price',
      title: 'Entry Price',
      description: 'This was the stock price when you opened the position.',
      targetSelector: '#underlying-price',
      position: 'bottom',
      action: 'Enter 100 - your entry price.',
    },
    {
      id: 'current-price',
      title: 'Current Price',
      description: 'Here you enter where the stock is NOW.',
      targetSelector: '#current-price',
      position: 'bottom',
      action: 'Change the value to 105 and watch the P/L change.',
    },
    {
      id: 'volatility',
      title: 'Understanding Volatility',
      description: 'IV (Implied Volatility) massively affects option prices.',
      targetSelector: '#volatility',
      position: 'bottom',
      theory: 'High IV = expensive options. After earnings, IV often drops sharply ("IV Crush") and options lose value.',
      action: 'Increase IV to 40% and see how option value rises.',
      tip: 'IV Crush can ruin your profitable position. Watch for earnings dates.',
    },
    {
      id: 'greeks',
      title: 'The Greeks',
      description: 'Greeks show how sensitive your position is to various factors.',
      targetSelector: '.space-y-3 button:nth-child(2)',
      position: 'bottom',
      theory: 'Delta = Price movement. Theta = Daily time decay. Vega = Volatility sensitivity.',
      action: 'Click "Show Greeks".',
      tip: 'Theta is your biggest enemy (as buyer) or best friend (as seller) on short-dated options.',
    },
    // Result explanation steps
    {
      id: 'result-pl-summary',
      title: 'Your Result: P/L Summary',
      description: 'Here you see your current profit or loss based on the parameters you entered.',
      targetSelector: '.grid.grid-cols-2.gap-4',
      position: 'bottom',
      theory: 'Total P/L shows absolute profit/loss in dollars. P/L % shows percentage return based on your capital invested (premium paid).',
      tip: 'Green numbers = Profit, Red numbers = Loss. This is your current "paper profit" - only realized when you sell.',
    },
    {
      id: 'result-net-premium',
      title: 'Understanding Net Premium',
      description: 'Net premium shows how much capital you invested in the strategy.',
      targetSelector: '.bg-blue-50.border.border-blue-200',
      position: 'bottom',
      theory: 'Positive = You paid premium (debit strategy). Negative = You received premium (credit strategy). For credit strategies, this is your maximum profit.',
      tip: 'Debit strategies need price movement to be profitable. Credit strategies profit from time decay.',
    },
    {
      id: 'result-greeks-explained',
      title: 'Greeks in Detail',
      description: 'Now you understand what the Greeks mean for YOUR specific position.',
      targetSelector: '.bg-white.rounded-lg.shadow-sm.p-6:has(.grid.grid-cols-2.md\\:grid-cols-4)',
      position: 'bottom',
      theory: 'Delta: How many $ you gain/lose per $1 price move. Theta: How many $ you lose per day to time decay. Gamma: How fast your Delta changes. Vega: How many $ you gain/lose per 1% IV change.',
      tip: 'Pay special attention to Theta on positions with less than 30 days to expiration - time decay accelerates exponentially.',
    },
    {
      id: 'result-chart',
      title: 'Reading the P/L Chart',
      description: 'The chart visualizes your profit/loss across different stock prices.',
      targetSelector: '.recharts-wrapper',
      position: 'bottom',
      theory: 'The curve shows not just expiration value, but the CURRENT value of your position. The difference from payoff diagram: time value is included here.',
      tip: 'Compare the current curve with the expiration line - the difference is your remaining time value.',
    },
    {
      id: 'conclusion',
      title: 'Summary',
      description: 'You\'ve learned how to analyze live P/L of an options strategy. Experiment with different scenarios!',
      position: 'center',
      theory: 'Key takeaways: 1) Options lose time value daily (Theta). 2) Volatility changes can significantly affect your position. 3) Greeks help you manage risk.',
      tip: 'Try different "what-if" scenarios: What happens in a crash? With rising IV? Close to expiration?',
    },
  ];
}

// Tutorial steps for IV Tools
export function useIVTutorialSteps(isGerman: boolean): TutorialStep[] {
  return isGerman ? [
    {
      id: 'welcome',
      title: 'IV Tools - Volatilität verstehen',
      description: 'Hier lernen Sie, wie die implizite Volatilität berechnet wird und warum sie so wichtig ist.',
      theory: 'IV ist die "Angst-Messung" des Marktes. Hohe IV bedeutet, der Markt erwartet große Bewegungen.',
      position: 'center',
    },
    {
      id: 'solver-inputs',
      title: 'Option Parameter eingeben',
      description: 'Geben Sie die bekannten Daten der Option ein.',
      targetSelector: '.grid.grid-cols-1.lg\\:grid-cols-2 > div:first-child',
      position: 'right',
      action: 'Spot: 100, Strike: 100, Tage: 30, Marktpreis: 5',
      tip: 'ATM-Optionen (Strike = Spot) haben typischerweise die höchste absolute Prämie.',
    },
    {
      id: 'iv-result',
      title: 'IV Ergebnis lesen',
      description: 'Die berechnete IV zeigt, welche Volatilität der Markt erwartet.',
      targetSelector: '.bg-gradient-to-r.from-blue-50.to-indigo-50',
      position: 'bottom',
      theory: 'Eine IV von 25% bedeutet: Der Markt erwartet, dass die Aktie in einem Jahr um ±25% schwankt (1 Standardabweichung).',
    },
    {
      id: 'price-calc',
      title: 'Preisrechner',
      description: 'Hier geben Sie die IV ein und erhalten den theoretischen Preis.',
      targetSelector: '.grid.grid-cols-1.lg\\:grid-cols-2 > div:last-child',
      position: 'left',
      action: 'Geben Sie 25% IV ein und vergleichen Sie den theoretischen Preis mit dem Marktpreis.',
      tip: 'Wenn der Marktpreis höher ist als der theoretische Preis, ist die Option "teuer" - die IV ist hoch.',
    },
    // Result explanation steps
    {
      id: 'result-iv-interpretation',
      title: 'Ihr Ergebnis: IV interpretieren',
      description: 'Die berechnete IV zeigt Ihnen, was der Markt "einpreist" - welche Bewegung erwartet wird.',
      targetSelector: '.bg-gradient-to-r.from-blue-50.to-indigo-50',
      position: 'bottom',
      theory: 'IV 20-30%: Normale Marktbedingungen. IV 30-50%: Erhöhte Unsicherheit. IV >50%: Hohe Angst/Erwartung großer Bewegungen (z.B. vor Earnings).',
      tip: 'Vergleichen Sie die aktuelle IV mit der historischen IV der Aktie. Ist sie über dem Durchschnitt? Dann sind Optionen teuer.',
    },
    {
      id: 'result-practical-use',
      title: 'Praktische Anwendung',
      description: 'Wie nutzen Sie diese Information im echten Trading?',
      position: 'center',
      theory: 'Hohe IV = Gut für Verkäufer (Premium Selling). Niedrige IV = Gut für Käufer (günstige Optionen). IV Rank/Percentile hilft beim Vergleich.',
      tip: 'Vor Earnings steigt die IV oft stark an. Nach der Bekanntgabe fällt sie - "IV Crush". Viele Trader verkaufen Optionen kurz vor Earnings und profitieren vom Crush.',
    },
    {
      id: 'result-price-comparison',
      title: 'Preis vs. Theoretischer Wert',
      description: 'Vergleichen Sie den Marktpreis mit dem theoretischen Preis.',
      targetSelector: '.bg-gradient-to-r.from-green-50.to-emerald-50',
      position: 'bottom',
      theory: 'Marktpreis > Theoretisch = Option ist "teuer" (hohe IV). Marktpreis < Theoretisch = Option ist "günstig" (niedrige IV).',
      tip: 'Günstige Optionen sind nicht automatisch gute Käufe! Niedrige IV kann bedeuten, dass der Markt wenig Bewegung erwartet.',
    },
    {
      id: 'conclusion-iv',
      title: 'Zusammenfassung',
      description: 'Sie verstehen jetzt, wie IV berechnet wird und was sie bedeutet.',
      position: 'center',
      theory: 'Wichtige Erkenntnisse: 1) IV ist zukunftsgerichtet - sie zeigt erwartete, nicht vergangene Bewegungen. 2) IV beeinflusst den Optionspreis stark. 3) IV-Veränderungen können Ihre Position mehr bewegen als der Aktienkurs!',
      tip: 'Nutzen Sie dieses Tool, um vor jedem Trade zu prüfen, ob die IV hoch oder niedrig ist. Das ist oft wichtiger als die Kursrichtung!',
    },
  ] : [
    {
      id: 'welcome',
      title: 'IV Tools - Understanding Volatility',
      description: 'Here you\'ll learn how implied volatility is calculated and why it\'s so important.',
      theory: 'IV is the market\'s "fear gauge". High IV means the market expects big moves.',
      position: 'center',
    },
    {
      id: 'solver-inputs',
      title: 'Enter Option Parameters',
      description: 'Enter the known data of the option.',
      targetSelector: '.grid.grid-cols-1.lg\\:grid-cols-2 > div:first-child',
      position: 'right',
      action: 'Spot: 100, Strike: 100, Days: 30, Market Price: 5',
      tip: 'ATM options (Strike = Spot) typically have the highest absolute premium.',
    },
    {
      id: 'iv-result',
      title: 'Read IV Result',
      description: 'The calculated IV shows what volatility the market expects.',
      targetSelector: '.bg-gradient-to-r.from-blue-50.to-indigo-50',
      position: 'bottom',
      theory: 'An IV of 25% means: The market expects the stock to move ±25% in a year (1 standard deviation).',
    },
    {
      id: 'price-calc',
      title: 'Price Calculator',
      description: 'Here you enter the IV and get the theoretical price.',
      targetSelector: '.grid.grid-cols-1.lg\\:grid-cols-2 > div:last-child',
      position: 'left',
      action: 'Enter 25% IV and compare the theoretical price with the market price.',
      tip: 'If market price is higher than theoretical price, the option is "expensive" - IV is high.',
    },
    // Result explanation steps
    {
      id: 'result-iv-interpretation',
      title: 'Your Result: Interpreting IV',
      description: 'The calculated IV shows you what the market is "pricing in" - what movement is expected.',
      targetSelector: '.bg-gradient-to-r.from-blue-50.to-indigo-50',
      position: 'bottom',
      theory: 'IV 20-30%: Normal market conditions. IV 30-50%: Elevated uncertainty. IV >50%: High fear/expectation of big moves (e.g., before earnings).',
      tip: 'Compare current IV with the stock\'s historical IV. Is it above average? Then options are expensive.',
    },
    {
      id: 'result-practical-use',
      title: 'Practical Application',
      description: 'How do you use this information in real trading?',
      position: 'center',
      theory: 'High IV = Good for sellers (premium selling). Low IV = Good for buyers (cheap options). IV Rank/Percentile helps with comparison.',
      tip: 'Before earnings, IV often rises sharply. After the announcement, it drops - "IV Crush". Many traders sell options just before earnings and profit from the crush.',
    },
    {
      id: 'result-price-comparison',
      title: 'Price vs. Theoretical Value',
      description: 'Compare the market price with the theoretical price.',
      targetSelector: '.bg-gradient-to-r.from-green-50.to-emerald-50',
      position: 'bottom',
      theory: 'Market price > Theoretical = Option is "expensive" (high IV). Market price < Theoretical = Option is "cheap" (low IV).',
      tip: 'Cheap options aren\'t automatically good buys! Low IV might mean the market expects little movement.',
    },
    {
      id: 'conclusion-iv',
      title: 'Summary',
      description: 'You now understand how IV is calculated and what it means.',
      position: 'center',
      theory: 'Key insights: 1) IV is forward-looking - it shows expected, not past movements. 2) IV strongly affects option prices. 3) IV changes can move your position more than the stock price!',
      tip: 'Use this tool to check if IV is high or low before every trade. This is often more important than price direction!',
    },
  ];
}
