'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from 'usehooks-ts'

export default function ExpertiseSection({ item, container }: any) {
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
      className="flex w-full flex-col items-center gap-8 px-4 py-16 pb-20 md:flex-row dark:bg-white"
    >
      <motion.div variants={item} className="flex w-full flex-col">
        <h1 className="mb-4 mr-auto whitespace-nowrap font-title text-4xl font-semibold text-zinc-900 lg:text-7xl xl:text-8xl">
          Areas of Expertise
        </h1>

        <div className="flex md:max-w-[85%]">
          <div className="flex w-full flex-col items-center md:w-1/2">
            <h6 className="mr-auto mt-4 font-title font-bold text-lg text-zinc-600">
              Services
            </h6>

            <motion.ul
              variants={item}
              className="mr-4 mt-4 text-lg text-zinc-600 md:text-xl"
            >
              <li>Custom Commissions</li>
              <li>Redesign & Coverups</li>
              <li>Microblading</li>
              <li>Touchups</li>
              <li>Aftercare Consultation</li>
              <li>Piercing Services</li>
              <li>Walk-ins</li>
            </motion.ul>
          </div>

          <div className="flex w-full flex-col items-center md:w-1/2">
            <h6 className="mr-auto mt-4 font-title font-bold text-lg text-zinc-600">
              Styles
            </h6>

            <motion.ul
              variants={item}
              className="mr-4 mt-4 text-lg text-zinc-600 md:text-xl"
            >
              <li>Black & Grey</li>
              <li>Vibrant Color</li>
              <li>Traditional / Classic</li>
              <li>Realism</li>
              <li>Watercolor</li>
              <li>Minimalist</li>
              <li>Geometric</li>
              <li>Lettering / Script</li>
            </motion.ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-10 flex max-w-[85%] animate-fade-in md:max-w-[35%]"
      >
        <Image
          src="/images/gallery6.webp"
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
