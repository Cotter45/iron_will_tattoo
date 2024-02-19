import localFont from 'next/font/local'
import { type Metadata } from 'next'

import { Providers } from '@/app/Providers'
import { Layout } from '@/components/Layout'

import '@/styles/globals.css'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: {
    template: '%s - Iron Will Tattoo',
    default: 'Iron Will Tattoo',
  },
  description:
    'Tattoos of all styles, in a relaxed atmosphere with good company. We love what we do, and we want to share it with you.',
  metadataBase: new URL('https://www.ironwilltattoo.club/'),
  applicationName: 'Iron Will Tattoo',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  keywords: [
    'tattoo',
    'tattoo club',
    'tattoo shop',
    'tattoo studio',
    'flash',
    'ink',
    'tattoo artist',
    'tattoo parlor',
    'tattoo design',
    'tattoo art',
    'tattoo gallery',
    'tattoo portfolio',
    'tattooist',
    'tattooer',
    'tattooing',
    'tattooed',
  ],
}

const titleFont = localFont({
  src: './TitleFont.ttf',
  variable: '--font-title',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(titleFont.variable, 'h-full antialiased')}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
