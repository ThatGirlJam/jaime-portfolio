import Image from "next/image";

export default function Page() {
  const imageStyle = {
    borderRadius: '5%',
    border: '1px solid #fff',
    display: 'flex',
    justifyContent: 'center', // Horizontally center the image
  };
  };

  return (
    <div>
      <div style={imageStyle}>
        <Image
                src="/jaime-linkedin-photo.jpeg"
                width={350}
                height={350}
                //style={imageStyle}
                alt="Screenshots of jaime linkedin photo"
              />
        </div>
    </div>
  );
}
