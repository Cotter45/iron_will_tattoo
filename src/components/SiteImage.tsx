'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useIntersectionObserver } from 'usehooks-ts'

export default function SiteImage({
  src,
  alt,
  className,
  priority,
  width,
  height,
}: {
  src: string
  alt: string
  className: string
  priority: boolean
  width: number
  height: number
}) {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.8,
  })

  return (
    <Image
      ref={ref}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={clsx(
        'block rounded-lg bg-zinc-500 object-cover object-center grayscale filter transition-all duration-300 hover:filter-none',
        isIntersecting ? 'filter-none' : 'grayscale',
        className,
      )}
      src={src}
    />
  )
}
