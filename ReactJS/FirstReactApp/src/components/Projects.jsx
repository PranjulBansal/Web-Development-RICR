import React from "react";
import baat from "../assets/baat.jpg";
import lotto from "../assets/lotto.jpg";
import left from "../assets/leftA.png";
import right from "../assets/rightA.png";

function Projects() {
  return (
    <>
      <div className="container-fluid bg-black" id="project">
        <h1 className="text-white" id="projectHead">
          My Projects
        </h1>

        {/* innerdiv */}
        <div className="d-flex overflow-hidden">
          <div className=" bg-black p-4 border border-3" id="baatHeight">
            <img src={baat} alt="" id="baatSet" />
            <a href="https://baat-chit.onrender.com/ " id="link">BaatChit</a>

            <p className="text-white my-3">
              This fully responsive web chat app can be accessed from any
              device. Hosted on onrender.com, it offers a user-friendly
              interface, making it easy to start chatting individually or in
              groups.
            </p>
          </div>
          <div className=" bg-black p-4 border border-3 mx-4" id="baatHeight">
            <img src={baat} alt="" id="baatSet" />
            <a href="">BaatChit</a>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              nulla perferendis officiis, ipsa suscipit iure dolores libero
              commodi dignissimos voluptates, velit sint molestiae impedit
              quaerat quisquam obcaecati non exercitationem dicta!
            </p>
          </div>
          <div className=" bg-black p-4 border border-3 mx-4" id="baatHeight">
            <img src={lotto} alt="" id="baatSet" />
            <a href="https://kuberwins.com" id="link1">Lifetime Lotto</a>
            <p className="text-white my-4">
              Enhance User Experience. Provide online platform to win and play
              lottery tickets. Provide real time Q/A with our help support.
            </p>
          </div>
          <div className=" bg-black p-4 border border-3 mx-4 " id="baatHeight">
            <img src={baat} alt="" id="baatSet" />
            <a href="">BaatChit</a>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              nulla perferendis officiis, ipsa suscipit iure dolores libero
              commodi dignissimos voluptates, velit sint molestiae impedit
              quaerat quisquam obcaecati non exercitationem dicta!
            </p>
          </div>
        </div>
        <button className="">
          <img src={left} alt="" className="bg-light" />
        </button>
        <button>
          <a href={right}></a>Right
        </button>
      </div>
    </>
  );
}
export default Projects;
