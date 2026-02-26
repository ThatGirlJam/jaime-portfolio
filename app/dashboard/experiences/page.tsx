import Image from 'next/image';
import Link from 'next/link';
import { UserGroupIcon, LinkIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:py-8 sm:px-6">
      <div className="mb-8 md:mb-12">
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-graphite mb-4 sm:mb-6">
          <UserGroupIcon className="h-7 w-7 sm:h-8 sm:w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-3xl sm:text-4xl md:text-5xl font-bold text-pitch-black mb-3 sm:mb-4`}>
          Experiences
        </h1>
        <p className="text-base sm:text-xl text-grey">
          My journey through NUS Overseas Colleges, co-curricular activities, and hackathons.
        </p>
      </div>

      {/* NUS Overseas Colleges */}
      <div className="mb-8 md:mb-12">
        <h2 className={`${lusitana.className} text-2xl sm:text-3xl md:text-4xl font-bold text-pitch-black mb-4 sm:mb-6`}>
          NUS Overseas Colleges: Silicon Valley
        </h2>
        <p className="text-lg sm:text-2xl text-grey font-medium mb-3 sm:mb-4">NOC SV 2025 - A Year of Entrepreneurship and Adventures</p>
        <p className="text-base sm:text-lg text-grey leading-relaxed mb-4 sm:mb-6 max-w-3xl">
          The year was incredible for both personal and professional development. Living in San Francisco meant living and breathing Silicon Valley&apos;s culture of innovation, creativity and growth. I&apos;m grateful for the many wonderful people I met — my supervisor and colleagues, friends made through the NOC program, and innovators from all walks of life. We don&apos;t grow alone; we grow in rooms filled with people who challenge us, reflect the truth back to us and remind us of what&apos;s possible.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
          <Image src="/sf_pic_1.gif" width={400} height={300} className="rounded-xl border border-grey/20 shadow-md w-full h-36 sm:h-48 object-cover" alt="San Francisco / NOC SV" />
          <Image src="/sf_pic_2.gif" width={400} height={300} className="rounded-xl border border-grey/20 shadow-md w-full h-36 sm:h-48 object-cover" alt="San Francisco / NOC SV" />
          <Image src="/sf_pic_3.gif" width={400} height={300} className="rounded-xl border border-grey/20 shadow-md w-full h-36 sm:h-48 object-cover md:col-span-1 col-span-2" alt="San Francisco / NOC SV" />
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="rounded-2xl bg-platinum border border-grey/20 p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all">
            <h3 className="text-xl sm:text-2xl font-semibold text-pitch-black mb-3 sm:mb-4">Interning at Workstream</h3>
            <p className="text-base sm:text-lg text-grey leading-relaxed mb-4">
              My internship was a chance to ship real product in the heart of the Valley. I learned to choose work with intention, knowing that purpose is a great motivator and a guardrail against burnout. Understanding value exchange in working relationships also stood out: knowing what people give you and what you give in return isn&apos;t transactional. Instead, it&apos;s a way to manage expectations and curb disappointment.             I&apos;m grateful to my gracious supervisor and colleagues for the guidance and the room to grow.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <Image src="/sf_pic_4.gif" width={400} height={300} className="rounded-xl border border-grey/20 shadow-md w-full h-40 sm:h-48 object-cover" alt="NOC SV / Workstream" />
              <Image src="/sf_pic_5.gif" width={400} height={300} className="rounded-xl border border-grey/20 shadow-md w-full h-40 sm:h-48 object-cover" alt="NOC SV / Workstream" />
              <Image src="/sf_pic_6.gif" width={400} height={300} className="rounded-xl border border-grey/20 shadow-md w-full h-40 sm:h-48 object-cover sm:col-span-2 md:col-span-1" alt="NOC SV / Workstream" />
            </div>
          </div>

          <div className="rounded-2xl bg-platinum border border-grey/20 p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all">
            <h3 className="text-xl sm:text-2xl font-semibold text-pitch-black mb-3 sm:mb-4">Studying at Stanford University</h3>
            <p className="text-base sm:text-lg text-grey leading-relaxed mb-4">
              Studying at Stanford, albeit for a short period of time, put me in the same ecosystem as founders, researchers and builders. Balancing coursework with internship and NOC commitments reinforced something I kept hearing: be confident in what you know, and what you don&apos;t. Not knowing isn&apos;t failure; it&apos;s the start of learning. That mindset made the year a continuous stretch, and it reignited my passion for picking up new tools and ideas.             It also inspired my goal to ideate, innovate and iterate. 
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <Image src="/sf_pic_7.gif" width={400} height={300} className="rounded-xl border border-grey/20 shadow-md w-full h-40 sm:h-48 object-cover" alt="Stanford / NOC SV" />
              <Image src="/sf_pic_8.jpeg" width={400} height={300} className="rounded-xl border border-grey/20 shadow-md w-full h-40 sm:h-48 object-cover" alt="Stanford / NOC SV" />
              <Image src="/sf_pic_9.gif" width={400} height={300} className="rounded-xl border border-grey/20 shadow-md w-full h-40 sm:h-48 object-cover sm:col-span-2 md:col-span-1" alt="Stanford / NOC SV" />
            </div>
          </div>

          <div className="rounded-2xl bg-platinum border border-grey/20 p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all">
            <h3 className="text-xl sm:text-2xl font-semibold text-pitch-black mb-3 sm:mb-4">Travelling and Exploring the World</h3>
            <p className="text-base sm:text-lg text-grey leading-relaxed mb-4">
              Beyond the desk and the classroom, the year was about saying yes. I co-planned the welcome party for incoming NOC students in Silicon Valley (a chance to pay forward the support I&apos;d received) and to build connections that last. I attended events like the Pacific Hackers Association gathering at the Google SF Office and took on hackathons like HackMIT and HackPrinceton.             Sometimes the best opportunities come when you push past hesitation. Keep trying, keep learning, keep experiencing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-4 sm:mt-6">
              <Image src="/sf_pic_10.jpeg" width={400} height={300} className="rounded-xl border border-grey/20 shadow-md w-full h-36 sm:h-48 object-cover" alt="Travelling / NOC SV" />
              <Image src="/sf_pic_11.jpeg" width={400} height={300} className="rounded-xl border border-grey/20 shadow-md w-full h-36 sm:h-48 object-cover" alt="Travelling / NOC SV" />
              <Image src="/sf_pic_12.jpeg" width={400} height={300} className="rounded-xl border border-grey/20 shadow-md w-full h-36 sm:h-48 object-cover" alt="Travelling / NOC SV" />
              <Image src="/sf_pic_13.jpeg" width={400} height={300} className="rounded-xl border border-grey/20 shadow-md w-full h-36 sm:h-48 object-cover" alt="Travelling / NOC SV" />
            </div>
          </div>

          {/* Learning points from the year */}
          <div className="rounded-2xl bg-graphite border border-grey/20 p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all">
            <h3 className="text-xl sm:text-2xl font-semibold text-platinum mb-4 sm:mb-6">Learning points from the year</h3>
            <ul className="space-y-3 sm:space-y-4 text-platinum/95 text-base sm:text-lg leading-relaxed list-none">
              <li><span className="font-semibold text-platinum">Be confident in what you know — and what you don&apos;t.</span> Not knowing isn&apos;t failure; it&apos;s the start of learning. Tackling imposter syndrome can seem daunting, but humility can often breed confidence and growth.</li>
              <li><span className="font-semibold text-platinum">Understand value exchange in working relationships.</span> Know what you give and receive, not as a transaction, but to manage expectations and curb disappointment. The heart of networking is genuine interest and curiousity. Even if you can&apos;t offer experience (just yet), you can make up for it in perspective.</li>
              <li><span className="font-semibold text-platinum">Know when it&apos;s time to leave.</span> When it&apos;s no longer fun, growth is gone and your gut won&apos;t sit still — it&apos;s scary, but some situations call for doing it scared.</li>
              <li><span className="font-semibold text-platinum">Protect your health, diet and sleep</span> while you work hard. Obvious, and often ignored.</li>
              <li className="pt-2 italic">&ldquo;Don&apos;t be afraid of the branch breaking — trust your wings.&rdquo;</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Co-curricular Activities */}
      <div className="mb-8 md:mb-12">
        <h2 className={`${lusitana.className} text-2xl sm:text-3xl md:text-4xl font-bold text-pitch-black mb-6 sm:mb-8`}>
          Co-curricular Activities
        </h2>

        {/* Women in Tech */}
        <div className="rounded-2xl bg-platinum border border-grey/20 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 hover:shadow-lg transition-all">
          <h3 className={`${lusitana.className} text-xl sm:text-2xl md:text-3xl font-bold text-pitch-black mb-4 sm:mb-6`}>
            Women in Tech @ NUS
          </h3>

          <div className="mb-4 sm:mb-6">
            <h4 className="text-lg sm:text-xl font-semibold text-pitch-black mb-3 sm:mb-4">WiT Tea Podcast</h4>
            <div className="mb-4 sm:mb-6">
              <Image
                src="/wit-podcast.png"
                width={698}
                height={698}
                className="rounded-xl border border-grey/20 shadow-md max-w-full h-auto"
                alt="Screenshots of podcast poster"
              />
            </div>
            <p className="text-base sm:text-lg text-grey leading-relaxed mb-4">
              Along with friends, we cofounded the Women in Tech (WiT) Tea Podcast where we invite tech
              industry professionals to share about their career journey, challenges and advice.
            </p>
            <a
              href="https://lnkd.in/g77hJGGq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2 rounded-full bg-graphite text-platinum hover:bg-pitch-black transition-all min-h-[44px] sm:min-h-0"
            >
              <span>Listen to Podcast</span>
            </a>
          </div>

          <div className="mt-6 sm:mt-8">
            <h4 className="text-lg sm:text-xl font-semibold text-pitch-black mb-3 sm:mb-4">Fireside Chats with Entrepreneurs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
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
            <p className="text-base sm:text-lg text-grey leading-relaxed">
              I had the amazing opportunity to attend fireside chats with amazing entrepreneurs, not only
              through Women in Tech but also my module CP2201: Journey of an Innovator. Their life
              experiences and goals have motivated me to find something {`I'm`} as passionate about.
            </p>
          </div>
        </div>
      </div>

      {/* Hackathons */}
      <div>
        <h2 className={`${lusitana.className} text-2xl sm:text-3xl md:text-4xl font-bold text-pitch-black mb-6 sm:mb-8`}>
          Hackathons
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {/* HackMIT 2025 - Lexipic */}
          <div className="rounded-2xl bg-platinum border border-grey/20 p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all">
            <h3 className="text-xl sm:text-2xl font-semibold text-pitch-black mb-3 sm:mb-4">HackMIT 2025</h3>
            <p className="text-base sm:text-lg text-grey leading-relaxed mb-4">
              Built <span className="font-semibold text-pitch-black">Lexipic</span> — a mobile language-learning app that uses the camera to recognize objects in real time and quiz you on their names in the language you&apos;re learning. Built with Expo and React Native.
            </p>
            <Link
              href="/dashboard/projects"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2 rounded-full bg-graphite text-platinum hover:bg-pitch-black transition-all text-sm font-medium min-h-[44px] sm:min-h-0"
            >
              <LinkIcon className="h-5 w-5 shrink-0" />
              View full project details
            </Link>
          </div>

          {/* HackPrinceton Spring 2025 - VibeEase */}
          <div className="rounded-2xl bg-platinum border border-grey/20 p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all">
            <h3 className="text-xl sm:text-2xl font-semibold text-pitch-black mb-3 sm:mb-4">HackPrinceton Spring 2025</h3>
            <p className="text-base sm:text-lg text-grey leading-relaxed mb-4">
              Built <span className="font-semibold text-pitch-black">VibeEase</span> — a mobile app prototype for real-time conversation pairing to enable efficient, in-depth and instant social connection. Used Knot and Google&apos;s Gemini API; first time working with Expo, React Native and mobile frontend.
            </p>
            <a
              href="https://devpost.com/software/vibeease"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2 rounded-full bg-graphite text-platinum hover:bg-pitch-black transition-all text-sm font-medium min-h-[44px] sm:min-h-0"
            >
              <LinkIcon className="h-5 w-5 shrink-0" />
              View on Devpost
            </a>
          </div>

          {/* NinjaVan Code Dojo 2023 */}
          <div className="rounded-2xl bg-platinum border border-grey/20 p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all">
            <h3 className="text-xl sm:text-2xl font-semibold text-pitch-black mb-4 sm:mb-6">NinjaVan Code Dojo Hackathon 2023</h3>
          <div className="mb-4 sm:mb-6">
            <Image
              src="/codedojo-dashboard.jpeg"
              width={1280}
              height={729}
              className="rounded-xl border border-grey/20 shadow-md w-full h-auto"
              alt="NinjaVan Code Dojo hackathon dashboard"
            />
          </div>
          <p className="text-base sm:text-lg text-grey leading-relaxed">
            My team and I participated in the NinjaVan Code Dojo hackathon, where we were tasked to come up with a solution to improve operations over 36 hours. We focused on their venture into livestream sales and designed an improved version of their web application and dashboard.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
