import type { Metadata } from 'next';
import './globals.css';

import { cn } from '@/lib/utils';
import { AppBody } from '@/components/layout/AppBody';

export const metadata: Metadata = {
  title: 'Tech Field Solution - Unlock Your Digital Potential',
  description: 'We build and grow innovative digital products for leading companies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={cn('font-body antialiased')} suppressHydrationWarning>
        <AppBody>{children}</AppBody>
      </body>
    </html>
  );
}
