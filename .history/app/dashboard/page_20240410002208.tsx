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
      <div style={divStyle}>
        <Image
                src="/jaime-linkedin-photo.jpeg"
                width={350}
                height={350}
                style={imageStyle}
                alt="Screenshots of jaime linkedin photo"
              />
        </div>
        <p className="text-[20px] text-center"> Hi there! </p>
    </div>
  );
}
