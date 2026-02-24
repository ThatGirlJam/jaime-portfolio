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
    <div className="max-w-6xl mx-auto py-8 px-6">
      <div className="mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-graphite mb-6">
          <AcademicCapIcon className="h-8 w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
          Skills & Education
        </h1>
        <p className="text-xl text-grey mb-4">
          Technical skills and courses, organised by relevance to software engineering roles.
        </p>
      </div>

      {/* Technical skills by category */}
      <div className="mb-12">
        <h2 className={`${lusitana.className} text-2xl md:text-3xl font-bold text-pitch-black mb-6`}>
          Technical skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="rounded-2xl bg-platinum border border-grey/20 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-graphite">
                    <Icon className="h-5 w-5 text-platinum" />
                  </div>
                  <h3 className="text-xl font-semibold text-pitch-black">{category.title}</h3>
                </div>
                <p className="text-sm text-grey mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-white border border-grey/20 text-grey text-sm font-medium hover:border-grey/40 transition-all"
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
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-graphite">
            <GlobeAltIcon className="h-6 w-6 text-platinum" />
          </div>
          <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black`}>
            Languages & soft skills
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {nonTechnicalSkills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-3 rounded-full bg-platinum border border-grey/20 text-grey font-medium hover:border-grey/40 hover:shadow-sm transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Courses by group */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-graphite">
            <BookOpenIcon className="h-6 w-6 text-platinum" />
          </div>
          <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black`}>
            Courses taken
          </h2>
        </div>
        <p className="text-grey mb-8 max-w-2xl">
          Grouped by area — most relevant to software engineering first.
        </p>
        <div className="space-y-8">
          {courseGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold text-pitch-black mb-4">{group.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.courses.map((course) => (
                  <div
                    key={course}
                    className="rounded-xl bg-platinum border border-grey/20 p-4 hover:shadow-md transition-all"
                  >
                    <p className="text-grey">{course}</p>
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
