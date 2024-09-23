import { Nunito_Sans } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.scss';
import Providers from './providers';

const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CONSULT AI',
  description: 'Простые инновации для сложных задач вашего бизнеса',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
