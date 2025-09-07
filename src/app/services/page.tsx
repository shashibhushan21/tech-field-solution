import { Code, Smartphone, Megaphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { SparklesCore } from '@/components/ui/sparkles';

const serviceCategories = [
  {
    id: 'web-development',
    icon: Code,
    title: 'Web Application Development',
    summary: 'From powerful web applications to stunning marketing sites, we build fast, secure, and scalable solutions using modern technologies. Our code is clean, efficient, and built to last.',
    image: 'https://picsum.photos/600/400',
    hint: 'code editor',
    benefits: [
      'Front-end and back-end development',
      'E-commerce and platform solutions',
      'API integrations and development',
      'Ongoing maintenance and support',
    ]
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    summary: 'We create engaging and intuitive mobile applications for iOS and Android. Whether native or cross-platform, our apps are designed to perform and provide a seamless user experience.',
    image: 'https://picsum.photos/600/400',
    hint: 'mobile app screen',
    benefits: [
      'Native iOS (Swift) & Android (Kotlin)',
      'Cross-platform with React Native',
      'App Store submission and optimization',
      'Push notifications and in-app purchases',
    ]
  },
  {
    id: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing & SEO',
    summary: 'We help you scale your business with data-informed growth strategies. We boost your online presence, drive targeted traffic, and implement tactics that result in sustainable growth.',
    image: 'https://picsum.photos/600/400',
    hint: 'marketing analytics dashboard',
    benefits: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) Advertising',
      'Social Media Marketing (SMM)',
      'Content strategy and creation',
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <header className="relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="text-center z-10">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Comprehensive solutions to build, launch, and grow your digital product.
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
                    width={600}
                    height={400}
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
