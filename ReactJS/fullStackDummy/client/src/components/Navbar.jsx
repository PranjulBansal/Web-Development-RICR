import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img src="/logo.png" alt="" className="h-10 w-10" />
          <h1>LoginRegisterSample</h1>
        </div>
        <div className="flex gap-4">
          <Link to={"/login"} className="hover:text-red-500">
            Login
          </Link>
          <Link to={"/register"} className="hover:text-red-500">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
