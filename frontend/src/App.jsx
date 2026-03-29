import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Agence from "./pages/agense";
// import Contact from "./pages/contact";
import Project from "./pages/project";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App;