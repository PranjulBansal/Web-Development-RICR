import React from "react";
import ed from "../assets/edLogo.png";
import grad from "../assets/graduate.png";
import pg from "../assets/pg.png";
import high from "../assets/high.png";
import arrow from "../assets/arrow.png";
function Education() {
  return (
    <>
      <div className="bg-success container-fluid  border-black" id="education">
        <div className="d-flex gap-2 justify-content-center">
          <img src={ed} alt="" className="my-3 " />
          <h1 className="text-black my-4">Education</h1>
        </div>
        <div className="row d-flex justify-content-start ">
          <div className="col-1 my-2 mx-4 ">
            <img src={pg} alt="" className="w-75 h-75"/>
          </div>
          <div className="col-11 border border-dark bg-black w-50 rounded ">
            <h4 className="text-white my-3" id="edDetail5">Lakshmi Narain College of Technology</h4>
            <p className="text-white" id="edDetail6">(M.tech) CSE - 2024-2026</p>
          </div>
        </div>
        <div className="row" id="arrow">
            <div className="col-12" >
                <img src={arrow} alt=""  />
            </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-1 my-3 mx-4 ">
            <img src={grad} alt="" className="w-75 h-75" />
          </div>
          <div className="col-8 border border-dark bg-black w-50 rounded my-4">
            <h4 className="text-white my-3" id="edDetail3">Sagar Institute of Science and Technology</h4>
            <p className="text-white" id="edDetail4">(B.tech) CSE - 2019-2023</p>
          </div>
        </div>
         <div className="row" id="arrow1">
            <div className="col-12" >
                <img src={arrow} alt=""  />
            </div>
        </div>
        <div className="row d-flex justify-content-end mx-3">
          <div className="col-1 my-3 mx-4 ">
            <img src={high} alt=""  className="w-75 h-75"/>
          </div>

          <div className="col-8 border border-dark bg-black w-50 rounded justify-content-start my-4">
            <h4 className="text-white my-3" id="edDetail2">Higher and Senior Secondary</h4>
            <p className="text-white" id="edDetail1">Banasthali Vidhyapeeth Tonk (Jaipur) 2016-2019</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
