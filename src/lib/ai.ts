import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function optimizeContent(content: string, style: string) {
  try {
    const prompt = `Please optimize the following content to be ${style}. Keep the core message but improve the ${style === 'more concise' ? 'brevity' : style === 'more professional' ? 'professionalism' : style === 'more casual' ? 'casual tone' : style === 'more descriptive' ? 'detail and description' : 'boldness and impact'}:

Content: ${content}

Optimized version:`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a professional content optimizer. Provide only the optimized content without any additional commentary.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return {
      success: true,
      optimizedContent: response.choices[0]?.message?.content?.trim() || content,
    };
  } catch (error) {
    console.error('AI optimization error:', error);
    return {
      success: false,
      error: 'Failed to optimize content',
    };
  }
}

export async function generateProjectSuggestions(serviceType: string, requirements: string) {
  try {
    const prompt = `Based on the service type "${serviceType}" and requirements "${requirements}", provide 3 specific project suggestions with estimated timelines and key features. Format as JSON array with objects containing: title, description, timeline, features array.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a tech consultant. Provide practical project suggestions in valid JSON format.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 800,
      temperature: 0.8,
    });

    const suggestions = JSON.parse(response.choices[0]?.message?.content || '[]');
    return { success: true, suggestions };
  } catch (error) {
    console.error('AI suggestions error:', error);
    return { success: false, error: 'Failed to generate suggestions' };
  }
}