import Video from 'next-video';
import RoamioLandingPage from '@/videos/RoamioLandingPage.mp4';

export default function Page() {
  return (
    <div>
      <p>Projects Page</p>
      <Video src={RoamioLandingPage} />
    </div>
  );
}
