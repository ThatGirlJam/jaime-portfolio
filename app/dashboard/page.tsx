import Image from 'next/image';
import Link from 'next/link';
import {
  EnvelopeIcon,
  CommandLineIcon,
  BriefcaseIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  AcademicCapIcon,
  LightBulbIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const quickLinks = [
  { name: 'Projects', href: '/dashboard/projects', icon: DocumentDuplicateIcon, description: "What I've built" },
  { name: 'Jobs', href: '/dashboard/jobs', icon: BriefcaseIcon, description: 'Opportunities' },
  { name: 'Experiences', href: '/dashboard/experiences', icon: UserGroupIcon, description: "Where I've been" },
  { name: 'Skills', href: '/dashboard/skills', icon: AcademicCapIcon, description: 'What I work with' },
  { name: 'AYNTK', href: '/dashboard/ayntk', icon: LightBulbIcon, description: 'All you need to know' },
];

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/ThatGirlJam',
    handle: 'ThatGirlJam',
    icon: CommandLineIcon,
  },
  {
    label: 'Email',
    href: 'mailto:jaimengjm@gmail.com',
    handle: 'jaimengjm@gmail.com',
    icon: EnvelopeIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jaime-ng-jm/',
    handle: 'jaime-ng-jm',
    icon: ArrowTopRightOnSquareIcon,
  },
];

export default function Page() {
  return (
    <div className="min-h-full">
      {/* Hero strip */}
      <section className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-graphite text-platinum px-4 py-8 sm:px-6 sm:py-10 md:py-14 mb-6 sm:mb-10 animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-br from-pale-oak/10 to-transparent" aria-hidden />
        <div className="relative z-10 max-w-4xl">
          <span className="inline-block rounded-full bg-pale-oak/20 border border-pale-oak/30 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-pale-oak mb-4 sm:mb-6">
            Welcome to my portfolio
          </span>
          <h1 className={`${lusitana.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-platinum mb-2 sm:mb-3`}>
            Hi, I&apos;m Jaime
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-platinum/90 max-w-2xl leading-snug sm:leading-normal">
            Year 4 computer science student · Singapore (previously SF Bay) · I like building things with my own two hands.
          </p>
        </div>
      </section>

      {/* Intro: photo + bio */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-14 mb-10 sm:mb-16 animate-slide-up">
        <div className="lg:col-span-2 flex justify-center lg:justify-end order-1">
          <div className="relative w-full max-w-[280px] sm:max-w-sm">
            <div className="absolute -inset-1 rounded-2xl bg-pale-oak/20 blur-lg" aria-hidden />
            <div className="relative rounded-2xl overflow-hidden border border-grey/20 shadow-lg bg-platinum p-2">
              <Image
                src="/jaime-pic.jpg"
                width={400}
                height={400}
                className="rounded-xl w-full aspect-square object-cover"
                alt="Photo of Jaime"
                priority
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 flex flex-col justify-center space-y-4 sm:space-y-6 order-2">
          <h2 className={`${lusitana.className} text-xl sm:text-2xl md:text-3xl font-bold text-pitch-black`}>
            A bit about me
          </h2>
          <div className="space-y-4 text-grey leading-relaxed text-base md:text-lg">
            <p>
              I have a keen interest in Software Development and how AI / Machine Learning can support it. I&apos;m still exploring my passions and eager to learn — even when it takes me outside my comfort zone.
            </p>
            <p>
              Currently, I&apos;m exploring the world of Web SDKs, Identity Management and UX for Third-party Developers. 
            </p>
            <p>
              I&apos;ve outlined my projects, experiences, and skills on this site for you to explore. (P.S. This site is built with Next.js.)
            </p>
          </div>
        </div>
      </section>

      {/* Quick links to dashboard sections */}
      <section className="mb-10 sm:mb-16">
        <h2 className={`${lusitana.className} text-xl sm:text-2xl md:text-3xl font-bold text-pitch-black mb-4 sm:mb-6`}>
          Explore
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-start gap-3 sm:gap-4 rounded-xl border border-grey/20 bg-white p-4 sm:p-5 shadow-sm transition-all hover:border-pale-oak/50 hover:shadow-md hover:bg-platinum/50 min-h-[72px] sm:min-h-0"
              >
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-pale-oak/20 text-graphite group-hover:bg-pale-oak/30 transition-colors">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="font-semibold text-pitch-black group-hover:text-graphite block">
                    {item.name}
                  </span>
                  <span className="text-sm text-grey">{item.description}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section className="rounded-xl sm:rounded-2xl border border-grey/20 bg-platinum/50 p-4 sm:p-6 md:p-8 animate-fade-in">
        <h2 className={`${lusitana.className} text-xl sm:text-2xl md:text-3xl font-bold text-pitch-black mb-2`}>
          Let&apos;s connect!
        </h2>
        <p className="text-grey text-sm sm:text-base mb-4 sm:mb-6">
          Reach out via any of the channels below.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') || item.href.startsWith('mailto') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-3 rounded-xl border border-grey/20 bg-white px-4 py-3.5 sm:px-5 sm:py-4 shadow-sm transition-all hover:border-pale-oak/50 hover:shadow-md hover:bg-white w-full sm:w-auto min-h-[56px] sm:min-h-0"
              >
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-pale-oak/20 text-graphite">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <div className="text-left min-w-0 flex-1">
                  <span className="block text-sm font-medium text-grey">{item.label}</span>
                  <span className="font-semibold text-pitch-black">{item.handle}</span>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
