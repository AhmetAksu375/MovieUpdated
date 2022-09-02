import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";
import MovieHomeBody from "./MovieHomeBody";
import 'react-lazy-load-image-component/src/effects/blur.css';
import PageLoader from "./PageLoader";
import ActorSlider from "./ActorSlider";
import Comments from "./Comments";
export default function MovieDetail() {
  const { movieId } = useParams();
  const [movieDetailList, setMovieDetailList] = useState({ genres: [] });
  const [movieActorList, setMovieActorList] = useState({ cast: [] });
  const [movieRevievList, setMovieRevievList] = useState({ results: [] });

  const api = "a87898297a078d85fecce7aab9d8dbde";
  const url = useState(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api}&language=en-US&page=`
  );
  const detailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api}&language=en-US`;
  const actorUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api}&language=en-US`;
  const revievUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${api}&language=en-US`;

  useEffect(() => {
    window.scrollTo(0,0);
    fetch(detailUrl).then((res) =>
      res.json().then((result) => setMovieDetailList(result))
    );

    fetch(actorUrl).then((res) =>
      res.json().then((result) => setMovieActorList(result))
    );

    fetch(revievUrl)
    .then(res => res.json())
    .then((result) => setMovieRevievList(result));
  }, []);





  return (
    <div id="moviePart">
      <PageLoader delay={2000}></PageLoader>
      <div className=" w-full h-full pt-24 screen lg:w-full lg:h-full 2xl:w-[1500px] 2xl:h-[1000px] overflow-x-hidden">
        {movieDetailList.genres.length > 0 && (
          <>
            <div
              className="absolute z-5 bg-sky-400 w-full h-[320px] sm:h-[600px] md:h-[900px] lg:h-[700px] xl:h-[900px] mt-[-20px] detailBg bg-cover w-full "
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetailList.backdrop_path})`,
              }}
            ></div>
            <div className="grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-3  gap-0 w-full relative h-[full] pt-8 place-content-center fontTextTitle">
              <div className="col-span-1 row-span-1 md:row-span-2 lg:row-span-3 row-start-0 sm:row-start-1  w-full h-full text-4xl px-6 sm:pl-24 md:pl-4 md:mt-12 lg:px-16 lg:ml-4  md:ml-12 lg:pl-20 py-12 mt-[-50px] sm:mt-12 md:mt-0 lg:mt-[-20px] ">
                <div className="h-full md:w-[90%] w-[50%] h-auto p-0 shadow-xl shadow-slate-800 w-full rounded-xl">
                  <div className=" w-[100%] overflow-hidden m-auto rounded-lg">
                  <img
                    className="w-full h-full rounded-xl   lg:h-[auto] hover:scale-[115%] duration-200  detailMoviePoster mt-[-5%] md:mt-0"
                    src={`https://image.tmdb.org/t/p/original/${movieDetailList.poster_path}`}
                  ></img>
                  </div>
                
                </div>
              </div>
              <div className="col-span-2 lg:row-span-2 text-2xl lg:text-4xl  w-full h-auto  text-4xl font-bold px-2 py-6 text-slate-200  ml-[-2px] md:ml-[40px] lg:ml-[-5%] lg:pl-24 md:pl-0  mt-2 pb-12 md:mt-[80px] lg:mt-[4px]  sm:text-left pl-8 h-[auto] shadow-lg shadow-indigo-900 sm:shadow-none">
                {movieDetailList.original_title}{" "}
                <span className="font-[500] ml-2">{` (${movieDetailList.release_date.slice(
                  0,
                  4
                )})`}</span>
                <div class="stats shadow"></div>
                <div className="flex flex-wrap">
                  {movieDetailList.genres.map((genre, index) => (
                    <p className="font-medium text-xl sm:mt-0 mt-2">
                      {genre.name}{" "}
                      {index + 1 != movieDetailList.genres.length ? `,` : ""}
                    </p>
                  ))}
                </div>
                <div className="flex mt-6 justify-start sm:justify-start pr-3">
                  <div
                    class={
                      `radial-progress text-xl pl-[1.34px] ` +
                      (movieDetailList.vote_average * 10 > 70
                        ? "text-green-400"
                        : movieDetailList.vote_average * 10 < 60
                        ? "text-red-500"
                        : "text-amber-400")
                    }
                    style={{
                      "--value": `${movieDetailList.vote_average * 10}`,
                      "--size": "5rem",
                      "--thickness": "4.4px",
                    }}
                  >
                    {parseInt(movieDetailList.vote_average * 10)}%
                  </div>
                  <p className="text-xl font-bold pt-4 pl-4 w-24 sm:w-[110px]">
                    Member Points
                  </p>
                  <a className="w-[100px] h-[60px] mt-2 ml-8 sm:ml-6  border-b-[2px] cursor-pointer border-slate-200 shadow-lg hover:bg-slate-300 hover:text-slate-700 hover:rounded-lg duration-300">
                    <p className="text-center text-xl pt-3">Trailer</p>
                  </a>
                </div>
              </div>
              <div className="col-span-2 row-span-1  w-full h-full text-lg font-bold  py-3 text-slate-200 ml-0  md:ml-[0px] lg:ml-[-5%]  pl-8 sm:px-4 md:mt-[-150px] lg:mt-[0px] mt-[30px] md:px-16  lg:px-24 lg:mt-[-20px] md:col-span-3 lg:col-span-2 shadow-lg sm:shadow-none pb-12   shadow-indigo-900 h-[auto]">
                <h3 className="font semibold text-3xl text-slate-200 pb-2">
                  Overview
                </h3>
                <h4 className="text-lg text-slate-300  pr-8 sm:pr-24 text-md leading-[130%] font-thin">
                  {movieDetailList.overview} ...
                </h4>
                <h3 className="font semibold text-3xl text-slate-200 mt-8">
                  Companies
                </h3>
                <div className="flex  flex-row gap-1 overflow-x-hidden flex-wrap">
                  {movieDetailList.production_companies.slice(0,4).map((company) => (
                    <>
                      {company.logo_path != null && (
                        <div className="h-full w-auto sm:w-auto mt-2 px-1">
                          <img
                            className="mt-2 bg-slate-300 p-4 rounded-lg w-32 shadow-lg shadow-slate-800 h-auto m-auto sm:m-auto"
                            src={
                              company.logo_path != null
                                ? `https://image.tmdb.org/t/p/original/${company.logo_path}`
                                : ""
                            }
                          ></img>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
     <ActorSlider movieActorList={movieActorList}></ActorSlider>
        <Comments movieRevievList={movieRevievList}></Comments>
      <MovieHomeBody fetchedUrl={url} title={"Recommendeds"}></MovieHomeBody>
    </div>
  );
}

/*
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [movieDetailList, setMovieDetailList] = useState({ genres: [] });
  const [movieActorList, setMovieActorList] = useState({ cast: [] });
  const [movieRevievList, setMovieRevievList] = useState({ results: [] });

  const api = "a87898297a078d85fecce7aab9d8dbde";
  const detailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api}&language=en-US`;
  const actorUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api}&language=en-US`;
  const revievUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${api}&language=en-US`;

  useEffect(() => {
    fetch(detailUrl).then((res) =>
      res.json().then((result) => setMovieDetailList(result))
    );

    fetch(actorUrl).then((res) =>
      res.json().then((result) => setMovieActorList(result))
    );

    fetch(revievUrl).then((res) =>
      res.json().then((result) => setMovieRevievList(result))
    );
  }, []);

  useEffect(() => {
    console.log(movieDetailList);
  });
  return (
    <div className="h-[700px] w-full pt-24">
     <div className="grid grid-cols-3 grid-rows-3 sm:grid-rows-3 lg:grid-rows-2 w-full bg-orange-600 h-[600px] gap-3">
      <div className="col-span-full lg:col-span-1 lg:row-span-3 md:row-span-2 md:col-span-1 bg-sky-400 mb-3"></div>
      <div className="col-span-full md:col-span-2 row-span-1 bg-green-400"></div>
      <div className="col-span-full sm:col-span-full row-span-1 lg:col-span-2 lg:row-span-1 md:col-span-full md:row-span-1 bg-yellow-400"></div>
     </div>
    </div>
  );
}


*/
