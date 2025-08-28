import React from "react";
import { Link } from "react-router-dom";
// import pranjul from "../assets/pranjul.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const function1 = (e) => {
    e.preventDefault(); //
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("message").value); 
  };
  return (
    <>
      <div className="fixed top-22 h-[calc(100vh-80px)] bg-gray-950 text-white w-10/14  ">
        <div className="flex gap-20 h-[500px] w-[900px] m-auto mt-[60px] shadow-sm shadow-[#dc143c]">
          <div className="flex flex-col ">
            <h1 className="text-4xl mx-6 mt-15 " id="contactHead">
              Let us Connect
            </h1>
            <div className="flex gap-6 mt-10 mx-6">
              <Link
                to={"pranjulbansal672@gmail.com"}
                className="shadow-2xl shadow-pink-950 p-2 rounded-full bg-[#dc143c] "
              >
                <MdEmail />
              </Link>
              pranjulbansal672@gmail.com
            </div>
            <div className="flex gap-6 mt-5 mx-6">
              <Link
                to={"+917470482697"}
                className="shadow-2xl shadow-pink-950 p-2 rounded-full bg-[#dc143c] "
              >
                <IoCall />
              </Link>
              +91 74704 82697
            </div>
            <div className="flex gap-6 mt-5 mx-6">
              <Link
                to={"+917470482697"}
                className="shadow-2xl shadow-pink-950 p-2 h-[32px] rounded-full bg-[#dc143c] "
              >
                <FaLocationDot />
              </Link>
              Bhopal, Madhya Pradesh, India
            </div>
            <p className="mt-10 mx-10 text-xl" id="contactPara">Feel Free to connect and share your enquires, it help us to grow our experience</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl mt-8 mx-8" id="contactSide">
              Please Fill your Enquiry Details!!..
            </h1>
            <div className="mx-8 ">
              <form className="flex flex-col gap-4 mt-8" onSubmit={function1}>
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className=" w-52 p-2 rounded bg-gray-800 text-white border border-[#dc143c] focus:outline-none"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone No"
                    className="w-52 p-2 rounded bg-gray-800 text-white border border-[#dc143c] focus:outline-none"
                    required
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-52 p-2 rounded bg-gray-800 text-white border border-[#dc143c] focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company"
                    className="w-52 p-2 rounded bg-gray-800 text-white border border-[#dc143c] focus:outline-none"
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    id="reason"
                    name="reason"
                    className="w-52 p-2 rounded bg-gray-800 text-white border border-[#dc143c] focus:outline-none"
                    required
                  >
                    <option value="">Reason for Contact</option>
                    <option value="project">Project Collaboration</option>
                    <option value="job">Job Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="query">General Query</option>
                    <option value="other">Other</option>
                  </select>
                   <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Website"
                    className="w-52 p-2 rounded bg-gray-800 text-white border border-[#dc143c] focus:outline-none"
                  />
                </div>
                <div className="flex gap-4">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    className="w-108 p-2 rounded bg-gray-800 text-white border border-[#dc143c] focus:outline-none"
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className=" w-20 m-auto p-2 rounded bg-[#dc143c] text-white font-bold shadow-2xl shadow-pink-950 hover:bg-pink-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
