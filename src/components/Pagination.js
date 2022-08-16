import React, { useState } from "react";

const Pagination = ({
  listItemsPerPage,
  totalUsers,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  for (let i = 1; i <= Math.ceil(totalUsers / listItemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={(e) => handlePrev(e)}>
            Prev
          </button>
        </li>
        {pageNumbers.length > maxPageNumberLimit ? (
          <li className="page-item">
            <button className="page-link" onClick={(e) => handlePrev(e)}>
              &hellip;
            </button>
          </li>
        ) : null}
        {pageNumbers.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li key={number} className="page-item">
                <a
                  onClick={(e) => paginate(e, number)}
                  href="!#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            );
          } else {
            return null;
          }
        })}
        {pageNumbers.length > maxPageNumberLimit ? (
          <li className="page-item" onClick={handleNext}>
            <button className="page-link" onClick={(e) => handleNext(e)}>
              &hellip;
            </button>
          </li>
        ) : null}
        <li className="page-item">
          <button className="page-link" onClick={(e) => handleNext(e)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
