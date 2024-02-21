import clsx from 'clsx'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { type Metadata } from 'next'

import { Providers } from '@/app/Providers'
import { Layout } from '@/components/Layout'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Iron Will Tattoo',
    default: 'Iron Will Tattoo',
  },
  description:
    'Tattoos of all styles, in a relaxed atmosphere with good company. We love what we do, and we want to share it with you.',
  metadataBase: new URL('https://iron-will-tattoo.vercel.app/'),
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
  src: './Metanoia.ttf',
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
      className={clsx(titleFont.variable, 'w-full h-full antialiased')}
      suppressHydrationWarning
    >
      <body className="flex w-full h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="relative flex mx-auto w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
