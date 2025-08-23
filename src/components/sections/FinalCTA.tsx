import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="bg-card border rounded-2xl p-8 md:p-16 text-center shadow-lg relative overflow-hidden">
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full"></div>
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/5 rounded-full"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Ready to Bloom?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your digital goals. Schedule a free, no-obligation consultation with our experts today.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Let's Build Together <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
