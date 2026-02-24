'use server';

import { z } from 'zod';

const feedbackSchema = z.object({
  name: z.string().max(120).optional(),
  email: z.string().email('Please enter a valid email address'),
  category: z.enum(['general', 'bug', 'suggestion', 'other']).optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be at most 5000 characters'),
});

export type FeedbackState = { success?: boolean; error?: string };

export async function submitFeedback(
  _prevState: FeedbackState,
  formData: FormData
): Promise<FeedbackState> {
  const raw = {
    name: formData.get('name') ?? undefined,
    email: formData.get('email') ?? '',
    category: formData.get('category') ?? undefined,
    message: formData.get('message') ?? '',
  };

  const parsed = feedbackSchema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const message =
      first.message?.[0] ?? first.email?.[0] ?? first.name?.[0] ?? 'Please check your input.';
    return { error: message };
  }

  const { name, email, category, message } = parsed.data;
  const formId = process.env.FORMSPREE_FORM_ID;

  if (formId) {
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name ?? undefined,
          email,
          category: category ?? 'general',
          message,
        }),
      });
      if (!res.ok) {
        return { error: 'Something went wrong. Please try again or email jaimengjm@gmail.com.' };
      }
    } catch {
      return { error: 'Failed to send. Please try again or email jaimengjm@gmail.com.' };
    }
  }

  return { success: true };
}
