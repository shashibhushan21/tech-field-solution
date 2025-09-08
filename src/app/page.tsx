'use client';

import { HeroGeometric } from '@/components/sections/HeroGeometric';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';
import { Code, Smartphone, Megaphone, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

const services: BentoItem[] = [
    {
        title: "Web Application Development",
        description: "Custom web solutions that are scalable, secure, and deliver exceptional user experiences.",
        icon: <Code className="w-4 h-4 text-purple-500" />,
        status: "Full-Stack",
        tags: ["React", "Next.js", "Node"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps that engage users and drive business growth.",
        icon: <Smartphone className="w-4 h-4 text-emerald-500" />,
        status: "iOS & Android",
        tags: ["Swift", "Kotlin", "React Native"],
    },
    {
        title: "SEO Optimization",
        description: "Boost your online visibility and rank higher in search results with our proven SEO strategies.",
        icon: <Search className="w-4 h-4 text-blue-500" />,
        tags: ["On-Page", "Off-Page"],
        colSpan: 1,
        status: "Active",
    },
    {
        title: "Digital Marketing",
        description: "Comprehensive marketing campaigns to build your brand and connect with your target audience.",
        icon: <Megaphone className="w-4 h-4 text-rose-500" />,
        status: "Campaigns",
        tags: ["SMM", "PPC", "Content"],
        colSpan: 2,
    },
];


export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted ? (
        <HeroGeometric 
          badge="NextSms"
          title1="Unlock Your"
          title2="Digital Potential"
        />
      ) : (
        <div className="h-[80vh] md:h-screen w-full flex items-center justify-center bg-background" />
      )}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
              Our Expertise, Your Advantage
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From initial concept to final launch and beyond, we provide the full spectrum of services needed to make your digital product a success.
            </p>
          </div>
          <div className="mt-12">
            <BentoGrid items={services} />
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
