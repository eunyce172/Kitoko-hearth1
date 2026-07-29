'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  // Inline styles only — this replaces the root layout, so app CSS may not be available.
  return (
    <html lang="en">
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F8F5F0',
          fontFamily: 'sans-serif',
          padding: '24px',
        }}
      >
        <div style={{ maxWidth: 480, textAlign: 'center' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4A2412 0%, #D89A2B 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              fontSize: 28,
            }}
          >
            🔥
          </div>
          <h1 style={{ fontWeight: 800, fontSize: 28, color: '#4A2412', marginBottom: 12 }}>
            Something went wrong
          </h1>
          <p style={{ color: '#4A4A4A', marginBottom: 24, lineHeight: 1.6 }}>
            The application hit an unexpected error. Please try again.
          </p>
          <button
            onClick={reset}
            style={{
              background: 'linear-gradient(135deg, #4A2412 0%, #D89A2B 100%)',
              color: '#F8F5F0',
              border: 'none',
              borderRadius: 999,
              padding: '14px 28px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
