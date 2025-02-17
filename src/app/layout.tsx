import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';

// import './globals.css';
import './css/pico.fuchsia.min.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Groove Machine',
  description: 'Explosive entertainment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container`}
      >
        <header>
          <nav>
            <ul>
              <li>
                <Link href={'/'}>
                  <strong>Groove Machine</strong>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href={'packages'}>Packages</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
