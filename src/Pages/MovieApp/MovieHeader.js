import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./Movie.css";
export default function MovieHeader() {
  const [navOpen, setNavOpen] = useState(false);
  const categoryList = useRef();
  const [movieQuery, setMovieQuery] = useState("");
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
      console.log("closed");
    } else {
      document.body.style.overflow = "auto";
      console.log("closed");
    }
  });

  function navHandler() {
    setNavOpen(!navOpen);
  }
  function categoryHandler(value) {
    if (value === "Open") {
      categoryList.current.style.height = "100%";
    } else {
      categoryList.current.style.height = "0px";
    }
  }
  return (
    <nav>
      <div className="navbar p-0 w-full absolute z-40">
        <div className="container nav-container">
          <input
            className="checkbox"
            type="checkbox"
            name=""
            id=""
            onClick={() => navHandler()}
          />
          <div className="hamburger-lines">
            <span className="line line1 bg-slate-100"></span>
            <span className="line line2 bg-slate-100"></span>
            <span className="line line3 bg-slate-100"></span>
          </div>
          <div className="logo">
            <h1 className="text-2xl font-bold mr-3 text-indigo-700">
              MovieKing
            </h1>
          </div>
          <div className="menu-items text-slate-50">
            <li>
              <a className="navLink" href="/movie">
                Home
              </a>
            </li>

            <li>
              <a
                className="navLink"
                href="/movie/categories"
                onClick={() => categoryHandler("Open")}
              >
                Categories
              </a>
            </li>

            <li>
              <a className="navLink navInput" href="#">
                <input
                  placeholder="Enter the movie..."
                  className="mt-1 h-12 inputBar"
                  onChange={(e) => setMovieQuery(e.target.value)}
                ></input>
                <a href={`/movie/movieSearch/${movieQuery}`}>
                <button  className="inputBtn">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
