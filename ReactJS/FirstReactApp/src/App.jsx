import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from "./components/About";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Education />
      <Certifications />
      <ContactMe />
      <Projects />
    </>
  );
}
export default App;
