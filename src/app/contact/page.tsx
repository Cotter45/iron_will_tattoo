import { EnvelopeIcon } from '@heroicons/react/24/outline'
import {
  BuildingOffice2Icon,
  ChevronDownIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import { Button } from '@/components/Button'

export const metadata = {
  title: 'Contact Us | Iron Will Tattoo',
  description: 'Get in touch with us to schedule an appointment.',
}

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
              className="gap-x-4/5 flex p-6 ring-1 ring-inset ring-black/10 transition-all duration-300 ease-in-out hover:ring-teal-600 dark:ring-white/10"
            >
              {' '}
              <PhoneIcon
                className="h-7 w-5 flex-none text-teal-400"
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
              className="gap-x-4/5 flex p-6 ring-1 ring-inset ring-black/10 transition-all duration-300 ease-in-out hover:ring-teal-600 dark:ring-white/10"
            >
              {' '}
              <EnvelopeIcon
                className="h-7 w-5 flex-none text-teal-400"
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
              className="gap-x-4/5 flex p-6 ring-1 ring-inset ring-black/10 transition-all duration-300 ease-in-out hover:ring-teal-600 dark:ring-white/10"
            >
              <BuildingOffice2Icon
                className="h-7 w-5 flex-none text-teal-400"
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
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-2xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full border-0 px-3.5 py-2 leading-6 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 dark:bg-zinc-900 dark:focus:ring-white text-base"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full border-0 px-3.5 py-2 leading-6 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 dark:bg-zinc-900 dark:focus:ring-white text-base"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full border-0 px-3.5 py-2 leading-6 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 dark:bg-zinc-900 dark:focus:ring-white text-base"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-zinc-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-900 dark:focus:ring-white text-base"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-zinc-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full border-0 px-3.5 py-2 pl-20 leading-6 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 dark:bg-zinc-900 dark:focus:ring-white text-base"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full border-0 px-3.5 py-2 leading-6 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 dark:bg-zinc-900 dark:focus:ring-white text-base"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Button
              type="submit"
              variant="primary"
              className="block w-full px-3.5 py-2.5 text-center font-semibold"
            >
              Let{"'"}s talk
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
