import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./home.css";
import Fade from "react-reveal/Fade";

export default function Home() {
  useEffect(()=>{

      let cards = document.getElementsByClassName("homeCards");
      if(cards){
        setTimeout(()=>{
          for(let a = 0; a<cards.length; a++){
            cards[a].style.animationName = "none";
          }
        },2300)
      }
     

  },[])
  return (
    <Fade cascade bottom big className='flex flex-col space-y-4 w-full body h-auto pb-32'>
        <div className='overflow-y-hidden '>
        <div className='align-center block'>
            <h1 className='text-center text-4xl font-bold mb-4 mt-2 homeTitle'>Studies Using ReactJS</h1>
        </div>
        <Link to={"/todo"} className='homeCards card1 appTitle duration-300 w-[75%] sm:w-[55%] m-auto '>
           Todo App
        </Link>
        
        <Link to={"/quiz/1"} className='homeCards card2 appTitle duration-300  w-[75%]  sm:w-[55%] m-auto'>
        Quiz Project
        </Link>
        <Link to={"/quiz/2"} className='homeCards card1 appTitle duration-300  w-[75%] sm:w-[55%] m-auto'>
        Quiz Project 2
        </Link>
        <Link to={"/movie"} className='homeCards card2 appTitle duration-300  w-[75%]  sm:w-[55%] m-auto'>
        Movie Project
        </Link>
        </div>
       
        
    </Fade>
  )
}
