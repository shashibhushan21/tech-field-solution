import { HeroGeometric } from '@/components/sections/HeroGeometric';
import { ServicesHighlight } from '@/components/sections/ServicesHighlight';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroGeometric 
        badge="Tech Bloom"
        title1="Unlock Your"
        title2="Digital Potential"
      />
      <ServicesHighlight />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
