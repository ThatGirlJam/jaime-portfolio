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

  return (
    <div className="text-center"> {/* Apply text-center class to center-align all content */}
      <p className="text-[44px]"> Hi there! </p>
      <br/>

      <div style={divStyle}>
        <Image
          src="/jaime-linkedin-photo.jpeg"
          width={350}
          height={350}
          style={imageStyle}
          alt="Screenshots of jaime linkedin photo"
        />
      </div>
      <br/>

      <p className="text-[20px]"> My name is Jaime Ng Jia Min. </p>
      <br/>
      <div className="max-w-2xl mx-auto"> {/* Apply mx-auto class to horizontally center the div */}
        <p className="text-[20px]">
          I'm a Year 2 (going on Year 3) computer science student who enjoys the feeling of creating something with her own two hands. <br/><br/>
          I have a keen interest in learning more about AI and Machine Learning, Software Development and Cyber Security. As I'm still exploring my passions, I'm 
          always eager to learn anything outside my comfort zone. <br/> <br/>
          I have outlined some of my projects, experiences and skills on this website for your perusal. This website was built using Next.js too! 
        </p>
      </div>

      <p>
        Would love to connect!
      </p>
    </div>
  );
}
