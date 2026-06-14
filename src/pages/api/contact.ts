import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString();
    const email = data.get('email')?.toString();
    const message = data.get('message')?.toString();
    const turnstileToken = data.get('cf-turnstile-response')?.toString();
    const tag = data.get('tag')?.toString();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    if (!turnstileToken) {
      return new Response(JSON.stringify({ error: "Turnstile verification missing." }), { status: 403 });
    }

    const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${import.meta.env.TURNSTILE_SECRET_KEY_PROD}&response=${turnstileToken}`,
    });

    const verificationResult = await verifyResponse.json() as any;

    if (!verificationResult.success) {
      return new Response(JSON.stringify({ error: "Bot verification failed." }), { status: 403 });
    }

    const resend = new Resend(import.meta.env.RESEND_API_KEY);
    const subjectTag = tag ? ` about ${tag}` : '';

    const { error } = await resend.emails.send({
      from: 'hello@virtexlabs.com',
      to: 'virtexlabs27@gmail.com',
      subject: `New Portfolio Lead from ${name}${subjectTag}`,
      text: `Email: ${email}\nMessage:\n${message}`,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};
