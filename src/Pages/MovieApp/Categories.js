import React, { useLayoutEffect, useState } from "react";
import "./Movie.css";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";
import PageLoader from "./PageLoader";

export default function Categories() {
  const [list,setList] = useState({genres:[]});
  useLayoutEffect(()=>{

    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=a87898297a078d85fecce7aab9d8dbde&language=en-US")
    .then(res => res.json())
    .then((result) => setList(result));
  },[])
  useEffect(()=>{

    let categories = document.getElementsByClassName("category");
    if(categories){
      setTimeout(()=>{
        for(let a = 0; a<categories.length; a++){
          categories[a].style.animationName = "none";
        }
      },3900)
    }
   

},[])

  function localHandler(categoryName){
      if(localStorage.getItem("categoryName")){
        if(categoryName == localStorage.getItem("categoryName")){
          return;
        }
        else{
            localStorage.setItem("categoryName",categoryName);
            localStorage.setItem("pageIndex",1);
        }

      }else{
        localStorage.setItem("categoryName",categoryName);
        localStorage.setItem("pageIndex",1);
      }
  }
  return (
    <div className="h-screen pt-12 movieBody">
      <PageLoader delay={1000}/>
      
     {list.genres.length > 0 && <>
      <Fade cascade left big delay={1100}>
      <div className="grid place-content-center  duration-300 pb-12 ease-out h-auto overflow-hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-6 md:px-24 pt-0 sm:pt-16 movieBody">
        <div className="text-start col-span-full sm:pt-24 mb-4 mt-4 font-bold text-5xl text-slate-50 categoryTitle pb-0 sm:pb-3 pt-24 sm:pt-2">
          <h3 className="bg-red-400 inline px-2 pr-6 shadow-lg shadow-indigo-800 w-auto bgLinear pb-4 pt-2  rounded-xl fontTextTitle ">Categories</h3>
        </div>
          {list.genres.map((category) => (
              <a onClick={()=> localHandler(category.name)} href={`/movie/categories/${category.name}/${category.id}`} key={category.id} className=" bgLinear category fontText2 shadow-lg shadow-indigo-800">{category.name}</a>

          ))}
,      </div>
      </Fade>
     </>}
    </div>
  );
}
