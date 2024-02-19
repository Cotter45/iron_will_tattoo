import Image from 'next/image'
import SocialLinks from '../SocialLinks'
import Link from 'next/link'

export const people = [
  {
    name: 'Sam Sea',
    description: `
      Sam is a tattoo artist who specializes in black and grey realism and
      watercolor tattoos. He has been tattooing for 5 years and has a
      background in fine arts. He is passionate about creating custom pieces
      that are unique to each client.
    `,
    slug: 'invictusam',
    role: 'Tattoo Artist',
    imageUrl: '/images/artists/sam.jpeg',
    relativeLink: '/artists/sam?slug=invictusam',
    facebookUrl: 'https://www.facebook.com/invictusam',
    instagramUrl: 'https://www.instagram.com/samseatattoo/?hl=en',
  },
]

export default function ArtistsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="font-title text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
          Our team
        </h2>
        <p className="mt-6 font-title text-xl leading-8 text-zinc-600 dark:text-zinc-400">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
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
              <Image
                height={400}
                width={400}
                className="aspect-[3/2] w-full rounded-2xl object-cover grayscale filter transition-all duration-300 ease-in-out hover:scale-105 hover:filter-none"
                src={person.imageUrl}
                alt=""
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
                className="flex items-center justify-between font-title text-lg font-semibold leading-7 text-teal-600 hover:text-teal-500"
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
