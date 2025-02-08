import { useRef } from "react";
import React from "react";

import styled from "styled-components";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <div>
        <img
          src="/assets/portimg.png"
          alt=""
          className="absolute h-[45vw] w-full object-cover"
        />
      </div>
      <div className="relative py-20 px-20 text-black">
        <p className="text-4xl font-semibold">Hello, my name is</p>
        <TypeAnimation
          className="text-white font-semibold"
          sequence={["Prithviraj", 2000, "Prithviraj Chauhan", 2000, ""]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "6em", display: "inline-block" }}
          repeat={Infinity}
        />
        <div className="flex items-center gap-3">
          <p className="text-5xl text-white">And I'm a</p>
          <TypeAnimation
            className="text-red-600"
            sequence={[
              "Fresher",
              2000,
              "Freelancer",
              2000,
              "Open Source Contributor",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "3em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <div className="pt-20">
          <StyledWrapper>
            <button onClick={scrollToBottom} className="btn-17">
              <span className="text-container">
                <span className="text">Hire me</span>
              </span>
            </button>
          </StyledWrapper>
        </div>
      </div>


      <About />
      <Skills />
      <Project />

      {/* Contact Section (Attach Ref Here) */}
      <div ref={bottomRef}>
        <Contact />
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .btn-17,
  .btn-17 * {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-17 {
    background-color: #000;
    color: #fff;
    cursor: pointer;
    font-weight: 900;
    border-radius: 99rem;
    padding: 0.8rem 3rem;
    transition: all 0.3s ease-in-out;
  }

  .btn-17:hover {
    background-color: #333;
  }
`;

