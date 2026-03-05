import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || 'chamoda.suraweera@gmail.com';

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured on the server.' },
        { status: 500 },
      );
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [toEmail],
        subject: `New portfolio message from ${name}`,
        reply_to: email,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: 'Failed to send email.', details: errorText },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Unexpected error while sending message.' },
      { status: 500 },
    );
  }
}
