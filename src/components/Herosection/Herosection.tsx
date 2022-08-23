import Cover from "../../assets/banner.jpg";
const Herosection = () => {
  return (
    <div
      className="text-white object-contain h-[590px] overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${Cover}")`,
        backgroundPosition: "center center",
        position: "relative",
        width: "100%",
        zIndex: "-9999",
      }}
    >
      <div className="ml-5 md:ml-[9rem] pt-[12rem] md:pt-[13rem] h-[190px] md:w-[38rem] relative z-10">
        <h3 className="text-[1.1rem] text-left font-bold pb-[0.3rem]">
          Reading is the best for get idea
        </h3>

        <h1 className="text-[4rem] text-left font-bold pb-[0.3rem]">
          Keep Reading
        </h1>

        <div className="w-full flex items-end mt-5">
          <button className="bg-[#171717] text-[1.1rem] hover:bg-[#262626] mr-2 px-5 py-[0.5rem] transition-all ease-in rounded-[100px]">
            Read More
          </button>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          backgroundImage:
            " linear-gradient(200deg,transparent,rgba(37,37,37,0.61),#111)",
        }}
      />
    </div>
  );
};

export default Herosection;
