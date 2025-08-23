'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SpiralAnimation } from "@/components/ui/spiral-animation";
import { useState, useEffect } from "react";
import Link from "next/link";

const projects = [
  { title: "Project Alpha", category: "Web Development", image: "https://placehold.co/600x400.png", hint: "website mockup" },
  { title: "Project Beta", category: "UI/UX Design", image: "https://placehold.co/600x400.png", hint: "app design" },
  { title: "Project Gamma", category: "Growth Strategy", image: "https://placehold.co/600x400.png", hint: "analytics dashboard" },
  { title: "Project Delta", category: "Web Development", image: "https://placehold.co/600x400.png", hint: "saas interface" },
  { title: "Project Epsilon", category: "Digital Marketing", image: "https://placehold.co/600x400.png", hint: "social media" },
  { title: "Project Zeta", category: "UI/UX Design", image: "https://placehold.co/600x400.png", hint: "mobile app" },
];

export default function PortfolioPage() {
    const [startVisible, setStartVisible] = useState(false)
  
  // Fade in the start button after animation loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartVisible(true)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-background">
       <header className="fixed inset-0 w-full h-screen overflow-hidden bg-black -z-10">
        <div className="absolute inset-0">
            <SpiralAnimation />
        </div>
        <div 
            className={`
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
            transition-all duration-1500 ease-out
            ${startVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
        >
            <div
            className="
                text-white text-4xl md:text-6xl tracking-[0.2em] uppercase font-extralight text-center
            "
            >
            <h1 className="font-headline font-extrabold tracking-tighter text-foreground">Our Work</h1>
             <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                We take pride in the solutions we've delivered.
            </p>
            </div>
        </div>
    </header>
    <div className="pt-[100vh]">
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden group bg-card border-border">
                <div className="relative h-60">
                  <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" data-ai-hint={project.hint} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                  <h3 className="font-bold text-xl text-foreground">{project.title}</h3>
                  <Button variant="link" className="p-0 mt-2 text-primary">
                    View Project &rarr;
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}