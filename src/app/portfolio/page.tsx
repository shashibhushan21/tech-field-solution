
'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Squares } from "@/components/ui/squares-background";
import { useState, useEffect } from "react";

const projects = [
  { 
    slug: "e-commerce-multi-vendor",
    title: "E-Commerce Multi-Vendor Platform", 
    category: "Multi-Vendor Application", 
    description: "Complete marketplace with vendor dashboard, real-time inventory, and payment integration",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://picsum.photos/600/400", 
    hint: "e-commerce dashboard" 
  },
  { 
    slug: "real-time-cms",
    title: "Real-Time Content Management System", 
    category: "Web Application", 
    description: "Dynamic CMS with live content editing and user role management",
    tech: ["Next.js", "Socket.io", "PostgreSQL"],
    image: "https://picsum.photos/600/400", 
    hint: "cms interface" 
  },
  { 
    slug: "restaurant-management",
    title: "Restaurant Management Platform", 
    category: "Admin Panel", 
    description: "Complete restaurant management with order tracking and analytics dashboard",
    tech: ["React", "Express", "MySQL", "Charts.js"],
    image: "https://picsum.photos/600/400", 
    hint: "restaurant dashboard" 
  },
  { 
    slug: "healthcare-appointment",
    title: "Healthcare Appointment System", 
    category: "Web Application", 
    description: "Patient management system with appointment scheduling and medical records",
    tech: ["Vue.js", "Laravel", "MySQL"],
    image: "https://picsum.photos/600/400", 
    hint: "healthcare interface" 
  },
  { 
    slug: "learning-management",
    title: "Learning Management System", 
    category: "Multi-Vendor Application", 
    description: "Online education platform with instructor panels and student progress tracking",
    tech: ["React", "Node.js", "MongoDB", "Video.js"],
    image: "https://picsum.photos/600/400", 
    hint: "learning platform" 
  },
  { 
    slug: "inventory-management",
    title: "Inventory Management System", 
    category: "Admin Panel", 
    description: "Real-time inventory tracking with automated alerts and reporting",
    tech: ["Angular", "Spring Boot", "PostgreSQL"],
    image: "https://picsum.photos/600/400", 
    hint: "inventory dashboard" 
  },
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
    <div className="relative w-full h-[60vh] overflow-hidden bg-background flex items-center justify-center">
       <div className="absolute inset-0 w-full h-full">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      <div 
        className="relative z-10 text-center"
      >
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter">Our Work</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Real projects showcasing modern web applications, multi-vendor platforms, and admin panel solutions.
        </p>
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
                  <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                  <h3 className="font-bold text-xl text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="link" className="p-0 text-primary" asChild>
                    <Link href={`/portfolio/${project.slug}`}>View Details &rarr;</Link>
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
