import React from "react";
import { ReactTyped } from "react-typed"; 

const About = () => {
  return (
    <div className="left-0 h-[85vh] bg-gray-950 text-white w-14/14 mt-[117px]">
      <div className="flex flex-col  ">
        <h1 className="text-6xl mx-[80px] mt-[90px] " id="homeHead">
          Hi, <span className="text-[#dc143c]">I'm Pranjul Bansal</span>
        </h1>
        <h2 className="text-4xl mx-[80px] mt-10" id="homeHead2">
          Full Stack Developer | Software Developer
        </h2>
        <h2 className="text-4xl mx-[80px] mt-8 text-[#dc143c]" id="homeHead2">
          <ReactTyped
            strings={[
              "Full Stack Web Developer",
              "MERN Stack Enthusiast",
              "Open Source Contributor",
              "Tech Explorer 🚀",
            ]}
            typeSpeed={80}
            backSpeed={40} 
            loop 
          />
        </h2>
      </div>
      <div className="flex justify-start mx-[80px] mt-12">
        <p className="text-xl w-3/4" id="homePara">
          A highly skilled and results-driven software developer with more than
          <span className="text-[#dc143c]"> 2 years</span> of experience in
          <span className="text-[#dc143c]"> designing</span>,{" "}
          <span className="text-[#dc143c]"> developing</span> and implementing
          software applications. Expertise
          in full-stack development with proficiency in{" "}
          <span className="text-[#dc143c]"> programming languages</span> and
          ability to deliver high-quality code, optimize system performance and
          solve{" "}
          <span className="text-[#dc143c]">complex technical challenges</span>.
        </p>
      </div>
      <div>
        <div className="flex gap-10 mt-20  mx-[80px]">
          <button className="bg-[#b0102e] ] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#dc143c] transition">
            Hire Me
          </button>
          <button className="bg-[#b0102e] ] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#dc143c] transition">
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
