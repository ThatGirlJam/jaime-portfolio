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
    'CS3219: Software Engineering Principles and Patterns'
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
