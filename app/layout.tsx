// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Navbar } from '@/components/nav';

import "./globals.css";

import { Jost, Lato, Asap_Condensed, Inter } from 'next/font/google';
import localFont from 'next/font/local';

const globalFont = Asap_Condensed({
  weight: '500',
  subsets: ['latin'],
})

const inter = Inter({
  weight: '500',
  subsets: ['latin'],
})

export const metadata = {
  title: `Abbi\'s Cup`,
  description: 'I have followed setup instructions carefully',
  icons: {
    icon: '/favicon.ico', // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}