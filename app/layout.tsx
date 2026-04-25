import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Talia — Portfolio + AI Framework',
  description: 'A portfolio website built using a 4-layer framework where human intent is executed by AI within formal constraints.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Talia — Portfolio + AI Framework',
    description: 'How to build with AI while staying in control.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏛️</text></svg>" />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
