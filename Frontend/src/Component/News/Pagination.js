import React from 'react'
import "./News.css"
import { useGlobalContext } from './AppContext';
const  Pagination = () => {
 const {page,totalResults,getprev,getnext} = useGlobalContext();
 
  return (
    <>
    <div className='paginationbox'>
    <button className='btn btn-secondary prevbtn' onClick={()=>getprev()}>PREV</button>
    <p className='pagination-number'>{page} to { Math.ceil(totalResults/20)}</p>
    <button  className='btn btn-secondary nextbtn' onClick={()=>getnext()}>NEXT</button>
    </div>
    </>
  )
}

export default Pagination;
