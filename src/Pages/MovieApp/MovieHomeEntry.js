import React from "react";
import starWars from "./starWars.jpg";
import Fade from "react-reveal/Fade";

export default function MovieHomeEntry() {
  const url = "https://wallpaperset.com/w/full/3/6/3/366325.jpg";
  const url2 = "./starWars.jpg";

  return (
    <div className="w-full h-[980px] lg:h-[580px] md:h-[650px] pt-24 grid grid-cols-1 md:grid-cols-3">
      <Fade left duartion={1400} delay={3600}>
      <div className="col-span-1 pt-12 w-full pl-12 md:pl-12 lg:pl-24 pr-12 sm:pr-2">
        <h2 className="text-indigo-600 text-5xl sm:text-6xl font-bold">
          Hoş Geldiniz.
        </h2>
        <h2 className="text-indigo-400 text-2xl sm:text-3xl font-semibold mt-3">
          Milyonlarca film, TV şovu ve keşfedilecek kişi.
        </h2>
        <h2 className="text-indigo-400 text-2xl sm:text-3xl font-semibold mt-1">
          Şimdi keşfedin.
        </h2>

        <a href="#slider" className="text-indigo-500  text-2xl sm:text-3xl font-semibold mt-1 grid place-content-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 hover:scale-110 duration-200 ease-out m-auto rounded-full hover:text-indigo-600 duration-200 ease-in hover:rotate-90 mr-auto cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      </Fade>
     <Fade top duration={1000} delay={3600}>

     <div
        className="text-indigo-600 text-3xl font-bold col-span-2 overflow-hidden h-[400px] ml-auto mr-auto md:mr-12 rounded-xl shadow-xl shadow-indigo-900 w-[80%] bg-cover mt-8"
        style={{ backgroundImage: `url(${starWars})` }}
      ></div>
     </Fade>
    
      
    </div>
  );
}

/*    <div className='w-full h-[550px] pt-24 grid grid-cols-3 px-2'>
      <div className='col-span-1 mt-7 ml-12 w-48'>
        <h2 className='text-indigo-600 text-5xl font-bold '>Welcome</h2>
        <div className='text-indigo-700 text-4xl font-bold bg-red-400'></div>

      </div>
      <div className='text-indigo-600 text-3xl font-bold col-span-2 mt-7 overflow-hidden h-[350px] ml-auto mr-12 rounded-xl shadow-lg shadow-indigo-900 w-[80%] bg-cover' style={{"backgroundImage":`url(${url2})`}}>
      </div>


    </div>*/
