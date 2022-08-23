interface types {
  Courses: string;
  Books: string | any;
  New: string;
}

const Request: types = {
  Courses: "https://gutendex.com/books?search=Courses",
  New: "https://gutendex.com/books?search=New",
  Books: "https://gutendex.com/books",
};
export default Request;
