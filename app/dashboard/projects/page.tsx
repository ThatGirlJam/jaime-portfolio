import Video from 'next-video';
import RoamioLanding from '@/videos/RoamioLanding.mp4';
import RoamioDashboard from '@/videos/RoamioDashboard.mp4';
import RoamioFull from '@/videos/RoamioFull.mp4';
import { DocumentDuplicateIcon, LinkIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const lexipicTechStack = [
  'Expo Go',
  'React Native',
  'TypeScript',
  'Real-time object recognition',
  'Camera API',
];

export default function Page() {
  const techStack = [
    'Next.js',
    'Prisma',
    'Planetscale',
    'MySQL',
    'Tailwind',
    'Mantine UI',
  ];

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:py-8 sm:px-6">
      <div className="mb-8 md:mb-12">
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-graphite mb-4 sm:mb-6">
          <DocumentDuplicateIcon className="h-7 w-7 sm:h-8 sm:w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-3xl sm:text-4xl md:text-5xl font-bold text-pitch-black mb-3 sm:mb-4`}>
          Projects
        </h1>
        <p className="text-base sm:text-xl text-grey">
          Explore my web development projects and the technologies I&apos;ve worked with.
        </p>
      </div>

      {/* Lexipic Project */}
      <div className="rounded-2xl bg-platinum border border-grey/20 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 hover:shadow-lg transition-all">
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <h2 className={`${lusitana.className} text-2xl sm:text-3xl md:text-4xl font-bold text-pitch-black`}>
              Lexipic
            </h2>
            <span className="px-3 py-1 rounded-full bg-pale-oak text-graphite text-sm font-medium shrink-0">
              HackMIT 2025
            </span>
          </div>
          <p className="text-base sm:text-lg text-grey mb-2">
            <span className="font-semibold text-pitch-black">Sep 2025</span> — HackMIT
          </p>
        </div>

        <div className="mb-4 sm:mb-6">
          <p className="text-base sm:text-lg text-grey leading-relaxed mb-4">
            Lexipic is a mobile language-learning app built with Expo Go that transforms the world around you into your classroom. By pointing your phone&apos;s camera at objects, the app recognizes them in real time and quizzes you on their names in the language you&apos;re learning.
          </p>
          <p className="text-base sm:text-lg text-grey leading-relaxed mb-4">
            Lexipic bridges the gap between abstract vocabulary drills and real-world practice, making language learning immersive, interactive, and fun.
          </p>
        </div>

        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-pitch-black mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {lexipicTechStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-grey/20 text-grey text-xs sm:text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <a
            href="https://plume.hackmit.org/project/mmpkw-qepyv-rcark-zwyii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2 rounded-full bg-graphite text-platinum hover:bg-pitch-black transition-all min-h-[44px] sm:min-h-0"
          >
            <LinkIcon className="h-5 w-5 shrink-0" />
            <span className="text-center sm:text-left">View on Plume (HackMIT)</span>
          </a>
          <a
            href="https://www.youtube.com/watch?v=xLtExh9FY9A&feature=youtu.be"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2 rounded-full bg-white border border-grey/20 text-pitch-black hover:bg-platinum transition-all min-h-[44px] sm:min-h-0"
          >
            <PlayCircleIcon className="h-5 w-5 shrink-0" />
            <span className="text-center sm:text-left">Watch Demo Video</span>
          </a>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-pitch-black mb-3 sm:mb-4">Demo</h3>
          <div className="rounded-xl overflow-hidden bg-graphite aspect-video max-w-3xl w-full">
            <iframe
              src="https://www.youtube.com/embed/xLtExh9FY9A"
              title="Lexipic - HackMIT 2025 Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Roamio Project */}
      <div className="rounded-2xl bg-platinum border border-grey/20 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 hover:shadow-lg transition-all">
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <h2 className={`${lusitana.className} text-2xl sm:text-3xl md:text-4xl font-bold text-pitch-black`}>
              Roamio
            </h2>
            <span className="px-3 py-1 rounded-full bg-pale-oak text-graphite text-sm font-medium shrink-0">
              Artemis Level
            </span>
          </div>
          <p className="text-base sm:text-lg text-grey mb-2">
            <span className="font-semibold text-pitch-black">2023 Summer</span> — NUS Orbital Programme
          </p>
        </div>

        <div className="mb-4 sm:mb-6">
          <p className="text-base sm:text-lg text-grey leading-relaxed mb-4">
            In the summer of 2023, I joined the Orbital Programme at the National University of Singapore.
            We were tasked with implementing a personal project from scratch. My partner and I created a
            travel-planning web application that earned the highest level of achievement, <span className="font-semibold text-pitch-black">Artemis</span>.
          </p>
          <p className="text-base sm:text-lg text-grey leading-relaxed mb-4">
            Roamio is a web app that aims to improve the travelling experiences of all, by autogenerating
            your packing list and giving itinerary suggestions for your travels.
          </p>
        </div>

        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-pitch-black mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-grey/20 text-grey text-xs sm:text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <a
            href="https://roamio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2 rounded-full bg-graphite text-platinum hover:bg-pitch-black transition-all min-h-[44px] sm:min-h-0"
          >
            <LinkIcon className="h-5 w-5 shrink-0" />
            <span className="text-center sm:text-left">Visit Roamio</span>
          </a>
          <a
            href="https://docs.google.com/document/d/1PtoWv67D4T0F-Zu4XDT10xCDZD6l1RA03LA5sJIbbrQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2 rounded-full bg-white border border-grey/20 text-pitch-black hover:bg-platinum transition-all min-h-[44px] sm:min-h-0"
          >
            <span className="text-center sm:text-left">View Documentation</span>
          </a>
        </div>

        <div className="mb-4">
          <p className="text-xs sm:text-sm text-grey mb-4">
            Note: Roamio may not be fully functional currently due to free pricing plans.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-pitch-black mb-3 sm:mb-4">Landing Page</h3>
            <div className="rounded-xl overflow-hidden bg-graphite p-1 sm:p-2">
              <Video src={RoamioLanding} />
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-pitch-black mb-3 sm:mb-4">Dashboard</h3>
            <div className="rounded-xl overflow-hidden bg-graphite p-1 sm:p-2">
              <Video src={RoamioDashboard} />
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-pitch-black mb-3 sm:mb-4">Final Pitch Video</h3>
            <div className="rounded-xl overflow-hidden bg-graphite p-1 sm:p-2">
              <Video src={RoamioFull} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
