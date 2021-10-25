import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './index.scss'

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper'

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination])

export default function App() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                loop={true}
                loopFillGroupWithBlank={true}
                className='mySwiper'>
                <SwiperSlide>
                    <img src='https://bolach5.com/home/images/p3-x01.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://bolach5.com/home/images/p3-x02.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://bolach5.com/home/images/p3-x03.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://bolach5.com/home/images/p3-x04.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://bolach5.com/home/images/p3-x05.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://bolach5.com/home/images/p3-x03.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://bolach5.com/home/images/p3-x03.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://bolach5.com/home/images/p3-x03.jpg' />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
