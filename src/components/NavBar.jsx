import React, { useState } from "react";
import Logo from "../assets/logo.png";

import { Link } from "react-scroll";

import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="fixed w-full h-[80px] flex justify-between 
                    items-center px-4 bg-[#0a192f] text-gray-300"
    >
      <div className="logo">
        <Link to="home" smooth={true} offset={50} duration={500}>
          <img
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
          <Link to="home" smooth={true} offset={50} duration={500}>
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
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="portfolio" smooth={true} offset={50} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
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
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/hassan-shan/"
              target="__blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between
                         items-center ml-[-100px] hover:ml-[-10px] duration-300
                         bg-[#333]"
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/HassanShanJava"
              target="__blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between
                         items-center ml-[-100px] hover:ml-[-10px] duration-300
                         bg-[#6fc2b0]"
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto: hassanshan675@gmail.com" target='__blank'
             >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between
                         items-center ml-[-100px] hover:ml-[-10px] duration-300
                         bg-[#565f69]"
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
              target="__blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
