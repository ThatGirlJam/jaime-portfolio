import Video from 'next-video';
import RoamioLanding from '@/videos/RoamioLanding.mp4';
import RoamioDashboard from '@/videos/RoamioDashboard.mp4';
import RoamioFull from '@/videos/RoamioFull.mp4';

export default function Page() {
  return (
    <div>
      <p className="text-[44px]"> Web Development </p>
      <br />
      <p className="text-[34px]"> 2023 Summer -- Orbital Project 'Roamio' </p>
      <br />

      <p>
        In the summer of 2023, I joined the Orbital Programme at the National
        University of Singapore. <br />
        We were tasked with implementing a personal project from scratch. <br />
        Hence, my partner and I created a travel-planning web application that
        earned the highest level of achievement, 'Artemis'.
      </p>
      <br />

      <p>
        Roamio may be accessed at{' '}
        <a href="roamio.vercel.app" target="_blank" className="text-blue-500">
          roamio.vercel.app
        </a>
        . However, it may not be fully functioning due to free pricing plans.
      </p>
      <br />

      <p>
        Tech used: Next.js, Prisma, Planetscale, MySQL, Tailwind, Mantine UI
      </p>
      <br />

      <p>Videos: Landing page, Dashboard, Final Pitch Video</p>
      <br />
      <Video src={RoamioLanding} />
      <br />
      <Video src={RoamioDashboard} />
      <br />
      <Video src={RoamioFull} />
    </div>
  );
}
