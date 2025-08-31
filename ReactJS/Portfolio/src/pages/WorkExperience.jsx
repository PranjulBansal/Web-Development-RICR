import React from "react";

const WorkExperience = () => {
  return (
    <div className="h-[85vh] bg-gray-950 text-white mt-[117px]">
      <div className="flex flex-col">
        <div className="flex items-center justify-center my-22">
          <div className="h-[4px] w-[80px] bg-[#dc143c] rounded-full"></div>
          <div className="mx-6 text-4xl font-bold">
            My Experience
          </div>
          <div className="h-[4px] w-[80px] bg-[#dc143c] rounded-full"></div>
        </div>

        <div className="flex">
          <div className="w-[400px] h-[350px] bg-black p-8 mx-10 shadow-sm shadow-[#dc143c] rounded-xl mt-5 hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="bg-gray-700 rounded-3xl w-[350px] text-xl p-2 text-black font-mono ">
              Balaji Cyber India Pvt. Ltd.
            </h1>
            <h1 className="bg-gray-700 rounded-4xl w-[270px] text-xl p-2 mt-4 text-black font-mono">
              April 2023 - March 2025
            </h1>

            <h1 className="font-bold text-2xl mt-5 text-[#dc143c]">
              Software Developer
            </h1>
            <p className="mt-4 font-serif">
              I Worked as a Software Developer at Balaji Cyber India Pvt. Ltd.,
              gaining hands-on experience in the MERN stack with a focus on
              frontend development and exposure to backend technologies.
            </p>
          </div>
          <div className="w-[400px] h-[350px] bg-black p-8  shadow-sm shadow-[#dc143c] rounded-xl mt-5 hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="bg-gray-700 rounded-3xl w-[350px] text-xl p-2 text-black font-mono ">
              Agnito Technologies Pvt. Ltd.
            </h1>
            <h1 className="bg-gray-700 rounded-4xl w-[260px] text-xl p-2 mt-4 text-black font-mono">
              Feb 2023 - April 2023
            </h1>

            <h1 className="font-bold text-2xl mt-5 text-[#dc143c]">
              Software Developer
            </h1>
            <p className="mt-4 font-serif">
              Specializing in MERN stack frontend technologies and gained
              backend exposure and learned to communicate directly with clients
              to gather requirements, provide updates and deliver solutions
              effectively.
            </p>
          </div>
          <div className="w-[400px] h-[350px] bg-black p-8 mx-10 shadow-sm shadow-[#dc143c] rounded-xl mt-5 hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="bg-gray-700 rounded-3xl w-[350px] text-xl p-2 text-black font-mono ">
              Agnito Technologies Pvt. Ltd.
            </h1>
            <h1 className="bg-gray-700 rounded-4xl w-[240px] text-xl p-2 mt-4 text-black font-mono">
              Nov 2022 - Jan 2023
            </h1>

            <h1 className="font-bold text-2xl mt-5 text-[#dc143c]">
              Software Developer (Intern)
            </h1>
            <p className="mt-4 font-serif">
              As a Intern for 3 months, gaining hands-on experience in web
              development technologies and learn to collaborated with the
              development team, improving understanding of real-world project
              workflows.
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
