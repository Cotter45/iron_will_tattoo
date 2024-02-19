'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from 'usehooks-ts'
import SocialLinks from './SocialLinks'

export default function GetInTouchSection({ item, container }: any) {
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
      className="flex w-full flex-col items-center gap-8 px-4 py-16 pb-20 md:flex-row-reverse dark:bg-white"
    >
      <motion.div
        variants={item}
        className="flex w-full flex-col md:items-center"
      >
        <h1 className="mb-4 whitespace-nowrap font-title text-5xl text-zinc-900 lg:text-7xl xl:text-8xl">
          Get In Touch
        </h1>

        <div className="flex w-full flex-col gap-2 pl-4 md:items-center">
          <h6 className="text-left font-title text-2xl font-semibold text-zinc-600">
            Drop us a line to begin your ink journey.
          </h6>

          <a
            href="tel:267-893-7625"
            className="mt-4 text-left font-title text-lg text-zinc-600 underline transition-colors duration-300 ease-in-out hover:text-teal-600 md:text-xl"
          >
            By Phone - 267-893-7625
          </a>

          <a
            href="mailto:ironwilltattooclub@gmail.com"
            className="text-left font-title text-lg text-zinc-600 underline transition-colors duration-300 ease-in-out hover:text-teal-600 md:text-xl"
          >
            By Email - ironwilltattooclub@gmail.com
          </a>

          <div className="flex items-center gap-4 text-left font-title text-lg text-zinc-600 md:text-xl">
            <p>On Social Media -</p>
            <SocialLinks />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-10 flex max-w-[85%] animate-fade-in md:max-w-[50%]"
      >
        <Image
          src="/images/gallery5.jpeg"
          alt="Iron Will Tattoo"
          width={800}
          height={1000}
          priority
          className="object-contain md:-mt-0"
        />
      </motion.div>
    </motion.div>
  )
}
