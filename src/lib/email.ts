import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string;
  subject: string;
  html?: string;
  text?: string;
}) {
  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to,
      subject,
      html,
      text,
    });
    return { success: true };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
}

export const emailTemplates = {
  contactInquiry: (data: { name: string; email: string; message: string }) => ({
    subject: 'New Contact Inquiry - Tech Field Solution',
    html: `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  }),
  
  projectRequest: (data: { name: string; service: string; budget: string }) => ({
    subject: 'New Project Request - Tech Field Solution',
    html: `
      <h2>New Project Request</h2>
      <p><strong>Client:</strong> ${data.name}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Budget:</strong> ${data.budget}</p>
    `,
  }),
  
  welcomeEmail: (name: string) => ({
    subject: 'Welcome to Tech Field Solution',
    html: `
      <h2>Welcome ${name}!</h2>
      <p>Thank you for choosing Tech Field Solution. We'll be in touch soon.</p>
    `,
  }),
};