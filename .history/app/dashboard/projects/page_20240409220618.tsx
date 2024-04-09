import Video from "next-video";
import ms3-roamio-video from "@/videos/ms3-roamio-video.mov";

export default function Page() {
  return (
    <div>
      <p>Projects Page</p>
      <Video src={ms3-roamio-video}/>
    </div>
  );
}
