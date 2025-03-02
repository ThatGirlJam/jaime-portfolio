import Image from 'next/image';

export default function Page() {
  const imageStyle = {
    borderRadius: '5%',
    border: '1px solid #fff',
  };

  const divStyle = {
    display: 'flex',
    justifyContent: 'center', // Horizontally center the image
  };

  const dashedLineStyle = {
    width: '200px',
    height: '2px',
    border: '1px dashed black',
    margin: '20px auto', // Center the dashed line horizontally
  };

  return (
    <div className="flex  min-h-screen flex-col items-center bg-gray-50 py-10 text-center">
      {' '}
      {/* Apply text-center class to center-align all content */}
      <p className="text-[44px]"> Hi there! </p>
      <br />
      <div className="w-full max-w-md rounded-lg bg-sky-100 py-7 shadow-lg">
        <div className="flex justify-center">
          <Image
            src="/jaime-pic.jpg"
            width={350}
            height={350}
            className="rounded-lg border border-white shadow-md"
            alt="Photo of Jaime"
          />
        </div>
      </div>
      <br />
      <p className="text-[20px]"> My name is Jaime Ng. </p>
      <br />
      <div className="mx-auto max-w-2xl">
        {' '}
        {/* Apply mx-auto class to horizontally center the div */}
        <p className="text-[20px]">
          I`m a Year 3 computer science student currently based in SF Bay who enjoys the
          feeling of creating something with her own two hands. 
        </p>
        <br />
        <p className="text-[20px]">
          I have a keen interest in learning more about AI and Machine Learning,
          Software Development and Cyber Security. As I`m still exploring my
          passions, I`m be eager to learn anything even if it is outside my
          comfort zone.
        </p>
        <br />
        <p className="text-[20px]">
          I have outlined some of my projects, experiences and skills on this
          website for your perusal. This website was built using Next.js too!
        </p>
      </div>
      <br />
      {/* Dashed line */}
      <div style={dashedLineStyle}></div>
      <p className="text-[30px]">I would be happy to connect!</p>
      {/* Dashed line */}
      <div style={dashedLineStyle}></div>
      <br />
      <p className="text-[20px]">
        Feel free to contact me using any of the methods below.
      </p>
      <br />
      <ul>
        <li>
          Github:{' '}
          <a
            href="https://github.com/ThatGirlJam"
            target="_blank"
            className="text-blue-500"
          >
            link to my GitHub
          </a>{' '}
        </li>
        <li>
          Email:{' '}
          <a href="mailto: jaimengjm@gmail.com" className="text-blue-500">
            jaimengjm@gmail.com
          </a>{' '}
        </li>
        <li>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/jaime-ng-jm/"
            target="_blank"
            className="text-blue-500"
          >
            link to my LinkedIn Page
          </a>{' '}
        </li>
      </ul>
    </div>
  );
}
