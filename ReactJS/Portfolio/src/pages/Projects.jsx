import React from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="h-[85vh] bg-gray-950 text-white mt-[117px] p-12">
      <div className=" bg-black shadow-sm shadow-[#dc143c] rounded-xl p-8 hover:scale-105 transition-transform duration-300 ease-in-out h-[250px] ">
        <h1 className="text-2xl text-gray-500 font-bold font-serif underline">
          Lifetime Lotto Website
        </h1>
        <h1 className="mt-4 text-xl font-mono text-[#dc143c]">
          Technolgies:{" "}
          <span className="text-white font-mono">
            React.Js, Node.JS, TailwindCss, MongoDB, Express.js, Javascript,
            Bootstrap
          </span>
        </h1>
        <h1 className="mt-2 text-xl font-medium text-[#dc143c]">
          Roles and Responsibility :
        </h1>
        <div className="flex gap-40">
          <ul
            type="circle"
            className="mt-2 list-inside list-disc font-serif text-lg"
          >
            <li>
              Mainly worked as a frontend developer and implement MERN
              technology to develop this website.
            </li>
            <li>
              Applied framework to make it responsive to enhance user experience
              on multiple devices.
            </li>
            <li>
              Provide real time customer support to user using socket.io in this
              website
            </li>
          </ul>
          <Link
            to="https://kuberwins.com"
            className="bg-[#dc143c] p-2 rounded-4xl w-[100px] h-[40px] font-serif mt-10 hover:bg-pink-950"
          >
            Visit Link
          </Link>
        </div>
      </div>
       <div className=" bg-black shadow-sm shadow-[#dc143c] rounded-xl p-8 hover:scale-105 transition-transform duration-300 ease-in-out h-[250px] mt-15 ">
        <h1 className="text-2xl text-gray-500 font-bold font-serif underline">
          Baat Chit Website
        </h1>
        <h1 className="mt-4 text-xl font-mono text-[#dc143c]">
          Technolgies:{" "}
          <span className="text-white font-mono">
            Javascript, React.js, Bootstrap, TailwindCss, Socket.io. 
          </span>
        </h1>
        <h1 className="mt-2 text-xl font-medium text-[#dc143c]">
          Roles and Responsibility :
        </h1>
        <div className="flex gap-40">
          <ul
            type="circle"
            className="mt-2 list-inside list-disc font-serif text-lg"
          >
            <li>
              Implemented Real time chat application using socket.io and MERN stack.
            </li>
            <li>
              Provide user friendly interface to enhance user experience and also increase user engagement.
            </li>
            <li>
              Applied responsive design to make it user friendly on multiple devices.
            </li>
          </ul>
          <Link
            to="https://baat-chit.onrender.com/ "
            className="bg-[#dc143c] p-2 rounded-4xl w-[100px] h-[40px] font-serif mt-10 hover:bg-pink-950"
          >
            Visit Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
