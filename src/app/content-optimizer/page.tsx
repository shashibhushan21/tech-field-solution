'use client';

import { ContentOptimizerClient } from '@/components/ContentOptimizerClient';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { SparklesCore } from '@/components/ui/sparkles';
import { Wand2, Zap, Brain, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ContentOptimizerPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [optimizedCount, setOptimizedCount] = useState(0);
  const [savedTime, setSavedTime] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    
    // Animate counters
    const animateCounters = () => {
      const targets = { words: 50000, optimized: 1200, time: 480 };
      const duration = 2500;
      const steps = 60;
      const stepTime = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setWordCount(Math.floor(targets.words * progress));
        setOptimizedCount(Math.floor(targets.optimized * progress));
        setSavedTime(Math.floor(targets.time * progress));
        
        if (step >= steps) clearInterval(timer);
      }, stepTime);
    };
    
    setTimeout(animateCounters, 1200);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02]" />
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          {isMounted && (
            <SparklesCore
              id="content-optimizer-sparkles"
              background="transparent"
              minSize={0.5}
              maxSize={1.2}
              particleDensity={90}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          )}
        </div>
        
        {/* Shooting Stars */}
        <div className="absolute inset-0 z-10">
          {isMounted && (
            <>
              <ShootingStars
                starColor="#9E00FF"
                trailColor="#2EB9DF"
                minSpeed={15}
                maxSpeed={35}
                minDelay={1000}
                maxDelay={3000}
                starWidth={20}
                starHeight={3}
              />
              <ShootingStars
                starColor="#FF0099"
                trailColor="#FFB800"
                minSpeed={10}
                maxSpeed={25}
                minDelay={2000}
                maxDelay={4000}
                starWidth={18}
                starHeight={3}
              />
            </>
          )}
        </div>
        
        {/* Floating AI Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-12 animate-float" style={{ animationDelay: '0s' }}>
            <Brain className="h-8 w-8 text-purple-400/40" />
          </div>
          <div className="absolute top-24 right-20 animate-float" style={{ animationDelay: '1.5s' }}>
            <Wand2 className="h-10 w-10 text-blue-400/40" />
          </div>
          <div className="absolute bottom-32 left-16 animate-float" style={{ animationDelay: '3s' }}>
            <Zap className="h-6 w-6 text-yellow-400/40" />
          </div>
          <div className="absolute top-40 right-40 animate-float" style={{ animationDelay: '2s' }}>
            <Sparkles className="h-7 w-7 text-pink-400/40" />
          </div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6 animate-glow">
              <Wand2 className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-medium text-primary">AI-Powered Content Magic</span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 animate-fade-in-up">
              AI Content
              <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent animate-gradient"> Optimizer</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Transform your content with AI-powered optimization. Enhance clarity, engagement, and brand voice 
              with intelligent suggestions tailored to your audience.
            </p>
            
            {/* Live Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {wordCount.toLocaleString()}+
                </div>
                <div className="text-sm text-muted-foreground">Words Optimized</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent mb-2">
                  {optimizedCount}+
                </div>
                <div className="text-sm text-muted-foreground">Content Pieces</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {savedTime}h
                </div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          {isMounted ? <ContentOptimizerClient /> : null}
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.6);
          }
        }
        
        @keyframes gradient {
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
