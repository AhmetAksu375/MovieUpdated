import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";
import Fade from "react-reveal/Fade";

import PageLoader from "./PageLoader";
import "./Movie.css";
import { Link } from "react-router-dom";
export default function MovieHomeBody({ fetchedUrl, title }) {
  const [movieData, setMovieData] = useState({ results: [] });
  const [page, setPage] = useState({
    pageIndex: localStorage.getItem("pageIndex") ?? 1,
  });
  const pages = ["1", "2", "3"];
  const [movieQuery, setMovieQuery] = useState("");

  const pageBtns = useRef();
  const movies = useRef();
  const movies2 = useRef();
  const api = "a87898297a078d85fecce7aab9d8dbde";
  const latesMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=`;
  const mainLatesMovies = `${latesMovies}${page.pageIndex}`;
  const mainFetchedUrl = `${fetchedUrl && fetchedUrl[0]}${page.pageIndex}`;

  const [scrollPosition, setPosition] = useState(0);

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  function setPagex(val) {
    if (val == page.pageIndex) return;
   setTimeout(()=>{
    pageBtns.current.style.opacity = "0";
    movies.current.style.opacity = "0";

    localStorage.setItem("pageIndex", val);
    movies2.current.style.background = "red !important";

    setTimeout(() => {
      setMovieData({ ...movieData, results: [""] });
      setPage({ ...page, pageIndex: val });
      fetchAgain(val);
    }, 700);
    setTimeout(() => {
      movies2.current.classList.add("overlayFix");
      movies2.current.style.opacity = "1";
    }, 200);

    setTimeout(() => {
      movies2.current.style.opacity = "0";
      pageBtns.current.style.opacity = "1";
    }, 5500);
    setTimeout(() => {
      movies.current.style.opacity = "1";
      movies2.current.classList.remove("overlayFix");
    }, 5800);
   },600)
  }
  function fetchAgain(val) {
    console.log(latesMovies);
    fetch(fetchedUrl ? `${fetchedUrl[0]}${val}` : `${latesMovies}${val}`)
      .then((res) => res.json())
      .then((result) => setMovieData(result));
  }
  useEffect(() => {
    fetch(fetchedUrl ? mainFetchedUrl : mainLatesMovies)
      .then((res) => res.json())
      .then((result) => setMovieData(result));
  }, []);


  return (
    <>
      <a
        href="#moviePart"
        className={
          "h-16 w-16 fixed bottom-0 right-0 z-50  mb-2 sm:mb-4 mr-4 rounded-full bg-indigo-600 text-indigo-100 hover:scale-105 hover:text-[#0f172a] hover:bg-indigo-200 cursor-pointer duration-200 ease-out shadow-lg shadow-indigo-700 pt-3 pl-[16px] " +
          (scrollPosition > 550 ? "translate-x-0" : "translate-x-24")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          />
        </svg>
      </a>
      <PageLoader delay={3700} />
      <Fade>
        {movieData.results.length > 0 ? (
          <div className="h-auto movieBody duration-300">
            <div
              ref={movies}
              className="grid pt-4 mt-[-40px] sm:mt-0 grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sd:grid-cols-2 duration-300 place-content-center gap-4 lg:px-24 md:px-12 px-8 pb-12  bg-slate-800 movieBody"
            >
              <div className={"w-full mb-6 col-span-full" +((title == null || title=="Recommendeds")?" pt-12":" pt-32")}>
                <h3
                  id="moviePart2"
                  className=" text-[#0F172A] text-3xl sm:text-5xl font-bold ml-1 mb-4 pb-3 bgLinear inline w-[auto] pr-4 pl-2 rounded-xl pt-2 shadow-lg shadow-indigo-800"
                >
                  {title ?? "Movies"}
                </h3>
              </div>
              <>
                {movieData.results.map((movie, index) => (
                  <a
                    href={`/movie/id/${movie.id}`}
                    key={index}
                    className="h-[99%] px-[3px] pt-[3px] pb-[3px] sm:px-[5.5px] sm:py-[5.5px] w-full bg-slate-900 rounded-xl shadow-2xl duration-300 ease-out hover:scale-105 hover:bg-indigo-400 cursor-pointer"
                  >
                    <LazyLoadImage
                      effect="blur"
                      className="rounded-xl w-full h-full bg-cover"
                      alt={"aaa"}
                      src={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}
                      key={index}
                    />
                  </a>
                ))}
              </>
            </div>
            <div
              ref={movies2}
              className="overlay hidden  w-screen  duration-300 ease-out top-0 z-50 opacity-0 pt-48 text-center"
            >
              <div className="sk-folding-cube text-center">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
              </div>
            </div>
            <div  className="bottom-0   z-40 w-full pb-1 text-center m-auto ">
              <a
                href="#moviePart2"
                className="w-full z-40 text-center m-auto display-inline pb-4"
                style={{ display: "inline !important" }}
              >
            {movieData.total_pages > 1 &&
                  <div ref={pageBtns} >
                  {pages.splice(0,movieData.total_pages).map((eachPage, index) => (
                    <button
                      key={index}
                      div
                      className={
                        `shadow-lg duration-300 border-0 hover:bg-slate-700 text-xl w-12 h-12 ` +
                        (index + 1 == page.pageIndex
                          ? "btn bg-indigo-600 hover:bg-indigo-600"
                          : "btn bg-slate-800")
                      }
                      onClick={() => setPagex(index + 1)}
                    >
                      {eachPage}
                    </button>
                  ))}
                  </div>
            }
               
              </a>
            </div>
          </div>
        ) : (
          <Fade delay={500}>
                <div className="w-full pt-24 text-center">
            <h3
              id="moviePart2"
              className=" text-[#0F172A] text-3xl sm:text-5xl font-bold ml-1 mb-4 pb-3 bg-red-500 inline w-[auto] pr-4 pl-2 rounded-xl pt-2 shadow-lg shadow-red-800"
            >
              Couldnt Find Movies
            </h3>
            <li className="mt-12">
              <a className="navLink navInput">
                <input
                  onChange={(e) => setMovieQuery(e.target.value)}
                  placeholder="Enter the movie..."
                  className="mt-1 h-12 inputBar"
                ></input>
                <a href={`/movie/movieSearch/${movieQuery}`}>
                  <button className="inputBtn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </a>
              </a>
            </li>
          <div className="flex justify-center gap-2 w-[300px] m-auto">
            
            <a
              href="/movie/categories"
              className="bg-indigo-600 mt-12 w-[80px] h-[80px]  rounded-full text-xl font-semibold shadow-lg shadow-indigo-800 hover:bg-indigo-300 hover:scale-105 duration-300 pt-6 pl-[23px] cursor-pointer pl-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8  w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="/movie"
              className=" bg-indigo-600 mt-12 w-[80px] h-[80px] rounded-full text-xl font-semibold shadow-lg shadow-indigo-800 hover:bg-indigo-300 hover:scale-105 duration-300 pt-6 pl-[23px] cursor-pointer pl-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
          </div>
          </div>
          </Fade>

      
        )}
      </Fade>
    </>
  );
}
