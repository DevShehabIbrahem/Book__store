import { FC, useEffect, useState } from "react";

import Herosection from "../components/Herosection/Herosection";
import Row from "../common/shared/Row";
import useFetchBooks from "../hooks/useFetchBooks";
import Featured from "../components/Featured/Featured";
import Request from "../API/Requests ";
import Courses from "../components/Courses/Courses";
import BannerSection from "../components/BannerSection/BannerSection";
import NewBooks from "../components/NewBooks/NewBooks";
import BooksTypes from "../components/booksTypes/BooksTypes";

const Home: FC = () => {
  const { booksdata } = useFetchBooks(Request.Books as string | any);

  return (
    <>
      <div className="shehab"></div>
      <Herosection />
      {/* Popular Books */}
      <Row booksdata={booksdata} title="Popular Books" />
      {/* Featured  Books */}
      <Featured />
      {/* courses  Books */}
      <Courses />
      {/* BannerSection  Books */}
      <BannerSection />
      {/* NewBooks */}
      <NewBooks />
      {/* booksTypes */}
      <BooksTypes />
    </>
  );
};

export default Home;
