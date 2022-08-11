import React, { useState } from "react";

const Pagination = ({ listItemsPerPage, totalUsers, setCurrentPage }) => {
  const pageNumbers = [];

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  for (let i = 1; i <= Math.ceil(totalUsers / listItemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
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
      </ul>
    </nav>
  );
};

export default Pagination;
