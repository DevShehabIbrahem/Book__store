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
        <div className="div__icons">
          <div>
            <span className="text-blue-500 ">
              <FaBookOpen />
            </span>
            <span>Tons of Books</span>
            <p>
              From advanced selectors to generated content to web fonts, and
              from gradients, shadows, and rounded corners. to elegant
              animations.
            </p>
          </div>

          <div>
            <span className="text-yellow-500">
              <FaPencilAlt />
            </span>
            <span>Hundreds of Authors</span>
            <p>
              To elegant animations. , CSS3 holds a universe of creative
              possibilities. No one can better guide you through.
            </p>
          </div>

          <div>
            <span className="text-green-500">
              <FaBookmark />
            </span>
            <span>Easily Bookmarked</span>
            <p>
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
