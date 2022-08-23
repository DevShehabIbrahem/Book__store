import Row from "../../common/shared/Row";
import useFetchBooks from "../../hooks/useFetchBooks";
import Regust from "../../API/Requests ";

const NewBooks = () => {
  const { booksdata } = useFetchBooks(Regust.New);
  return (
    <div>
      <Row booksdata={booksdata} title="New Books" />
    </div>
  );
};

export default NewBooks;
