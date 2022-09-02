import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieHeader from './MovieHeader';
import MovieHomeBody from './MovieHomeBody';
import MovieDetail from './MovieDetail';
export default function MovieRoot({actors}) {
  console.log(actors);
  return (
   <div>{actors.cast.length}</div>
  )
}
