import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";

const MainSlider = () => {
  return (
    <div>
      {" "}
      <Swiper
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper main-sldr"
      >
        <SwiperSlide>
          <img src="./imgs/main-slider/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./imgs/main-slider/2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./imgs/main-slider/3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./imgs/main-slider/4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./imgs/main-slider/5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./imgs/main-slider/6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./imgs/main-slider/7.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
