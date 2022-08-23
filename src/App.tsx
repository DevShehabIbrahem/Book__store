import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Loading from "./common/shared/Loading/Loading";
import Search from "./pages/Search";
import Booksdetails from "./pages/Booksdetails";

function App() {
  const [waitTimeOut, setWaitTimeOut] = useState<boolean>(true);

  useEffect(() => {
    const waitTime = setTimeout(() => {
      setWaitTimeOut(false);
    }, 2000);
    return () => clearTimeout(waitTime);
  }, []);

  return (
    <>
      {waitTimeOut ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booksdetails/:id" element={<Booksdetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="/books" element={<Books />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
