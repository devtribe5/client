import React from 'react'
import logo from 'logo.svg'
import 'views/Home/Home.scss'
import SwiperCharacter from './components/SwiperCharacter/SwiperCharacter'
import SwiperGameFeature from './components/SwiperGameFeature'

function Home() {
    return (
        <div className='App'>
            <section className='section-group'>
                <img src={'assets/images/home/p1-bg.jpg'} className='home-section-bg' alt='logo' />
                <div className='header-group'>
                    <div className='logo'>
                        <img src={'assets/images/home/logo.png'} className='home-section-bg' alt='logo' />
                    </div>
                    <div className='link-container'>
                        <div className='link-wrap'>
                            <img src={'assets/images/home/ios-bt-en.png'} className='home-section-bg' alt='logo' />
                        </div>
                        <div className='link-wrap'>
                            <img src={'assets/images/home/gg-bt-en.png'} className='home-section-bg' alt='logo' />
                        </div>
                        <div className='link-wrap'>
                            <img src={'assets/images/home/choingay.png'} className='home-section-bg' alt='logo' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-group'>
                <img src={'assets/images/home/p2-bg.jpeg'} className='home-section-bg' alt='bg-2' />
                <div className='title-wrap'>
                    <h1 className='title'>
                        <img src={'assets/images/home/p2-tt-en.png'} className='home-section-bg' alt='bg-2' />
                    </h1>
                    <div id='swiper-character'>
                        <SwiperCharacter />
                    </div>
                </div>
            </section>
            <section className='section-group'>
                <img src={'assets/images/home/p3-bg.jpeg'} className='home-section-bg' alt='bg-3' />
                <div className='title-wrap'>
                    <h1 className='title'>
                        <img src={'assets/images/home/p3-tt-en.png'} className='home-section-bg' alt='bg-2' />
                    </h1>
                    <div id='swiper-feature'>
                        <SwiperGameFeature />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
