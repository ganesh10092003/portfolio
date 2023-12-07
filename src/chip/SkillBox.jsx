import React from "react";

const SkillBox = ({ logo, black, white, skill }) => {
  return (
    <div
      data-aos="zoom-in" data-aos-duration="1000"
      className={
        "box w-[9.5rem] h-[9.5rem] rounded-lg bg-" +
        black +
        " text-" +
        white +
        " shadow-2xl flex flex-col items-center justify-center gap-4 p-1 sm:w-[7.2rem] sm:h-[7.2rem] exsm:w-[6.5rem] exsm:h-[6.5rem]"
      }
    >
      <div
        className={
          "bg-" +
          white +
          " text-" +
          black +
          " w-12 sm:w-10 exsm:w-8 h-12 sm:h-10 exsm:h-8 p-2 rounded-full flex items-center justify-center text-5xl sm:text-3xl"
        }
      >
        {logo}
      </div>
      <p className="font-semibold exsm:text-sm">{skill}</p>
    </div>
  );
};

export default SkillBox;
