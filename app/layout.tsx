import React from 'react';

import { Nunito_Sans } from 'next/font/google';

import type { Metadata } from 'next';

import PreloadResources from './preload-resources';
import Providers from './providers';

const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Consult Ai | Решаем задачи бизнеса',
  description:
    'Мы помогаем вашему бизнесу с решением многих задач с помощью искусственного интеллекта. Consult Ai предлагает индивидуальные решения, адаптированные к вашей бизнес-нише. Получайте уникальные рекомендации по оптимизации процессов и развивайте компанию с помощью простого внедрения ИИ и круглосуточной поддержки.',
  keywords: [
    'ИИ для бизнеса',
    'автоматизация бизнеса',
    'искусственный интеллект малый бизнес',
    'ИИ консалтинг',
    'развитие бизнеса с ИИ',
    'оптимизация бизнес-процессов',
    'ИИ решения',
    'аналитика для бизнеса',
    'ИИ автоматизация',
    'внедрение ИИ',
    'Consult Ai',
    'chatgpt',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_METRIKA}
        />
      </head>
      <body className={nunito.className}>
        <PreloadResources />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
