import Slider from "react-slick";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Movie.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import placeholer from "./place.jpg"

import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
export default function MovieHomeSlider() {
  const [heigth, setHeigth] = useState(510);
  const [settings, setSettings] = useState({
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px"});
  const [movieData, setMovieData] = useState({total_pages:0});

  const handleResize = () => {
    console.log("loop")
    if(window.innerWidth > 950){
        
      let sets = {...settings,dots:true,slidesToShow:4}
      setSettings(sets);
    }
    if(window.innerWidth < 950 && window.innerWidth > 720){
      let sets = {...settings,slidesToShow:3,centerPadding:"0px",dots:true}
      setSettings(sets);
    }

    if (window.innerWidth < 720) {
        
  
        let sets = {...settings,slidesToShow:2,centerPadding:"35px",dots:true}
        setSettings(sets);
    } 
    if (window.innerWidth <500) {
        
  
      let sets = {...settings,slidesToShow:1,centerPadding:"35px",dots:false}
      setSettings(sets);
  } 
  }
  
  // create an event listener
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize)
  },[])


  useLayoutEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=a87898297a078d85fecce7aab9d8dbde&language=en-US&page=1")
    .then(res => res.json())
    .then((result) => setMovieData(result))

  },[])


  return (
    <div id="slider" className="bgLinear m-auto mt-16 pt-12 sm:pt-24 pb-16 sm:pb-24 md:pb-24 w-full px-8 overflow-hidden sm:px-24 md:px-24 lg:px-36 rounded-[3rem] mb-12 w-[90%] sliderPart">
      <Fade top delay={450}>
      <h3 className="text-indigo-600 text-5xl sm:text-xl-6 font-bold mb-8 bg-[#0C1221] w-52 rounded-lg h-16 pt-2 pl-4 shadow-lg shadow-[#0C1221]">Trends</h3>

      </Fade>
        {movieData.total_pages > 0 && 
        <Fade bottom delay={500}>
  <Slider {...settings} className="w-full pb-4 sm:pb-12 px-4">
            
            {movieData.results.map((movie,index) =>(
                 <Link to={`/movie/id/${movie.id}`} className="h-full overflow-y-hidden  focus:outline-none sliderImgDiv cursor-pointer duration-300 overflow-x-hidden  pb-[11px]">
                 <LazyLoadImage key={index} src={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}  className="sliderImg1 w-full h-full  bg-[#0C1221]  duration-300 hover:scale-110"></LazyLoadImage>
                 </Link>
            ))}
          </Slider>
        </Fade>
        
        }
        
         
        
      
    </div>
   
  );
}

