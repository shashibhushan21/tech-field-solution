import { HeroGeometric } from '@/components/sections/HeroGeometric';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';
import { Code, Megaphone, Palette, Rocket, Search } from 'lucide-react';

const services: BentoItem[] = [
  {
    icon: <Palette className="h-5 w-5 text-primary" />,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user interfaces that captivate and convert.',
    href: '/services#ui-ux',
    colSpan: 3,
    tags: ['Web Design', 'Mobile Apps']
  },
  {
    icon: <Code className="h-5 w-5 text-primary" />,
    title: 'Web Development',
    description: 'Building robust, scalable, and high-performance web applications tailored to your needs.',
    href: '/services#development',
    colSpan: 2,
    tags: ['React', 'Next.js']
  },
  {
    icon: <Rocket className="h-5 w-5 text-primary" />,
    title: 'Growth Strategy',
    description: 'Implementing data-driven strategies to accelerate your user acquisition and retention.',
    href: '/services#growth',
    colSpan: 2,
    tags: ['CRO', 'Analytics']
  },
  {
    icon: <Megaphone className="h-5 w-5 text-primary" />,
    title: 'Digital Marketing',
    description: 'Boosting your online presence and reaching the right audience with targeted campaigns.',
    href: '/services#marketing',
    colSpan: 3,
    tags: ['Social Media', 'Content']
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
