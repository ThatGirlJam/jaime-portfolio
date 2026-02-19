import {
  LightBulbIcon,
  CpuChipIcon,
  ComputerDesktopIcon,
  CodeBracketSquareIcon,
  CircleStackIcon,
  ClipboardDocumentListIcon,
  BriefcaseIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

const sections = [
  {
    title: 'All About the Computer',
    href: '/dashboard/ayntk/computer',
    icon: CpuChipIcon,
    description: 'What a computer is, how it works, and why it matters.',
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
    <div className="max-w-6xl mx-auto py-8 px-6">
      <div className="mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-graphite mb-6">
          <LightBulbIcon className="h-8 w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
          All You Need To Know (AYNTK)
        </h1>
        <p className="text-xl text-grey">
          Sections to help you get started as a software engineer. Pick a topic below.
        </p>
      </div>

      {/* Two columns of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.href}
              href={section.href}
              className="group flex flex-col rounded-2xl bg-platinum border border-grey/20 p-6 sm:p-8 hover:border-grey/40 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-pale-oak/50 focus:ring-offset-2"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-graphite text-platinum mb-5">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className={`${lusitana.className} text-xl md:text-2xl font-bold text-pitch-black mb-2 group-hover:text-graphite`}>
                {section.title}
              </h2>
              <p className="text-grey text-sm md:text-base mb-4">
                {section.description}
              </p>
              <span className="inline-flex items-center gap-1 text-pale-oak font-medium text-sm mt-auto group-hover:gap-2 transition-all">
                Read more
                <ChevronRightIcon className="h-4 w-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
