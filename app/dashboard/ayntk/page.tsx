import Link from 'next/link';
import {
  LightBulbIcon,
  CpuChipIcon,
  ComputerDesktopIcon,
  CodeBracketSquareIcon,
  CircleStackIcon,
  ClipboardDocumentListIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const sections = [
  {
    title: 'All About the Computer',
    href: '/dashboard/ayntk/computer',
    icon: CpuChipIcon,
    description: 'What a computer is, how it works, and why it matters.',
    available: true,
  },
  {
    title: 'All About Software',
    href: '/dashboard/ayntk/software',
    icon: CodeBracketSquareIcon,
    description: 'Software types, lifecycle, and building for the real world.',
  },
  {
    title: 'Hardware & OS',
    href: '/dashboard/ayntk/hardware-os',
    icon: ComputerDesktopIcon,
    description: 'Hardware basics, operating systems, and how they interact.',
  },
  {
    title: 'Data Structures & Algorithms',
    href: '/dashboard/ayntk/data-structures-algorithms',
    icon: CircleStackIcon,
    description: 'Core DSA concepts and when to use them.',
  },
  {
    title: 'Leetcode & Interviews',
    href: '/dashboard/ayntk/leetcode-interviews',
    icon: ClipboardDocumentListIcon,
    description: 'Preparing for technical interviews and coding assessments.',
  },
  {
    title: 'Software Engineer Roles',
    href: '/dashboard/ayntk/roles',
    icon: BriefcaseIcon,
    description: 'Different roles, levels, and what each entails.',
  },
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:py-8 sm:px-6">
      <div className="mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-graphite mb-4 sm:mb-6">
          <LightBulbIcon className="h-6 w-6 sm:h-8 sm:w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-3xl sm:text-4xl md:text-5xl font-bold text-pitch-black mb-3 sm:mb-4`}>
          All You Need To Know (AYNTK)
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-grey max-w-2xl">
          Sections to help you get started as a software engineer. Topics are being curated and will be available soon.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          const isAvailable = 'available' in section && section.available === true;

          if (isAvailable) {
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group relative flex flex-col rounded-2xl bg-platinum border-2 border-graphite/40 p-4 sm:p-6 md:p-8 hover:border-graphite hover:bg-platinum/90 transition-all focus:outline-none focus:ring-2 focus:ring-graphite focus:ring-offset-2 shadow-sm hover:shadow-md"
              >
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full bg-graphite text-platinum text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1">
                  Available
                </span>
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-graphite text-platinum mb-3 sm:mb-5 group-hover:bg-graphite/90 transition-colors">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h2 className={`${lusitana.className} text-lg sm:text-xl md:text-2xl font-bold text-pitch-black mb-1.5 sm:mb-2 pr-16 sm:pr-20`}>
                  {section.title}
                </h2>
                <p className="text-grey text-xs sm:text-sm md:text-base mt-auto leading-snug">
                  {section.description}
                </p>
                <span className="mt-2 sm:mt-3 inline-flex items-center gap-1 text-graphite text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View section →
                </span>
              </Link>
            );
          }

          return (
            <div
              key={section.href}
              className="flex flex-col rounded-2xl bg-platinum/60 border border-grey/30 p-4 sm:p-6 md:p-8 cursor-not-allowed select-none opacity-90"
              aria-disabled="true"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-graphite/70 text-platinum/80 mb-3 sm:mb-5">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h2 className={`${lusitana.className} text-lg sm:text-xl md:text-2xl font-bold text-pitch-black/80 mb-1.5 sm:mb-2`}>
                {section.title}
              </h2>
              <p className="text-grey/90 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-snug">
                {section.description}
              </p>
              <span className="inline-flex items-center gap-1 text-grey/70 font-medium text-xs sm:text-sm mt-auto">
                Coming soon
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
