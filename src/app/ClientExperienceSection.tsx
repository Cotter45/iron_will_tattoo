'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from 'usehooks-ts'

export default function ClientExperienceSection({ item, container }: any) {
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
      className="flex w-full flex-col gap-8 bg-black px-4 py-16 pb-20"
    >
      <motion.div variants={item} className="flex w-full flex-col text-white">
        <h2 className="mb-4 mr-auto whitespace-nowrap font-title text-4xl font-semibold md:text-5xl">
          Client Experiences
        </h2>

        <div className="mt-8 w-full border border-zinc-600 p-4">
          <p className="text-xl">
            {
              "I've been getting tattooed at Iron Will for years. Sam and Lesya are awesome! The shop is super clean and always laid back, friendly and welcoming! I highly recommend them!"
            }
          </p>
          <br />
          <p className="mx-auto">
            - <span className="font-title text-xl font-bold">Harry S.</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-4 flex flex-col items-center justify-between gap-8 md:flex-row lg:px-8"
      >
        <div className="flex flex-1 flex-col">
          <h3 className="font-title text-xl font-semibold text-white">
            Melissa B.
          </h3>

          <p className="mt-4 text-lg text-zinc-400">
            {
              "[Sam's] liine work is amazing and the piece has healed beautifully. The experience was comfortable & the conversation was great."
            }
          </p>
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="font-title text-xl font-semibold text-white">
            Leah H.
          </h3>

          <p className="mt-4 text-lg text-zinc-400">
            {
              "I drive an hour to Iron WIll and it's 100% worth it. Great work and good peaople."
            }
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
