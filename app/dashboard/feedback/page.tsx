import Link from 'next/link';
import { ChatBubbleLeftRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import FeedbackForm from './feedback-form';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto py-5 px-4 sm:py-6 sm:px-5 md:py-8 md:px-6">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-grey hover:text-pitch-black mb-6 sm:mb-8 transition-colors touch-manipulation min-h-[44px] items-center"
      >
        <ArrowLeftIcon className="h-4 w-4 shrink-0" />
        Back to Dashboard
      </Link>
      <div className="mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-graphite mb-4 sm:mb-6">
          <ChatBubbleLeftRightIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-3xl sm:text-4xl md:text-5xl font-bold text-pitch-black mb-3 sm:mb-4`}>
          Feedback
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-grey max-w-xl">
          Your thoughts help me improve. Share feedback about this portfolio or anything you’d like to see (especially for the AYNTK section)!
        </p>
      </div>
      <div className="rounded-xl sm:rounded-2xl bg-platinum border border-grey/20 p-4 sm:p-6 md:p-8">
        <p className="text-grey mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
          You can reach me via email at{' '}
          <a href="mailto:jaimengjm@gmail.com" className="text-pale-oak font-medium hover:underline">
            jaimengjm@gmail.com
          </a>
          , or connect on{' '}
          <a
            href="https://www.linkedin.com/in/jaime-ng-jm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pale-oak font-medium hover:underline"
          >
            LinkedIn
          </a>
          . Or send feedback with the form below.
        </p>
        <FeedbackForm />
      </div>
    </div>
  );
}
