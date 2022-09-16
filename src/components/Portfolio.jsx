import React from "react";

import AirClone from "../assets/snipcode/airbnb-clone.png";
import ModBank from "../assets/snipcode/modern-bank.png";
import GalaxyTravels from "../assets/snipcode/galaxy-travels.png";
import AptiveData from "../assets/snipcode/aptive-data.png";
import Drawing from "../assets/snipcode/drawing-app.png";
import Webull from "../assets/snipcode/react-styled-webull.png";
import Datasite from "../assets/snipcode/datasite.png";
import FirstResponsive from "../assets/snipcode/responsive-portfolio.png";
import FoodPanda from "../assets/snipcode/food-panda.png";
import Drive from "../assets/snipcode/drive-rental.png";

const Portfolio = () => {
  const string2="// Check out some of my recent work.";
  return (
    <div
      name="portfolio"
      className="w-full md:h-full text-gray-300 bg-[#0a192f]"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold text-gray-300 inline border-b-4 border-pink-600">
            Portfolio
          </p>
          <p className="py-6 ">{string2}</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* Gird Item */}
          <div
            style={{ backgroundImage: `url(${AirClone})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                          flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Airbnb Landing Clone
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/HassanShanJava/airbnb-landing-clone" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                <a href="https://airbnb-landing-clone-page.netlify.app/" target="_-blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${GalaxyTravels})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                          flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white  tracking-wider ">
                Galaxy Travels Application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/HassanShanJava/galaxy-travels-router" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                <a href="https://galaxy-travel-page.netlify.app/" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ModBank})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                          flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Modern Banking Appilcation
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/HassanShanJava/modern-banking-app" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                <a href="https://hs-modern-bank-app.netlify.app/" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${AptiveData})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                          flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Aptive Data Application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/HassanShanJava/Aptive-Router" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                <a href="https://aptive-data-commerce.netlify.app/" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Add more projects next */}
          <div
            style={{ backgroundImage: `url(${Datasite})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                          flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Data Site Application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/HassanShanJava/DataSite-Tail" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                <a href="https://datasite-rt.netlify.app/" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url(${Drawing})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                          flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Drawing Application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/HassanShanJava/drawing-app" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                <a href="https://drawing-app-2.netlify.app/" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${FirstResponsive})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                          flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                First Responsive Website
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/HassanShanJava/my-project-portfolio" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                <a href="https://hassan-shan-portfolio.netlify.app/" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url(${Webull})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                          flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Webull Stocks Application
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/HassanShanJava/react_styled_components_gh" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                <a href="https://github.com/HassanShanJava/react_styled_components_gh" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>


          {/* Next Project */}
          <div
            style={{ backgroundImage: `url(${FoodPanda})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                          flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                FoodPanda Landing Page Clone
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/HassanShanJava/FoodPanda-Clone-Landing-Page" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                <a href="https://foodpanda-clone.netlify.app/" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Drive})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                          flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Drive Cars Rental Application 
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/HassanShanJava/drive-cars-landing-page" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                <a href="https://drive-rent-a-car.netlify.app/" target="__blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
