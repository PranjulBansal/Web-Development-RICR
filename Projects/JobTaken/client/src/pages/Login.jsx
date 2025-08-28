import React from "react";

const Login = () => {
  return (
    <>
      <div className="bg-amber-200 h-[89vh] flex justify-center items-center">
        <div className="border-2 bg-white h-[60vh] w-120 p-4">
          <h1 className="text-2xl text-center p-4 font-bold">Login with Your Details</h1>
          <form className="space-y-10">
            <div className="space-x-10 text-center">
              <label
                htmlFor="email"  
              >
                Email:
                </label>
                <input
                  type="email" name="email" value="" id="email" placeholder="you@example.com"className="border-2 border-black w-[15vw]"
                />
              
            </div>
             <div className="space-x-10 text-center">
              <label
                htmlFor="password"
              >
                Password:
                </label>
                <input
                  type="password" name="password" value="" id="password" placeholder="**********"
                />
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
