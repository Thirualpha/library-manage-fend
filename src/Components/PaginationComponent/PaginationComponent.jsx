// src/components/Pagination.js
import React from 'react';
import './Pagination.css';

const PaginationComponent = ({ itemsPerPage, totalItems, paginate, currentPage, previousPage, nextPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a onClick={previousPage} href="!#" className="page-link">
            Previous
          </a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <a onClick={nextPage} href="!#" className="page-link">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationComponent;
