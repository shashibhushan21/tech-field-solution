'use server'

import { optimizeContent, type OptimizeContentInput } from '@/ai/flows/content-optimization';

export async function handleOptimizeContent(input: OptimizeContentInput) {
  try {
    const result = await optimizeContent(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error optimizing content:', error);
    // This is a simplified error message. In a real app, you might want to log this
    // and return a more user-friendly error.
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: `Failed to optimize content. ${errorMessage}` };
  }
}
