import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Image from 'next/image';

const clientLogos = [
  { src: 'https://placehold.co/120x40.png', alt: 'Client Logo 1', hint: 'company logo' },
  { src: 'https://placehold.co/120x40.png', alt: 'Client Logo 2', hint: 'brand logo' },
  { src: 'https://placehold.co/120x40.png', alt: 'Client Logo 3', hint: 'company brand' },
  { src: 'https://placehold.co/120x40.png', alt: 'Client Logo 4', hint: 'tech logo' },
  { src: 'https://placehold.co/120x40.png', alt: 'Client Logo 5', hint: 'corporate logo' },
];

export function Hero() {
  return (
    <section className="relative bg-secondary overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] dark:bg-grid-slate-400/[0.05] dark:[mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter !leading-[1.1]">
                Unlock Your Digital Potential.
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
                    We Build It. We Grow It.
                </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
                We craft bespoke digital solutions and growth strategies that empower tech companies to achieve new heights of success.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                    <Link href="/contact">
                        Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="/portfolio">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        View Our Work
                    </Link>
                </Button>
            </div>
            <div className="mt-16">
                <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">Trusted by innovative companies</p>
                <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                    {clientLogos.map((logo, index) => (
                        <Image
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            width={120}
                            height={40}
                            data-ai-hint={logo.hint}
                            className="opacity-60 hover:opacity-100 transition-opacity"
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
