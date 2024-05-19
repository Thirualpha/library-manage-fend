import React, { useState } from "react";
import initialData from "../Data/initialData";
import "./FirstComponent.css";
import secondData from "../Data/secondData";

const FirstComponent = () => {
  const [search, setSearch] = useState({ bookName: '', author: '' });
  const [filteredBooks, setFilteredBooks] = useState(initialData);

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
  };

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
          {filteredBooks.map((item, index) => (
            <div className="inmapfun">
            <li key={index}>
              <h3 id="h3id">Book Name is {item.BookName}</h3>
              <h4>Author: {item.Author}</h4>
              <h4>Published in {item.Published}</h4>
              <h4 id="h4id">The Subject {item.Genre}</h4>
            </li>
            </div>
          ))}
        </ul>
      
      </div>
     
    </div>
  );
}

export default FirstComponent;
