import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./comopnents/Home";
import About from "./comopnents/About";
import Skills from "./comopnents/Skills";
import Project from "./comopnents/Project";
import Contact from "./comopnents/Contact";


export default function App() {
  return (
    <Router>
      <section className=" bg-black ">
        <div>
          <div className="flex w-full  justify-between md:px-20 py-5 backdrop-blur-sm shadow-gray-500  text-white md:text-xl font-bold font-serif">
            <div>
              <Link to="/"><p>Prithviraj</p></Link>
            </div>
            <div>
              <nav>
                <ul className="flex  gap-16">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/skills">Skills</Link>
                  <Link to="/project">Project</Link>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
     
    </Router>
  );
}
