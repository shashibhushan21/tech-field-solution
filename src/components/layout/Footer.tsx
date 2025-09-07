import Link from 'next/link';
import { Zap, Twitter, Linkedin, Github } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Github, href: '#', name: 'GitHub' },
];

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/services#web-development' },
      { label: 'Mobile Development', href: '/services#mobile-development' },
      { label: 'Digital Marketing', href: '/services#digital-marketing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '/contact' },
      { label: 'AI Optimizer', href: '/content-optimizer' },
      { label: 'Cost Estimator', href: '/cost-estimator' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Zap className="h-5 w-5" />
              </div>
              <span>NextSms</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">We build and grow innovative digital products for leading companies.</p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold">{section.title}</h3>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NextSms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
