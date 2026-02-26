'use client';

import { useState, useId, useRef, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

interface ConceptTooltipProps {
  term: string;
  definition: string;
  className?: string;
}

/**
 * Inline term with a hover/focus popup definition. Renders tooltip in a portal
 * so it is never clipped or covered by overflow/stacking. Accessible and keyboard-friendly.
 */
export function ConceptTooltip({ term, definition, className }: ConceptTooltipProps) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const id = useId();

  useLayoutEffect(() => {
    if (!open || typeof document === 'undefined') return;
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPosition({
      top: rect.bottom + 8,
      left: rect.left + rect.width / 2,
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleScrollOrResize = () => {
      const el = triggerRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        setPosition({ top: rect.bottom + 8, left: rect.left + rect.width / 2 });
      }
    };
    window.addEventListener('scroll', handleScrollOrResize, true);
    window.addEventListener('resize', handleScrollOrResize);
    return () => {
      window.removeEventListener('scroll', handleScrollOrResize, true);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [open]);

  const tooltipContent =
    open &&
    position &&
    typeof document !== 'undefined' &&
    createPortal(
      <span
        id={`${id}-popup`}
        role="tooltip"
        className="fixed z-[9999] w-64 -translate-x-1/2 px-3 py-2 text-sm text-platinum bg-graphite rounded-lg shadow-lg border border-grey/20"
        style={{ top: position.top, left: position.left }}
      >
        {definition}
      </span>,
      document.body
    );

  return (
    <span className={clsx('relative inline', className)}>
      <span
        ref={triggerRef}
        id={id}
        tabIndex={0}
        role="button"
        aria-describedby={open ? `${id}-popup` : undefined}
        aria-expanded={open}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="cursor-help border-b border-dotted border-graphite/60 text-pitch-black focus:outline-none focus:ring-2 focus:ring-graphite focus:ring-offset-1 focus:ring-offset-transparent rounded"
      >
        {term}
      </span>
      {tooltipContent}
    </span>
  );
}
