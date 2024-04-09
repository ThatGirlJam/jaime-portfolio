import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div style={{ borderRadius: '10px' }}>
          <Image
            src="/jaime-linkedin-photo.jpeg"
            width={350}
            height={350}
            alt="Screenshots of jaime linkedin photo"
          />
        </div>
    </div>
  );
}
