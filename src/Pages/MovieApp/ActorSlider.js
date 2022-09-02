import React from 'react'
import Slider from "react-slick";
import { useState,useEffect } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgPlaceHolder from "./aa.jpg";
import "./Movie.css"
export default function ActorSlider({movieActorList}) {
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        
    
      });
      const handleResize = () => {
        if (window.innerWidth > 1300) {
          let sets = { ...settings, slidesToShow: 5 };
          setSettings(sets);
        }
        if (window.innerWidth < 1300 && window.innerWidth > 950) {
          let sets = { ...settings, slidesToShow: 4 };
          setSettings(sets);
        }
        if (window.innerWidth < 950 && window.innerWidth > 720) {
          let sets = { ...settings, slidesToShow: 3 };
          setSettings(sets);
        }
        if (window.innerWidth < 720) {
          let sets = { ...settings, slidesToShow: 2,dots:false };
          setSettings(sets);
        }
      };
    
      // create an event listener
      useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      }, []);
  return (
    <>
     {movieActorList.cast.length > 5 && movieActorList.cast.length> 5 && 

<div className="bg-[#0f172a] h-full px-8 md:px-12 sm:px-8 lg:px-[80px] sm:pt-24 pt-12 lg:mt-[20px] md:mt-16 mt-0 z-50 relative">
  <div className="w-full pr-4 mb-12 sm:mb-4 ml-1 sm:ml-4">
  <h3 className="bg-indigo-600 w-auto inline py-2 rounded-lg shadow-indigo-700  ml-[4.6px] shadow-lg px-3 pr-4 text-4xl sm:text-5xl text-[#0f172a] font-bold bgLinear fontTextTitle" >Actors</h3>

  </div>

    <Slider {...settings} className=" h-[full] w-full mt-8 m-auto">
      {movieActorList.cast.slice(0,15).map((actor)=>(
             <div className="px-2 h-auto pb-12">
             <div className="grid grid-cols-1 grid-rows-1 h-[auto] rounded-lg w-[90%] pt-2 m-auto">
               <div className="col-span-1 row-span-2 m-auto mb-[-40px] ">
                 <LazyLoadImage
                 effect="blur"
                   className="w-[100%] bg-indigo-800 duration-300 h-auto m-auto rounded-lg shadow-xl shadow-indigo-900"
                   src={(actor.profile_path != null ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`:imgPlaceHolder)}
                 ></LazyLoadImage>
               </div>
               <div className="col-span-1 z-40 row-span-1 m-auto w-[100%] h-[100%] px-2 rounded-b-lg shadow-lg shadow-indigo-800" style={{"backgroundImage": "linear-gradient(to left bottom, #60a5fa, #5697fb, #5388fa, #5878f7, #6366f1)"}}>
                 <div className="flex flex-col pt-2 pt-4 pb-5">
                   <h1 className="w-full font-bold text-md sm:text-lg text-slate-900">
                     {actor.name}
                   </h1>
                   <h1 className="w-full font-lg text-md sm:text-lg text-slate-800 truncate">
                     {actor.character}
                   </h1>
                 </div>
               </div>
             </div>
           </div>
          
         
          ))}
    </Slider>
 
</div>}
    </>
  )
}
