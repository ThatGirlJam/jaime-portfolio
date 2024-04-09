import Image from "next/image";

export default function Page() {
  return (
  <div>
    <p className="text-[44px]"> Co-curricular Activities </p>
    <br />
    <p className="text-[34px]"> Women in Tech @ NUS </p>
    <br />

    <p className="text-[26px]"> WiT Tea Podcast </p>
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
      Along with friends, we cofounded the Women in Tech (WiT) Tea Podcast where we invite tech industry professionals to share about their career journey, challenges and advice. 
      To listen to the podcast, click <a href="https://lnkd.in/g77hJGGq" target="_blank" className="text-blue-500">here</a>!
    </p>
    <br/>

    <p className="text-[26px]"> Fireside Chats with Entrepreneurs </p>
    <Image
            src="/fireside-pic.png"
            width={699}
            height={698}
            alt="Screenshots of fireside chat experience"
          />
    <Image
            src="/fireside-reflection.png"
            width={699}
            height={691}
            alt="Screenshots of reflection on fireside chat"
          />

    <br/>
    <p> 
      I had the amazing opportunity to attend fireside chats with amazing entrepreneurs, not only through Women in Tech but also my module CP2201: Journey of an Innovator. Their life experiences and goals have motivated me to find something I'm as passionate about.
    </p>
    <br/>

    <br/>
    <p className="text-[34px]"> Hackathons </p>
     <br />
  </div>
  );
}
