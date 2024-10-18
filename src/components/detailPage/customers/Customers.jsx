"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { fetchCustomers } from "@/api/api";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const data = await fetchCustomers();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      } finally {
        setLoading(false);
      }
    };

    getCustomers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-[24px] pb-[28px] pl-[20px] flex flex-col gap-[16px] xl:max-w-[1180px] w-full mx-auto ">
      <h1 className="text-[24px] leading-[36px] text-[#003459] bold">
        Our Lovely Customers
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="customerSwiper"
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 25,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
        }}
      >
        {customers.map((customer, index) => (
          <SwiperSlide key={index}>
            <Image
              src={customer.image}
              alt={`${customer.name} and their pet ${customer.pet}`}
              width={150}
              height={340}
              className="rounded-[12px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Customers;
