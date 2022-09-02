import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PageLoader from "./PageLoader";
import Fade from "react-reveal/Fade";
import MovieHomeBody from "./MovieHomeBody";
import "./Movie.css";

export default function CategorizedMovies() {
  const { id } = useParams();
  const { category } = useParams();

  const api = "a87898297a078d85fecce7aab9d8dbde";
  const url = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=${id}&page=`
  );


  return (
    <div id="moviePart" className="h-screen w-full">

      <PageLoader delay={2800} />
      <MovieHomeBody fetchedUrl={url} title={category}></MovieHomeBody>

      
 
    <a href="/movie/categories" className="fixed bottom-0 left-0 h-16 w-16 bg-indigo-600 mb-4 ml-4 shadow-md duration-200 text-slate-200 shadow-indigo-600 cursor-pointer rounded-full pt-3 pl-3 hover:scale-105 hover:bg-indigo-500">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
</svg>
    </a>
    </div>
    
  );
}