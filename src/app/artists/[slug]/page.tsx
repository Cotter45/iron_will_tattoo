import Image from 'next/image'
import samsImages from './images.json'

import { people } from '../people'
import SocialLinks from '@/app/SocialLinks'

import type { Metadata } from 'next'
import SiteImage from '@/components/SiteImage'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const artist = people.find((person) => person.slug === params.slug)

  return {
    title: `${artist?.name} | Iron Will Tattoo`,
    description: artist?.description,
  }
}

export default function ArtistSam({
  params,
}: {
  params: { slug: string }
}) {
  const artist = people.find((person) => person.slug === params.slug)

  return (
    <div className="container mx-auto px-5 py-2">
      {artist && (
        <div className="mb-24">

          <div className="flex items-center gap-4">
          <SiteImage
            alt={`Artist ${artist?.name} Portfolio Image`}
            width={500}
            height={500}
            priority
            className="block h-24 w-24 !rounded-full bg-zinc-500 object-cover object-center grayscale filter transition-all duration-300 hover:filter-none"
            src={artist?.imageUrl}
            />

          <h3 className="font-title text-8xl font-semibold tracking-tight">
            {artist?.name}
          </h3>
          </div>

          <div className="mt-8 pl-8">
            <p className="font-title text-xl leading-8 text-zinc-600 dark:text-zinc-400">
              {artist?.description}
            </p>

            <SocialLinks
              fbLink={artist?.facebookUrl}
              igLink={artist?.instagramUrl}
            />
          </div>
        </div>
      )}

      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="full flex flex-wrap">
          {samsImages.map((image, index) => (
            <div
              key={index}
              className="w-full p-1 md:w-1/2 md:p-2 lg:w-1/3 xl:w-1/4"
            >
              <SiteImage
                alt={`Artist ${artist?.name} Portfolio Image`}
                width={500}
                height={500}
                priority={index < 4}
                className="block h-full w-full rounded-lg bg-zinc-500 object-cover object-center grayscale filter transition-all duration-300 hover:filter-none"
                src={`/images/sam/${image}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
