'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from 'usehooks-ts'

import { Button } from '@/components/Button'

export default function AboutUsSection({ item, container }: any) {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  })

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isIntersecting ? 'show' : 'hidden'}
      className="mt-24 flex w-full flex-col items-center gap-8 bg-black px-4 py-16 pb-20 md:flex-row-reverse"
    >
      <motion.div variants={item} className="flex flex-col items-center">
        <h2 className="mr-auto whitespace-nowrap font-title text-4xl font-semibold text-white md:pl-12 md:text-5xl">
          About Us
        </h2>

        <div className="flex flex-col md:max-w-[85%]">
          <p className="mt-4 text-lg text-zinc-400">
            Our artists are dedicated to providing the highest quality of work,
            while maintaining a clean, safe, and welcoming environment. We are
            committed to providing our clients with a memorable experience, and
            a tattoo that will last a lifetime.
          </p>

          <Button
            variant="primary"
            href="/contact"
            className="mx-auto mt-8 w-[300px] !text-white hover:bg-zinc-800 sm:mx-0"
          >
            Reach Out
          </Button>
        </div>
      </motion.div>

      <div className="mt-10 flex max-w-[85%] md:max-w-[35%]">
        <Image
          src="/images/gallery4.jpeg"
          alt="Iron Will Tattoo"
          width={800}
          height={1000}
          priority
          className="object-contain md:-mt-0"
        />
      </div>
    </motion.div>
  )
}
