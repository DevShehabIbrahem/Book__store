import banner from "../../assets/banner-01.jpg";
import { FaBookOpen, FaPencilAlt, FaBookmark } from "react-icons/fa";
const BannerSection = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("${banner}")`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          position: "relative",
        }}
        className="text-white object-contain h-[350px] overflow-hiddens"
      >
        <div className=" h-full flex items-center justify-center text-center text-[1.7rem] font-bold">
          Browse Through Our Complete Library
        </div>
      </div>
      <div className="bg-white w-full px-11 py-16">
        <div className="flex flex-col md:flex-row text-center">
          <div className="space-y-5 mb-16 md:mb-0">
            <span className="text-blue-500 text-[2rem] flex justify-center mb-2 ">
              <FaBookOpen />
            </span>
            <span className="text-[1.2rem] text-black">Tons of Books</span>
            <p className="leading-6 text-[1rem] px-5">
              From advanced selectors to generated content to web fonts, and
              from gradients, shadows, and rounded corners. to elegant
              animations.
            </p>
          </div>

          <div className="space-y-5 mb-16 md:mb-0">
            <span className="text-yellow-500 text-[2rem] flex justify-center mb-2">
              <FaPencilAlt />
            </span>
            <span className="text-[1.2rem] text-black">
              Hundreds of Authors
            </span>
            <p className="leading-6 text-[1rem] px-5">
              To elegant animations. , CSS3 holds a universe of creative
              possibilities. No one can better guide you through.
            </p>
          </div>

          <div className="space-y-5 mb-16 md:mb-0">
            <span className="text-green-500 text-[2rem] flex justify-center mb-2">
              <FaBookmark />
            </span>
            <span className="text-[1.2rem] text-black">Easily Bookmarked</span>
            <p className="leading-6 text-[1rem] px-5">
              hadows, and rounded corners. to elegant animations. , CSS3 holds a
              universe of creative possibilities. No one can better guide you
              through.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
