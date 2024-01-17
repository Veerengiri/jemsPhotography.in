import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";

const MainSlider = () => {
  const backend = process.env.REACT_APP_BACKEND;
  const [swiper,setSwiper]=useState(null);
  const token = "jems@jkotiajrekjak752ukajk";
  const loadImg = async ()=>{
    const dt = await fetch(`${backend}/mainsliderImages`,{
      method:"GET",
      headers:{
        token: token
      }
    })
    const fr = await dt.json();
    setSwiper(fr.dt);
  }
  useEffect(() => {
    loadImg();
  }, [])
  
  return (
    <div>
      {" "}
      {swiper ? <Swiper
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
        {swiper.map((e)=>(<SwiperSlide>
            <img loading="lazy" src={e.link} alt="" />
          </SwiperSlide>
        ))}
        
      </Swiper>: <img loading="lazy" src="/imgs/main-slider/1.jpg" alt="" />}
    </div>
  );
};

export default MainSlider;
