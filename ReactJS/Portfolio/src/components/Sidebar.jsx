import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <div className="border border-red-600 w-3/14">
        <div className="flex flex-col gap-3 p-5">
          <Link to={"/"} className="flex gap-3 items-center">
            <FaHome /> Home
          </Link>
          <Link to={"/about"} className="flex gap-3 items-center">
            <FaBookmark />
            About
          </Link>
          <Link to={"/project"} className="flex gap-3 items-center">
            <MdBookmarkAdd />
            Project
          </Link>
          <Link to={"/contact"} className="flex gap-3 items-center">
            <IoCall />
            Contact
          </Link>
          <Link to={"Education"} className="flex gap-3 items-center">
            <FaUserGraduate />
            Education
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
