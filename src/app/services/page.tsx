import { Code, Megaphone, Palette, Rocket, Search, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const serviceCategories = [
  {
    id: 'ui-ux',
    icon: Palette,
    title: 'UI/UX Design',
    summary: 'We create engaging, user-centric digital experiences that are both beautiful and intuitive. Our design process focuses on understanding user needs to deliver products that are a joy to use.',
    image: 'https://placehold.co/600x400.png',
    hint: 'design wireframe',
    benefits: [
      'User-centered design process',
      'Interactive prototypes and wireframes',
      'Consistent design systems',
      'Enhanced user satisfaction and retention',
    ]
  },
  {
    id: 'development',
    icon: Code,
    title: 'Web Development',
    summary: 'From powerful web applications to stunning marketing sites, we build fast, secure, and scalable solutions using modern technologies. Our code is clean, efficient, and built to last.',
    image: 'https://placehold.co/600x400.png',
    hint: 'code editor',
    benefits: [
      'Front-end and back-end development',
      'E-commerce and platform solutions',
      'API integrations and development',
      'Ongoing maintenance and support',
    ]
  },
  {
    id: 'growth',
    icon: Rocket,
    title: 'Growth Strategy',
    summary: 'We help you scale your business with data-informed growth strategies. We identify key metrics, optimize your funnel, and implement tactics that drive sustainable user acquisition and growth.',
    image: 'https://placehold.co/600x400.png',
    hint: 'growth chart',
    benefits: [
      'Conversion rate optimization (CRO)',
      'A/B testing and experimentation',
      'Customer lifecycle marketing',
      'Data analysis and insights',
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <header className="pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Comprehensive solutions to design, build, and grow your digital product.
          </p>
        </div>
      </header>

      <div className="divide-y divide-border">
        {serviceCategories.map((service, index) => (
          <section key={service.id} id={service.id} className="py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative h-80 lg:h-96 w-full ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl shadow-lg"
                    data-ai-hint={service.hint}
                  />
                </div>
                <div>
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight">{service.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground">{service.summary}</p>
                  <ul className="mt-6 space-y-2">
                    {service.benefits.map(benefit => (
                      <li key={benefit} className="flex items-center gap-3">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-8">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
