import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import Swipercard from "../Swipercard/Swipercard";
import { Pagination } from "swiper";
const Swiperer = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Swipercard price="123,000" name="ماهان" />
      </SwiperSlide>
      <SwiperSlide>
        <Swipercard price="123,000" name="ماهان" />
      </SwiperSlide>
      <SwiperSlide>
        <Swipercard price="123,000" name="ماهان" />
      </SwiperSlide>
      <SwiperSlide>
        <Swipercard price="123,000" name="ماهان" />
      </SwiperSlide>
      <SwiperSlide>
        <Swipercard price="123,000" name="ماهان" />
      </SwiperSlide>
      <SwiperSlide>
        <Swipercard price="123,000" name="ماهان" />
      </SwiperSlide>
      <SwiperSlide>
        <Swipercard price="123,000" name="ماهان" />
      </SwiperSlide>
      <SwiperSlide>
        <Swipercard price="123,000" name="ماهان" />
      </SwiperSlide>
      <SwiperSlide>
        <Swipercard price="123" name="ماهان" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swiperer;
