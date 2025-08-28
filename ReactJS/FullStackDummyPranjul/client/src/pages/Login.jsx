import React from "react";
import { Link } from "react-router-dom";
import api from "../config/api";
const Login = () => {
  const [LoginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    // const Name=e.target.name;
    // const Email=e.target.email;
    const { name, value } = e.target;
    setLoginData((previousData) => ({ ...previousData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("LoginData", LoginData);

    try {
      const res = await api.post("/auth/login", LoginData);
      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-amber-200 h-[89vh] justify-center items-center flex flex-col">
        <div className="border-2 bg-amber-900 rounded h-[60vh] max-w-md p-8">
          <h1 className="text-4xl text-center mt-8 text-white">
            Login Credentials
          </h1>
          <form
            className="flex flex-col gap-2 rounded justify-center items-center"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="email"
              className="bg-black text-white justify-center items-center my- mt-15"
            >
              <input
                type="email"
                id="email"
                name="email"
                value={LoginData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border border-white h-10 w-50 text-center"
              />
            </label>
            <label
              htmlFor="password"
              className="bg-black text-white justify-center items-center mt-5"
            >
              <input
                type="password"
                id="password"
                name="password"
                value={LoginData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="border border-white h-10 w-50 text-center"
              />
            </label>
            <button className="border border-black h-10 w-30 text-white bg-black hover:text-pink-600 hover:bg-amber-100 mt-6 rounded-2xl">
              Login
            </button>
            <p className="text-white">Don't have an account? </p>
            <Link to={"/register"} className="text-white text-xl">
              Create an account!
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
