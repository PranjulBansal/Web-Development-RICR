import React from "react";
import higher from "../assets/banasthali.webp";
import senior from "../assets/banasthali2.jpg";
import btech from "../assets/rgpv.jpg";

const Education = () => {
  return (
    <div className="h-[85vh] bg-gray-950 text-white mt-[117px]">
      <div className="flex gap-6 justify-center">
        {/* BTech Graduation */}
        <div
          className="relative h-[400px] w-[450px] bg-cover bg-center rounded-xl opacity-80 hover:opacity-100 mt-35 mx-10 transition-transform duration-200 ease-in-out transform hover:scale-110  shadow-md shadow-[#dc143c]"
          style={{ backgroundImage: `url(${btech})` }}
        >
          <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-60 rounded-b-xl p-4 text-white opacity-100">
            <h2 className="text-xl text-[#dc143c] font-bold">Graduation B.tech (Computer Science)</h2>
            <p className="text-md">RGPV University, 2019-2023</p>
            <p className="text-md ">CGPA: 8.71</p>
          </div>
        </div>
        <div
          className="relative h-[400px] w-[450px] bg-cover bg-center rounded-xl opacity-80 hover:opacity-100 mt-35 transition-transform duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-[#dc143c]"
          style={{ backgroundImage: `url(${senior})` }}
        >
          <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-60 rounded-b-xl p-6 text-white opacity-100">
            <h2 className="text-xl font-bold text-[#dc143c]">Higher Education</h2>
            <p className="text-md">Banasthali Vidhyapeeth, 2018-2019</p>
            <p className="text-md">Percentage: 70%</p>
          </div>
        </div>
        {/* 10th Class */}
        <div
          className="relative h-[400px] w-[450px] bg-cover bg-center rounded-xl opacity-80 hover:opacity-100 mt-35 mx-8 transition-transform duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-[#dc143c]"
          style={{ backgroundImage: `url(${higher})` }}
        >
          <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-60 rounded-b-xl p-6 text-white opacity-100">
            <h2 className="text-xl font-bold text-[#dc143c]">Senior Secondary Education</h2>
            <p className="text-md">Banasthali Vidhyapeeth, 2016-2017</p>
            <p className="text-md ">Percentage: 85%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
