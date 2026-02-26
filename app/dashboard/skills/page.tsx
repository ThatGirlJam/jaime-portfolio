import {
  AcademicCapIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  BookOpenIcon,
  CpuChipIcon,
  CircleStackIcon,
  CommandLineIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const skillCategories = [
  {
    title: 'Frontend',
    icon: CodeBracketIcon,
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Expo',
      'React Native',
      'Chrome DevTools',
    ],
    description: 'UI, web and mobile front-end development',
  },
  {
    title: 'Backend',
    icon: CommandLineIcon,
    skills: [
      'Python',
      'Java',
      'Node.js',
      'NestJS',
      'REST APIs',
    ],
    description: 'Servers, APIs and application logic',
  },
  {
    title: 'Databases & data',
    icon: CircleStackIcon,
    skills: [
      'PostgreSQL',
      'MySQL',
      'Pandas',
      'Postico',
    ],
    description: 'Data storage and manipulation',
  },
  {
    title: 'AI & ML',
    icon: SparklesIcon,
    skills: [
      'Python',
      'PyTorch',
      'Torchvision',
      'Scikit-learn',
      'Pandas',
    ],
    description: 'Machine learning and data science',
  },
  {
    title: 'Tools & practices',
    icon: CpuChipIcon,
    skills: [
      'Git',
      'Agile',
      'Sentry',
    ],
    description: 'Version control and workflow',
  },
];

const courseGroups = [
  {
    title: 'Software engineering & development',
    courses: [
      'CS2103T: Software Engineering',
      'CS3219: Software Engineering Principles and Patterns',
      'CS1101S: Programming Methodology',
      'CS2030S: Programming Methodology II (Java)',
      'DTK1234: Design Thinking',
      'CP2201: Journey of the Innovator',
    ],
  },
  {
    title: 'Algorithms & data structures',
    courses: [
      'CS2040S: Data Structures and Algorithms (Java)',
      'CS3230: Design and Analysis of Algorithms',
      'CS1231S: Discrete Structures',
    ],
  },
  {
    title: 'Systems & networks',
    courses: [
      'CS2100: Computer Organisation',
      'CS2106: Introduction to Operating Systems',
      'CS2105: Introduction to Computer Networks',
    ],
  },
  {
    title: 'AI & data',
    courses: [
      'CS2109S: Introduction to AI and Machine Learning (Python)',
      'GEA1000: Quantitative Reasoning with Data',
    ],
  },
  {
    title: 'Math & statistics',
    courses: [
      'MA1521: Calculus for Computing',
      'MA2001: Linear Algebra',
      'ST2334: Probability and Statistics',
    ],
  },
  {
    title: 'Other',
    courses: [
      'IS1128: IT, Management and Organisation',
    ],
  },
];

const nonTechnicalSkills = [
  'English (Native)',
  'Chinese (Native)',
  'Japanese (Basic)',
  'Adaptability',
  'Independent learner',
  'Self-motivated',
  'Leadership',
  'Collaboration',
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:py-8 sm:px-6">
      <div className="mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-graphite mb-4 sm:mb-6">
          <AcademicCapIcon className="h-6 w-6 sm:h-8 sm:w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-3xl sm:text-4xl md:text-5xl font-bold text-pitch-black mb-3 sm:mb-4`}>
          Skills & Education
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-grey mb-0 max-w-2xl">
          Technical skills and courses, organised by relevance to software engineering roles.
        </p>
      </div>

      {/* Technical skills by category */}
      <div className="mb-8 sm:mb-12">
        <h2 className={`${lusitana.className} text-xl sm:text-2xl md:text-3xl font-bold text-pitch-black mb-4 sm:mb-6`}>
          Technical skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="rounded-2xl bg-platinum border border-grey/20 p-4 sm:p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="flex-shrink-0 p-1.5 sm:p-2 rounded-lg bg-graphite">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-platinum" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-pitch-black min-w-0">{category.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-grey mb-3 sm:mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white border border-grey/20 text-grey text-xs sm:text-sm font-medium hover:border-grey/40 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Non-technical skills */}
      <div className="mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="flex-shrink-0 p-2 rounded-lg bg-graphite w-fit">
            <GlobeAltIcon className="h-5 w-5 sm:h-6 sm:w-6 text-platinum" />
          </div>
          <h2 className={`${lusitana.className} text-2xl sm:text-3xl md:text-4xl font-bold text-pitch-black`}>
            Languages & soft skills
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {nonTechnicalSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-2 sm:px-5 sm:py-3 rounded-full bg-platinum border border-grey/20 text-grey text-sm sm:text-base font-medium hover:border-grey/40 hover:shadow-sm transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Courses by group */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="flex-shrink-0 p-2 rounded-lg bg-graphite w-fit">
            <BookOpenIcon className="h-5 w-5 sm:h-6 sm:w-6 text-platinum" />
          </div>
          <h2 className={`${lusitana.className} text-2xl sm:text-3xl md:text-4xl font-bold text-pitch-black`}>
            Courses taken
          </h2>
        </div>
        <p className="text-sm sm:text-base text-grey mb-6 sm:mb-8 max-w-2xl">
          Grouped by area — most relevant to software engineering first.
        </p>
        <div className="space-y-6 sm:space-y-8">
          {courseGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-base sm:text-lg font-semibold text-pitch-black mb-3 sm:mb-4">{group.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {group.courses.map((course) => (
                  <div
                    key={course}
                    className="rounded-xl bg-platinum border border-grey/20 p-3 sm:p-4 hover:shadow-md transition-all"
                  >
                    <p className="text-sm sm:text-base text-grey break-words">{course}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
