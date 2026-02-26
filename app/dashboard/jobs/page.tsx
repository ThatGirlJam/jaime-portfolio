import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  const jobs = [
    {
      title: 'Software Development Intern',
      company: 'Autodesk',
      period: 'Jan 2026 - Present',
      description: 'Design and make software for architecture, construction and animation. Identity Web SDK Team.',
      details: [
        'Working with Identity Web SDK Team to improve developer experience',
        'Documentation, user experience and product development',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Workstream',
      period: 'Jan - Dec 2025',
      description: 'SF Bay based startup specializing in HR management software for hourly-wage workers.',
      details: [
        'Backend services in NestJS: REST API endpoints for automated shift suggestions, time-off pay compliance and PDF shift schedules (JavaScript libraries for data processing and document handling)',
        'APIs for Retool dashboards for time-off management',
        'Event-driven architecture with listeners, background jobs and queue processing for real-time open-shift notifications',
        'Jest unit tests across critical services for test coverage and reliability',
        'Root cause analysis and debugging with Sentry, Postico and Chrome DevTools for production stability',
        'React frontend and Flutter mobile features for time-off requests and shift scheduling; collaborated with designers on policy forms, list views and UI flows (TypeScript, React, Tailwind)',
      ],
    },
    {
      title: 'AI Research Intern',
      company: 'A*STAR IHPC',
      period: 'May - August 2024',
      description: 'Institute of High Performance Computing - LLM-related research and evaluation.',
      details: [
        'Research on Text-to-SQL capabilities of open-source LLMs (e.g. Deepseek Coder) for healthcare applications and patient information retrieval',
        'Led data collection, preprocessing and GenAI evaluation using the MIMIC database',
        'Improved execution and exact matching accuracy by 25% via prompt engineering, with Python, Llama and JavaScript for question generation and formatting',
        'Enhanced code readability and documentation for reproducibility',
        'Worked with MIMICSQL dataset, translated to DAIL-SQL format; DAIL-SQL refreshes the Spider leaderboard with 86.6% accuracy',
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-5 px-4 sm:py-6 sm:px-5 md:py-8 md:px-6">
      <div className="mb-8 sm:mb-10 md:mb-12">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-graphite mb-4 sm:mb-6">
          <BriefcaseIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-3xl sm:text-4xl md:text-5xl font-bold text-pitch-black mb-3 sm:mb-4`}>
          Jobs & Internships
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-grey max-w-2xl">
          My professional journey and the valuable industry experience I&apos;ve gained along the way.
        </p>
      </div>

      <div className="space-y-5 sm:space-y-6 md:space-y-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="rounded-xl sm:rounded-2xl bg-platinum border border-grey/20 p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-start md:justify-between md:gap-4 mb-4 sm:mb-6">
              <div className="min-w-0">
                <h2 className={`${lusitana.className} text-xl sm:text-2xl md:text-4xl font-bold text-pitch-black mb-1 sm:mb-2 break-words`}>
                  {job.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-grey font-medium">{job.company}</p>
              </div>
              <div className="flex items-center gap-2 text-grey flex-shrink-0">
                <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base md:text-lg whitespace-nowrap">{job.period}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-grey mb-4 sm:mb-6 leading-relaxed">{job.description}</p>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pitch-black mb-3 sm:mb-4">Key Learnings & Responsibilities:</h3>
              <ul className="list-none pl-0 space-y-2 sm:space-y-2.5">
                {job.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-2 sm:gap-3 text-grey">
                    <span className="text-pale-oak flex-shrink-0 w-[1em] text-center mt-0.5">•</span>
                    <span className="leading-relaxed text-sm sm:text-base min-w-0 break-words">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
