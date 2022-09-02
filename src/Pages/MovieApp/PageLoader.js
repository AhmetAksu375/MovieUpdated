import React from 'react'
import { useRef, useEffect } from "react";

export default function PageLoader({delay}) {
  const overlay = useRef();
  useEffect(() => {
    setTimeout(() => {
      overlay.current.style.opacity = "0";
    }, delay);
    setTimeout(() => {
      overlay.current.style.display = "none";
    }, delay+300);
  }, []);
  return (
    <div
    ref={overlay}
    className="h-screen w-screen bg-[#0F172A] duration-300 ease-out fixed top-0 z-[60] pt-48 text-center"
  >
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube"></div>
      <div className="sk-cube2 sk-cube"></div>
      <div className="sk-cube4 sk-cube"></div>
      <div className="sk-cube3 sk-cube"></div>
    </div>
  </div>
  )
}


