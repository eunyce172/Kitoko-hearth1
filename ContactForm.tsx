'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', message: '' };
type Errors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Please add a message.';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    // Placeholder submit — connect to a real API route or form backend before launch.
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus('submitted');
  }

  if (status === 'submitted') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        className="text-center py-14 px-6"
      >
        <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-5" aria-hidden="true" />
        <h2 className="font-display font-bold text-2xl text-brown dark:text-cream mb-2">Message sent</h2>
        <p className="text-charcoal/70 dark:text-cream/70">
          Thanks for reaching out &mdash; we&rsquo;ll reply to {values.email} soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-brown dark:text-cream mb-2">
          Full Name
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={inputClass(!!errors.name)}
        />
        <ErrorText id="contact-name-error" error={errors.name} />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-brown dark:text-cream mb-2">
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={inputClass(!!errors.email)}
        />
        <ErrorText id="contact-email-error" error={errors.email} />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-brown dark:text-cream mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={inputClass(!!errors.message)}
        />
        <ErrorText id="contact-message-error" error={errors.message} />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-hearth-gradient text-cream font-display font-semibold py-4 shadow-soft hover:shadow-lift transition-shadow disabled:opacity-60"
      >
        {status === 'submitting' && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
        {status === 'submitting' ? 'Sending\u2026' : 'Send Message'}
      </button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl bg-cream dark:bg-brown-deep border px-4 py-3 text-charcoal dark:text-cream placeholder:text-charcoal/40 dark:placeholder:text-cream/40 focus-visible:outline-2 focus-visible:outline-gold transition-colors ${
    hasError ? 'border-red-500' : 'border-brown/15 dark:border-cream/15'
  }`;
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  return (
    <AnimatePresence>
      {error && (
        <motion.p
          id={id}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          role="alert"
          className="mt-1.5 text-xs text-red-500 font-medium"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
