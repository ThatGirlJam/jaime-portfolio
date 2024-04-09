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
    <div>
      <p className="text-[44px] text-center"> Hi there! </p>
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

        <p className="text-[20px] text-center"> My name is Jaime Ng Jia Min. </p>
        <p className="text-[20px] text-center max-w-2"> 
          I'm a Year 2 (going on Year 3) computer science student who enjoys the feeling of creating something with my own two hands. 

        </p>
    </div>
  );
}
