'use client';

import { Code, Smartphone, Megaphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { SparklesCore } from '@/components/ui/sparkles';
import { useState, useEffect } from 'react';

const serviceCategories = [
  {
    id: 'web-development',
    icon: Code,
    title: 'Modern Web Applications',
    summary: 'Full-stack responsive web applications with real-time content management. Users can easily update content in real-time with our intuitive admin panels and modern interfaces.',
    image: 'https://picsum.photos/600/400',
    hint: 'code editor',
    benefits: [
      'Fully responsive design for all devices',
      'Real-time content management system',
      'Modern tech stack (React, Next.js, Node.js)',
      'Custom admin panels with user roles',
    ]
  },
  {
    id: 'multi-vendor',
    icon: Smartphone,
    title: 'Multi-Vendor Applications',
    summary: 'Complete multi-vendor platforms with comprehensive admin panels. Vendors can manage their products, orders, and analytics while admins control the entire ecosystem.',
    image: 'https://picsum.photos/600/400',
    hint: 'mobile app screen',
    benefits: [
      'Vendor management system',
      'Advanced admin panel with analytics',
      'Payment gateway integration',
      'Order management & tracking',
    ]
  },
  {
    id: 'seo-maintenance',
    icon: Megaphone,
    title: 'SEO & Project Maintenance',
    summary: 'Complete SEO optimization and ongoing project maintenance. We ensure your application stays updated, secure, and ranks high in search results.',
    image: 'https://picsum.photos/600/400',
    hint: 'marketing analytics dashboard',
    benefits: [
      'Technical SEO optimization',
      'Post-deployment maintenance',
      'Performance monitoring & updates',
      'Security patches & backups',
    ]
  }
];

export default function ServicesPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-background">
      <header className="relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden">
        <div className="w-full absolute inset-0 h-full">
          {isMounted && (
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          )}
        </div>
        <div className="text-center z-10">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Professional tech services from modern web apps to multi-vendor platforms with complete maintenance support.
          </p>
        </div>
      </header>

      <div className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <div 
                key={service.id} 
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 150}ms` }}
              >

                
                <div className="relative z-10">
                  <div className="mb-6 overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={service.hint}
                    />

                  </div>
                  
                  <div className="mb-4 p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.summary}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li 
                        key={benefit} 
                        className="flex items-center gap-3 text-sm group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary group-hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => window.location.href = `/get-started/${service.id}`}
                  >
                    <span className="flex items-center justify-center gap-2 cursor-pointer">
                      Get Started
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
