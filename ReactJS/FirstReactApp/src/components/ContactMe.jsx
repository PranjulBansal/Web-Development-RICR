import React from "react";
import contact from "../assets/contact.webp";
function ContactMe() {
  return (
    <>
      <div className="container-fluid bg-black">
        <div className="d-flex justify-content-evenly">
        <div>
          <h2 className="text-white" id="contactHead">Contact Me</h2>
          <label htmlFor="name" className="my-2">
           
            <input type="Your Email" placeholder="Email"/>
            
          </label>
          <br />
          <label htmlFor="name" className="my-2">
           
            <input type="text" placeholder="Your Query"/>
            
          </label><br />
          <label htmlFor="name" className="my-2">
           
            <input type="text" placeholder="Query Selection"/>
            
          </label>
          <br />
          <button className="btn btn-primary">Submit</button>

         
        </div>
        <div className="my-4"> <img src={contact} alt="" className="" /></div>
      </div>
      </div>
    </>
  );
}
export default ContactMe;
