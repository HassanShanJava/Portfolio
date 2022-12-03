import React from "react";

import { dataIcons } from "../data/dataIcons";

const Skills = () => {
  const string1 = "// These are the technologies I've worked with.";

  const skills = dataIcons;

  return (
    <div name="skills" className=" w-full h-full   bg-[#0a192f] text-gray-300">
      {/* coonatiner */}
      <div className="  max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4 ">{string1}</p>
        </div>

        {/* /container for icons */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* container itself for each icon */}
          {skills.map((item, key) => (
            <div
              key={key}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={item.icons} alt="/" />
              <p className="my-4">{item.name}</p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Skills;
