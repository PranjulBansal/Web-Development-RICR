import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
const Navbar = () => {
  const pranjul= useLocation();
  console.log(pranjul); 
  return (
    <>
      <div className="container-fluid fixed top-0 left-0 w-full">
        <div className="flex p-[30px]  bg-gray-950 text-white">
          <div>
            <h1 className="text-[#dc143c] mx-[140px] " id="navHead">
              Portfolio
            </h1>
          </div>
          <div className=" flex  items-center">
            <Link
              to={"/"}
              className="flex items-center gap-2 mx-[25px]"
              id="navbar1"
            >
              <FaHome />
              Home
            </Link>
            <Link
              to={"/about"}
              className="flex items-center gap-2 mx-[25px]"
              id="navbar2"
            >
              <FaBookmark />
              About
            </Link>
            <Link
              to={"/project"}
              className="flex items-center gap-2 mx-[25px]"
              id="navbar3"
            >
              <MdBookmarkAdd />
              Project
            </Link>
            <Link
              to={"/contact"}
              className="flex items-center gap-2 mx-[25px]"
              id="navbar4"
            >
              <IoCall />
              Contact
            </Link>
            <Link
              to={"Education"}
              className="flex items-center gap-2 mx-[25px]"
              id="navbar5"
            >
              <FaUserGraduate />
              Education
            </Link>
            <h1 className="text-[#dc143c] " id="navFooter">
              Get to Know about Me
            </h1>
          </div>
           
        </div>
      </div>
    </>
  );
};

export default Navbar;
