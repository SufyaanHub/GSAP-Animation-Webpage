import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/homeHeroText";
import HomeBottomText from "../components/home/HomeButoon";
const Home = () => {
    return (
        <div className="h-screen w-screen relative bg-amber-800">
            <div className="h-screen w-screen fixed">
<Video />
            </div>
            <div className="h-screen w-screen absolute">
     <HomeHeroText />
     <HomeBottomText />

 </div>


        </div>
    )
}

export default Home;