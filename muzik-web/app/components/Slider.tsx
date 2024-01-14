import { artist_discovery, full_screen_song, my_library } from "../assets";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Image from "next/image";

import { Autoplay } from 'swiper/modules';

const slides = [
    my_library,
    artist_discovery,
    full_screen_song,
];

export default function Slider() {
    return (
        <Swiper 
        centeredSlides={true}
        autoplay={
            {
                delay: 5000,
                disableOnInteraction: false,
            }
        }
        speed={5000} // Transition duration of 5 seconds
        loop={true}
        slidesPerView={1}
        modules={[Autoplay]}
        className="swiper-frame flex mt-[50px] w-screen">
            {slides.map((slide, index) => 
                <SwiperSlide key={index} className="swiper-slide flex justify-center items-center w-screen">
                    <Image className="w-[calc(100vw-20%)] mr-auto ml-auto mt-[50px] mb-[50px] svg-shadow" src={slide} alt="muzik"/>
                </SwiperSlide>
            )}
        </Swiper>
    )
}