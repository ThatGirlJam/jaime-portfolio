import Video from 'next-video';
import RoamioLanding from '@/videos/RoamioLanding.mp4';

export default function Page() {
  return (
    <div>
      <p>Projects Page</p>
      <h1> Web Development </h1>
      <Video src={RoamioLanding} className="w-100 h-100" />
    </div>
  );
}
