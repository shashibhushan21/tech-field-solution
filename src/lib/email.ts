import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {
  return await resend.emails.send({
    from: process.env.FROM_EMAIL || 'noreply@techfieldsolution.com',
    to,
    subject,
    html,
  });
};

export const emailTemplates = {
  contactInquiry: ({ name, email, message }: { name: string; email: string; message: string }) => ({
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  }),

  welcomeEmail: (name: string) => ({
    subject: 'Thank you for contacting Tech Field Solution',
    html: `
      <h2>Thank you for reaching out!</h2>
      <p>Hi ${name},</p>
      <p>We've received your message and will get back to you soon.</p>
      <p>Best regards,<br>Tech Field Solution Team</p>
    `,
  }),

  projectRequest: ({ name, service, budget }: { name: string; service: string; budget: string }) => ({
    subject: `New Project Request from ${name}`,
    html: `
      <h2>New Project Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Budget:</strong> ${budget}</p>
    `,
  }),
};