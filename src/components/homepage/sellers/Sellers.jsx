'use client'

import Button from '@/components/common/button/Button';
import RootWrapper from '@/components/common/rootWrapper/RootWrapper';
import rightArrowOutline from "./assets/rightArrowOutline.svg";
import React from 'react';

import "./index.css";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import sellers from './data'

const Sellers = () => {
  return (
   <RootWrapper className={'py-[40px]'}>
         <div className="flex justify-between md:pb-[28px]">
        <div>
          <p className="bodyText3 medium">
          Proud to be part of <span className="bodyText1 bold text-[#003459]">Pet Sellers</span>
          </p>
        </div>
        <Button
          name="View all our sellers"
          link="#"
          outline
          medium
          className={"hidden md:flex"}
          icon={rightArrowOutline}
        />
      </div>
      <div className="sellers h-[100%] w-full  mx-auto">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            768: {
              spaceBetween: 31,
            },
            992: {
              spaceBetween: 31,
            },
          }}
          className="seller-logo-swiper h-[100%] mx-[-20px]"
        >
          {sellers.map((seller, i) => {
            return (
              <SwiperSlide
                key={seller.id}
                className=""
              >
                <div className="w-[100%] h-[100%] flex items-center justify-center ">
                  <Image src={seller.logo} alt="logo" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
   </RootWrapper>
  );
};

export default Sellers;