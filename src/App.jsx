import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./comopnents/Home";
import About from "./comopnents/About";
import Skills from "./comopnents/Skills";
import Project from "./comopnents/Project";
import Contact from "./comopnents/Contact";
import React from 'react';
import styled from 'styled-components';

export default function App() {
  return (
    <Router>
      <section className=" bg-black  h-scree">
        <div>
          <div className="flex w-full  justify-between md:px-20 sm:px-10 px-7 py-5 backdrop-blur-sm shadow-gray-500  text-white md:text-xl font-bold font-serif">
            <div>
              <Link to="/">
                <p>Prithviraj</p>
              </Link>
            </div>
            <div className="">
              <nav>
                <ul className=" md:gap-16 sm:gap-10 md:flex sm:flex hidden ">
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

      <div className="md:hidden sm:hidden flex ">
              {/* <StyledWrapper>
                <div className="menu">
                  <div className="item">
                    <a href="#" className="link">
                      <span> Our Services </span>
                      <svg viewBox="0 0 360 360" xmlSpace="preserve">
                        <g id="SVGRepo_iconCarrier">
                          <path
                            id="XMLID_225_"
                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                          />
                        </g>
                      </svg>
                    </a>
                    <div className="submenu">
                      <div className="submenu-item">
                        <a href="#" className="submenu-link">
                          {" "}
                          Development{" "}
                        </a>
                      </div>
                      <div className="submenu-item">
                        <a href="#" className="submenu-link">
                          {" "}
                          Design{" "}
                        </a>
                      </div>
                      <div className="submenu-item">
                        <a href="#" className="submenu-link">
                          {" "}
                          Marketing{" "}
                        </a>
                      </div>
                      <div className="submenu-item">
                        <a href="#" className="submenu-link">
                          {" "}
                          SEO{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </StyledWrapper> */}
            </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      
    </Router>
  );
}


const StyledWrapper = styled.div`
  .menu {
    font-size: 16px;
    line-height: 1.6;
    color: #00550;
    width: fit-content;
    display: flex;
    list-style: none;
  }

  .menu a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .menu .link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 12px 36px;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu .link::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a3cff;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu .link svg {
    width: 14px;
    height: 14px;
    fill: #000000;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu .item {
    position: relative;
  }

  .menu .item .submenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    border-radius: 0 0 16px 16px;
    left: 0;
    width: 100%;
    overflow: hidden;
    border: 1px solid #cccccc;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-12px);
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 1;
    pointer-events: none;
    list-style: none;
  }

  .menu .item:hover .submenu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
    border-top: transparent;
    border-color: #0a3cff;
  }

  .menu .item:hover .link {
    color: #ffffff;
    border-radius: 16px 16px 0 0;
  }

  .menu .item:hover .link::after {
    transform: scaleX(1);
    transform-origin: right;
  }

  .menu .item:hover .link svg {
    fill: #ffffff;
    transform: rotate(-180deg);
  }

  .submenu .submenu-item {
    width: 100%;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .submenu .submenu-link {
    display: block;
    padding: 12px 24px;
    width: 100%;
    position: relative;
    text-align: center;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .submenu .submenu-item:last-child .submenu-link {
    border-bottom: none;
  }

  .submenu .submenu-link::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    width: 100%;
    height: 100%;
    background-color: #0a3cff;
    z-index: -1;
    transform-origin: left;
    transition: transform 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .submenu .submenu-link:hover:before {
    transform: scaleX(1);
    transform-origin: right;
  }

  .submenu .submenu-link:hover {
    color: #ffffff;
  }`;


