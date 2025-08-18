import React from "react";
import baat from "../assets/baat.jpg";
import lotto from "../assets/lotto.jpg";
import cart from "../assets/cart.jpg";
import delivery from "../assets/delivery.jpg";
import project from "../assets/project.png";

function Projects() {
  return (
    <>
      <div className="container-fluid bg-black " id="project">
        <div className="d-flex gap-2 justify-content-center">
          <img  src={project} alt="" className="my-3" />
          <h1 className="text-white py-3" id="projectHead">
            Projects
          </h1>
        </div>

        {/* innerdiv */}
        <div className="d-flex my-5 gap-4">
          <div className=" bg-black p-4 border border-3" id="baatHeight">
            <img src={baat} alt="" id="baatSet" />
            <a
              href="https://baat-chit.onrender.com/ "
              className="text-white fs-5 "
            >
              BaatChit
            </a>

            <p className="text-white my-3">
              This fully responsive web chat app can be accessed from any
              device. Hosted on onrender.com, it offers a user-friendly
              interface, making it easy to start chatting individually or in
              groups.
            </p>
          </div>
          <div className=" bg-black p-4 border border-3 mx-4" id="baatHeight">
            <img src={cart} alt="" id="baatSet" />
            <a href="" className="text-white fs-5">
              ShopMeHii
            </a>
            <p className="text-white my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              nulla perferendis officiis, ipsa suscipit iure dolores libero
              commodi dignissimos voluptates,
            </p>
          </div>
          <div className=" bg-black p-4 border border-3 mx-4" id="baatHeight">
            <img src={lotto} alt="" id="baatSet" />
            <a
              href="https://kuberwins.com"
              id="link1"
              className="text-white fs-5"
            >
              Lifetime Lotto
            </a>
            <p className="text-white my-4">
              Enhance User Experience. Provide online platform to win and play
              lottery tickets. Provide real time Q/A with our help support.
            </p>
          </div>
          <div className=" bg-black p-4 border border-3 mx-4 " id="baatHeight">
            <img src={delivery} alt="" id="baatSet" />
            <a href="" className="text-white fs-5">
              Delivery Food
            </a>
            <p className="text-white my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              nulla perferendis officiis, ipsa suscipit iure dolores libero
              commodi dignissimos voluptates,
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
