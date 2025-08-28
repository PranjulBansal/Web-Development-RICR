import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
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
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
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
