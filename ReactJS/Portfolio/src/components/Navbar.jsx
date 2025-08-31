import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineWork } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";

const Navbar = () => {
  const pranjul = useLocation();
  console.log(pranjul);
  return (
    <>
      <div className="fixed top-0 left-0 w-full">
        <div className="flex p-[40px]  bg-gray-800 text-white justify-around">
          <div>
            <h1 className="text-[#dc143c]  " id="navHead">
              Portfolio
            </h1>
          </div>
          <div className=" flex items-center">
            <Link
              to={"/"}
              className="flex items-center gap-2 mx-[25px]"
              id="navbar1"
            >
              <FaBookmark />
              About
            </Link>
            <Link
              to={"/workexperience"}
              className="flex items-center gap-2 mx-[25px] "
              id="navbar2"
            >
              <MdOutlineWork />
              Work Experience
            </Link>
            <Link
              to={"/skills"}
              className="flex items-center gap-2 mx-[25px]"
              id="navbar3"
            >
              <GiAchievement />
              Skills
            </Link>
            <Link
              to={"/project"}
              className="flex items-center gap-2 mx-[25px]"
              id="navbar4"
            >
              <MdBookmarkAdd />
              Project
            </Link>

            <Link
              to={"/education"}
              className="flex items-center gap-2 mx-[25px]"
              id="navbar6"
            >
              <FaUserGraduate />
              Education
            </Link>
            <Link
              to={"/contact"}
              className="flex items-center gap-2 mx-[25px]"
              id="navbar5"
            >
              <IoCall />
              Contact
            </Link>
            <h1 className="text-[#dc143c] px-[20px]" id="navFooter">
              Get to Know about Me
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
