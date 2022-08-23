const isActiveStyle: string =
  "items-center my-2 font-extrabold text-red-800 transition-all duration-200 ease-in-out capitalize";

const isNotActiveStyle: string =
  "items-center my-2 text-white hover:text-red-800 transition-all duration-200 ease-in-out capitalize";

const navChanged: string =
  "bg-black fixed w-full top-0 transition-all ease-in flex justify-around items-center px-5 py-1 z-20 ";

const navNoChange: string =
  " top-3 bg-black  transition-all ease-in flex justify-around items-center py-2 opacity-[0.8] py-1 z-20";

const flex: string = "flex  m-auto  items-center px-6";

const grid: string =
  "px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  justify-center justify-items-center my-[5rem] w-[20rem] m-auto md:w-full md:m-0 ";

export { navChanged, navNoChange, isNotActiveStyle, isActiveStyle, flex, grid };
