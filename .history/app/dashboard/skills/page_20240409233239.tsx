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
  ];

  return (
    <div>
      <p className="text-[44px]"> Skills and Courses Taken </p>
      <br />
      <p className="text-[34px]"> Skills (Technical) </p>
      <br />

      <ul style={{ listStylePosition: 'inside' }}>
        {/* Map over the technical skills array */}
        {technicalSkills.map((skill, index) => (
          <li className="list-disc" key={index}>
            {skill}
          </li>
        ))}
      </ul>

      <br />
      <p className="text-[34px]"> Skills (Non-Technical) </p>
      <br />

      <ul style={{ listStylePosition: 'inside' }}>
        {/* Map over the non technical skills array */}
        {nonTechnicalSkills.map((skill, index) => (
          <li className="list-disc" key={index}>
            {skill}
          </li>
        ))}
      </ul>

      <br />
      <p className="text-[34px]"> Courses Taken </p>
      <br />

      <ul style={{ listStylePosition: 'inside' }}>
        {/* Map over the coursesTaken array */}
        {coursesTaken.map((course, index) => (
          <li className="list-disc" key={index}>
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
}
