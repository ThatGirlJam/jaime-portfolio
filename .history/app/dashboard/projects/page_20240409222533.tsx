import Video from 'next-video';
import RoamioLanding from '@@/videos/RoamioLanding.mp4';

export default function Page() {
  return (
    <div>
      <p>Projects Page</p>
      <Video src={RoamioLanding} />
    </div>
  );
}
