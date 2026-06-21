import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { generateInquiryEmailHtml } from '../../data/inquiry_mails';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString();
    const email = data.get('email')?.toString();
    const message = data.get('message')?.toString();
    const turnstileToken = data.get('cf-turnstile-response')?.toString();
    const tag = data.get('tag')?.toString();
    const service = data.get('service')?.toString();
    const questionnaireDataStr = data.get('questionnaireData')?.toString();

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Missing name or email" }), { status: 400 });
    }

    if (!service && !message) {
      return new Response(JSON.stringify({ error: "Message is required" }), { status: 400 });
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

    const isProjectInquiry = !!service;
    let subject = '';
    let htmlContent = '';

    if (isProjectInquiry) {
      subject = `🚀 [New Project Inquiry] ${service} - ${name}`;
      htmlContent = generateInquiryEmailHtml(service, name, email, questionnaireDataStr);
    } else {
      const subjectTag = tag ? ` about ${tag}` : '';
      subject = `New Portfolio Lead from ${name}${subjectTag}`;
      htmlContent = `
        <div style="font-family: sans-serif; color: #111;">
          <h2>New Portfolio Lead from ${name}</h2>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${tag ? `<p><strong>Tag:</strong> ${tag}</p>` : ''}
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <h3>Message</h3>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `;
    }

    const { error } = await resend.emails.send({
      from: 'Virtex Labs <hello@virtexlabs.com>',
      to: 'virtexlabs27@gmail.com',
      subject: subject,
      html: htmlContent,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};
