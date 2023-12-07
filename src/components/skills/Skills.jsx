import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import { DiPython } from "react-icons/di"
import { GrCode } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className="flex md:flex-col md:gap-3 gap-5 my-5 w-full pl-14">
                <div className=" flex flex-col gap-3 w-1/2 md:w-[90%]">
                  <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                  <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={88} />
                  <ProgressBar logo={<SiJavascript />} name={"Javascript"} value={80} />
                  <ProgressBar logo={<FaReact />} name={"React Js"} value={80} />
                </div>
                <div className=" flex flex-col gap-3 w-1/2 md:w-[90%]">
                  <ProgressBar logo={<FaNode />} name={"Node Js"} value={80} />
                  <ProgressBar logo={<SiExpress />} name={"Express Js"} value={80} />
                  <ProgressBar logo={<SiTailwindcss />} name={"Tailwind CSS"} value={80} />
                </div>
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-9 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-9">
              <SkillBox logo={<GrCode />} black={"black"} white={"white"} skill={"C++"} />
              <SkillBox logo={<DiPython />} black={"white"} white={"black"} skill={"Python"} />

            </div>
            <div className="last2 flex flex-col gap-9">
              <SkillBox logo={<SiMysql />} black={"white"} white={"black"} skill={"MySQL"} />
              <SkillBox logo={<SiMongodb />} black={"black"} white={"white"} skill={"MongoDB"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
