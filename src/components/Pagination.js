import React from "react";

const Pagination = ({ listItemsPerPage, totalUsers, setCurrentPage }) => {
  const pageNumbers = [];
  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  for (let i = 1; i <= Math.ceil(totalUsers / listItemsPerPage); i++) {
    pageNumbers.push(i);
    console.log("listItemsPerPage: ", listItemsPerPage);
    console.log("totalUsers: ", totalUsers);
  }
  return (
    <nav>
      <h1>PAGES</h1>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={(e) => paginate(e, number)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
