import Link from 'next/link';
import { ChatBubbleLeftRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import FeedbackForm from './feedback-form';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-6">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-grey hover:text-pitch-black mb-8 transition-colors"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to Dashboard
      </Link>
      <div className="mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-graphite mb-6">
          <ChatBubbleLeftRightIcon className="h-8 w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
          Feedback
        </h1>
        <p className="text-xl text-grey">
          Your thoughts help me improve. Share feedback about this portfolio or anything you’d like to see (especially for the AYNTK section)!
        </p>
      </div>
      <div className="rounded-2xl bg-platinum border border-grey/20 p-8">
        <p className="text-grey mb-8">
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
