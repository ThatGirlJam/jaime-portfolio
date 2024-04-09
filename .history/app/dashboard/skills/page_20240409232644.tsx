export default function Page() {
  const technicalSkills = ['Javascript', 'React', 'HTML', 'CSS'];

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

      <p className="text-[34px]"> Skills (Non-Technical) </p>
      <br />
      <p className="text-[34px]"> Courses Taken </p>
      <br />
    </div>
  );
}
