'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Phone, Clock, MessageCircle, Send, CheckCircle, Users, Globe, Heart } from "lucide-react"
import { ShootingStars } from '@/components/ui/shooting-stars'
import { SparklesCore } from '@/components/ui/sparkles'
import { useState, useEffect } from "react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    value: "+1 (555) 123-4567",
    action: "tel:+15551234567"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed message",
    value: "hello@techfieldsolution.com",
    action: "mailto:hello@techfieldsolution.com"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us in real-time",
    value: "Available 9AM - 6PM EST",
    action: "#"
  }
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. Web applications typically take 4-8 weeks, while multi-vendor platforms may take 6-12 weeks."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes! We offer comprehensive maintenance packages including security updates, performance monitoring, and feature enhancements."
  },
  {
    question: "Can you work with existing systems?",
    answer: "Absolutely. We can integrate with your existing systems, migrate data, and enhance current applications."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isMounted, setIsMounted] = useState(false);
  const [responseTime, setResponseTime] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    
    // Animate stats
    const animateStats = () => {
      const targets = { response: 24, clients: 150, projects: 200 };
      const duration = 2000;
      const steps = 50;
      const stepTime = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setResponseTime(Math.floor(targets.response * progress));
        setHappyClients(Math.floor(targets.clients * progress));
        setProjectsCompleted(Math.floor(targets.projects * progress));
        
        if (step >= steps) clearInterval(timer);
      }, stepTime);
    };
    
    setTimeout(animateStats, 1000);
  }, []);

  return (
    <div className="bg-background">
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02]" />
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          {isMounted && (
            <SparklesCore
              id="contact-sparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1.0}
              particleDensity={70}
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
                starColor="#10B981"
                trailColor="#3B82F6"
                minSpeed={12}
                maxSpeed={25}
                minDelay={1800}
                maxDelay={3500}
                starWidth={18}
                starHeight={2}
              />
              <ShootingStars
                starColor="#F59E0B"
                trailColor="#EF4444"
                minSpeed={8}
                maxSpeed={20}
                minDelay={2500}
                maxDelay={4000}
                starWidth={15}
                starHeight={2}
              />
            </>
          )}
        </div>
        
        {/* Floating Communication Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-16 animate-bounce-slow" style={{ animationDelay: '0s' }}>
            <Mail className="h-8 w-8 text-blue-400/30" />
          </div>
          <div className="absolute top-32 right-20 animate-bounce-slow" style={{ animationDelay: '2s' }}>
            <MessageCircle className="h-10 w-10 text-green-400/30" />
          </div>
          <div className="absolute bottom-24 left-20 animate-bounce-slow" style={{ animationDelay: '4s' }}>
            <Phone className="h-6 w-6 text-purple-400/30" />
          </div>
          <div className="absolute top-40 right-40 animate-bounce-slow" style={{ animationDelay: '1s' }}>
            <Globe className="h-7 w-7 text-cyan-400/30" />
          </div>
        </div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-1/3 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-16 right-1/3 w-48 h-48 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-6 animate-glow-green">
              <Heart className="w-4 h-4 text-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-600">We'd Love to Hear From You</span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 animate-fade-in-up">
              Let's Build Something
              <span className="bg-gradient-to-r from-primary via-green-500 to-secondary bg-clip-text text-transparent animate-gradient-shift"> Amazing Together</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Ready to transform your ideas into powerful digital solutions? We're here to help you every step of the way.
            </p>
            
            {/* Contact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                  &lt;{responseTime}h
                </div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                  {happyClients}+
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  {projectsCompleted}+
                </div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Contact Methods */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={method.title} className="bg-card/50 backdrop-blur-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit mx-auto">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <a href={method.action} className="text-primary font-medium hover:underline">
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input 
                        placeholder="John" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        suppressHydrationWarning
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input 
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      suppressHydrationWarning
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    suppressHydrationWarning
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card className="bg-card/50 backdrop-blur-sm border">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Office Location</h3>
                      <p className="text-sm text-muted-foreground">123 Tech Avenue, Silicon Valley, CA 94000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-sm text-muted-foreground">Weekend: Emergency support available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="bg-card/50 backdrop-blur-sm border">
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border/50 pb-4 last:border-b-0">
                      <h3 className="font-medium mb-2 flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {faq.question}
                      </h3>
                      <p className="text-sm text-muted-foreground pl-6">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
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
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        @keyframes glow-green {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.4);
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
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-glow-green {
          animation: glow-green 2s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>
    </div>
  )
}
