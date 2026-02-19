import Link from 'next/link';
import { ComputerDesktopIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { AyntkSectionOverlay } from '../ayntk-section-overlay';

export default function Page() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-8 px-6">
        <Link
          href="/dashboard/ayntk"
          className="inline-flex items-center gap-2 text-grey hover:text-pitch-black mb-8 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to AYNTK
        </Link>
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-graphite mb-6">
            <ComputerDesktopIcon className="h-8 w-8 text-platinum" />
          </div>
          <h1 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
            Hardware & OS
          </h1>
          <p className="text-xl text-grey">
            Hardware basics, operating systems, and how they interact.
          </p>
        </div>
        <div className="rounded-2xl bg-platinum border border-grey/20 p-8">
          <p className="text-grey">Add content about hardware (CPU, memory, storage, I/O) and operating systems (processes, threads, scheduling, memory management).</p>
        </div>
      </div>
      <AyntkSectionOverlay />
    </>
  );
}
