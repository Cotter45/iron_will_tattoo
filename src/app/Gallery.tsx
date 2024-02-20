'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import samImage from './artists/sam/images.json'

export default function Gallery() {
  const { width } = useWindowSize()

  const samRandom5Images = useMemo(() => {
    return samImage.sort(() => 0.5 - Math.random()).slice(0, 5);
  }, []);
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
      slidesPerView={width < 640 ? 1 : 3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {samRandom5Images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            alt="gallery"
            width={500}
            height={500}
            priority={index < 4}
            className="block h-[400px] w-full rounded-lg bg-zinc-500 object-cover object-center grayscale filter transition-all duration-300 hover:filter-none"
            src={`/images/sam/${image}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
