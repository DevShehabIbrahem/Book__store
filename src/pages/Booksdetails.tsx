import { FC } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "../Scss/styles.scss";
import {
  FetchBooksDetails,
  selectStatus,
} from "../Redux/Reducers/BooksDetails";
import { useTypedSelector } from "../Redux/store";
import { useAppDispatch } from "../Redux/hook";
import Errorimage from "../assets/Error.jpg";

const Booksdetails: FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const BooksState = useTypedSelector(selectStatus);
  console.log(BooksState.results);

  useEffect(() => {
    dispatch(FetchBooksDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {BooksState.results?.map((book: any) => (
        <div key={book?.id}>
          <div className=" overflow-hidden flex flex-col lg:flex-row items-center justify-center   lg:w-[48rem]  m-auto  bg-white lg:rounded-[100px] p-[2rem] my-11">
            <div className="w-[15rem] lg:w-full ">
              <img
                src={book?.formats ? book?.formats["image/jpeg"] : Errorimage}
                alt="poster"
                className="w-full rounded-2xl"
              />
            </div>

            {/* Details */}
            <div className="div_style  mb-[9rem] md:mb-[5rem] text-[1.5rem]  mt-11 px-5 md:px-0 lg:ml-12  gap-5  w-full ">
              <div>
                <span>{book?.title}</span>
              </div>

              <div>
                <span className="title_span div_style"> Description</span>

                <span>{book?.subjects[0]} </span>
              </div>
              <div className="flex items-center">
                <span className="title_span">authors</span>
                <span>{book?.authors[0]?.name}</span>
              </div>

              <div>
                <span className="title_span">language</span>
                <span>{book?.languages[0]} </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Booksdetails;
