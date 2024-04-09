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
    <br/>
    <p>
      Co-founded the Women in Tech (WiT) Tea Podcast where we invite tech industry professionals to share about their career journey, challenges and advice. 
      To listen to the podcast, click <a href="https://lnkd.in/g77hJGGq" target="_blank" "text-blue-500">here</a>!
    </p>

    <br/>
    <p className="text-[34px]"> Hackathons </p>
     <br />
  </div>
  );
}