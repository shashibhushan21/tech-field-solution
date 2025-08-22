import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    quote: 'Working with Tech Bloom was a game-changer. Their expertise in both design and development helped us launch a product that our users love.',
    name: 'Sarah Johnson',
    role: 'CEO, Innovate Inc.',
    avatar: 'https://placehold.co/40x40.png',
    aiHint: 'professional woman',
  },
  {
    quote: "The team's dedication and communication were outstanding. They delivered on time and exceeded our expectations at every turn.",
    name: 'Michael Chen',
    role: 'CTO, Future Solutions',
    avatar: 'https://placehold.co/40x40.png',
    aiHint: 'tech professional',
  },
  {
    quote: 'Their growth strategies doubled our user base in just six months. I cannot recommend them enough for any company looking to scale.',
    name: 'Emily Rodriguez',
    role: 'Head of Growth, ScaleUp',
    avatar: 'https://placehold.co/40x40.png',
    aiHint: 'marketing expert',
  },
  {
    quote: 'A truly professional and skilled team. They understood our vision perfectly and brought it to life with precision and creativity.',
    name: 'David Lee',
    role: 'Founder, Quantum Leap',
    avatar: 'https://placehold.co/40x40.png',
    aiHint: 'startup founder',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We've helped countless businesses achieve their digital goals. Here's what some of them have to say about our work.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col justify-between h-full p-6">
                      <blockquote className="text-foreground italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
