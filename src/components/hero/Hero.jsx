import React from "react";
import { AiFillGithub, AiFillInstagram, } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";
import mine from "../../assets/mine.jpeg";

const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Tejaswi Ganesh
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "MERN Stack Web Developer",
                2000,
                "Competitive Programmer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Currently a Final Year at NIT-Rourkela
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/ganesh10092003">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ganesh2003/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/Ganesh_2003/">
                  {" "}
                  <SiLeetcode className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://auth.geeksforgeeks.org/user/chtejamr">
                  {" "}
                  <SiGeeksforgeeks className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0 "
              src={mine}
              alt="mine"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
