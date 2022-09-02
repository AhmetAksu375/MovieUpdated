import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieHomeBody from './MovieHomeBody';
import MovieHeader from './MovieHeader';
export default function SearchedMovies() {

    const api = "a87898297a078d85fecce7aab9d8dbde";
    const { movie } = useParams();
    const url = useState(`https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${movie}&include_adult=false&page=`)
    localStorage.setItem("pageIndex",1)
  return (
    <div id="moviePart">
<MovieHeader></MovieHeader>
    <div className='pt-12 h-[2000]'>
    <MovieHomeBody fetchedUrl={url} title={`${movie}...`}></MovieHomeBody>

    </div>
    </div>
  )
}
