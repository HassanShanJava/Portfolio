import React, { useState } from "react";
import Logo from "../assets/icons/logo.png";

import { Link } from "react-scroll";

// import { Link } from "react-router-dom";

import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Banner from "./Banner";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <Banner />
      <div
        name="/"
        className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300"
      >
        <div className="logo">
          <Link to="/" smooth={true} offset={50} duration={500}>
            <img
              className="cursor-pointer"
              src={Logo}
              alt="/"
              style={{ width: "120px", marginTop: "20px" }}
            />
          </Link>
        </div>

        {/* Menu 
      
         md->anything above medium      
      
      */}
        <ul className="hidden md:flex">
          <li>
            <Link to="" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {nav ? <FaTimes /> : <FaBars />}
        </div>

        {/* menu 

        h-> we want height:100vh ->> h-screen
        display:flex;
        flex-direction:column;
      
      */}

        {/* Need to toggle the hamburger to move menu, -> useState */}
        <ul
          className={
            nav
              ? "absolute top-0 left-0 duration-200 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
              : "absolute top-0 left-[-100%] duration-200 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
          }
        >
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to=""
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="about"
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="portfolio"
              smooth={true}
              offset={50}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li
              className="w-[160px] h-[60px] flex justify-between
                         items-center ml-[-100px] hover:ml-[-10px] duration-300
                         bg-blue-600"
            >
              {/* eslint-disable-next-line */}
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/hassan-shan/"
                target="_blank"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li
              className="w-[160px] h-[60px] flex justify-between
                         items-center ml-[-100px] hover:ml-[-10px] duration-300
                         bg-[#333]"
            >
              {/* eslint-disable-next-line */}
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/HassanShanJava"
                target="_blank"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li
              className="w-[160px] h-[60px] flex justify-between
                         items-center ml-[-100px] hover:ml-[-10px] duration-300
                         bg-[#6fc2b0]"
            >
              {/* eslint-disable-next-line */}
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="mailto: hassanshan675@gmail.com"
                target="_blank"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li
              className="w-[160px] h-[60px] flex justify-between
                         items-center ml-[-100px] hover:ml-[-10px] duration-300
                         bg-[#565f69]"
            >
              {/* eslint-disable-next-line */}
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://docs.google.com/document/d/1KA2PRk_vpZO24fsZXvvTFd9tZUP9sGBj/edit?usp=sharing&ouid=105666270434700991461&rtpof=true&sd=true"
                target="_blank"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
            <li
              className="w-[160px] h-[60px] flex justify-between
                         items-center ml-[-100px] hover:ml-[-10px] duration-300
                         bg-[#c91f33]"
            >
              {/* eslint-disable-next-line */}
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.youtube.com/@hassanshan1270"
                target="_blank"
              >
                YouTube <FaYoutube size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
