import Link from 'next/link';
import { CpuChipIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
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
          <CpuChipIcon className="h-8 w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
          All About the Computer
        </h1>
        <p className="text-xl text-grey">
          What a computer is, how it works, and why it matters for software engineers.
        </p>
      </div>
      <div className="rounded-2xl bg-platinum border border-grey/20 p-8">
        <p className="text-grey">Add content about computers—overview, history, and relevance to your career.</p>
      </div>
    </div>
  );
}
