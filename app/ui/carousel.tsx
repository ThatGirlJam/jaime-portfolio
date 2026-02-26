'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showControls?: boolean;
  /** When true, prev/next buttons are invisible but still clickable (e.g. for announcement carousel). */
  invisibleControls?: boolean;
}

export default function Carousel({
  items,
  autoPlay = true,
  interval = 5000,
  showIndicators = true,
  showControls = true,
  invisibleControls = false,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const justDraggedRef = useRef(false);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    setIsDragging(true);
    setDragOffset(0);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    const container = containerRef.current;
    const maxDrag = container ? container.offsetWidth * 0.4 : 120;
    setDragOffset(Math.max(-maxDrag, Math.min(maxDrag, delta)));
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    const delta = e.clientX - dragStartX.current;
    const threshold = 50;
    if (delta > threshold) {
      goToPrevious();
      justDraggedRef.current = true;
    } else if (delta < -threshold) {
      goToNext();
      justDraggedRef.current = true;
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (justDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      justDraggedRef.current = false;
    }
  };

  if (items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onClickCapture={handleClickCapture}
      style={{ touchAction: 'pan-y' }}
    >
      <div
        className="flex items-stretch transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
          transitionProperty: isDragging ? 'none' : 'transform',
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-full w-full flex-shrink-0 box-border flex flex-col min-h-0">
            {item}
          </div>
        ))}
      </div>

      {showControls && items.length > 1 && (
        <>
          {!invisibleControls && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-2.5 sm:p-2 min-w-[44px] min-h-[44px] flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 touch-manipulation"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-2.5 sm:p-2 min-w-[44px] min-h-[44px] flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 touch-manipulation"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
              </button>
            </>
          )}
          {invisibleControls && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-0 top-0 bottom-0 w-1/4 z-10 cursor-pointer opacity-0"
                aria-label="Previous slide"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-0 top-0 bottom-0 w-1/4 z-10 cursor-pointer opacity-0"
                aria-label="Next slide"
              />
            </>
          )}
        </>
      )}

      {showIndicators && items.length > 1 && (
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10 pointer-events-auto">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(index);
              }}
              className={`h-2 rounded-full transition-all min-w-[8px] min-h-[8px] touch-manipulation ${
                index === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
