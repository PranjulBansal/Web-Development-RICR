import React from "react";
import Html from "../assets/htmllogo.png";
import Css from "../assets/csslogo.png";
import Js from "../assets/JsLogo.webp";
import ReactJs from "../assets/ReactLogo.gif";
import Mongo from "../assets/mongoDB.png";
import socket from "../assets/socket.webp";
import node from "../assets/nodejs.webp";
import express from "../assets/express.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import Mysql from "../assets/sql.png";
// import Slider from "react-slick";

const Skills = () => {
  return (
    <>
      <div className="h-[85vh] bg-gray-950 text-white mt-[117px] ">
        {/* <div className=" bg-pink-700  justify-center"> */}
          <div className="row flex  gap-15 p-11 mx-15">
             <div className="col-3">
              <img src={ReactJs} alt="" className="max-h-35 max-w-50 transition-transform duration-300 ease-in-out transform hover:scale-120 animate-fadeInUp-0.8s-ease-out-forwards" />
              <p className="mx-17">React.js</p>
              <div className="border w-34 h-4 bg-gray-200 rounded mx-8 mt-4">
                <div className="h-4 bg-blue-400 w-4/5 rounded  text-black text-xs font-bold text-center">
                  70%
                </div>{" "}
              </div>
            </div>
            <div className="col-3 w-[20vh] mt-2 mx-12">
              <img src={Html} alt="" className="max-h-25 max-w-25 mx-5 transition-transform duration-300 ease-in-out transform hover:scale-120 " />
              <p className="mx-9 mt-2">HTML5</p>
              <div className="w-34 h-4 bg-gray-200 rounded mt-2">
                <div className="h-4 bg-amber-800 w-5/5 rounded  text-black text-xs font-bold text-center">
                  100%
                </div>
              </div>{" "}
            </div>
            <div className="col-3 mx-12">
              <img src={Css} alt="" className="max-h-31  max-w-55 mt-[-4px] transition-transform duration-300 ease-in-out transform hover:scale-120" />
              <p className="mx-12">CSS3</p>
              <div className="border w-34 h-4 bg-gray-200 rounded mt-1">
                <div className="h-4 bg-blue-900 w-5/5 rounded  text-black text-xs font-bold text-center">
                  100%
                </div>
              </div>
            </div>
            <div className="col-3 mx-10">
              <img src={Js} alt="" className="max-h-30 max-w-35 transition-transform duration-300 ease-in-out transform hover:scale-120" />
              <p className="mx-7 mt-1">Javascript</p>
              <div className="border w-34 h-4 bg-gray-200 rounded mt-1">
                <div className="h-4 bg-yellow-400 w-4/5 rounded  text-black text-xs font-bold text-center">
                  80%
                </div>
              </div>
            </div>
           
          </div>
           <div className="row flex gap-20 mt-3 mx-35">
             <div className="col-3">
              <img src={express} alt="" className="max-h-25 max-w-25 mx-4 transition-transform duration-300 ease-in-out transform hover:scale-120" />
            <p className="mx-8">Express.js</p>
              <div className="border w-34 h-4 bg-gray-200 rounded">
                <div className="h-4 bg-gray-600 w-3/5 rounded  text-black text-xs font-bold text-center">
                  70%
                </div>{" "}
              </div>
            </div>
            <div className="col-3 w-[20vh] mx-15">
             <img src={node} alt="" className="max-h-25 max-w-25 mx-4 transition-transform duration-300 ease-in-out transform hover:scale-120" />
            <p className="mx-7">Node.js</p>
              <div className="w-34 h-4 bg-gray-200 rounded">
                <div className="h-4 bg-green-800 w-3/5 rounded  text-black text-xs font-bold text-center">
                  70%
                </div>
              </div>{" "}
            </div>
            <div className="col-3">
          <img src={socket} alt="" className="max-h-25 max-w-25 mx-4 transition-transform duration-300 ease-in-out transform hover:scale-120" />
              <p className="mx-7">Socket.io</p>
              <div className="border w-34 h-4 bg-gray-200 rounded">
                <div className="h-4 bg-black w-4/5 rounded  text-white text-xs font-bold text-center">
                  80%
                </div>
              </div>
            </div>
            <div className="col-3">
          <img src={tailwind} alt="" className="max-h-25 max-w-25 mx-24 mt-5 transition-transform duration-300 ease-in-out transform hover:scale-120" />
              <p className="mx-24 mt-4">TailwindCSS</p>
              <div className="border w-34 h-4 bg-gray-200 rounded mx-20 mt-1">
                <div className="h-4 bg-blue-400 w-5/5 rounded  text-black text-xs font-bold text-center">
                  100%
                </div>
              </div>
            </div>
           
          </div>
           <div className="row flex gap-20 mt-15 mx-35">
             <div className="col-4">
          <img src={bootstrap} alt="" className="max-h-25 max-w-25 mx-5 transition-transform duration-300 ease-in-out transform hover:scale-120" />
            <p className="mx-8">Bootstrap</p>
              <div className="border w-34 h-4 bg-gray-200 rounded">
                <div className="h-4 bg-purple-600 w-5/5 rounded  text-black text-xs font-bold text-center">
                  100%
                </div>{" "}
              </div>
            </div>
            <div className="col-4 w-[20vh] mx-15">
          <img src={Mongo} alt="" className="max-h-25 max-w-25 mx-5 transition-transform duration-300 ease-in-out transform hover:scale-120" />
            <p className="mx-7">MongoDB</p>
              <div className="w-34 h-4 bg-gray-200 rounded">
                <div className="h-4 bg-green-400 w-3/5 rounded  text-black text-xs font-bold text-center">
                  70%
                </div>
              </div>{" "}
            </div>
            <div className="col-4">
          <img src={Mysql} alt="" className="max-h-35 max-w-35 transition-transform duration-300 ease-in-out transform hover:scale-120" />
              <p className="mx-10 mt-5">MySQL</p>
              <div className="border w-34 h-4 bg-gray-200 rounded">
                <div className="h-4 bg-blue-800 w-4/5 rounded  text-white text-xs font-bold text-center">
                  80%
                </div>
              </div>
            </div>
           
           
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Skills;
