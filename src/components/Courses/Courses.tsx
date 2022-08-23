import Regust from "../../API/Requests ";
import Row from "../../common/shared/Row";
import useFetchBooks from "../../hooks/useFetchBooks";

const Courses = () => {
  const { booksdata } = useFetchBooks(Regust.Courses);
  return (
    <div className="bg-[#2F2B35] p-16">
      <Row booksdata={booksdata} title="Courses Books" />
    </div>
  );
};

export default Courses;
