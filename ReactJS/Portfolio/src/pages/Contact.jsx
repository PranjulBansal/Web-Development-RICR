import React from "react";

const Contact = () => {
  const function1 = (e) => {
    e.preventDefault();//
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("message").value);
  };
  return (
    <>
      <div className="d-flex justify-center items-center h-full">
        <div className=" text-center bg-light w-4/6 h-6/7 m-auto my-[50px] border-2 border-dark shadow-lg shadow-blue-400">
          <h1>Contact Me</h1>
          <form
            className="flex flex-col items-center gap-6 p-8"
            onSubmit={function1}
          >
            <div className="w-full flex flex-col items-start">
              <label htmlFor="name" className="mb-2 font-semibold text-dark">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <label htmlFor="email" className="mb-2 font-semibold text-dark">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <label htmlFor="message" className="mb-2 font-semibold text-dark">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                placeholder="Type your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
