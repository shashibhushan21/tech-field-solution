'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { SpiralAnimation } from "@/components/ui/spiral-animation";
import { useState, useEffect } from 'react';

const projects = [
  { title: "Project Alpha", category: "Web Development", image: "https://picsum.photos/600/400", hint: "website mockup" },
  { title: "Project Beta", category: "UI/UX Design", image: "https://picsum.photos/600/400", hint: "app design" },
  { title: "Project Gamma", category: "Growth Strategy", image: "https://picsum.photos/600/400", hint: "analytics dashboard" },
  { title: "Project Delta", category: "Web Development", image: "https://picsum.photos/600/400", hint: "saas interface" },
  { title: "Project Epsilon", category: "Digital Marketing", image: "https://picsum.photos/600/400", hint: "social media" },
  { title: "Project Zeta", category: "UI/UX Design", image: "https://picsum.photos/600/400", hint: "mobile app" },
];

function PortfolioHeader() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div 
          className="
            text-white text-md tracking-[0.2em] uppercase font-extralight
          "
        >
          Our Work
        </div>
      </div>
    </div>
  )
}


export default function PortfolioPage() {
  return (
    <div className="bg-background">
      <PortfolioHeader />
      
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden group bg-card border-border">
                <div className="relative h-60">
                  <Image src={project.image} alt={project.title} width={600} height={400} objectFit="cover" data-ai-hint={project.hint} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                  <h3 className="font-bold text-xl text-foreground">{project.title}</h3>
                  <Button variant="link" className="p-0 mt-2 text-primary" asChild>
                    <Link href="#">View Project &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
