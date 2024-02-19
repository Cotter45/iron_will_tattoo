import Image from 'next/image'
import samsImages from './images.json'

import { people } from '../page'
import { useSearchParams } from 'next/navigation'
import SocialLinks from '@/app/SocialLinks'

export default function ArtistSam({
  searchParams,
}: {
  searchParams: { slug: string }
}) {
  const artist = people.find((person) => person.slug === searchParams.slug)

  return (
    <div className="container mx-auto px-5 py-2">
      {artist && (
        <div className="mb-24">
          <h3 className="font-title text-8xl font-semibold tracking-tight">
            {artist?.name}
          </h3>

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
              <Image
                alt="gallery"
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
