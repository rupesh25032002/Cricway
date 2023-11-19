import React from 'react'
import { useGlobalContext } from './AppContext'
import Pagination from './Pagination';
import "./News.css"
const Stories = () => {
  const {articles,isLoading} = useGlobalContext();
  if(isLoading){
    return(
    <>
    <div className='loadingbox'>
    <h1 className='text-center mt-5'>Loading....</h1>
    </div>
    </>
    )
  }
  return (
   <>
   <div className="container-fluid newsbox" >
    <div className='row newsbox2' id='newsbox'>
   {articles.map((curr)=>{
   return(
      <>
  
      <div className="card newscard ">
  <img src={curr.urlToImage?curr.urlToImage:"//m.cricbuzz.com/a/img/v1/600x400/i1/c254321/tom-curran-and-hasarangas-all-round-efforts-were-central-to-desert-vipers-becoming-the-first-team-to-reach-the-final.jpg"} className="card-img-top" alt="..."/>
  
  <div className="card-body">
    <h5 className="card-title">{curr.title}</h5>
    <p className="card-text">{!curr.description?"In a new video shared four hours back, Mr Dhoni can be seen driving a tractor to plough the field at his farmhouse in Ranchi.":curr.description}</p>
    <a href={curr.url} className="btn btn-primary">Read More</a>
  </div>
</div>

      </>
   )
   })}
   </div>
   <Pagination/>
   </div>
   </>
  )
}

export default Stories
