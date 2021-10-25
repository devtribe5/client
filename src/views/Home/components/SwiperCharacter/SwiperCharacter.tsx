import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import '../../components/SwiperCharacter/index.scss'

// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper'

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination])

export default function SwiperCharacter() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                className='mySwiper'>
                <SwiperSlide>
                    <img src='assets/images/home/sl-01.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='assets/images/home/sl-02.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='assets/images/home/sl-03.png' />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
