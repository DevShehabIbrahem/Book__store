import { useState } from "react";

import { useTypedSelector } from "../Redux/store";

import { useAppDispatch } from "../Redux/hook";
import { SearchBooks, SearchState } from "../Redux/Reducers/SearchSlice";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { grid } from "../common/styles";
const Search = () => {
  const [term, setTerm] = useState<string>("");

  const state = useTypedSelector(SearchState);
  console.log(state);

  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch(SearchBooks(term));
  };

  return (
    <>
      <div className="flex mx-auto mt-20 gap-2 w-80 md:w-96  duration-300 p-2 rounded-[100px] bg-gray-300 drop-shadow-md hover:bg-gray-200 ">
        <span
          className="text-red-500 text-[20] md:text-[30px] hover:cursor-pointer "
          onClick={handleSearch}
        >
          <IoIosSearch className=" text-[2rem]" />
        </span>

        <input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          className="py-1 w-full outline-0 bg-transparent border-0 focus:outline-none  text-black "
          placeholder="Search"
        />
      </div>
      <h1 className="text-center text-[1.5rem] py-5 font-bold">
        {`Search results ${state.results?.length || 0}`}
      </h1>

      {/* result */}
      <div className={grid}>
        {state.results?.map((b: any) => (
          <Link
            to={`/booksdetails/${b.id}`}
            key={b.id}
            className="opacity-[0.8] hover:opacity-[1] duration-300 transition-all"
          >
            <div className="relative overflow-hidden md:hover:scale-105 p-2 delay-300 transition-all ">
              <img
                src={b?.formats["image/jpeg"]}
                alt="sdas"
                className="w-full h-[20rem]"
              />

              <span className="text-[1.2rem] text-center pt-2 flex items-center justify-center font-bold">
                {b?.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Search;
