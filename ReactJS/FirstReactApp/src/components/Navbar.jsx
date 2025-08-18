import React from "react";
import logo from "../assets/logo.png";
import Certification from "./Certifications.jsx";
import ContactMe from "./ContactMe.jsx";
function Navbar() {
  return (
    <>
      <div className="container-fluid bg-white d-flex justify-content-between">
        <div className="d-flex gap-4 h-50">
          <img src={logo} alt="error" className=" border-1 my-3" />
          <h3 className="w-25 my-4 text-black">MyPortfolio</h3>
        </div>
        <div className=" d-flex gap-5 m-3 my-4 w-50">
          <a className="text-black fs-5 text-decoration-none" href="#home">
            Home
          </a>
          <a className="text-black fs-5 text-decoration-none" href="#aboutHeight">
            About
          </a>

          <a className="text-black fs-5 text-decoration-none" href="#education">
            Education
          </a>

          <a className="text-black fs-5 text-decoration-none" href="#project">
            Projects
          </a>
          <a className="text-black fs-5 text-decoration-none" href="#certificate">
            Certifications
          </a>
          <a className="text-black fs-5 text-decoration-none" href="#contactMe">
            ContactMe
          </a>
        </div>
      </div>
    </>
  );
}
export default Navbar;
