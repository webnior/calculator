import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, platform } = await request.json();
    
    const data = await resend.emails.send({
      from: 'Lead Form <onboarding@resend.dev>',
      to: ['technovitasolution@gmail.com'], 
      subject: `New Lead from ${platform} Calculator`,
      html: `
        <h2>New Lead from ${platform} Calculator</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Platform:</strong> ${platform}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
