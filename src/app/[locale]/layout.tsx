import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

export const metadata: Metadata = {
  title: {
    template: '%s - Killian Guilland',
    default:
      "Hello, I'm Killian! ",
  },
  description:
    'I’ve always been fascinated by how things work "under the hood", experimenting with game architectures or the constraints of GPUs and consoles. This site is a collection of those experiments.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode,
  locale: string,
  messages: AbstractIntlMessages
}) {
  
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">

        <NextIntlClientProvider locale={locale} messages={messages}>
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
