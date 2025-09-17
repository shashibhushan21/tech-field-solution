'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState, use } from "react";

const projects = [
  { 
    slug: "e-commerce-multi-vendor",
    title: "E-Commerce Multi-Vendor Platform", 
    category: "Multi-Vendor Application", 
    fullDescription: "A comprehensive multi-vendor e-commerce platform that allows multiple vendors to sell their products through a single marketplace. Features include vendor registration and management, real-time inventory tracking, integrated payment processing with Stripe, order management system, and detailed analytics dashboard for both vendors and administrators.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    features: ["Vendor Dashboard", "Payment Integration", "Real-time Inventory", "Order Management", "Analytics"],
    images: [
      "https://picsum.photos/800/500?random=1",
      "https://picsum.photos/800/500?random=2",
      "https://picsum.photos/800/500?random=3",
      "https://picsum.photos/800/500?random=4",
      "https://picsum.photos/800/500?random=5"
    ],
    demoUrl: "https://ecommerce-demo.techfieldsolution.com"
  },
  { 
    slug: "real-time-cms",
    title: "Real-Time Content Management System", 
    category: "Web Application", 
    fullDescription: "A modern content management system that allows users to edit content in real-time with live preview functionality. Built with role-based access control, allowing different permission levels for editors, authors, and administrators. Features drag-and-drop content editing, media management, and SEO optimization tools.",
    tech: ["Next.js", "Socket.io", "PostgreSQL"],
    features: ["Live Content Editing", "Role Management", "Media Library", "SEO Tools", "Real-time Preview"],
    images: [
      "https://picsum.photos/800/500?random=6",
      "https://picsum.photos/800/500?random=7",
      "https://picsum.photos/800/500?random=8",
      "https://picsum.photos/800/500?random=9"
    ],
    demoUrl: "https://cms-demo.techfieldsolution.com"
  },
  { 
    slug: "restaurant-management",
    title: "Restaurant Management Platform", 
    category: "Admin Panel", 
    fullDescription: "A comprehensive restaurant management system that handles everything from menu management to order processing and customer analytics. Features include table management, kitchen display system, inventory tracking, staff management, and detailed reporting with charts and analytics.",
    tech: ["React", "Express", "MySQL", "Charts.js"],
    features: ["Menu Management", "Order Tracking", "Kitchen Display", "Staff Management", "Analytics Dashboard"],
    images: [
      "https://picsum.photos/800/500?random=10",
      "https://picsum.photos/800/500?random=11",
      "https://picsum.photos/800/500?random=12",
      "https://picsum.photos/800/500?random=13",
      "https://picsum.photos/800/500?random=14",
      "https://picsum.photos/800/500?random=15",
      "https://picsum.photos/800/500?random=16"
    ],
    demoUrl: "https://restaurant-demo.techfieldsolution.com"
  }
];

export async function generateStaticParams() {
  return [
    { slug: 'e-commerce-multi-vendor' },
    { slug: 'real-time-cms' },
    { slug: 'restaurant-management' }
  ];
}

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find(p => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % project!.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + project!.images.length) % project!.images.length);
  };
  
  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/portfolio">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="space-y-4">
              <div className="relative group">
                <Image
                  src={project.images[selectedImage]}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="rounded-lg shadow-lg w-full"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {project.images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`${project.title} ${index + 1}`}
                    width={120}
                    height={80}
                    className={`rounded-md shadow-sm flex-shrink-0 cursor-pointer transition-all ${
                      selectedImage === index 
                        ? 'ring-2 ring-primary opacity-100' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center">
                {selectedImage + 1} of {project.images.length} images
              </p>
            </div>
          </div>
          
          <div>
            <Badge variant="secondary" className="mb-4">{project.category}</Badge>
            <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {project.fullDescription}
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button asChild>
                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}