'use client';

import Link from 'next/link';
import { ChevronRightIcon, LightBulbIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import Carousel from '@/app/ui/carousel';
import { lusitana } from '@/app/ui/fonts';

export type Announcement = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

const defaultAnnouncements: Announcement[] = [
  {
    id: 'ayntk',
    title: 'Explore AYNTK',
    description: 'Everything you need to know to start as a software engineer — from the computer basics to interviews and roles.',
    href: '/dashboard/ayntk',
    icon: LightBulbIcon,
  },
  {
    id: 'feedback',
    title: 'Share your feedback',
    description: 'Help me improve this portfolio. Your thoughts and suggestions are welcome.',
    href: '/dashboard/feedback',
    icon: ChatBubbleLeftRightIcon,
  },
];

export default function AnnouncementCarousel({
  announcements = defaultAnnouncements,
  interval = 6000,
}: {
  announcements?: Announcement[];
  interval?: number;
}) {
  const slides = announcements.map((announcement) => {
    const Icon = announcement.icon;
    return (
      <Link
        key={announcement.id}
        href={announcement.href}
        className="group flex flex-1 min-h-0 min-w-0 flex-col relative bg-graphite rounded-2xl focus:outline-none focus:ring-2 focus:ring-pale-oak/50 focus:ring-offset-2 focus:ring-offset-graphite w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pale-oak/10 to-transparent pointer-events-none rounded-2xl" aria-hidden />
        <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-1 flex-col min-h-0 min-w-0">
          {Icon && (
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-pale-oak/20 text-pale-oak mb-3 sm:mb-4 flex-shrink-0">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          )}
          <h3 className={`${lusitana.className} text-lg sm:text-xl md:text-2xl font-bold text-platinum mb-2 group-hover:text-pale-oak transition-colors flex-shrink-0 min-w-0`}>
            {announcement.title}
          </h3>
          <p className="text-platinum/90 text-sm sm:text-base flex-1 min-h-0 min-w-0 break-words">
            {announcement.description}
          </p>
          <span className="inline-flex items-center gap-1 text-pale-oak font-medium text-sm mt-3 sm:mt-4 group-hover:gap-2 transition-all flex-shrink-0">
            Check it out
            <ChevronRightIcon className="h-4 w-4 flex-shrink-0" />
          </span>
        </div>
      </Link>
    );
  });

  return (
    <Carousel
      items={slides}
      autoPlay
      interval={interval}
      showIndicators
      showControls
      invisibleControls
    />
  );
}
