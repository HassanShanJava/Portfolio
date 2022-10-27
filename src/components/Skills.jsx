import React from 'react'


import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JS from "../assets/javascript.png"
import Linux from "../assets/linux.png"
import Rect from "../assets/react.png"
import Tailwind from "../assets/tailwind.png"
import Node from "../assets/node.png"
import Mongo from "../assets/mongo.png"
import FireBase from "../assets/firebase.png"
import Github from "../assets/github.png"
import Git from "../assets/git.png"
import Python from "../assets/python.png"

const Skills = () => {
  const string1="// These are the technologies I've worked with.";
  return (
    <div name='skills' className='w-full h-full  bg-[#0a192f] text-gray-300'>
      {/* coonatiner */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4 '>{string1}</p>
        </div>


            {/* /container for icons */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            {/* container itself for each icon */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='/'/>
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='/'/>
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JS} alt='/'/>
            <p className='my-4'>JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt='/'/>
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Rect} alt='/'/>
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Linux} alt='/'/>
            <p className='my-4'>Linux</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='/'/>
            <p className='my-4'>Nodejs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt='/'/>
            <p className='my-4'>MongoDB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='/'/>
            <p className='my-4'>Tailwinds CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={FireBase} alt='/'/>
            <p className='my-4'>Firebase</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt='/'/>
            <p className='my-4'>Github</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Git} alt='/'/>
            <p className='my-4'>Git</p>
          </div>
        </div>

        
      </div>


    </div>
  )
}

export default Skills