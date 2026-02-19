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
          Sections to help you get started as a software engineer. Topics are being curated and will be available soon.
        </p>
      </div>

      {/* Two columns of cards - disabled / in progress */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.href}
              className="flex flex-col rounded-2xl bg-platinum/60 border border-grey/30 p-6 sm:p-8 cursor-not-allowed select-none opacity-90"
              aria-disabled="true"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-graphite/70 text-platinum/80 mb-5">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className={`${lusitana.className} text-xl md:text-2xl font-bold text-pitch-black/80 mb-2`}>
                {section.title}
              </h2>
              <p className="text-grey/90 text-sm md:text-base mb-4">
                {section.description}
              </p>
              <span className="inline-flex items-center gap-1 text-grey/70 font-medium text-sm mt-auto">
                Coming soon
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
