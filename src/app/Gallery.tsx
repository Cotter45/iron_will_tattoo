'use client'

import { useMemo } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import images from './artists/[slug]/images.json'
import SiteImage from '@/components/SiteImage'

export default function Gallery() {
  const { width } = useWindowSize()

  const samRandom5Images = useMemo(() => {
    return images['invictusam'].sort(() => 0.5 - Math.random()).slice(0, 5)
  }, [])

  const lesyaRandom5Images = useMemo(() => {
    return images['lesyadanko'].sort(() => 0.5 - Math.random()).slice(0, 5)
  }, [])

  const amountOfSlides = width < 640 ? 1 : width < 1024 ? 2 : 3

  return (
    <Swiper
      style={
        {
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties
      }
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={amountOfSlides}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {samRandom5Images.map((image, index) => (
        <SwiperSlide key={index}>
          <SiteImage
            alt="gallery"
            width={500}
            height={500}
            priority={index < 4}
            className="block h-[400px] w-full rounded-lg bg-zinc-500 object-cover object-center grayscale filter transition-all duration-300 hover:filter-none"
            src={`/images/invictusam/${image}`}
          />
        </SwiperSlide>
      ))}

      {lesyaRandom5Images.map((image, index) => (
        <SwiperSlide key={index}>
          <SiteImage
            alt="gallery"
            width={500}
            height={500}
            priority={index < 4}
            className="block h-[400px] w-full bg-zinc-500 object-cover object-center grayscale filter transition-all duration-300 hover:filter-none"
            src={`/images/lesyadanko/${image}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
