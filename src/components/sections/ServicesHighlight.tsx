import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Megaphone, Palette, Rocket, Search } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user interfaces that captivate and convert.',
    href: '/services#ui-ux',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building robust, scalable, and high-performance web applications tailored to your needs.',
    href: '/services#development',
  },
  {
    icon: Rocket,
    title: 'Growth Strategy',
    description: 'Implementing data-driven strategies to accelerate your user acquisition and retention.',
    href: '/services#growth',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Boosting your online presence and reaching the right audience with targeted campaigns.',
    href: '/services#marketing',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improving your search engine rankings to drive organic traffic and leads.',
    href: '/services#seo',
  },
];

export function ServicesHighlight() {
  return (
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
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <Link href={service.href} key={service.title} className="group">
                <Card className="h-full transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-md">
                            <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                </Card>
            </Link>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.slice(3, 5).map((service) => (
            <Link href={service.href} key={service.title} className="group">
                <Card className="h-full transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-md">
                            <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
