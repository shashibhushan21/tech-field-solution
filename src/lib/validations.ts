import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const projectRequestSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceType: z.enum(['WEB_DEVELOPMENT', 'MULTI_VENDOR', 'SEO_MAINTENANCE']),
  title: z.string().min(5, 'Project title is required'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  budget: z.number().min(500, 'Minimum budget is $500'),
  timeline: z.string().min(1, 'Timeline is required'),
  features: z.array(z.string()).optional(),
  additionalInfo: z.string().optional(),
});

export const costEstimatorSchema = z.object({
  projectType: z.enum(['WEB_DEVELOPMENT', 'MULTI_VENDOR', 'SEO_MAINTENANCE']),
  complexity: z.enum(['BASIC', 'STANDARD', 'PREMIUM']),
  features: z.array(z.string()),
  timeline: z.enum(['1_MONTH', '2_3_MONTHS', '3_6_MONTHS', '6_PLUS_MONTHS']),
  budget: z.enum(['UNDER_5K', '5K_15K', '15K_50K', '50K_PLUS']),
});

export const contentOptimizerSchema = z.object({
  content: z.string().min(10, 'Content must be at least 10 characters'),
  style: z.enum(['more concise', 'more professional', 'more casual', 'more descriptive', 'bolder']),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ProjectRequestData = z.infer<typeof projectRequestSchema>;
export type CostEstimatorData = z.infer<typeof costEstimatorSchema>;
export type ContentOptimizerData = z.infer<typeof contentOptimizerSchema>;