import react from "react";
import about from "../assets/about.png";
function About() {
  return (
    <>
      <div className=" text-light bg-success" id="aboutHeight">
        <div className="d-flex gap-2 justify-content-center">
          <img src={about} alt=""  className="my-3"/>
          <h1 id="aboutHead" className="text-black my-3">
            About me
          </h1>
        </div>
        <div className=" container-fluid row d-flex my-4 justify-content-around m-auto border border-success rounded">
          <div className="col-4 bg-black w-25 border-top rounded-5 ">
            <h2 className="fs-2 text-success" id="aboutHead">
              Professional Skills
            </h2>
            <ul type="disc" className="fs-5">
              <li>Core Java</li>
              <li>Javascript</li>
              <li>Bootstrap</li>
              <li>React.js</li>
              <li>MongoDb</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="col-4 bg-black w-25 border-bottom rounded-5 ">
            <h2 className="fs-2 text-success" id="aboutHead">
              Technical Skills
            </h2>
            <ul type="disc" className="fs-5">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Exprees.js</li>
              <li>C++</li>
              <li>Php</li>
            </ul>
          </div>
          <div className="col-4 bg-black w-25 border-top rounded-5">
            <h2 className="fs-2 text-success" id="aboutHead">
              Soft Skills
            </h2>
            <ul type="disc" className="fs-5">
              <li>Collabator</li>
              <li>Leadership</li>
              <li>Adaptable</li>
              <li>Team Work</li>
              <li>Time Management</li>
              <li>Work Ethic</li>
            </ul>
          </div>
        </div>
        <div className="container-fluid row d-flex m-auto  border border-success rounded " >
          <div
            className="col-12 bg-black border-bottom rounded-5  m-auto "
            id="aboutWidth"
          >
            <h2 className="fs-2 text-success" id="aboutHead">
              Professional Experiences
            </h2>
            <h4 className="text-decoration-underline my-4 mx-4">
              Balaji Cyber India Pvt.Ltd-(30th April 2023 - 20th March 2025)
            </h4>
            <h5 className="mx-4">Responsibilities and Intiatives</h5>
            <ul type="disc" className="mx-4">
              <li>
                Used React.js to create dynamic, responsive, highly interactive
                user interfaces, leveraging components, hooks and state
                management.
              </li>
              <li>
                Fetch and display data from backend APIs and ensuring that the
                front-end communicates effectively with the backend.
              </li>
            </ul>
            <h4 className="text-decoration-underline mx-4">
              Agnito Technologies India Pvt.Ltd-(1st Feb 2023 - 17th April 2023)
            </h4>
            <h5 className="mx-4 my-3">Responsibilities and Intiatives</h5>
            <ul type="disc" className="mx-4">
              <li>
                Gained proficiency in HTML, CSS and JavaScript for better
                understanding of core technologies.
              </li>
              <li>
                Familiarize myself with React and other frontend frameworks.
              </li>
              <li>
                Kept update myself with the latest technologies in frontend to
                give boost my skills and proficiency.
              </li>
            </ul>
            <h4 className="text-decoration-underline mx-4">
              Agnito Technologies India Pvt.Ltd(Internship)-(1st Nov 2022 - 31st
              Jan 2023)
            </h4>
            <h5 className="mx-4 my-3">Responsibilities and Intiatives</h5>
            <ul type="disc" className="mx-4">
              <li>
                Participated in workshops, training sessions and
                knowledge-sharing events to upskill.
              </li>
              <li>
                Kept track of tasks, challenges and learnings in a personal and
                team log.
              </li>
              <li>
                Regularly review code with mentors and senior developers to
                learn best practices to seek feedback.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
