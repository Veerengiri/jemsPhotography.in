import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

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
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
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
