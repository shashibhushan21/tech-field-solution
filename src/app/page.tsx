import { HeroGeometric } from '@/components/sections/HeroGeometric';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';
import { Code, Megaphone, Palette, Rocket, Search, CheckCircle, TrendingUp, Video, Globe } from 'lucide-react';

const services: BentoItem[] = [
    {
        title: "Analytics Dashboard",
        meta: "v2.4.1",
        description:
            "Real-time metrics with AI-powered insights and predictive analytics",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "Live",
        tags: ["Statistics", "Reports", "AI"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Task Manager",
        meta: "84 completed",
        description: "Automated workflow management with priority scheduling",
        icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
        status: "Updated",
        tags: ["Productivity", "Automation"],
    },
    {
        title: "Media Library",
        meta: "12GB used",
        description: "Cloud storage with intelligent content processing",
        icon: <Video className="w-4 h-4 text-purple-500" />,
        tags: ["Storage", "CDN"],
        colSpan: 2,
        status: "Active",
    },
    {
        title: "Global Network",
        meta: "6 regions",
        description: "Multi-region deployment with edge computing",
        icon: <Globe className="w-4 h-4 text-sky-500" />,
        status: "Beta",
        tags: ["Infrastructure", "Edge"],
    },
];


export default function Home() {
  return (
    <>
      <HeroGeometric 
        badge="Tech Bloom"
        title1="Unlock Your"
        title2="Digital Potential"
      />
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
              Our Expertise, Your Advantage
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From initial concept to final launch and beyond, we provide the full spectrum of services needed to make your digital product a success.
            </p>
          </div>
          <div className="mt-12">
            <BentoGrid items={services} />
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
