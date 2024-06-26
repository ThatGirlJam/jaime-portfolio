import Video from 'next-video';
import RoamioLanding from '@/videos/RoamioLanding.mp4';

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
        <br />
        Roamio may be accessed at roamio.vercel.app. However, as it makes use of
        free pricing plans, it may not be fully functioning as of now.
      </p>
      <br />
      <p>
        Tech used: Next.js, Prisma, Planetscale, MySQL, Tailwind, Mantine UI
      </p>
      <br />
      <p>Videos: Landing page, </p>
      <Video src={RoamioLanding} className="w-100 h-100" />
    </div>
  );
}
