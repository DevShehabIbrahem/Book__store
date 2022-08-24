import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";
import { grid } from "../styles";
import ErrorImg from "../../assets/Error.jpg";

import "swiper/css";
import "swiper/css/navigation";

import { useEffect, useState } from "react";
import Loading from "./Loading/Loading";

const Row = ({
  booksdata,
  gridsys,
  title,
}: {
  booksdata: [];
  gridsys?: boolean;
  title?: string;
}) => {
  const breakpoints = {
    350: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    650: { slidesPerView: 2, spaceBetween: 20 },

    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  };

  return (
    <div className="scale-95 ">
      <h1 className="text-[2rem] ml-8  mt-9 font-Roboto text-center mb-5">
        {title}
      </h1>
      {!gridsys ? (
        <Swiper
          navigation={true}
          slidesPerView={2}
          spaceBetween={10}
          modules={[Navigation]}
          className="p-5"
          breakpoints={breakpoints}
        >
          {booksdata?.map((b: any) => (
            <SwiperSlide key={b?.id}>
              <Link
                to={`/booksdetails/${b.id}`}
                onClick={() => window.scroll(0, 0)}
              >
                <div className="relative overflow-hidden md:hover:scale-105 p-2 delay-300 transition-all ">
                  <span className="flex items-center gap-2 bg-red-600 text-white text-[1rem] px-3 absolute top-3 right-5 rounded-[100px] z-10">
                    {"Sale"}
                  </span>
                  <img
                    src={b?.formats["image/jpeg"]}
                    alt="img-blur-shadow"
                    className="h-full object-cover  w-[50rem]"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={grid}>
          {booksdata?.map((b: any) => (
            <div key={b?.id}>
              <Link
                to={`/booksdetails/${b.id}`}
                onClick={() => window.scroll(0, 0)}
              >
                <div className="relative overflow-hidden md:hover:scale-105 p-2 delay-300 transition-all ">
                  <span className="flex items-center gap-2 bg-red-600 text-white text-[1rem] px-3 absolute top-3 right-5 rounded-[100px] z-10">
                    {"Sale"}
                  </span>
                  <img
                    src={b?.formats["image/jpeg"]}
                    alt="img-blur-shadow"
                    className="h-[20rem] w-full"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Row;
