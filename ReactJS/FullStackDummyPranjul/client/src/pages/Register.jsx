import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../config/api";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    let isValid = true;
    const err = {};

    if (registerData.name.length < 3) {
      err.name = "Name should be atleast 3 character";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(registerData.name)) {
      err.name = "Name should contain only small and captial letters";
      isValid = false;
    }

    if (registerData.email.length < 10) {
      err.email = "PLease add a valid Email";
      isValid = false;
    }

    if (registerData.password !== registerData.confirmPassword) {
      err.confirmPassword = "Password not Matched";
      isValid = false;
    }

    setError(err);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validate()) {
      setLoading(false);
      return;
    }

    try {
      const res = await api.post("/auth/register", registerData);
      alert(res.data.message);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
      
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((previousData) => ({
      ...previousData,
      [name]: value.trim(),
    }));
  };
  return (
    <>
      {" "}
      <div className="bg-amber-200 h-[89vh] justify-center items-center flex flex-col">
        <div className="border-2 bg-amber-900 rounded h-[80vh] max-w-md">
          <h1 className="text-4xl text-center mt-8 text-white">
            Create Your Account
          </h1>
          <form
            className="flex flex-col gap-5 rounded justify-center items-center"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="name"
              className="bg-black text-white justify-center items-center mt-15"
            >
              <input
                type="name"
                id="name"
                name="name"
                value={registerData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border border-white h-10 w-full text-center"
              />
            </label>
            {error.name && (
              <p className="text-center text-red-500 text-sm">{error.name}</p>
            )}
            <label
              htmlFor="email"
              className="bg-black text-white justify-center items-center"
            >
              <input
                type="email"
                id="email"
                name="email"
                value={registerData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border border-white h-10 w-50 text-center"
              />
            </label>
            {error.email && (
              <p className="text-center text-red-500 text-sm">{error.email}</p>
            )}
            <label
              htmlFor="password"
              className="bg-black text-white justify-center items-center"
            >
              <input
                type="password"
                id="password"
                name="password"
                value={registerData.password}
                onChange={handleChange}
                placeholder="Create your password"
                className="border border-white h-10 w-50 text-center "
              />
            </label>
            <label
              htmlFor="confirmPassword"
              className="bg-black text-white justify-center items-center"
            >
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="border border-white h-10 w-50 text-center "
              />
            </label>
            {error.confirmPassword && (
              <p className="text-center text-red-500 text-sm">
                {error.confirmPassword}
              </p>
            )}
            <button
              type="submit"
              className="border border-black h-10 w-30 text-white bg-black hover:text-pink-600 hover:bg-amber-100 rounded-2xl"
            >
              {loading ? "Registering User . . . " : "Resister"}
            </button>
            <span className="text-white text-xl">
              Already have an account?
              <Link to={"/login"}>
                {" "}
                <span className="text-blue-600">Login</span>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
