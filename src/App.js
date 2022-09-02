import Header from "./Pages/TodoProject/Header";
import Body from "./Pages/TodoProject/Body";
import Home from "./Pages/Home/Home";


import Quiz from "./Pages/QuizProject/Quiz";
import Quiz2 from "./Pages/QuizProject/Quiz2";


import Nav from "./Pages/Nav";
import Nav2 from "./Pages/Nav2";

import MovieHomeEntry from "./Pages/MovieApp/MovieHomeEntry";
import MovieHomeSlider from "./Pages/MovieApp/MovieHomeSlider";
import MovieHeader from "./Pages/MovieApp/MovieHeader";
import MovieHomeBody from "./Pages/MovieApp/MovieHomeBody";
import MovieDetail from "./Pages/MovieApp/MovieDetail";
import SearchedMovies from "./Pages/MovieApp/SearchedMovies";
import Categories from "./Pages/MovieApp/Categories";
import CategorizedMovies from "./Pages/MovieApp/CategorizedMovies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route
          path="/todo"
          element={
            <div id="todoBody" className="todoApp h-screen  overflow-x-hidden">
              <Nav></Nav>
              <Header />
              <Body />
            </div>
          }
        />
        <Route
          path="/quiz/1"
          element={
            <div id="quiz" className="quizApp h-screen bg-slate-200 scroll-smooth">
              <Nav></Nav>
              <Quiz></Quiz>
            </div>
          }
        />
        <Route
          path="/quiz/2"
          element={
            <div  className="quizApp h-screen bg-slate-300 fixed top-0 w-screen scroll-smooth overflow-x-hidden">
              <Nav></Nav>
              <Quiz2></Quiz2>
            </div>
          }
        />
        <Route path="/movie" element={
        <div id="moviePart" className="w-full movieBody">
          <Nav2></Nav2>
          <MovieHeader/>
          <MovieHomeEntry/>
          <MovieHomeSlider/>

          <MovieHomeBody></MovieHomeBody>

        </div>
      }>
        </Route>
        <Route path="/movie/categories" element={
        <div id="body" className="w-full h-full">
          <MovieHeader/><Categories/>
        </div>
      }>
        </Route>
        <Route path="/movie/categories/:category/:id" element={
        <div id="body" className="w-full h-full pt-1">
          <MovieHeader/>
          <CategorizedMovies></CategorizedMovies>
        </div>
      }>
        </Route>
        <Route path="/movie/id/:movieId" element={
        <div>
          <MovieHeader/><MovieDetail/>
        </div>
      }>
        </Route>
        <Route path="movie/movieSearch/:movie" element={
        <div id="body" className="w-full h-full">
          <SearchedMovies></SearchedMovies>
        </div>
      }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
