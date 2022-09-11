import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

//import Typewriter from "typewriter-effect";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {

const [text,count]= useTypewriter({
    words:["Full Stack Developer","Front-End Engineer","Cloud Enthusiast","Blockchain Enthusiast","Software Developer"],
    loop:{},
})



  return (
    // name property important for react-smooth scroll
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Hassan Shan
        </h1>
        <span className="flex">
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a 
          <span className="ml-4 text-4xl sm:text-7xl font-bold text-[#8892b0]">
              {text}
              {/* <Typewriter
                options={
                  {
                    autoStart:true,
                    strings:["Full Stack Developer","Front-End Engineer","Cloud Enthusiast","Blockchain Enthusiast","Software Developer"],
                    delay:100,
                    loop:true,
                    deleteSpeed:100
                  }
                }
              /> */}
          </span>
          </h2>

        </span>
        
        <p className="text-[#8892b0] max-w-[700px] py-4">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to="portfolio" smooth={true} offset={50} duration={500}>
            <button
              className="text-[#fff] group border-2 px-6 py-3 my-2 flex items-center
                             hover:bg-pink-600 hover:border-pink-600"
            >
              View work
              <span className=" group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
