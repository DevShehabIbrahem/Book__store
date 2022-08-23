import { useEffect, useState } from "react";

const useFetchBooks = (URL?: string | any) => {
  const [booksdata, setBooksdata] = useState<[]>([]);

  useEffect(() => {
    fetch(URL)
      .then((data) => data.json())
      .then((data: any) => setBooksdata(data.results));
  }, []);
  return { booksdata };
};

export default useFetchBooks;
