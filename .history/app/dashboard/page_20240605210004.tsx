import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 py-10 text-center">
      <h1 className="mb-4 text-4xl font-bold">Hi there!</h1>
      <div className="w-full max-w-md rounded-lg bg-sky-100 py-7 shadow-lg">
        <div className="flex justify-center">
          <Image
            src="/jaime-linkedin-photo.jpeg"
            width={350}
            height={350}
            className="rounded-lg border border-white shadow-md"
            alt="Photo of Jaime"
          />
        </div>
      </div>
      <div className="mt-8 w-full max-w-2xl px-4">
        <p className="mb-4 text-xl">
          My name is Jaime Ng Jia Min. I'm a Year 2 (going on Year 3) computer
          science student who enjoys creating things with my own two hands.
        </p>
        <p className="mb-4 text-xl">
          I have a keen interest in learning more about AI and Machine Learning,
          Software Development, and Cyber Security. As I'm still exploring my
          passions, I'm eager to learn anything, even if it's outside my comfort
          zone.
        </p>
        <p className="mb-8 text-xl">
          I have outlined some of my projects, experiences, and skills on this
          website for your perusal. This website was built using Next.js too!
        </p>
      </div>
      <hr className="my-8 w-1/2 border-dashed border-gray-400" />
      <h2 className="mb-4 text-2xl">I would be happy to connect!</h2>
      <hr className="my-8 w-1/2 border-dashed border-gray-400" />
      <p className="mb-4 text-xl">
        Feel free to contact me using any of the methods below.
      </p>
      <ul className="mb-8 text-xl">
        <li className="mb-2">
          Github:{' '}
          <a
            href="https://github.com/ThatGirlJam"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            link to my GitHub
          </a>
        </li>
        <li className="mb-2">
          Email:{' '}
          <a
            href="mailto:jaimengjm@gmail.com"
            className="text-blue-500 hover:underline"
          >
            jaimengjm@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/jaime-ng-jm/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            link to my LinkedIn Page
          </a>
        </li>
      </ul>
    </div>
  );
}
