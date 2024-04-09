import Image from "next/image";

export default function Page() {
  return (
  <div>
    <p className="text-[44px]"> Co-curricular Activities </p>
    <br />
    <p className="text-[34px]"> Women in Tech @ NUS </p>
    <br />

    <Image
            src="/wit-podcast.png"
            width={698}
            height={698}
            //className="hidden md:block"
            //style={imageStyle}
            alt="Screenshots of podcast poster"
          />

    <p className="text-[34px]"> Hackathons </p>
     <br />
  </div>
  );
}
