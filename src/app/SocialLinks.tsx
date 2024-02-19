'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { FacebookIcon, InstagramIcon } from '@/components/SocialIcons'

export default function SocialLinks() {
  const [isMobilePhone, setIsMobilePhone] = useState(false)

  useEffect(() => {
    const mobilePhone = window.navigator?.userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    )

    setIsMobilePhone(!!mobilePhone)
  }, [])

  return (
    <div className="mt-2 flex items-center gap-5">
      <Link
        href="https://www.instagram.com/ironwilltattooclub/"
        rel="noopener noreferrer"
        target="_blank"
        className="text-sm text-zinc-500 duration-500 hover:text-zinc-300"
      >
        <InstagramIcon className="from-light to-dark h-9 w-9 rounded-xl bg-gradient-to-b fill-zinc-500 transition-colors duration-300 ease-in-out hover:bg-rose-800 hover:fill-orange-200" />
      </Link>

      <Link
        href={
          isMobilePhone
            ? 'fb://profile/323438987669439'
            : 'https://www.facebook.com/IronWillTC/'
        }
        rel="noopener noreferrer"
        target="_blank"
        className="text-sm text-zinc-500 duration-500 hover:text-zinc-300"
      >
        <FacebookIcon className="h-9 w-9 rounded-full fill-zinc-500 transition-colors duration-300 ease-in-out hover:bg-white hover:fill-blue-600" />
      </Link>
    </div>
  )
}
