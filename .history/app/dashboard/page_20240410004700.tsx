import Image from "next/image";

export default function Page() {
  const imageStyle = {
    borderRadius: '5%',
    border: '1px solid #fff',
  };

  const divStyle = {
    display: 'flex',
    justifyContent: 'center', // Horizontally center the image
  };

  const dashedLineStyle = {
    width: '200px',
    height: '2px',
    border: '1px dashed black',
    margin: '20px auto', // Center the dashed line horizontally
  };

  return (
    <div className="text-center"> {/* Apply text-center class to center-align all content */}
      <p className="text-[44px]"> Hi there! </p>
      <br/>

      <div className="bg-blue-200 py-7 bg-blend-multiply">
        <div style={divStyle}>
          <Image
            src="/jaime-linkedin-photo.jpeg"
            width={350}
            height={350}
            style={imageStyle}
            alt="Screenshots of jaime linkedin photo"
          />
        </div>
      </div>
      <br/>

      <p className="text-[20px]"> My name is Jaime Ng Jia Min. </p>
      <br/>
      <div className="max-w-2xl mx-auto"> {/* Apply mx-auto class to horizontally center the div */}
        <p className="text-[20px]">
          I'm a Year 2 (going on Year 3) computer science student who enjoys the feeling of creating something with her own two hands. <br/><br/>
          I have a keen interest in learning more about AI and Machine Learning, Software Development and Cyber Security. As I'm still exploring my passions, I'm 
          be eager to learn anything even if it is outside my comfort zone. <br/> <br/>
          I have outlined some of my projects, experiences and skills on this website for your perusal. This website was built using Next.js too! 
        </p>
      </div>
      <br/>

      {/* Dashed line */}
      <div style={dashedLineStyle}></div>

      <p className="text-[30px]">
        I would be happy to connect!
      </p>

      {/* Dashed line */}
      <div style={dashedLineStyle}></div>

      <br/>
      <p className="text-[20px]">
        Feel free to contact me using any of the methods below. 
      </p>

      <br/>

      <ul>
        <li>Github: <a href="https://github.com/ThatGirlJam" target="_blank" className="text-blue-500">link to my GitHub</a> </li>
        <li>Email: <a href="mailto: jaimengjm@gmail.com" className="text-blue-500">jaimengjm@gmail.com</a> </li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/jaime-ng-jm/" target="_blank" className="text-blue-500">link to my LinkedIn Page</a> </li>
      </ul>
    </div>
  );
}
