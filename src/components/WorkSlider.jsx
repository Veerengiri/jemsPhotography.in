import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay,EffectCoverflow } from "swiper/modules";

import 'swiper/css/effect-coverflow';
const WorkSlider = () => {
  const portraitImages = Array.from(
    { length: 10 },
    (_, index) => `./imgs/prt-img/p${index + 1}.jpg`
  );

  return (
    <Swiper
      loop={true}
      grabCursor={true}
      slidesPerView={3}
      spaceBetween={50} 
      effect={'coverflow'}  
        centeredSlides={true}
      pagination={{
        clickable: true,
      }}
       coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow,Autoplay]}
      className="mySwiper"
    >
      {portraitImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Portrait ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
