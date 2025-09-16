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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <AppBody>{children}</AppBody>
      </body>
    </html>
  );
}
