import Video from 'next-video';
import RoamioLanding from '@/videos/RoamioLanding.mp4';
import RoamioDashboard from '@/videos/RoamioDashboard.mp4';
import RoamioFull from '@/videos/RoamioFull.mp4';
import { DocumentDuplicateIcon, LinkIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

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
    <div className="max-w-6xl mx-auto py-8 px-6">
      <div className="mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-graphite mb-6">
          <DocumentDuplicateIcon className="h-8 w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
          Projects
        </h1>
        <p className="text-xl text-grey">
          Explore my web development projects and the technologies I&apos;ve worked with.
        </p>
      </div>

      {/* Roamio Project */}
      <div className="rounded-2xl bg-platinum border border-grey/20 p-8 mb-8 hover:shadow-lg transition-all">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black`}>
              Roamio
            </h2>
            <span className="px-3 py-1 rounded-full bg-pale-oak text-graphite text-sm font-medium">
              Artemis Level
            </span>
          </div>
          <p className="text-lg text-grey mb-2">
            <span className="font-semibold text-pitch-black">2023 Summer</span> — NUS Orbital Programme
          </p>
        </div>

        <div className="mb-6">
          <p className="text-lg text-grey leading-relaxed mb-4">
            In the summer of 2023, I joined the Orbital Programme at the National University of Singapore.
            We were tasked with implementing a personal project from scratch. My partner and I created a
            travel-planning web application that earned the highest level of achievement, <span className="font-semibold text-pitch-black">Artemis</span>.
          </p>
          <p className="text-lg text-grey leading-relaxed mb-4">
            Roamio is a web app that aims to improve the travelling experiences of all, by autogenerating
            your packing list and giving itinerary suggestions for your travels.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-pitch-black mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white border border-grey/20 text-grey text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          <a
            href="https://roamio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite text-platinum hover:bg-pitch-black transition-all"
          >
            <LinkIcon className="h-5 w-5" />
            <span>Visit Roamio</span>
          </a>
          <a
            href="https://docs.google.com/document/d/1PtoWv67D4T0F-Zu4XDT10xCDZD6l1RA03LA5sJIbbrQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-grey/20 text-pitch-black hover:bg-platinum transition-all"
          >
            <span>View Documentation</span>
          </a>
        </div>

        <div className="mb-4">
          <p className="text-sm text-grey mb-4">
            Note: Roamio may not be fully functional currently due to free pricing plans.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-pitch-black mb-4">Landing Page</h3>
            <div className="rounded-xl overflow-hidden bg-graphite p-2">
              <Video src={RoamioLanding} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-pitch-black mb-4">Dashboard</h3>
            <div className="rounded-xl overflow-hidden bg-graphite p-2">
              <Video src={RoamioDashboard} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-pitch-black mb-4">Final Pitch Video</h3>
            <div className="rounded-xl overflow-hidden bg-graphite p-2">
              <Video src={RoamioFull} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
