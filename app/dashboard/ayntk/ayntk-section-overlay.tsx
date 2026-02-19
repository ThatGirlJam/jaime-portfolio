'use client';

import Link from 'next/link';
import { ArrowLeftIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export function AyntkSectionOverlay() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-pitch-black/20"
      aria-modal="true"
      role="dialog"
      aria-labelledby="overlay-title"
      aria-describedby="overlay-desc"
    >
      <div className="rounded-2xl bg-platinum border border-grey/20 shadow-xl p-8 max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-graphite text-platinum mb-5">
          <LockClosedIcon className="h-7 w-7" />
        </div>
        <h2
          id="overlay-title"
          className={`${lusitana.className} text-xl font-bold text-pitch-black mb-2`}
        >
          Section in progress
        </h2>
        <p id="overlay-desc" className="text-grey text-sm mb-6">
          This section is being curated and isn’t available yet. You’ll be able to access it from the main AYNTK page once it’s ready.
        </p>
        <Link
          href="/dashboard/ayntk"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-graphite text-platinum px-5 py-2.5 text-sm font-medium hover:bg-graphite/90 transition-colors focus:outline-none focus:ring-2 focus:ring-pale-oak/50 focus:ring-offset-2"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to AYNTK
        </Link>
      </div>
    </div>
  );
}
