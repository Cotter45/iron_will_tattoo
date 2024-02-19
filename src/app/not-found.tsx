import localFont from 'next/font/local'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Goon from '@/components/Goon'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center text-zinc-900 dark:text-white">
      <div className="relative z-10 mb-20 flex flex-col items-center text-center">
        <div className="max-w-[80vw] animate-fade-in sm:max-w-[60vw] md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[30vw]">
          <Goon />
        </div>

        <p className="mt-5 animate-title text-2xl font-semibold drop-shadow sm:text-3xl">
          404
        </p>

        <h1 className="mt-2 font-title text-4xl font-bold tracking-tight shadow-black drop-shadow duration-300 sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-4 max-w-md font-title text-base shadow-black drop-shadow sm:text-lg">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <Button href="/" variant="secondary" className="mt-8">
          Go back home
        </Button>
      </div>
    </Container>
  )
}
