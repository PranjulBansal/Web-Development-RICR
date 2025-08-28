import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <>                                                                              
      <div className="bg-black text-white grid md:flex justify-between h-18 ">
        <div className="flex gap-2 p-2" onClick={()=>navigate("/")}> 
          <img src="logo.png" alt="error"className="hover:cursor-pointer h-15 w-15" />
          <h1 className="hover:cursor-pointer mt-3 text-xl">LoginRegisterkaro</h1>
        </div>

        <div className="flex gap-4 p-4 mx-5 ">
          <Link
            to={"/login"}
            className="h-10 w-20 bg-white text-black border-2 rounded p-1 pl-4 cursor-pointer hover:text-[#ff0000] hover:bg-black">
            Login
          </Link>
          <Link to ={"/register"} className="h-10 w-20 bg-white text-black border-2 rounded p-1 pl-3 cursor-pointer hover:text-[#ff0000] hover:bg-black">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
