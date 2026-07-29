import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  message: string;
  websiteUrl?: string; // honeypot — real users never fill this in
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot triggered — likely a bot. Respond as if successful without processing.
  if (body.websiteUrl) {
    return NextResponse.json({ ok: true, message: 'Message received.' }, { status: 200 });
  }

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  }

  // TODO before launch: forward this to a real inbox or ticketing tool.
  // Same options as app/api/join/route.ts (Resend/Postmark email, database, or CRM).

  console.log('New Kitoko Hearth contact message received:', { name, email });

  return NextResponse.json({ ok: true, message: 'Message received.' }, { status: 200 });
}
