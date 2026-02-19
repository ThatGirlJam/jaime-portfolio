import Link from 'next/link';
import { BriefcaseIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
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
          <BriefcaseIcon className="h-8 w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
          Software Engineer Roles
        </h1>
        <p className="text-xl text-grey">
          Different roles, levels, and what each entails.
        </p>
      </div>
      <div className="rounded-2xl bg-platinum border border-grey/20 p-8">
        <p className="text-grey">Add content about software engineer roles—e.g. frontend, backend, fullstack, DevOps, ML, and levels (junior, mid, senior, staff) with brief explanations of each.</p>
      </div>
    </div>
  );
}
