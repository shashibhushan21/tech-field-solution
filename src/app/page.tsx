import { Hero } from '@/components/sections/Hero';
import { ServicesHighlight } from '@/components/sections/ServicesHighlight';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesHighlight />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
