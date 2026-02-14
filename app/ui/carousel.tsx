'use client';

import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showControls?: boolean;
}

export default function Carousel({
  items,
  autoPlay = true,
  interval = 5000,
  showIndicators = true,
  showControls = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  if (items.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>

      {showControls && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-800" />
          </button>
        </>
      )}

      {showIndicators && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
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
