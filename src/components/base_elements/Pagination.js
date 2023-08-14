import React from "react";

const Pagination = ({ totalPage, currentPage, moveToPageNumber }) => {
  const handlePageNumber = (pageNumber) => {
    moveToPageNumber(pageNumber);
  };
  return (
    <div className={"d-flex justify-content-center"}>
      <div
        className={
          "pagination-container d-flex justify-content-between flex-row col-5 text-center align-items-baseline p-0"
        }
      >
        <span
          className={`d-block pagination-item ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={() => handlePageNumber(1)}
        >
          First
        </span>
        <span
          className={`d-block pagination-item ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={() => handlePageNumber(currentPage - 1)}
        >
          Previous
        </span>
        <ul
          className={
            "d-flex list-group-horizontal list-unstyled m-0 pagination-pages-container"
          }
        >
          {Array.from({ length: totalPage }, (_, index) => (
            <li
              key={index}
              className={`${
                currentPage === index + 1 ? "active" : ""
              } pagination-item`}
              onClick={() => handlePageNumber(index + 1)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
        <span
          className={`d-block pagination-item ${
            currentPage === totalPage ? "disabled" : ""
          }`}
          onClick={() => handlePageNumber(currentPage + 1)}
        >
          Next
        </span>
        <span
          className={`d-block pagination-item ${
            currentPage === totalPage ? "disabled" : ""
          }`}
          onClick={() => handlePageNumber(totalPage)}
        >
          Last
        </span>
      </div>
    </div>
  );
};

export default Pagination;
