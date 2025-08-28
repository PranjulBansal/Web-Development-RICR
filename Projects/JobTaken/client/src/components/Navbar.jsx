import React from "react";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className="bg-gray-300 p-5 flex justify-between ">
        <h1 className="text-2xl">Job Taken</h1>
        <div className="space-x-5">
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/home"}>Home</Link>
            <Link to={"/jobs"}>Jobs</Link>
            <Link to={"/login"}>Login</Link> 
            <Link to={"/register"}>Register</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
