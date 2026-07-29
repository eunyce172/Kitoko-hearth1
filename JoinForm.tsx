'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { programmes } from '@/lib/data';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  school: string;
  programme: string;
  reason: string;
}

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  age: '',
  school: '',
  programme: '',
  reason: '',
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.phone.trim()) errors.phone = 'Phone number is required.';
  const ageNum = Number(values.age);
  if (!values.age) {
    errors.age = 'Age is required.';
  } else if (Number.isNaN(ageNum) || ageNum < 10 || ageNum > 19) {
    errors.age = 'Programmes are designed for ages 10\u201319.';
  }
  if (!values.school.trim()) errors.school = 'School is required.';
  if (!values.programme) errors.programme = 'Please select a programme of interest.';
  if (!values.reason.trim()) errors.reason = 'Tell us a little about why you want to join.';
  return errors;
}

export default function JoinForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitError(null);
    setStatus('submitting');

    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? 'Something went wrong. Please try again.');
      }

      setStatus('submitted');
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('idle');
    }
  }

  if (status === 'submitted') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 px-6 rounded-2xl bg-white dark:bg-brown shadow-soft"
        role="status"
      >
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-gradient mb-6">
          <CheckCircle2 className="w-8 h-8 text-brown-deep" aria-hidden="true" />
        </span>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-brown dark:text-cream mb-3">
          You&rsquo;re in, {values.fullName.split(' ')[0]}.
        </h2>
        <p className="text-charcoal/70 dark:text-cream/70 max-w-md mx-auto leading-relaxed mb-6">
          Thanks for applying to <strong>{values.programme}</strong>. We&rsquo;ve received your details and a
          mentor from our team will reach out to {values.email} within 3&ndash;5 business days.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initialState);
            setStatus('idle');
          }}
          className="text-sm font-semibold text-gold hover:text-gold-light transition-colors"
        >
          Submit another application
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Kitoko Hearth registration form">
      <AnimatePresence>
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="flex items-start gap-2 text-sm text-red-600 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-xl px-4 py-3"
          >
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
            {submitError}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Full Name" htmlFor="fullName" error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={inputClass(!!errors.fullName)}
          />
        </Field>

        <Field label="Email Address" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClass(!!errors.email)}
          />
        </Field>

        <Field label="Phone Number" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={inputClass(!!errors.phone)}
          />
        </Field>

        <Field label="Age" htmlFor="age" error={errors.age}>
          <input
            id="age"
            name="age"
            type="number"
            min={10}
            max={19}
            value={values.age}
            onChange={(e) => update('age', e.target.value)}
            aria-invalid={!!errors.age}
            aria-describedby={errors.age ? 'age-error' : undefined}
            className={inputClass(!!errors.age)}
          />
        </Field>

        <Field label="School" htmlFor="school" error={errors.school}>
          <input
            id="school"
            name="school"
            type="text"
            autoComplete="organization"
            value={values.school}
            onChange={(e) => update('school', e.target.value)}
            aria-invalid={!!errors.school}
            aria-describedby={errors.school ? 'school-error' : undefined}
            className={inputClass(!!errors.school)}
          />
        </Field>

        <Field label="Programme of Interest" htmlFor="programme" error={errors.programme}>
          <select
            id="programme"
            name="programme"
            value={values.programme}
            onChange={(e) => update('programme', e.target.value)}
            aria-invalid={!!errors.programme}
            aria-describedby={errors.programme ? 'programme-error' : undefined}
            className={inputClass(!!errors.programme)}
          >
            <option value="">Select a programme&hellip;</option>
            {programmes.map((p) => (
              <option key={p.slug} value={p.title}>{p.title}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Why do you want to join?" htmlFor="reason" error={errors.reason}>
        <textarea
          id="reason"
          name="reason"
          rows={4}
          value={values.reason}
          onChange={(e) => update('reason', e.target.value)}
          aria-invalid={!!errors.reason}
          aria-describedby={errors.reason ? 'reason-error' : undefined}
          className={inputClass(!!errors.reason)}
        />
      </Field>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-hearth-gradient text-cream font-display font-semibold py-4 shadow-soft hover:shadow-lift transition-shadow disabled:opacity-60"
      >
        {status === 'submitting' && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
        {status === 'submitting' ? 'Submitting\u2026' : 'Submit Application'}
      </button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl bg-cream dark:bg-brown-deep border px-4 py-3 text-charcoal dark:text-cream placeholder:text-charcoal/40 dark:placeholder:text-cream/40 focus-visible:outline-2 focus-visible:outline-gold transition-colors ${
    hasError ? 'border-red-500' : 'border-brown/15 dark:border-cream/15'
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-brown dark:text-cream mb-2">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${htmlFor}-error`}
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
    </div>
  );
}
