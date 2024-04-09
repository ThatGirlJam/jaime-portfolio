export default function Page() {
    const technicalSkills = [
        "Javascript", 
        "React", 
        "HTML", 
        "CSS",
    ];

    const nonTechnicalSkills = [
        "English (Native)", 
        "Chinese (Native)", 
        "Japanese (Basic)", 
        "Adaptability",
        "Independent learner",
        "Self-motivated", 
        "Leadership",
    ];

    const coursesTaken = [
        "English (Native)", 
        "Chinese (Native)", 
        "Japanese (Basic)", 
        "Adaptability",
        "Independent learner",
        "Self-motivated", 
        "Leadership",
    ];

  return (
    <div>
      <p className="text-[44px]"> Skills and Courses Taken </p>
      <br/>
      <p className="text-[34px]"> Skills (Technical) </p>
      <br/>

      <ul style={{ listStylePosition: 'inside' }}>
        {/* Map over the technical skills array */}
        {technicalSkills.map((skill, index) => (
          <li className="list-disc" key={index}>{skill}</li>
        ))}
      </ul>

      <p className="text-[34px]"> Skills (Non-Technical) </p>
      <br/>

      <ul style={{ listStylePosition: 'inside' }}>
        {/* Map over the non technical skills array */}
        {nonTechnicalSkills.map((skill, index) => (
          <li className="list-disc" key={index}>{skill}</li>
        ))}
      </ul>

      <p className="text-[34px]"> Courses Taken </p>
      <br/>

      <ul style={{ listStylePosition: 'inside' }}>
        {/* Map over the coursesTaken array */}
        {coursesTaken.map((course, index) => (
          <li className="list-disc" key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}
