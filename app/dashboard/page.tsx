import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center py-10 px-6">
      <div className="max-w-4xl w-full">
        <h1 className={`${lusitana.className} text-5xl md:text-6xl font-bold text-pitch-black mb-8 text-center`}>
          Hi there!
        </h1>
        
        <div className="w-full max-w-md mx-auto mb-8">
          <div className="rounded-2xl bg-platinum p-6 border border-grey/20 shadow-sm">
            <div className="flex justify-center">
              <Image
                src="/jaime-pic.jpg"
                width={350}
                height={350}
                className="rounded-xl border border-grey/20 shadow-md"
                alt="Photo of Jaime"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-2xl md:text-3xl font-semibold text-pitch-black mb-6">
            My name is Jaime Ng.
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-6 mb-12">
          <p className="text-lg md:text-xl text-grey leading-relaxed">
            I&apos;m a Year 4 computer science student currently based in Singapore (previously SF Bay) who enjoys creating something with my own two hands.
          </p>
          <p className="text-lg md:text-xl text-grey leading-relaxed">
            I have a keen interest in learning more about Software Development and how AI / Machine Learning can play a part in that. As I&apos;m still exploring my passions, I&apos;m eager to learn anything even if it is outside my comfort zone.
          </p>
          <p className="text-lg md:text-xl text-grey leading-relaxed">
            I have outlined some of my projects, experiences and skills on this website for your perusal. This website was built using Next.js too!
          </p>
        </div>

        <div className="border-t border-grey/30 my-12"></div>
        
        <div className="text-center mb-8">
          <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black mb-6`}>
            I would be happy to connect!
          </h2>
          <p className="text-lg md:text-xl text-grey mb-6">
            Feel free to contact me using any of the methods below.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <ul className="space-y-4 text-lg text-grey">
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium text-pitch-black">Github:</span>
              <a
                href="https://github.com/ThatGirlJam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey hover:text-pitch-black transition-colors underline"
              >
                ThatGirlJam
              </a>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium text-pitch-black">Email:</span>
              <a 
                href="mailto:jaimengjm@gmail.com" 
                className="text-grey hover:text-pitch-black transition-colors underline"
              >
                jaimengjm@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="font-medium text-pitch-black">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/jaime-ng-jm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey hover:text-pitch-black transition-colors underline"
              >
                jaime-ng-jm
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
