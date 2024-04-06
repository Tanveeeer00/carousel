"use client";
import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ExpiredCard from "./ExpiredCard";
import LiveCard from "./LiveCard";
import NextCard from "./NextCard";
import LaterCard from "./LaterCard";

SwiperCore.use([Navigation, Pagination]);

export default function Prediction() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      onSlideChange={handleSlideChange}
      slidesPerView={3}
      spaceBetween={30}
      direction="vertical"
    >
      <SwiperSlide>
        <ExpiredCard />
      </SwiperSlide>
      <SwiperSlide>
        <LiveCard />
      </SwiperSlide>
      <SwiperSlide>
        <NextCard />
      </SwiperSlide>
      <SwiperSlide>
        <LaterCard />
      </SwiperSlide>
    </Swiper>
  );
}
