'use server';
/**
 * @fileOverview A content optimization AI agent.
 *
 * - optimizeContent - A function that handles the content optimization process.
 * - OptimizeContentInput - The input type for the optimizeContent function.
 * - OptimizeContentOutput - The return type for the optimizeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeContentInputSchema = z.object({
  content: z.string().describe('The content to be optimized.'),
  style: z.string().describe('The desired style of the content.'),
});
export type OptimizeContentInput = z.infer<typeof OptimizeContentInputSchema>;

const OptimizeContentOutputSchema = z.object({
  optimizedContent: z.string().describe('The optimized content.'),
});
export type OptimizeContentOutput = z.infer<typeof OptimizeContentOutputSchema>;

export async function optimizeContent(input: OptimizeContentInput): Promise<OptimizeContentOutput> {
  return optimizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeContentPrompt',
  input: {schema: OptimizeContentInputSchema},
  output: {schema: OptimizeContentOutputSchema},
  prompt: `You are a content optimization expert. You will be given content and a desired style. You will then optimize the content to match the style.

Content: {{{content}}}
Style: {{{style}}}

Optimized Content:`, // No Handlebars in output
});

const optimizeContentFlow = ai.defineFlow(
  {
    name: 'optimizeContentFlow',
    inputSchema: OptimizeContentInputSchema,
    outputSchema: OptimizeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      optimizedContent: output!.optimizedContent,
    };
  }
);
