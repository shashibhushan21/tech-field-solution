import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-background">
      <header className="pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our services or want to start a project, we're ready to answer your questions.
          </p>
        </div>
      </header>
      
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-secondary p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Our team is available to help you from Monday to Friday, 9am to 6pm EST.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>123 Tech Avenue, Silicon Valley, CA 94000</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>hello@nextsms.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
