import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { User, Project } from '@/models';
import { sendEmail, emailTemplates } from '@/lib/email';
import { z } from 'zod';

const projectSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceType: z.enum(['WEB_DEVELOPMENT', 'MULTI_VENDOR', 'SEO_MAINTENANCE']),
  title: z.string().min(5, 'Project title is required'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  budget: z.number().min(500, 'Minimum budget is $500'),
  timeline: z.string().min(1, 'Timeline is required'),
  requirements: z.record(z.any()).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = projectSchema.parse(body);

    // Connect to database
    await connectDB();

    // Create or find user
    let user = await User.findOne({ email: validatedData.email });

    if (!user) {
      user = await User.create({
        email: validatedData.email,
        name: validatedData.name,
        phone: validatedData.phone,
        company: validatedData.company,
      });
    }

    // Create project
    const project = await Project.create({
      title: validatedData.title,
      description: validatedData.description,
      category: validatedData.serviceType,
      budget: validatedData.budget,
      timeline: validatedData.timeline,
      userId: user._id,
    });

    // Send notification email
    const emailTemplate = emailTemplates.projectRequest({
      name: validatedData.name,
      service: validatedData.serviceType,
      budget: `$${validatedData.budget}`,
    });

    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
    });

    return NextResponse.json({
      success: true,
      message: 'Project request submitted successfully',
      projectId: project._id,
    });
  } catch (error) {
    console.error('Project creation error:', error);
    
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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID is required' },
        { status: 400 }
      );
    }

    await connectDB();

    const projects = await Project.find({ userId })
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      projects,
    });
  } catch (error) {
    console.error('Projects fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}