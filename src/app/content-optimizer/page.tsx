import { ContentOptimizerClient } from '@/components/ContentOptimizerClient';

export default function ContentOptimizerPage() {
  return (
    <div className="bg-background min-h-screen">
      <header className="pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter">
            AI Content Optimizer
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Refine your message with the power of AI. Enter your content, choose a style, and let our tool suggest optimized versions to better match your brand's voice.
          </p>
        </div>
      </header>

      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <ContentOptimizerClient />
        </div>
      </main>
    </div>
  );
}
