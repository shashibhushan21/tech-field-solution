'use client';

import { CostEstimatorClient } from '@/components/CostEstimatorClient';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { SparklesCore } from '@/components/ui/sparkles';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CostEstimatorPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({ projects: 0, savings: 0, accuracy: 0 });

  useEffect(() => {
    setIsMounted(true);
    
    const animateNumbers = () => {
      const targets = { projects: 500, savings: 30, accuracy: 95 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedNumbers({
          projects: Math.floor(targets.projects * progress),
          savings: Math.floor(targets.savings * progress),
          accuracy: Math.floor(targets.accuracy * progress)
        });
        
        if (step >= steps) clearInterval(timer);
      }, stepTime);
    };
    
    setTimeout(animateNumbers, 1000);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02]" />
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          {isMounted && (
            <SparklesCore
              id="cost-estimator-sparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1.0}
              particleDensity={80}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          )}
        </div>
        
        {/* Shooting Stars */}
        <div className="absolute inset-0 z-10">
          {isMounted && (
            <ShootingStars
              starColor="#10B981"
              trailColor="#3B82F6"
              minSpeed={12}
              maxSpeed={28}
              minDelay={1500}
              maxDelay={3500}
              starWidth={16}
              starHeight={2}
            />
          )}
        </div>
        
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <Calculator className="h-8 w-8 text-primary/30" />
          </div>
          <div className="absolute top-32 right-16 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
            <DollarSign className="h-10 w-10 text-secondary/30" />
          </div>
          <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
            <TrendingUp className="h-6 w-6 text-primary/40" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-pulse">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
              <span className="text-sm font-medium text-primary">Free Cost Calculator</span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 animate-fade-in-up">
              Project Cost
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse"> Estimator</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Get an instant, transparent estimate for your digital project. Configure your requirements and see real-time pricing 
              for web applications, mobile apps, and digital marketing services.
            </p>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {animatedNumbers.projects}+
                </div>
                <div className="text-sm text-muted-foreground">Projects Estimated</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {animatedNumbers.savings}%
                </div>
                <div className="text-sm text-muted-foreground">Cost Savings</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {animatedNumbers.accuracy}%
                </div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <CostEstimatorClient />
        </div>
      </main>
      
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
