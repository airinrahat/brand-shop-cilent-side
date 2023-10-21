/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./Slider.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Slider = () => {
  return (
    <div>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-0 md:text-center text-center"
      >
        <SwiperSlide>
          <div className="banner-con banner-bg-1 flex justify-center items-center text-white ">
            <div className="banner-box md:w-2/4">
              <h1 className="text-7xl color-red font-semibold font-serif uppercase">
                Lamborghini Aventador LP700-4
              </h1>

              <p className="my-4 text-lg uppercase ">
                6.6L V8 32V DDI OHV Turbo Diesel, 5-Speed Automatic, Fuel Type:
                Diesel, Color: Black.
              </p>
              <div className="flex items-center justify-center">
                <button className="uppercase text-lg  font-serif font-bold flex items-center justify-center gap-5 ">
                  Book Now
                  <FaArrowRightLong></FaArrowRightLong>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-2 flex justify-center items-center text-white ">
            <div className="banner-box md:w-2/4">
              <h1 className="text-7xl color-red font-semibold font-serif uppercase">
                Lamborghini Aventador LP700-4
              </h1>

              <p className="my-4 text-lg uppercase ">
                6.6L V8 32V DDI OHV Turbo Diesel, 5-Speed Automatic, Fuel Type:
                Diesel, Color: Black.
              </p>
              <div className="flex items-center justify-center">
                <button className="uppercase text-lg  font-serif font-bold flex items-center justify-center gap-5 ">
                  Book Now
                  <FaArrowRightLong></FaArrowRightLong>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-3 flex justify-center items-center text-white ">
            <div className="banner-box md:w-2/4">
              <h1 className="text-7xl color-red font-semibold font-serif uppercase">
                Lamborghini Aventador LP700-4
              </h1>

              <p className="my-4 text-lg uppercase ">
                6.6L V8 32V DDI OHV Turbo Diesel, 5-Speed Automatic, Fuel Type:
                Diesel, Color: Black.
              </p>
              <div className="flex items-center justify-center">
                <button className="uppercase text-lg  font-serif font-bold flex items-center justify-center gap-5 ">
                  Book Now
                  <FaArrowRightLong></FaArrowRightLong>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-4 flex justify-center items-center text-white ">
            <div className="banner-box md:w-2/4">
              <h1 className="text-7xl color-red font-semibold font-serif uppercase">
                Lamborghini Aventador LP700-4
              </h1>

              <p className="my-4 text-lg uppercase ">
                6.6L V8 32V DDI OHV Turbo Diesel, 5-Speed Automatic, Fuel Type:
                Diesel, Color: Black.
              </p>
              <div className="flex items-center justify-center">
                <button className="uppercase text-lg  font-serif font-bold flex items-center justify-center gap-5 ">
                  Book Now
                  <FaArrowRightLong></FaArrowRightLong>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
