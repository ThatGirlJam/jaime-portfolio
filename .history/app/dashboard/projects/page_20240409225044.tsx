import Video from 'next-video';
import RoamioLanding from '@/videos/RoamioLanding.mp4';

export default function Page() {
  return (
    <div>
      <p className="text-[44px]"> Web Development </p>
      <br/>
      <p className="text-[34px]"> Web Development </p>
      <Video src={RoamioLanding} className="w-100 h-100"/>
    </div>
  );
}
