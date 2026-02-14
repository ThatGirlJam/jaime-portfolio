import BannerLogo from '@/app/ui/banner-logo';
import { ArrowRightIcon, BriefcaseIcon, DocumentDuplicateIcon, UserGroupIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Carousel from '@/app/ui/carousel';

export default function Page() {
  const imageStyle = {
    borderRadius: '5%',
    border: '1px solid #fff',
  };

  // Carousel items for featured projects
  const carouselItems = [
    <div key="roamio-desktop" className="relative w-full bg-graphite flex items-center justify-center p-4 md:p-4" style={{ borderRadius: '5%' }}>
      <Image
        src="/hero-desktop-roamio.png"
        width={961}
        height={710}
        className="hidden md:block object-contain w-full h-auto max-h-[500px]"
        style={imageStyle}
        alt="Screenshots of the dashboard project showing desktop version"
        priority
      />
      <Image
        src="/hero-mobile-roamio.png"
        width={557}
        height={573}
        className="block md:hidden object-contain w-full h-auto max-h-[400px]"
        style={imageStyle}
        alt="Screenshots of the dashboard project showing mobile version"
        priority
      />
    </div>,
  ];


  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-graphite">
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-pale-oak/20 px-4 py-2 backdrop-blur-sm border border-pale-oak/30 mb-6">
              <span className="text-pale-oak text-sm font-medium">Ideate, Innovate, Iterate.</span>
            </div>
          </div>
          
          <h1 className={`${lusitana.className} text-5xl md:text-7xl font-bold text-platinum mb-6 animate-slide-up`}>
            Hi, I&apos;m <span className="text-pale-oak">Jaime Ng</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-platinum/90 max-w-2xl mb-8 animate-slide-up animation-delay-200">
            I&apos;m a computer science student and a Software Developer. An expert at being a beginner, and eager to learn. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
            <Link
              href="/dashboard"
              className="group flex items-center gap-2 rounded-full bg-pale-oak px-8 py-4 text-lg font-semibold text-graphite transition-all hover:scale-105 hover:shadow-2xl hover:bg-pale-oak/90"
            >
              <span>Explore My Work</span>
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://www.linkedin.com/in/jaime-ng-jm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-pale-oak/10 backdrop-blur-sm border border-pale-oak/30 px-8 py-4 text-lg font-semibold text-pale-oak transition-all hover:bg-pale-oak/20 hover:scale-105"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 rounded-full border-2 border-pale-oak/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-pale-oak/50"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1 md:sticky md:top-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-graphite mb-6">
                <DocumentDuplicateIcon className="h-8 w-8 text-platinum" />
              </div>
              <h2 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
                Projects
              </h2>
              <p className="text-xl text-grey mb-6">
                Explore my web development projects including Roamio, a travel-planning application that earned the highest level of achievement as part of the NUS Orbital programme.
              </p>
              <Link
                href="/dashboard/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-graphite px-8 py-4 text-lg font-semibold text-platinum transition-all hover:bg-pitch-black hover:scale-105 hover:shadow-xl"
              >
                <span>View All Projects</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex-1 w-full flex items-center">
              <div className="rounded-2xl overflow-hidden w-full">
                <Carousel items={carouselItems} autoPlay={true} interval={6000} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 px-6 bg-platinum">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="rounded-2xl bg-platinum p-8 border border-grey/20">
                <p className="text-grey mb-4">Current Role</p>
                <h3 className="text-2xl font-bold text-pitch-black mb-2">Software Development Intern at Autodesk</h3>
                <p className="text-grey mb-4">Design and make software for architecture, construction and animation. Identity Web SDK Team.</p>
                <p className="text-grey text-sm">Jan 2026 - Present</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-pale-oak mb-6">
                <BriefcaseIcon className="h-8 w-8 text-graphite" />
              </div>
              <h2 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
                Jobs & Internships
              </h2>
              <ul className="text-xl text-grey mb-6 space-y-2 list-disc list-inside">
                <p>Software engineering internships at </p>
                <li>Workstream, an SF-based software startup</li>
                <li>AI research at A*STAR</li>
              </ul>
              <p className="text-xl text-grey mb-6">
                I&apos;ve gained valuable industry experience through these roles and can&apos;t wait to continue in learning the best (and avoiding the worst) software engineering practices. 
              </p>
              <Link
                href="/dashboard/jobs"
                className="group inline-flex items-center gap-2 rounded-full bg-pale-oak px-8 py-4 text-lg font-semibold text-graphite transition-all hover:bg-pale-oak/90 hover:scale-105 hover:shadow-xl"
              >
                <span>View Work History</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-graphite mb-6">
                <UserGroupIcon className="h-8 w-8 text-platinum" />
              </div>
              <h2 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
                Experiences
              </h2>
              <p className="text-xl text-grey mb-6">
                NUS Overseas Colleges, Women in Tech, hackathons, and more exciting adventures that have shaped my journey.
              </p>
              <Link
                href="/dashboard/experiences"
                className="group inline-flex items-center gap-2 rounded-full bg-graphite px-8 py-4 text-lg font-semibold text-platinum transition-all hover:bg-pitch-black hover:scale-105 hover:shadow-xl"
              >
                <span>View All Experiences</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl bg-white p-8 border border-grey/20">
                <p className="text-grey mb-4">Highlights</p>
                <ul className="space-y-3 text-grey">
                  <li className="flex items-start gap-2">
                    <span className="text-pale-oak mt-1">•</span>
                    <span>NUS Overseas Colleges: Work-study in Silicon Valley (for a year)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pale-oak mt-1">•</span>
                    <span>Women in Tech Tea Podcast Co-founder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pale-oak mt-1">•</span>
                    <span>MiT Hackathon 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-platinum">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-pale-oak mb-6">
                <AcademicCapIcon className="h-8 w-8 text-graphite" />
              </div>
              <h2 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
                Skills & Education
              </h2>
              <p className="text-xl text-grey mb-6">
                Technical skills, languages, and courses I&apos;ve taken throughout my computer science journey.
              </p>
              <p className="text-xl text-grey mb-6">
                (WIP) Follow me as I collate the best learning resources to get up to speed in an ever-changing industry.
              </p>
              <Link
                href="/dashboard/skills"
                className="group inline-flex items-center gap-2 rounded-full bg-pale-oak px-8 py-4 text-lg font-semibold text-graphite transition-all hover:bg-pale-oak/90 hover:scale-105 hover:shadow-xl"
              >
                <span>View All Skills</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl bg-white p-8 border border-grey/20">
                <p className="text-grey mb-4">Technical Skills</p>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Next.js', 'Python', 'Java', 'PostgreSQL', 'Tailwind'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-platinum rounded-full text-grey text-sm border border-grey/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-6`}>
            About Me
          </h2>
          <p className="text-xl text-grey mb-8 leading-relaxed">
            I&apos;m a Year 4 computer science student currently based in Singapore (previously SF Bay) who enjoys creating something with my own two hands. 
            I have a keen interest in learning more about Software Development and how AI / Machine Learning can play a part in that.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-full bg-pale-oak px-8 py-4 text-lg font-semibold text-graphite transition-all hover:bg-pale-oak/90 hover:scale-105 hover:shadow-xl"
          >
            <span>Read More About Me</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-graphite text-platinum py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className={`${lusitana.className} text-2xl font-bold mb-2`}>Ideate, Innovate, Iterate.</p>
              <p className="text-platinum/80">Let&apos;s connect and build something amazing together</p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/ThatGirlJam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-platinum/80 hover:text-pale-oak transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jaime-ng-jm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-platinum/80 hover:text-pale-oak transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:jaimengjm@gmail.com"
                className="text-platinum/80 hover:text-pale-oak transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
