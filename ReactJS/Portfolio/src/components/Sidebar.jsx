import React from "react";
import { Link } from "react-router-dom";
import pranjul from "../assets/pranjul.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Sidebar = () => {
  return (
    <>
      <div className=" fixed right-0 h-[calc(100vh-50px)] top-22 text-crimson-400 w-4/14 my-[2px]  h bg-gray-950 flex flex-col items-center justify-start p-[20px] ">
        <div>
          <img
            src={pranjul}
            alt=""
            className="h-80 w-80 border-4 border-[#dc143c] rounded-full animate-[updown_6s_ease-in-out_infinite] shadow-2xl shadow-pink-950"
          />
          <style>
            {`
      @keyframes updown {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(20px); } 
      }
    `}
          </style>
        </div>
        <div className="flex gap-6 mt-20">
          <Link to={"https://github.com/PranjulBansal"} className="shadow-2xl shadow-pink-950 p-2 rounded-full bg-[#dc143c] ">
            <FaGithub />
          </Link>
          <Link to={"https://www.linkedin.com/in/pranjul-bansal-7a46231ba/"} className="shadow-2xl shadow-pink-950 p-2 rounded-full bg-[#dc143c] ">
            <FaLinkedin />
          </Link>
          <Link to={"pranjulbansal672@gmail.com"} className="shadow-2xl shadow-pink-950 p-2 rounded-full bg-[#dc143c] ">
            <MdEmail />
          </Link>
          <Link to={"+917470482697"} className="shadow-2xl shadow-pink-950 p-2 rounded-full bg-[#dc143c] ">
            <IoCall />
          </Link>
        </div>
        <div>
          <a
            href="./PranjulBansalResume(1).pdf"
            download
            className="flex items-center gap-2 mt-10 px-4 py-2 bg-[#dc143c] text-white rounded-full shadow-2xl shadow-pink-950 hover:bg-pink-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
