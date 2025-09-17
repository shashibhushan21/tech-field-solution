'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, CheckCircle, Clock, DollarSign } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

const services = {
  'web-development': {
    title: 'Modern Web Applications',
    description: 'Get a fully responsive web application with real-time content management',
    features: ['Responsive Design', 'Admin Panel', 'Real-time Updates', 'SEO Optimized'],
    pricing: 'Starting from $2,999',
    timeline: '4-8 weeks',
    packages: [
      { name: 'Basic', price: '$2,999', features: ['5 Pages', 'Basic Admin Panel', 'Mobile Responsive'] },
      { name: 'Professional', price: '$4,999', features: ['10 Pages', 'Advanced Admin Panel', 'Real-time Features', 'SEO Setup'] },
      { name: 'Enterprise', price: '$7,999', features: ['Unlimited Pages', 'Custom Features', 'Multi-user System', 'Full SEO Package'] }
    ]
  },
  'multi-vendor': {
    title: 'Multi-Vendor Applications',
    description: 'Complete marketplace platform with vendor management and admin controls',
    features: ['Vendor Dashboard', 'Payment Integration', 'Order Management', 'Analytics'],
    pricing: 'Starting from $4,999',
    timeline: '6-12 weeks',
    packages: [
      { name: 'Starter', price: '$4,999', features: ['Up to 50 Vendors', 'Basic Dashboard', 'Payment Gateway'] },
      { name: 'Business', price: '$7,999', features: ['Up to 200 Vendors', 'Advanced Analytics', 'Multi-payment Options'] },
      { name: 'Enterprise', price: '$12,999', features: ['Unlimited Vendors', 'Custom Features', 'White-label Solution'] }
    ]
  },
  'seo-maintenance': {
    title: 'SEO & Project Maintenance',
    description: 'Ongoing SEO optimization and complete project maintenance services',
    features: ['Technical SEO', 'Performance Monitoring', 'Security Updates', 'Content Optimization'],
    pricing: 'Starting from $499/month',
    timeline: 'Ongoing',
    packages: [
      { name: 'Basic', price: '$499/month', features: ['Monthly SEO Report', 'Basic Maintenance', 'Security Updates'] },
      { name: 'Professional', price: '$899/month', features: ['Weekly SEO Optimization', 'Performance Monitoring', 'Content Updates'] },
      { name: 'Premium', price: '$1,499/month', features: ['Daily Monitoring', 'Priority Support', 'Custom Optimizations'] }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { id: 'web-development' },
    { id: 'multi-vendor' },
    { id: 'seo-maintenance' }
  ];
}

export default function GetStartedPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  console.log('Get Started Page - ID:', id);
  console.log('Available services:', Object.keys(services));
  const service = services[id as keyof typeof services];

  if (!service) {
    console.log('Service not found for ID:', id);
    notFound();
  }

  console.log('Rendering service:', service.title);
  
  return (
    <div className="bg-background min-h-screen pt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02]" />
      <div className="container mx-auto px-4 md:px-6 py-12 relative">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/services">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{service.pricing}</p>
                    <p className="text-sm text-muted-foreground">Competitive pricing</p>
                  </div>
                </div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary/20 rounded-xl">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{service.timeline}</p>
                    <p className="text-sm text-muted-foreground">Delivery time</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                What's Included
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={feature} className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                Choose Your Package
              </h3>
              <div className="grid gap-4">
                {service.packages.map((pkg, idx) => (
                  <Card key={pkg.name} className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm" style={{ animationDelay: `${idx * 100}ms` }}>
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-bold">{pkg.name}</CardTitle>
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{pkg.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIdx) => (
                          <li key={feature} className="text-sm flex items-center gap-3 hover:translate-x-1 transition-transform duration-200" style={{ transitionDelay: `${featureIdx * 50}ms` }}>
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <Card className="bg-card/50 backdrop-blur-sm border-2 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  Start Your Project
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" suppressHydrationWarning />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" suppressHydrationWarning />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" suppressHydrationWarning />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" suppressHydrationWarning />
                </div>
                <div>
                  <Label htmlFor="package">Select Package</Label>
                  <Select>
                    <SelectTrigger suppressHydrationWarning>
                      <SelectValue placeholder="Choose a package" />
                    </SelectTrigger>
                    <SelectContent>
                      {service.packages.map((pkg) => (
                        <SelectItem key={pkg.name} value={pkg.name.toLowerCase()}>
                          {pkg.name} - {pkg.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="requirements">Project Requirements</Label>
                  <Textarea 
                    id="requirements" 
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    rows={4}
                    suppressHydrationWarning
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300" size="lg" suppressHydrationWarning>
                  Submit Project Request
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  We'll get back to you within 24 hours with a detailed proposal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}