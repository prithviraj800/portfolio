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
    <div className="h-screen">
      <div>
        <img
          src="/portimg.png"
          alt=""
          className="absolute h-[47vw] w-full object-cover"
        />
      </div>
      <div className="relative md:py-20 sm:py-14 py-5 md:px-20 sm:px-10 px-6 text-black">
        <p className="md:text-4xl sm:text-3xl text-xs  font-semibold">Hello, my name is</p>
        <TypeAnimation
          className="text-white font-semibold md:text-[6rem] sm:text-[4rem] text-2xl"
          sequence={["Prithviraj", 2000, "", 2000, ""]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        <div className="flex items-center gap-2">
          <p className="md:text-5xl sm:text-4xl text-sm text-white">And I'm a</p>
          <TypeAnimation
            className="text-red-600 md:text-5xl sm:text-4xl text-sm inline-block"
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
            repeat={Infinity}
          />
        </div>
        <div className="md:py-20 sm:py-8 py-5">

        <StyledWrapper>
      <button onClick={scrollToBottom}  className="btn mdxs:w-[10rem] sm:w-[8rem] w-[6rem] sm:text-lg text-xs ">Hair me</button>
    </StyledWrapper>
          
          
        </div>
      </div>
      {/* 
      <Skills />
      <Project /> */}
      <div ref={bottomRef}>
      <About />
      </div>
     

      {/* Contact Section (Attach Ref Here) */}
      <div ref={bottomRef}>
        <Contact />
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .btn {
    --border-color: linear-gradient(-45deg, #ffae00, #7e03aa, #00fffb);
    --border-width: 0.125em;
    --curve-size: 0.5em;
    --blur: 30px;
    --bg: #080312;
    --color: #afffff;
    color: var(--color);
    cursor: pointer;
    /* use position: relative; so that BG is only for .btn */
    position: relative;
    isolation: isolate;
    display: inline-grid;
    place-content: center;
    padding: 0.3em 1em;
    font-size: 14px;
    border: 0;
    text-transform: uppercase;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);
    clip-path: polygon(
      /* Top-left */ 0% var(--curve-size),
      var(--curve-size) 0,
      /* top-right */ 100% 0,
      100% calc(100% - var(--curve-size)),
      /* bottom-right 1 */ calc(100% - var(--curve-size)) 100%,
      /* bottom-right 2 */ 0 100%
    );
    transition: color 250ms;
  }

  .btn::after,
  .btn::before {
    content: "";
    position: absolute;
    inset: 0;
  }

  .btn::before {
    background: var(--border-color);
    background-size: 300% 300%;
    animation: move-bg7234 5s ease infinite;
    z-index: -2;
  }

  @keyframes move-bg7234 {
    0% {
      background-position: 31% 0%;
    }

    50% {
      background-position: 70% 100%;
    }

    100% {
      background-position: 31% 0%;
    }
  }

  .btn::after {
    background: var(--bg);
    z-index: -1;
    clip-path: polygon(
      /* Top-left */ var(--border-width)
        calc(var(--curve-size) + var(--border-width) * 0.5),
      calc(var(--curve-size) + var(--border-width) * 0.5) var(--border-width),
      /* top-right */ calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width))
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      /* bottom-right 1 */
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      /* bottom-right 2 */ var(--border-width) calc(100% - var(--border-width))
    );
    transition: clip-path 500ms;
  }

  .btn:where(:hover, :focus)::after {
    clip-path: polygon(
      /* Top-left */ calc(100% - var(--border-width))
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      calc(100% - var(--border-width)) var(--border-width),
      /* top-right */ calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width))
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      /* bottom-right 1 */
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      /* bottom-right 2 */
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width))
    );
    transition: 200ms;
  }

  .btn:where(:hover, :focus) {
    color: #fff;
  }`;