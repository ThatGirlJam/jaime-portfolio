import Video from 'next-video';
import RoamioMS3 from '@/videos/RoamioMS3.mov';

export default function Page() {
  return (
    <div>
      <p>Projects Page</p>
      <Video src={RoamioMS3} />
    </div>
  );
}
