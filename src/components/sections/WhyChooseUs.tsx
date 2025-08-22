import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Clock, HeartHandshake } from 'lucide-react';
import Image from 'next/image';

const stats = [
  {
    icon: Award,
    value: '100+',
    label: 'Projects Delivered',
    description: 'We have a proven track record of successfully launching digital products across various industries.',
  },
  {
    icon: HeartHandshake,
    value: '95%',
    label: 'Client Satisfaction',
    description: 'Our clients are our partners. We prioritize communication and collaboration to ensure success.',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support',
    description: 'We provide continuous support to ensure your digital assets are always running smoothly and efficiently.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
              A Partner Invested in Your Success
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're more than just a tech agency. We are a team of passionate creators, strategists, and engineers dedicated to helping you achieve your business goals through technology.
            </p>
            <div className="mt-8 space-y-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{stat.value} {stat.label}</h3>
                    <p className="text-muted-foreground mt-1">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 lg:h-full w-full">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Team collaborating"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl shadow-lg"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
