import { type Metadata } from 'next'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import '@/styles/tailwind.css'

// 1. Import getMessages from next-intl/server
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export const metadata: Metadata = {
  title: {
    template: '%s - Killian Guilland',
    default: "Hello, I'm Killian! ",
  },
  description:
    'I’ve always been fascinated by how things work "under the hood", experimenting with game architectures or the constraints of GPUs and consoles. This site is a collection of those experiments.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

// 2. Make the component async and use the correct Next.js 15 Layout props signature
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // 3. Await the params to get the locale (Next.js 15 requirement)
  const { locale } = await params;

  // 4. Fetch the translations for this locale
  const messages = await getMessages();
  
  return (
    <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <NextIntlClientProvider messages={messages}>
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