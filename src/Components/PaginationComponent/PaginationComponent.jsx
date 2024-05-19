import React from 'react'
import '../FirstComponent/FirstComponent.css'

const PaginationComponent = ({currentPage , totalPage , onPageChange}) => {
    const pages = [...Array(totalPage).keys()].map(num => num+1);

    

    // function preChange(){
    //     if(currentPage !== 1){
    //       setCurrentPage(currentPage-1)
    //     }
    //   }
      
    //   function nextChange(){
    //     if(currentPage !== totalPage){
    //       setCurrentPage(currentPage+1)
    //     } 
    //   }



  return (
    <div>
        <button onClick={()=>onPageChange(currentPage-1)} disabled={currentPage === 1}>
            Previous
        </button>



        {pages.map(page=>(
            <button key ={page} onClick={()=>onPageChange(page)}>
                {page}
            </button>
        ))}



        <button onClick={()=>onPageChange(currentPage+1)} disabled={currentPage === totalPage}>
            Next
        </button>

       




    </div>
  )

}

export default PaginationComponent