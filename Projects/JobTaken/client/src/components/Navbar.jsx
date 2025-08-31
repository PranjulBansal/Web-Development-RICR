import React from "react";
import logo from "../assets/logo.png";
import react from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <Link to="" element="">Home</Link>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
