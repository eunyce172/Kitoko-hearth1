import { NextRequest, NextResponse } from 'next/server';

interface JoinPayload {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  school: string;
  programme: string;
  reason: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: Partial<JoinPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { fullName, email, phone, age, school, programme, reason } = body;

  if (!fullName?.trim() || !email?.trim() || !phone?.trim() || !age || !school?.trim() || !programme || !reason?.trim()) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  }

  const ageNum = Number(age);
  if (Number.isNaN(ageNum) || ageNum < 10 || ageNum > 19) {
    return NextResponse.json({ error: 'Programmes are designed for ages 10\u201319.' }, { status: 400 });
  }

  // TODO before launch: persist the application and notify the team. Common options:
  //  - Send a notification email (e.g. Resend, Postmark, or Nodemailer + SMTP)
  //  - Save to a database (e.g. Supabase, Postgres via Prisma) or a Google Sheet
  //  - Forward to a CRM / mailing list (e.g. Mailchimp, Airtable)
  // Example with Resend (npm install resend, set RESEND_API_KEY in .env.local):
  //
  //   import { Resend } from 'resend';
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'Kitoko Hearth <applications@kitokohearth.org>',
  //     to: 'team@kitokohearth.org',
  //     subject: `New application: ${fullName} — ${programme}`,
  //     text: `${fullName} (${email}, ${phone}) — age ${age}, ${school}\n\nProgramme: ${programme}\n\n${reason}`,
  //   });

  console.log('New Kitoko Hearth application received:', { fullName, email, programme });

  return NextResponse.json({ ok: true, message: 'Application received.' }, { status: 200 });
}
