'use client';

import Image from 'next/image';
import { Award, HeartHandshake, Lightbulb, Users } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const teamMembers = [
  { name: 'Sarah Chen', role: 'Founder & CEO', image: 'https://picsum.photos/300/300?random=1', hint: 'woman portrait', bio: 'Tech entrepreneur with 10+ years in digital solutions' },
  { name: 'Michael Rodriguez', role: 'Lead Developer', image: 'https://picsum.photos/300/300?random=2', hint: 'man portrait', bio: 'Full-stack expert specializing in modern web technologies' },
  { name: 'Emily Watson', role: 'UI/UX Designer', image: 'https://picsum.photos/300/300?random=3', hint: 'designer portrait', bio: 'Creative designer focused on user-centered experiences' },
  { name: 'David Kim', role: 'SEO Specialist', image: 'https://picsum.photos/300/300?random=4', hint: 'professional man', bio: 'Digital marketing expert with proven SEO strategies' },
  { name: 'Alex Johnson', role: 'DevOps Engineer', image: 'https://picsum.photos/300/300?random=5', hint: 'tech professional', bio: 'Cloud infrastructure specialist with AWS and Docker expertise' },
  { name: 'Lisa Park', role: 'Project Manager', image: 'https://picsum.photos/300/300?random=6', hint: 'business woman', bio: 'Agile project management with 8+ years in tech delivery' },
  { name: 'James Wilson', role: 'Backend Developer', image: 'https://picsum.photos/300/300?random=7', hint: 'developer portrait', bio: 'API and database expert with Node.js and Python skills' },
  { name: 'Maria Garcia', role: 'QA Engineer', image: 'https://picsum.photos/300/300?random=8', hint: 'professional woman', bio: 'Quality assurance specialist ensuring bug-free applications' },
];

const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'Cutting-edge technology solutions that drive business growth and digital transformation.' },
    { icon: Users, title: 'Partnership', description: 'Close collaboration with clients to understand needs and deliver tailored solutions.' },
    { icon: Award, title: 'Quality', description: 'Premium code standards and rigorous testing ensure reliable, scalable applications.' },
    { icon: HeartHandshake, title: 'Support', description: 'Ongoing maintenance and support to keep your digital assets running smoothly.' },
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '25+', label: 'Happy Clients' },
  { number: '3+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' },
];

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-background">
      {isMounted ? <BackgroundPaths title="About Tech Field Solution" /> : <div className="h-[60vh] w-full bg-background" />}

      {/* Mission Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02]" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Transforming Ideas Into
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Digital Reality</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We specialize in creating modern, responsive web applications and multi-vendor platforms with intuitive admin panels. 
              Our expertise spans real-time content management systems, SEO optimization, and comprehensive post-deployment maintenance.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={value.title} className="group">
                <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Passionate professionals dedicated to delivering exceptional digital solutions and driving your business forward.
            </p>
          </div>
          <div className="relative overflow-x-auto scrollbar-hide">
            <div className="auto-scroll-container">
              <div className="flex gap-8 auto-scroll-content">
                {[...teamMembers, ...teamMembers].map((member, index) => (
                  <div key={`${member.name}-${index}`} className="group team-card flex-shrink-0 w-72">
                    <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 auto-rotate-card">
                      <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                        <Image 
                          src={member.image} 
                          alt={member.name} 
                          width={96} 
                          height={96} 
                          className="object-cover group-hover:scale-110 transition-transform duration-300" 
                          data-ai-hint={member.hint} 
                        />
                      </div>
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                      <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into powerful digital solutions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                onClick={() => window.location.href = '/contact'}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = '/services'}
              >
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes autoRotate {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: rotateX(2deg) rotateY(5deg);
          }
          50% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          75% {
            transform: rotateX(-2deg) rotateY(-5deg);
          }
          100% {
            transform: rotateX(0deg) rotateY(0deg);
          }
        }
        
        @keyframes autoScrollX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .auto-rotate-card {
          animation: autoRotate 4s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        
        .team-card:hover .auto-rotate-card {
          animation-play-state: paused;
        }
        
        .auto-scroll-container {
          height: 100%;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .auto-scroll-content {
          animation: autoScrollX 30s linear infinite;
        }
        
        .auto-scroll-container:hover .auto-scroll-content,
        .overflow-x-auto:hover .auto-scroll-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
