'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
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
  return (
    <div className="bg-background">
      <header className="pt-32 pb-16 md:pt-48 md:pb-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            We take pride in the solutions we've delivered. Explore a selection of our projects that have made a real impact.
          </p>
        </div>
      </header>
      
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
