// import React, { useState } from 'react'
// import PaginationComponent from './Components/PaginationComponent/PaginationComponent';
// import initialdata from './Components/Data/initialData';
// import FirstComponent from './Components/FirstComponent/FirstComponent';
// import './App.css'

// const App = () => {

//   const [currentPage,setCurrentPage] = useState(1);
//   const itemsPerPage = 5;



//   const totalPage = Math.ceil(initialdata.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = initialdata.slice(indexOfFirstItem,indexOfLastItem);


//   const handlePageChange = (page)=>{
//     if(page < 1 || page > totalPage) 
//       return;
//      setCurrentPage(page);
//   }

// // const handlepreChange = ()=>{
// //   if(currentPage !== indexOfFirstItem){
// //     setCurrentPage(currentPage-1)
// //   }
// // }

// // const handlenextChange=()=>{
// //   if(currentPage !== indexOfLastItem){
// //     setCurrentPage(currentPage+1)
// //   } 
// // }

//   return (
//     <div className='bod'>
//        <h3> Books </h3>



          
//           <div className='pagin'>


//          {currentItems.map((item,index) =>{
//         <>
//         <p key={index}>{index}</p>
//         <p key={index}> Book name is : {item.BookName} </p>
//         <p key={index}> Author is : {item.Author} </p>
        
//         </>
        
//       })}


//       </div>

//       <PaginationComponent
//       currentPage={currentPage}
//       totalPage={totalPage}
//       onPageChange={handlePageChange}
//       // preChange={handlepreChange}
      
//       />
 
// {/* <FirstComponent/>  */}




//      </div>
//    )
// }

// export default App

import React from 'react'
import FirstComponent from './Components/FirstComponent/FirstComponent'
import HomeComponent from './Components/HomeComponent/HomeComponent'

const App = () => {
  return (
    <div><FirstComponent/></div>
    // <div><HomeComponent/></div>
  )
}

export default App
