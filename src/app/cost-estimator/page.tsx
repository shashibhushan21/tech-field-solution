import { CostEstimatorClient } from '@/components/CostEstimatorClient';

export default function CostEstimatorPage() {
  return (
    <div className="bg-background min-h-screen">
      <header className="pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter">
            Project Cost Estimator
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Get a real-time estimate for your project. Select the services and features you need to see an approximate cost. This tool provides a ballpark figure to help you budget.
          </p>
        </div>
      </header>

      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <CostEstimatorClient />
        </div>
      </main>
    </div>
  );
}
