'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'
import { useWindowSize } from 'usehooks-ts'

export default function Gallery() {
  const { width } = useWindowSize()

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
      <SwiperSlide>
        <Image
          src="/images/gallery1.jpeg"
          alt="Iron Will Tattoo"
          width={800}
          height={600}
          priority
          className="mt-12 "
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/gallery2.jpeg"
          alt="Iron Will Tattoo"
          width={800}
          height={600}
          className="mt-12 "
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/gallery3.jpeg"
          alt="Iron Will Tattoo"
          width={800}
          height={600}
          className="mt-12 "
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/gallery4.jpeg"
          alt="Iron Will Tattoo"
          width={800}
          height={600}
          className="mt-12 "
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/gallery5.jpeg"
          alt="Iron Will Tattoo"
          width={800}
          height={600}
          className="mt-12 "
        />
      </SwiperSlide>
    </Swiper>
  )
}
