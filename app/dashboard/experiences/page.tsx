import Image from 'next/image';
import Link from 'next/link';
import { UserGroupIcon, LinkIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-6">
      <div className="mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-graphite mb-6">
          <UserGroupIcon className="h-8 w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
          Experiences
        </h1>
        <p className="text-xl text-grey">
          My journey through NUS Overseas Colleges, co-curricular activities, and hackathons.
        </p>
      </div>

      {/* NUS Overseas Colleges */}
      <div className="mb-12">
        <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black mb-6`}>
          NUS Overseas Colleges: Silicon Valley
        </h2>
        <p className="text-2xl text-grey font-medium mb-8">NOC SV 2025 - A Year of Entrepreneurship and Adventures</p>

        <div className="space-y-8">
          <div className="rounded-2xl bg-platinum border border-grey/20 p-8">
            <h3 className="text-2xl font-semibold text-pitch-black mb-4">Interning at Workstream</h3>
            <p className="text-lg text-grey">In the works!</p>
          </div>

          <div className="rounded-2xl bg-platinum border border-grey/20 p-8">
            <h3 className="text-2xl font-semibold text-pitch-black mb-4">Studying at Stanford University</h3>
            <p className="text-lg text-grey">In the works!</p>
          </div>

          <div className="rounded-2xl bg-platinum border border-grey/20 p-8">
            <h3 className="text-2xl font-semibold text-pitch-black mb-4">Travelling and Exploring the World</h3>
            <p className="text-lg text-grey">In the works!</p>
          </div>
        </div>
      </div>

      {/* Co-curricular Activities */}
      <div className="mb-12">
        <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black mb-8`}>
          Co-curricular Activities
        </h2>

        {/* Women in Tech */}
        <div className="rounded-2xl bg-platinum border border-grey/20 p-8 mb-8 hover:shadow-lg transition-all">
          <h3 className={`${lusitana.className} text-2xl md:text-3xl font-bold text-pitch-black mb-6`}>
            Women in Tech @ NUS
          </h3>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-pitch-black mb-4">WiT Tea Podcast</h4>
            <div className="mb-6">
              <Image
                src="/wit-podcast.png"
                width={698}
                height={698}
                className="rounded-xl border border-grey/20 shadow-md max-w-full h-auto"
                alt="Screenshots of podcast poster"
              />
            </div>
            <p className="text-lg text-grey leading-relaxed mb-4">
              Along with friends, we cofounded the Women in Tech (WiT) Tea Podcast where we invite tech
              industry professionals to share about their career journey, challenges and advice.
            </p>
            <a
              href="https://lnkd.in/g77hJGGq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite text-platinum hover:bg-pitch-black transition-all"
            >
              <span>Listen to Podcast</span>
            </a>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-pitch-black mb-4">Fireside Chats with Entrepreneurs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Image
                src="/fireside-pic.png"
                width={699}
                height={698}
                className="rounded-xl border border-grey/20 shadow-md w-full h-auto"
                alt="Screenshots of fireside chat experience"
              />
              <Image
                src="/fireside-reflection.png"
                width={699}
                height={691}
                className="rounded-xl border border-grey/20 shadow-md w-full h-auto"
                alt="Screenshots of reflection on fireside chat"
              />
            </div>
            <p className="text-lg text-grey leading-relaxed">
              I had the amazing opportunity to attend fireside chats with amazing entrepreneurs, not only
              through Women in Tech but also my module CP2201: Journey of an Innovator. Their life
              experiences and goals have motivated me to find something {`I'm`} as passionate about.
            </p>
          </div>
        </div>
      </div>

      {/* Hackathons */}
      <div>
        <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black mb-8`}>
          Hackathons
        </h2>

        <div className="space-y-8">
          {/* HackMIT 2025 - Lexipic */}
          <div className="rounded-2xl bg-platinum border border-grey/20 p-8 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold text-pitch-black mb-4">HackMIT 2025</h3>
            <p className="text-lg text-grey leading-relaxed mb-4">
              Built <span className="font-semibold text-pitch-black">Lexipic</span> — a mobile language-learning app that uses the camera to recognize objects in real time and quiz you on their names in the language you&apos;re learning. Built with Expo and React Native.
            </p>
            <Link
              href="/dashboard/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite text-platinum hover:bg-pitch-black transition-all text-sm font-medium"
            >
              <LinkIcon className="h-5 w-5" />
              View full project details
            </Link>
          </div>

          {/* HackPrinceton Spring 2025 - VibeEase */}
          <div className="rounded-2xl bg-platinum border border-grey/20 p-8 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold text-pitch-black mb-4">HackPrinceton Spring 2025</h3>
            <p className="text-lg text-grey leading-relaxed mb-4">
              Built <span className="font-semibold text-pitch-black">VibeEase</span> — a mobile app prototype for real-time conversation pairing to enable efficient, in-depth and instant social connection. Used Knot and Google&apos;s Gemini API; first time working with Expo, React Native and mobile frontend.
            </p>
            <a
              href="https://devpost.com/software/vibeease"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite text-platinum hover:bg-pitch-black transition-all text-sm font-medium"
            >
              <LinkIcon className="h-5 w-5" />
              View on Devpost
            </a>
          </div>

          {/* NinjaVan Code Dojo 2023 */}
          <div className="rounded-2xl bg-platinum border border-grey/20 p-8 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold text-pitch-black mb-6">NinjaVan Code Dojo Hackathon 2023</h3>
          <div className="mb-6">
            <Image
              src="/codedojo-dashboard.jpeg"
              width={1280}
              height={729}
              className="rounded-xl border border-grey/20 shadow-md w-full h-auto"
              alt="NinjaVan Code Dojo hackathon dashboard"
            />
          </div>
          <p className="text-lg text-grey leading-relaxed">
            My team and I participated in the NinjaVan Code Dojo hackathon, where we were tasked to come up with a solution to improve operations over 36 hours. We focused on their venture into livestream sales and designed an improved version of their web application and dashboard.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
