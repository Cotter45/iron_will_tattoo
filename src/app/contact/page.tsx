import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { BuildingOffice2Icon, PhoneIcon } from '@heroicons/react/20/solid'

import ContactForm from './Form'

export default function ContactPage() {
  return (
    <div className="pb-24 sm:pb-40">
      <div className="relative isolate overflow-hidden px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 mr-auto whitespace-nowrap font-title text-5xl lg:text-7xl xl:text-8xl">
              Get in touch
            </h2>
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            <Link
              href="tel:267-893-7625"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-x-4/5 flex p-6 ring-1 ring-inset ring-black/10 transition-all duration-300 ease-in-out hover:ring-black dark:ring-white/10 dark:hover:ring-white"
            >
              {' '}
              <PhoneIcon
                className="h-7 w-5 flex-none text-zinc-900 dark:text-white"
                aria-hidden="true"
              />
              <div className="ml-2 text-base leading-7">
                <h3 className="font-semibold">Phone</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  1 (267)-893-7625
                </p>
              </div>
            </Link>

            <Link
              href="mailto:ironwilltattooclub@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-x-4/5 flex p-6 ring-1 ring-inset ring-black/10 transition-all duration-300 ease-in-out hover:ring-black dark:ring-white/10 dark:hover:ring-white"
            >
              {' '}
              <EnvelopeIcon
                className="h-7 w-5 flex-none text-zinc-900 dark:text-white"
                aria-hidden="true"
              />
              <div className="ml-2 text-base leading-7">
                <h3 className="font-semibold">Email</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  ironwilltattooclub@gmail.com
                </p>
              </div>
            </Link>

            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=502+N+Tyson+Avenue+Glenside+PA+19038"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-x-4/5 flex p-6 ring-1 ring-inset ring-black/10 transition-all duration-300 ease-in-out hover:ring-black dark:ring-white/10 dark:hover:ring-white"
            >
              <BuildingOffice2Icon
                className="h-7 w-5 flex-none text-zinc-900 dark:text-white"
                aria-hidden="true"
              />
              <div className="ml-2 text-base leading-7">
                <h3 className="font-semibold">Directions</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  502 N Tyson Avenue
                  <br />
                  Glenside, PA 19038
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="relative isolate px-6 pt-24 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-title text-3xl font-bold tracking-tight sm:text-4xl">
            Get an estimate
          </h2>
          <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Lorem officia duis sunt ut pariatur sit ut ullamco. Eu exercitation
            Lorem qui deserunt nulla officia exercitation amet quis nulla.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
