'use client';

import { HeroGeometric } from '@/components/sections/HeroGeometric';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { SparklesCore } from '@/components/ui/sparkles';
import { Code, Smartphone, Megaphone, Search, Zap, Rocket, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const services: BentoItem[] = [
    {
        title: "Modern Web Applications",
        description: "Fully responsive web apps with real-time content management and custom admin panels.",
        icon: <Code className="w-4 h-4 text-purple-500" />,
        status: "Full-Stack",
        tags: ["React", "Next.js", "Real-time"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Multi-Vendor Platforms",
        description: "Complete marketplace solutions with vendor management and comprehensive admin panels.",
        icon: <Smartphone className="w-4 h-4 text-emerald-500" />,
        status: "Admin Panel",
        tags: ["Vendors", "Analytics", "Payments"],
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
        title: "SEO & Maintenance",
        description: "Complete SEO optimization and ongoing project maintenance to keep your application running smoothly.",
        icon: <Megaphone className="w-4 h-4 text-rose-500" />,
        status: "Ongoing",
        tags: ["SEO", "Updates", "Security"],
        colSpan: 2,
    },
];


export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [statsCount, setStatsCount] = useState({ projects: 0, clients: 0, years: 0 });

  useEffect(() => {
    setIsMounted(true);
    
    // Animate stats
    const animateStats = () => {
      const targets = { projects: 200, clients: 150, years: 5 };
      const duration = 2000;
      const steps = 50;
      const stepTime = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setStatsCount({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          years: Math.floor(targets.years * progress)
        });
        
        if (step >= steps) clearInterval(timer);
      }, stepTime);
    };
    
    setTimeout(animateStats, 1500);
  }, []);

  return (
    <>
      {isMounted ? (
        <HeroGeometric 
          badge="Tech Field Solution"
          title1="Unlock Your"
          title2="Digital Potential"
        />
      ) : (
        <div className="h-[80vh] md:h-screen w-full flex items-center justify-center bg-background" />
      )}
      
      {/* Enhanced Services Section */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02]" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {isMounted && (
            <>
              <SparklesCore
                id="home-sparkles"
                background="transparent"
                minSize={0.3}
                maxSize={0.8}
                particleDensity={60}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
              <ShootingStars
                starColor="#8B5CF6"
                trailColor="#06B6D4"
                minSpeed={8}
                maxSpeed={18}
                minDelay={2000}
                maxDelay={4000}
                starWidth={12}
                starHeight={2}
              />
            </>
          )}
        </div>
        
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-16 animate-float-slow" style={{ animationDelay: '0s' }}>
            <Rocket className="h-8 w-8 text-purple-400/20" />
          </div>
          <div className="absolute top-32 right-20 animate-float-slow" style={{ animationDelay: '2s' }}>
            <Zap className="h-10 w-10 text-blue-400/20" />
          </div>
          <div className="absolute bottom-32 left-20 animate-float-slow" style={{ animationDelay: '4s' }}>
            <Star className="h-6 w-6 text-yellow-400/20" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-8 animate-glow-purple">
              <Rocket className="w-4 h-4 text-purple-500 animate-pulse" />
              <span className="text-sm font-medium text-purple-600">Powering Digital Innovation</span>
            </div>
            
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
              Our Expertise,
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-gradient-shift"> Your Advantage</span>
            </h2>
            
            <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              From modern web applications to multi-vendor platforms, we deliver complete tech solutions with real-time content management and ongoing maintenance support.
            </p>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16">
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {statsCount.projects}+
                </div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {statsCount.clients}+
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {statsCount.years}+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <BentoGrid items={services} />
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        
        @keyframes glow-purple {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
          }
        }
        
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-glow-purple {
          animation: glow-purple 2s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>
    </>
  );
}
