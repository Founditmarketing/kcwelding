import { Resend } from 'resend';

export default async function handler(req: any, res: any) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is missing from environment variables.');
    return res.status(500).json({ error: 'Mail server configuration error (missing API key)' });
  }
  const resend = new Resend(apiKey);
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields (name, email, message)' });
  }

  try {
    const data = await resend.emails.send({
      from: 'KC Welding <hello@kc-welding.com>',
      to: ['kcwelding175@gmail.com'],
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 2px solid #d4891a; padding-bottom: 10px;">New Message from Contact Form</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${phone ? `<a href="tel:${phone}">${phone}</a>` : 'Not provided'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 4px; border-left: 4px solid #d4891a;">
            <strong style="display: block; margin-bottom: 8px; color: #555;">Message:</strong>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.5; color: #333;">${message}</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Resend Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}
