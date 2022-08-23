import React, { useEffect, useState } from "react";
import Row from "../common/shared/Row";
import useFetchBooks from "../hooks/useFetchBooks";
import Regust from "../API/Requests ";
const Books = () => {
  const { booksdata } = useFetchBooks(Regust.Books);

  return (
    <div>
      <Row booksdata={booksdata} gridsys title="All Books" />
    </div>
  );
};

export default Books;
