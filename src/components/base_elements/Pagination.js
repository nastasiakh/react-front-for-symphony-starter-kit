import React, { useState } from "react";

const Pagination = ({ totalPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const increasePage = () => {
    setCurrentPage((prevState) => prevState++);
  };
  const decreasePage = () => {
    setCurrentPage((prevState) => prevState--);
  };
  return (
    <div className={"d-flex justify-content-end"}>
      <div
        className={
          "d-flex justify-content-end flex-row col-6 text-center align-items-baseline"
        }
      >
        <button
          className={"col-2 app-button"}
          onClick={decreasePage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className={"d-flex col-2 justify-content-center "}>
          {currentPage} of {totalPage}
        </div>
        <button
          className={"app-button col-2"}
          onClick={increasePage}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
