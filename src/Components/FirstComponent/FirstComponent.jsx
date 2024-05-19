// import React, { useState } from "react";
// import initialdata from "../Data/initialData";
// import "./FirstComponent.css";
// import secondData from "../Data/secondData";

// const FirstComponent = () => {


//   const [search, setSearch] = useState({ bookName: '', author: '' });
//   const [filteredBooks, setFilteredBooks] = useState(initialdata);

//   const handleInputChange = (e) => {
//     const { bookName, value } = e.target;
//     setSearch({
//       ...search,
//       [bookName]: value,
//     });
//   };

//   const handleSearch = () => {
//     const filtered = initialdata.filter((item) => {
//       return (
//         item.BookName.toLowerCase().includes(search.BookName.toLowerCase()) ||
//         item.Author.toLowerCase().includes(search.Author.toLowerCase())
//       );
//     });
//     setFilteredBooks(filteredBooks);
//   };

  

//   return (
//     <body>
//       <div>
//       {/* <h1>Book Search</h1> */}
//       <div className="inputtext">
//         <input
//           type="text"
//           name="BookName"
//           placeholder="Book Name"
//           value={search.BookName}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="Author"
//           placeholder="Author"
//           value={search.Author}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div>
        
//       </div>


//  {/* <ul>
//           {filteredBooks.map((items) => (
//             <li key={items.id}>
//               {items.BookName} by {items.Author}
//             </li>
//           ))}
//         </ul>  */}


//         <div className="mapfun">
//            <h2 id='h3id'>HARRY POTTER BOOK SERIES</h2>
//      {initialdata.map((item,index) => ( 
//            <>
//       <div className='inmapfun'>
//         <>
//         <h3 id='h3id' key={index}> Book ISBN is  247{index}</h3>
//         <h3 key={index}>Book Name is  {item.BookName} </h3>
//         <h4 key = {index}>Author Name is {item.Author}</h4>
//         <h4 key={index}>Year Published : {item.Published}</h4>
//         <h4 id='h4id' key = {index}> The Book {item.BookName} is a {item.Genre} Genre</h4>
//         </>
//         </div>
    
//         </> 
//      ))}
//         </div>

       


//          {/* <div className='mapfun'>
//       <h2 id='h3id'>PIRATES OF THE CARRIBEAN SERIES</h2>
//         {secondData.map((title,index)=>(
//           <>
          
//           <div className='inmapfun'>
//           <h3 id='h3id'key={index}>ISBN is 472{index}</h3>
//           <h3 key={index}>This is {title.BookName} </h3>
//           <h3 key={index}>Written by {title.Author}</h3>
//           <h4 key={index}>It's Genre is {title.Genre}</h4>
//           <h4 id='h4id' key={index}>Pubilshed in {title.Published}</h4>
//           </div>
//           </>
//            )) }
     
//         </div>  */}
       
//       </div>
//     </body>
//   );

  
// }

// export default FirstComponent;


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
      {/* <div className="mapfun">
        <h2 id="h3id">HARRY POTTER BOOK SERIES</h2>
        {initialData.map((item, index) => (
          <div className="inmapfun" key={index}>
            <h3 id="h3id">Book ISBN is 247{index}</h3>
            <h3>Book Name is {item.BookName}</h3>
            <h4>Author Name is {item.Author}</h4>
            <h4>Year Published: {item.Published}</h4>
            <h4 id="h4id">The Book {item.BookName} is a {item.Genre} Genre</h4>
          </div>
        ))}
      </div> */}
      {/* Uncomment this section if you want to display the second dataset */}
      {/* <div className="mapfun">
        <h2 id="h3id">PIRATES OF THE CARIBBEAN SERIES</h2>
        {secondData.map((title, index) => (
          <div className="inmapfun" key={index}>
            <h3 id="h3id">ISBN is 472{index}</h3>
            <h3>This is {title.BookName}</h3>
            <h3>Written by {title.Author}</h3>
            <h4>It's Genre is {title.Genre}</h4>
            <h4 id="h4id">Published in {title.Published}</h4>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default FirstComponent;
