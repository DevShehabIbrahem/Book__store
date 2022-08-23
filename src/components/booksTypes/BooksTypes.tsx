import React from "react";
import image from "../../assets/types/home1-promo-01.jpg";
import image2 from "../../assets/types/home1-promo-02.jpg";
import image3 from "../../assets/types/home1-promo-03.jpg";
import coocking from "../../assets/home1-leaderboard-01.jpg";

type Props = {};

const BooksTypes = (props: Props) => {
  return (
    <div className="bg-white overflow-hidden p-8 mt-[5rem] ">
      <div className=" flex flex-col lg:flex-row items-center  justify-center gap-6 max-w-6xl m-auto">
        <div className=" relative">
          <img src={image} alt="" className="w-full object-cover relative" />
          <div className="absolute bottom-0 left-[7rem] z-20 text-center">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-[100px]">
              50% Off
            </span>
            <h3 className="text-white text-[1.2rem] py-2">TRAVEL BOOKS</h3>
            <span className="relative bottom-[-6px] text-[0.8rem] text-white px-2 py-1 rounded-[100px] bg-black ">
              I want This Book
            </span>
          </div>
        </div>

        <div className="relative">
          <img src={image2} alt="" className="w-full object-cover relative" />
          <div className="absolute bottom-0 left-[7rem] z-20 text-center">
            <span className="bg-[#7d4dde] text-white px-2 py-1 rounded-[100px]">
              70% Off
            </span>
            <h3 className="text-white text-[1.2rem] py-2"> COOKING BOOKS</h3>
            <span className="relative bottom-[-6px] text-[0.8rem] text-white px-2 py-1 rounded-[100px] bg-black ">
              I want This Book
            </span>
          </div>
        </div>

        <div className=" relative">
          <img src={image3} alt="" className="w-full object-cover " />
          <div className="absolute bottom-0 left-[7rem] z-20 text-center">
            <span className="bg-pink-300 text-white px-2 py-1 rounded-[100px]">
              70% Off
            </span>
            <h3 className="text-white text-[1.2rem] py-2">TRAVEL BOOKS</h3>
            <span className="relative bottom-[-6px] text-[0.8rem] text-white px-2 py-1 rounded-[100px] bg-black ">
              I want This Book
            </span>
          </div>
        </div>
      </div>
      <div className="pt-[100px]">
        <img src={coocking} alt="" className="m-auto" />
      </div>
    </div>
  );
};

export default BooksTypes;
