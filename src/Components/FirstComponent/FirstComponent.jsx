// src/components/FirstComponent.js
import React, { useState } from "react";
import initialData from "../Data/initialData";
import "./FirstComponent.css";
import PaginationComponent from "../PaginationComponent/PaginationComponent";


const FirstComponent = () => {
  const [search, setSearch] = useState({ bookName: '', author: '' });
  const [filteredBooks, setFilteredBooks] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearch({
      ...search,
      [name]: value,
    });
  };

  const handleSearch = () => {
    const filtered = initialData.filter((item) => {
      return (
        item.BookName.toLowerCase().includes(search.bookName.toLowerCase()) &&
        item.Author.toLowerCase().includes(search.author.toLowerCase())
      );
    });
    setFilteredBooks(filtered);
    setCurrentPage(1); // Reset to the first page on search
  };

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const previousPage = () => setCurrentPage(prev => (prev === 1 ? prev : prev - 1));
  const nextPage = () => setCurrentPage(prev => (prev === Math.ceil(filteredBooks.length / itemsPerPage) ? prev : prev + 1));

  return (
    <div>
      <div className="inputtext">
        <input
          type="text"
          name="bookName"
          placeholder="Book Name"
          value={search.bookName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={search.author}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="mapfun">
        <ul>
          {currentItems.map((item, index) => (
            <div className="inmapfun" key={index}>
              <li>
                <h3 id="h3id">Book Name is {item.BookName}</h3>
                <h4>Author: {item.Author}</h4>
                <h4>Published in {item.Published}</h4>
                <h4 id="h4id">The Subject {item.Genre}</h4>
              </li>
            </div>
          ))}
        </ul>
        <PaginationComponent
          itemsPerPage={itemsPerPage}
          totalItems={filteredBooks.length}
          paginate={paginate}
          currentPage={currentPage}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    </div>
  );
}

export default FirstComponent;
