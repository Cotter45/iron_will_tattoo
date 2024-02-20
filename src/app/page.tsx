import Image from 'next/image'

import Gallery from './Gallery'
import AboutUsSection from './AboutUs'
import SocialLinks from './SocialLinks'
import ExpertiseSection from './Expertise'
import GetInTouchSection from './GetInTouch'
import ClientExperienceSection from './ClientExperienceSection'

const container = {
  hidden: { opacity: 0.8 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 10,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col-reverse items-center justify-end p-4 pb-16 md:mt-10 md:flex-row md:justify-between md:pb-32 md:pl-14">
        <div className="flex flex-col">
          <h1 className="z-10 mt-6 animate-title whitespace-nowrap font-title text-5xl md:mt-0 lg:text-7xl xl:text-8xl">
            Iron Will Tattoo
          </h1>

          <div className="flex animate-title flex-col md:max-w-[85%]">
            <p className="mt-4 font-title text-xl text-zinc-600 md:text-2xl dark:text-zinc-400">
              Tattoos of all styles, in a relaxed atmosphere with good company.
              We love what we do, and we want to share it with you.
            </p>

            <SocialLinks />
          </div>
        </div>

        <div className="animate-title md:max-w-[35%]">
          <Image
            src="/images/splash.png"
            alt="Iron Will Tattoo"
            width={800}
            height={1000}
            priority
            className="-mt-10 max-h-[300px] object-contain md:-mt-0 md:max-h-[350px]"
          />
        </div>
      </div>

      <AboutUsSection item={item} container={container} />
      <ExpertiseSection item={item} container={container} />
      <ClientExperienceSection item={item} container={container} />
      <GetInTouchSection item={item} container={container} />

      <div className="max-w-full overflow-hidden bg-black px-4 py-16 pb-20">
        <h1 className="mb-10 mr-auto whitespace-nowrap font-title text-5xl text-white lg:text-7xl xl:text-8xl">
          Recent Works
        </h1>
        <Gallery />
      </div>
    </div>
  )
}
