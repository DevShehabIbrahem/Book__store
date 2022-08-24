import img1 from "../../assets/home1-featured-01.jpg";
import img2 from "../../assets/home1-featured-02.jpg";

const Featured = () => {
  return (
    <div className="bg-white overflow-hidden p-8 my-[5rem] ">
      <div className=" flex flex-col lg:flex-row items-center  justify-center gap-6 max-w-6xl m-auto">
        <div className="flex-1 space-y-5 mr-5 ">
          <span className="text-[#a7a7a7]  text-[1rem] font-bold  ">
            Featured Book
          </span>
          <h3 className="text-[1.2rem] md:text-[1.5rem] ">
            The Complete Idiots Guide to Graphic Design
          </h3>
          <strong>Anggi Krisna</strong>

          <p className="leading-[1.5rem] md:w-[25rem] mr-auto  lg:mr-0  ">
            From advanced selectors to generated content to web fonts, and from
            gradients, shadows, and rounded corners to elegant animations, CSS3
            hold a universe of creative possibilities. No one can better guide
            you through these galaxies than Dan Cederholm.
          </p>

          <button className="bg-[#171717] text-[1.1rem] hover:bg-[#262626] mr-2 px-5 py-[0.5rem] transition-all ease-in rounded-[100px]">
            Get This Book
          </button>
        </div>

        <div className=" flex-2 flex flex-col md:flex-row gap-4">
          <img src={img1} alt="" className=" w-[15rem]" />
          <img src={img2} alt="" className=" w-[15rem]" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
