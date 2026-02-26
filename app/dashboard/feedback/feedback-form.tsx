'use client';

import { useFormState } from 'react-dom';
import { useRef, useEffect } from 'react';
import { submitFeedback, type FeedbackState } from './actions';
import { Button } from '@/app/ui/button';
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

const initialState: FeedbackState = {};

export default function FeedbackForm() {
  const [state, formAction] = useFormState(submitFeedback, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state?.success]);

  if (state?.success) {
    return (
      <div className="rounded-xl border border-pale-oak/40 bg-pale-oak/10 p-4 sm:p-6 text-center">
        <p className="text-pitch-black font-medium text-sm sm:text-base">Thanks for your feedback!</p>
        <p className="mt-1 text-xs sm:text-sm text-grey">
          I’ll get back to you if you left your email. You can also reach me at{' '}
          <a href="mailto:jaimengjm@gmail.com" className="text-pale-oak font-medium hover:underline">
            jaimengjm@gmail.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-5 sm:space-y-6">
      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="feedback-name" className="mb-1.5 block text-sm font-medium text-pitch-black">
            Name <span className="text-grey font-normal">(optional)</span>
          </label>
          <div className="relative">
            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-grey shrink-0" />
            <input
              id="feedback-name"
              type="text"
              name="name"
              maxLength={120}
              placeholder="Your name"
              className="block w-full min-h-[44px] rounded-lg border border-grey/30 bg-platinum py-2.5 pl-10 pr-4 text-base text-pitch-black placeholder:text-grey outline-none transition-colors focus:border-pale-oak focus:ring-2 focus:ring-pale-oak/20"
              aria-invalid={Boolean(state?.error)}
            />
          </div>
        </div>
        <div className="min-w-0">
          <label htmlFor="feedback-email" className="mb-1.5 block text-sm font-medium text-pitch-black">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-grey shrink-0" />
            <input
              id="feedback-email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="block w-full min-h-[44px] rounded-lg border border-grey/30 bg-platinum py-2.5 pl-10 pr-4 text-base text-pitch-black placeholder:text-grey outline-none transition-colors focus:border-pale-oak focus:ring-2 focus:ring-pale-oak/20"
              aria-invalid={Boolean(state?.error)}
            />
          </div>
        </div>
      </div>
      <div className="min-w-0">
        <label htmlFor="feedback-category" className="mb-1.5 block text-sm font-medium text-pitch-black">
          Category <span className="text-grey font-normal">(optional)</span>
        </label>
        <select
          id="feedback-category"
          name="category"
          className="block w-full min-h-[44px] rounded-lg border border-grey/30 bg-platinum py-2.5 pl-4 pr-10 text-base text-pitch-black outline-none transition-colors focus:border-pale-oak focus:ring-2 focus:ring-pale-oak/20"
        >
          <option value="general">General</option>
          <option value="suggestion">Suggestion</option>
          <option value="bug">Bug / issue</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="min-w-0">
        <label htmlFor="feedback-message" className="mb-1.5 block text-sm font-medium text-pitch-black">
          Message <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <ChatBubbleBottomCenterTextIcon className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-grey shrink-0" />
          <textarea
            id="feedback-message"
            name="message"
            required
            rows={5}
            minLength={10}
            maxLength={5000}
            placeholder="Share your thoughts, report a bug, or suggest an improvement..."
            className="block w-full min-h-[120px] rounded-lg border border-grey/30 bg-platinum py-2.5 pl-10 pr-4 text-base text-pitch-black placeholder:text-grey outline-none transition-colors focus:border-pale-oak focus:ring-2 focus:ring-pale-oak/20 resize-y"
            aria-invalid={Boolean(state?.error)}
          />
        </div>
        <p className="mt-1 text-xs text-grey">Min 10 characters, max 5000.</p>
      </div>
      {state?.error && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {state.error}
        </p>
      )}
      <Button
        type="submit"
        className="w-full min-h-[44px] rounded-lg bg-graphite px-4 py-3 sm:py-2.5 text-platinum hover:bg-pitch-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-graphite sm:w-auto touch-manipulation"
      >
        Send feedback
      </Button>
    </form>
  );
}
