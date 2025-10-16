import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4">
          <IoLogoJavascript className="text-7xl text-yellow-300" />
        </div>

        <div className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        
        <div className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>

        <div className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>

        <div className="p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        {/* <div className="p-4">
          <DiRedis className="text-7xl text-red-700" />
        </div> */}
        
        <div className="p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700"/>
        </div>

        <div className="p-4">
          <FaDocker className="text-7xl text-blue-500"/>
        </div>
        
      </div>
    </div>
  );
};

export default Technologies;
