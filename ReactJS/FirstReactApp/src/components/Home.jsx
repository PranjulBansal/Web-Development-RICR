import React from "react";
import img from "../assets/pranjul.jpg";
import resume from "../assets/PranjulBansalResume.pdf";
import download from "../assets/download.png";
function Home() {
  return (
    <>
      <div className="home d-flex justify-content-evenly bg-black border-top border-success shadow-lg" id="home">
        <div className="my-5 w-50">
          <h1 className="text-success mx-4">Hi, I'm Pranjul Bansal!!!</h1>
          <h2 className="text-white mx-4 ">Full Stack Developer</h2>
          <p className="text-white mx-4 ">
            A highly skilled and results-driven software developer with more
            than 2 years of experience in designing, developing and implementing
            software applications and systems across various industries.
            Expertise in full-stack development with proficiency in programming
            languages and ability to deliver high-quality code, optimize system
            performance and solve complex technical challenges
           
          </p>
          <a href={resume} download className="btn btn-success mx-4">Download CV <img src={download}  id="download" alt=""/></a>
        </div>
        <div>
          <img
            src={img}
            alt=""
            id="image"
            className="border border-5  border-success rounded-circle my-5"
          ></img>
        </div>
      </div>
    </>
  );
}
export default Home;
