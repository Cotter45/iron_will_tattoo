'use client'

import { Button } from '@/components/Button'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const CAPTCHA_KEY = '6Le5bJ0pAAAAACdwzYoXewHCSN45f10RRtK36q1d'

export default function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [status, setStatus] = useState<{
    loading: boolean
    error: string | null
    success: boolean
  }>({ loading: false, error: null, success: false })
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus({ loading: true, error: null, success: false })

    const recaptchaValue = await recaptchaRef.current?.executeAsync()

    try {
      const response = await fetch('/api/recaptchaSubmit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: recaptchaValue }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()

      if (!data.success || data.score < 0.5) {
        throw new Error('Recaptcha failed')
      }
    } catch (error: any) {
      setStatus({ loading: false, success: false, error: error.message })
      return
    }

    // Send form data to your server
    console.log(data)

    setData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    })
    setStatus({ loading: false, error: null, success: true })
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-2xl sm:mt-20">
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
              value={data.firstName}
              onChange={(event) =>
                setData({ ...data, firstName: event.target.value })
              }
              required
              className="block w-full border-0 px-3.5 py-2 text-base leading-6 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 dark:bg-zinc-900 dark:focus:ring-white"
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
              value={data.lastName}
              onChange={(event) =>
                setData({ ...data, lastName: event.target.value })
              }
              required
              className="block w-full border-0 px-3.5 py-2 text-base leading-6 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 dark:bg-zinc-900 dark:focus:ring-white"
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
              value={data.email}
              onChange={(event) =>
                setData({ ...data, email: event.target.value })
              }
              required
              autoComplete="email"
              className="block w-full border-0 px-3.5 py-2 text-base leading-6 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 dark:bg-zinc-900 dark:focus:ring-white"
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
                autoComplete="country"
                className="h-full border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-base text-zinc-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-900 dark:focus:ring-white"
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
              value={data.phoneNumber}
              onChange={(event) =>
                setData({ ...data, phoneNumber: event.target.value })
              }
              required
              className="block w-full border-0 px-3.5 py-2 pl-20 text-base leading-6 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 dark:bg-zinc-900 dark:focus:ring-white"
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
              value={data.message}
              onChange={(event) =>
                setData({ ...data, message: event.target.value })
              }
              required
              className="block w-full border-0 px-3.5 py-2 text-base leading-6 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 dark:bg-zinc-900 dark:focus:ring-white"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        {status.error && (
          <div className="mb-4 flex items-center gap-2 border border-red-500 bg-red-200/20 p-3 text-red-500">
            <ExclamationCircleIcon className="h-5 w-5" />
            {status.error}
          </div>
        )}

        <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={CAPTCHA_KEY} />

        {!status.success ? (
          <Button
            type="submit"
            variant="primary"
            className="block w-full px-3.5 py-2.5 text-center font-semibold"
          >
            {status.loading ? 'Sending...' : "Let's talk"}
          </Button>
        ) : (
          <div className="mb-4 flex items-center gap-2 border border-teal-500 bg-teal-200/20 p-3 text-teal-500">
            <ExclamationCircleIcon className="h-5 w-5" />
            Your message has been sent!
          </div>
        )}
      </div>
    </form>
  )
}
