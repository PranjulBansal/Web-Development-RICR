import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Skills from "./pages/Skills";
import WorkExperience from "./pages/WorkExperience";
import Education from "./pages/Education";
import {BrowserRouter,Routes,Route} from "react-router-dom";
//variable assign to a arrow function is optimized way to save memory usage
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <main className="flex h-[90vh]" >
        

        <section className=" w-11/14">
         <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/workexperience" element={<WorkExperience/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/project" element={<Projects/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/contact" element={<Contact/>}/>
         </Routes>
        </section>
        <Sidebar />
      </main>
      </BrowserRouter>
    </>
  );
};
export default App;
