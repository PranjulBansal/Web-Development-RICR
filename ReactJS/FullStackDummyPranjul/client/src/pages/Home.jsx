import React from "react";
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div className="bg-amber-200 flex flex-col h-[89vh] justify-center items-center gap-2">
        <h1 className="text-5xl">Welcome to Home Page</h1>
        <h1 className="text-4xl text-[#380745]">Find Your Job</h1>
        <span><Link to={"/register"} className="text-xl text-blue-700 cursor-pointer">Create an account?</Link>
        <Link to={"/login"} className="text-xl text-blue-500"> Login</Link></span>
      </div>
    </>
  );
};

export default Home;
