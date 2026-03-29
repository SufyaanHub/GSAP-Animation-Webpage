import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Agence from "./pages/agense";
// import Contact from "./pages/contact";
import Project from "./pages/project";
import { useGSAP } from "@gsap/react";
function App() {
useGSAP(() => {
  

  return (
    <div >
      <div className="h-screen w-full fixed z-10 flex top-0">
        <div className=" h-full w-1/5 bg-amber-300"></div>
           <div className="h-full w-1/5 bg-amber-300"></div>
        <div className="h-full w-1/5 bg-amber-300"></div>                                       
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/project" element={<Project />} />


      </Routes>
      
    </div>
  );
}

export default App;