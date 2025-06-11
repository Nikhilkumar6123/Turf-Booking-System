import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroCarousel = () => {
    const slides = [
      {
        id: 1,
        img: "https://media.istockphoto.com/id/998865276/photo/cricket-practice-nets-and-stumps.webp?a=1&b=1&s=612x612&w=0&k=20&c=dXDY-Ik7NNG0W77BnB0dcziL_lg27u5iDfGzCIN4wdo=",
        text: "Book Your Turf Today!",
      },
      {
        id: 2,
        img: "https://media.istockphoto.com/id/1255328634/photo/cricket-leather-ball-resting-on-bat-on-the-stadium-pitch.webp?a=1&b=1&s=612x612&w=0&k=20&c=CEgnKNnR0OdP6ULQYwJbq23ySZ2d22BHEfRApiRW6L4=",
        text: "Premium Grounds Near You",
      },
      {
        id: 3,
        img: "https://media.istockphoto.com/id/1147220914/photo/cricket-equipment.webp?a=1&b=1&s=612x612&w=0&k=20&c=f6bDbRgczwRVdxUhsSoXSzVo_JV7GtQiohcvhFhovso=",
        text: "Easy, Fast, Reliable Booking",
      },
    ];
    
      return (
        <div className="w-full h-[70vh]">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop
            className="h-full"
          >
            {slides.map(slide => (
              <SwiperSlide key={slide.id}>
                <div
                  className="w-full h-full bg-cover bg-center flex items-center justify-center text-white text-3xl font-bold"
                  style={{
                    backgroundImage: `url(${slide.img})`,
                  }}
                >
                  <div className="bg-black bg-opacity-50 p-4 rounded">
                    {slide.text}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )    
}

export default HeroCarousel