'use client';

import Image from 'next/image';
import { Award, HeartHandshake, Lightbulb, Users } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { useEffect, useState } from 'react';

const teamMembers = [
  { name: 'Alice Johnson', role: 'Founder & CEO', image: 'https://picsum.photos/300/300', hint: 'woman portrait' },
  { name: 'Bob Williams', role: 'Lead Developer', image: 'https://picsum.photos/300/300', hint: 'man portrait' },
  { name: 'Charlie Brown', role: 'Head of Design', image: 'https://picsum.photos/300/300', hint: 'designer portrait' },
  { name: 'Diana Miller', role: 'Growth Strategist', image: 'https://picsum.photos/300/300', hint: 'professional woman' },
];

const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.' },
    { icon: Users, title: 'Collaboration', description: 'We believe the best results come from working closely with our clients and each other.' },
    { icon: Award, title: 'Excellence', description: 'We are committed to the highest standards of quality in everything we do.' },
    { icon: HeartHandshake, title: 'Integrity', description: 'We operate with transparency and honesty, building lasting trust with our partners.' },
];

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-background">
      {isMounted ? <BackgroundPaths title="About NextSms" /> : <div className="h-[60vh] w-full bg-background" />}

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight">Our Mission & Values</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Our mission is to empower businesses with transformative digital solutions. We specialize in creating high-performance web and mobile applications, backed by strategic digital marketing and SEO to ensure your project reaches its full potential.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {values.map(value => (
                        <div key={value.title} className="bg-secondary p-6 rounded-lg">
                            <value.icon className="h-8 w-8 text-primary mb-3" />
                            <h3 className="font-bold text-lg">{value.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight">Meet the Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The brilliant minds behind our success. We are a diverse team of experts united by a passion for technology and innovation.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative h-48 w-48 mx-auto mb-4">
                  <Image src={member.image} alt={member.name} width={300} height={300} objectFit="cover" className="rounded-full" data-ai-hint={member.hint} />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
