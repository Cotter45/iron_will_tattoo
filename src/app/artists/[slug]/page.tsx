import images from './images.json'
import { people } from '../people'
import SocialLinks from '@/app/SocialLinks'
import SiteImage from '@/components/SiteImage'

import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artist = people.find((person) => person.slug === params.slug)

  return {
    title: `${artist?.name} | Iron Will Tattoo`,
    description: artist?.description,
  }
}

export default function ArtistSam({ params }: { params: { slug: string } }) {
  const artist = people.find((person) => person.slug === params.slug)
  // @ts-ignore
  const paths = images[artist.slug] as any

  return (
    <div className="container mx-auto px-4 py-2 md:px-2">
      {artist && (
        <div className="mb-24">
          <div className="flex items-center gap-4">
            <SiteImage
              alt={`Artist ${artist?.name} Portfolio Image`}
              width={500}
              height={500}
              priority
              className="block h-16 w-16 !rounded-full bg-zinc-500 object-cover object-center grayscale filter transition-all duration-300 hover:filter-none"
              src={artist?.imageUrl}
            />

            <h1 className="font-title text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
              {artist?.name}
            </h1>
          </div>

          <div className="mt-6 pl-8">
            <p className="mb-4 text-base leading-6 text-zinc-600 dark:text-zinc-400">
              {artist?.description}
            </p>

            <SocialLinks
              fbLink={artist?.facebookUrl}
              igLink={artist?.instagramUrl}
            />
          </div>
        </div>
      )}

      <div className="flex w-full flex-wrap">
        <div className="full flex flex-wrap justify-evenly">
          {artist &&
            paths.map((image: string, index: number) => (
              <div
                key={index}
                className="w-full py-1 lg:w-[49%] xl:w-[32%] 2xl:w-[24%]"
              >
                <SiteImage
                  alt={`Artist ${artist?.name} Portfolio Image`}
                  width={500}
                  height={500}
                  priority={index < 4}
                  className="block h-full w-full rounded-lg bg-zinc-500 object-cover object-center grayscale filter transition-all duration-300 hover:filter-none"
                  src={`/images/${artist.slug}/${image}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
