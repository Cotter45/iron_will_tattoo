import Link from 'next/link'

import { people } from './people'
import SocialLinks from '../SocialLinks'
import SiteImage from '@/components/SiteImage'

export default function ArtistsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
      <div className="mx-auto max-w-4xl lg:mx-0">
        <h2 className="font-title text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight">
          Our Artists
        </h2>
        <p className="mt-6 text-base leading-6 text-zinc-600 dark:text-zinc-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        {people.map((person) => (
          <li key={person.name}>
            <Link
              href={person.relativeLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiteImage
                height={400}
                width={400}
                className="aspect-[3/2] w-full rounded-2xl object-cover grayscale filter transition-all duration-300 ease-in-out hover:filter-none"
                src={person.imageUrl}
                priority={true}
                alt="Sam Portfolio Image"
              />
            </Link>

            <h3 className="mt-4 font-title text-4xl font-semibold leading-8 tracking-tight">
              {person.name}
            </h3>

            <div className="flex w-full items-end justify-between px-4">
              <Link
                href={person.relativeLink}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-between text-lg font-semibold leading-7 text-teal-600 hover:text-teal-500"
              >
                View Portfolio
              </Link>

              <SocialLinks
                igLink={person.instagramUrl}
                fbLink={person.facebookUrl}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
