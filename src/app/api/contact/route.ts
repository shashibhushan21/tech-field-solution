import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { Inquiry } from '@/models';
import { sendEmail, emailTemplates } from '@/lib/email';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Connect to database
    await connectDB();

    // Save to database
    const inquiry = await Inquiry.create({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      company: validatedData.company,
      subject: validatedData.subject,
      message: validatedData.message,
      status: 'NEW',
    });

    // Send email notification
    const emailTemplate = emailTemplates.contactInquiry({
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message,
    });

    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
    });

    // Send confirmation email to user
    const welcomeTemplate = emailTemplates.welcomeEmail(validatedData.name);
    await sendEmail({
      to: validatedData.email,
      subject: welcomeTemplate.subject,
      html: welcomeTemplate.html,
    });

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      inquiryId: inquiry._id,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}