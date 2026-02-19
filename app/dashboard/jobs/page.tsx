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
        'Working on Identity Web SDK Team',
        'Design and make software for architecture, construction and animation',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Workstream',
      period: 'Jan - Dec 2025',
      description: 'SF Bay based startup specializing in HR management software for hourly-wage workers.',
      details: [
        'Frontend Web App development (React, Custom Components)',
        'Backend Web App Development (NestJs, Jest, Prisma, PostgreSQL)',
        'CI/CD practices (GitHub Actions)',
        'Software Development Cycle, fast prototyping and product development',
      ],
    },
    {
      title: 'AI Research Intern',
      company: 'A*STAR IHPC',
      period: 'May - August 2024',
      description: 'Institute of High Performance Computing - LLM-related research and evaluation.',
      details: [
        'Data collection, pre-processing and literature surveys on LLM applications',
        'Set up evaluation of Generative AI results on accuracy at Text-to-SQL tasks',
        'Worked with MIMICSQL dataset, translated to DAIL-SQL format',
        'Tested execution accuracy for open source LLMs (codellama, deepseek-coder)',
        'DAIL-SQL is an integrated solution that refreshes the Spider leaderboard with 86.6% accuracy',
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-6">
      <div className="mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-graphite mb-6">
          <BriefcaseIcon className="h-8 w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
          Jobs & Internships
        </h1>
        <p className="text-xl text-grey">
          My professional journey and the valuable industry experience I&apos;ve gained along the way.
        </p>
      </div>

      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="rounded-2xl bg-platinum border border-grey/20 p-8 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black mb-2`}>
                  {job.title}
                </h2>
                <p className="text-xl text-grey font-medium">{job.company}</p>
              </div>
              <div className="flex items-center gap-2 text-grey">
                <CalendarIcon className="h-5 w-5" />
                <span className="text-lg">{job.period}</span>
              </div>
            </div>

            <p className="text-lg text-grey mb-6 leading-relaxed">{job.description}</p>

            <div>
              <h3 className="text-lg font-semibold text-pitch-black mb-4">Key Learnings & Responsibilities:</h3>
              <ul className="space-y-2">
                {job.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-grey">
                    <span className="text-pale-oak mt-1.5">•</span>
                    <span className="flex-1">{detail}</span>
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
