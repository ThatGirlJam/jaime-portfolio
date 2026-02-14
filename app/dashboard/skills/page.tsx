import { AcademicCapIcon, CodeBracketIcon, GlobeAltIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  const technicalSkills = [
    'Javascript',
    'React',
    'HTML',
    'CSS',
    'Java',
    'Python',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'Tailwind',
    'PyTorch',
    'Pandas',
    'Scikit-learn',
    'Torchvision',
  ];

  const nonTechnicalSkills = [
    'English (Native)',
    'Chinese (Native)',
    'Japanese (Basic)',
    'Microsoft Office Suite',
    'Adaptability',
    'Independent learner',
    'Self-motivated',
    'Leadership',
  ];

  const coursesTaken = [
    'CS1101S: Programming Methodology',
    'CS2030S: Programming Methodology II (in Java)',
    'CS1231S: Discrete Structures',
    'CS2040S: Data Structures and Algorithms (in Java)',
    'MA1521: Calculus for Computing',
    'ST2334: Probability and Statistics',
    'MA2001: Linear Algebra',
    'CS2109S: Introduction to AI and Machine Learning (in Python)',
    'GEA1000: Quantitative Reasoning with Data',
    'IS1128: IT, Management and Organisation',
    'CS2100: Computer Organisation',
    'CS2106: Introduction to Operating Systems',
    'CS2103T: Software Engineering',
    'DTK1234: Design Thinking',
    'CP2201: Journey of the Innovator',
    'CS2105: Introduction to Computer Networks',
    'CS3230: Design and Analysis of Algorithms',
    'CS3219: Software Engineering Principles and Patterns',
  ];

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
          Technical skills, languages, and courses I've taken throughout my computer science journey.
        </p>
        <p className="text-lg text-grey italic">
          (WIP) Follow me as I collate the best learning resources to get up to speed in an ever-changing industry.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-graphite">
            <CodeBracketIcon className="h-6 w-6 text-platinum" />
          </div>
          <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black`}>
            Technical Skills
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {technicalSkills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-3 rounded-full bg-platinum border border-grey/20 text-grey font-medium hover:border-grey/40 hover:shadow-sm transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Non-Technical Skills */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-graphite">
            <GlobeAltIcon className="h-6 w-6 text-platinum" />
          </div>
          <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black`}>
            Non-Technical Skills
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {nonTechnicalSkills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-3 rounded-full bg-platinum border border-grey/20 text-grey font-medium hover:border-grey/40 hover:shadow-sm transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Courses Taken */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-graphite">
            <BookOpenIcon className="h-6 w-6 text-platinum" />
          </div>
          <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black`}>
            Courses Taken
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coursesTaken.map((course, index) => (
            <div
              key={index}
              className="rounded-xl bg-platinum border border-grey/20 p-4 hover:shadow-md transition-all"
            >
              <p className="text-grey">{course}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
