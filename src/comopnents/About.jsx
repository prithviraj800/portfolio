import React from "react";
import styled from "styled-components";

export default function About() {

  
  return (
    <section className="">
      <div className="bg-black text-white  ">
        <div className="py-5">
          <p className="text-center  font-bold md:text-3xl sm:text-2xl text-xl ">About me </p>
          <p className="text-center  font-bold md:text-lg sm:text-lg text-xs text">
            -- <span className="text-red-500">who i am</span> --
          </p>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-rows-2 py-5">
          <div className="md:px-22 sm:px-42 px-24 py-5 flex items-center border-r-2">
            <img
              src="/assets/myimg.jpg"
              alt=""
              className="h-[27rem] w-[25rem] object-cover rounded-2xl"
            />
          </div>

          <div className="pt-10 px-10  flex flex-col items-center">
            <div>
              <p className="py-2">I'm Prithviraj Chauhan and I'am a Fresher</p>
              <p className="sm:text-lg text-xs">
              As a creative web developer, I specialize in HTML, CSS, Tailwind CSS, JavaScript, React, and Node.js. I seamlessly blend clean and semantic HTML with modern CSS and Tailwind CSS to craft visually appealing, responsive, and user-friendly web interfaces. My expertise in JavaScript and React.js enables me to build dynamic, interactive, and high-performance web applications that deliver a seamless user experience. On the backend, I leverage Node.js to develop scalable and efficient server-side solutions. With a deep passion for innovation and UI/UX design, I strive to create engaging, seamless, and modern digital experiences that push the boundaries of web development.
              </p>
            </div>

            <div className="items-center pt-10">
              <StyledWrapper>
                <a href="./src/assets/prithviraj_cv.pdf" download="prithviraj_cv">
                  <button>Download CV</button>
                </a>
              </StyledWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const StyledWrapper = styled.div`
  button,
  button::after {
    padding: 3px 10px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: transparent;
    position: relative;
  }

  button::after {
    --move1: inset(50% 50% 50% 50%);
    --move2: inset(31% 0 40% 0);
    --move3: inset(39% 0 15% 0);
    --move4: inset(45% 0 40% 0);
    --move5: inset(45% 0 6% 0);
    --move6: inset(14% 0 61% 0);
    clip-path: var(--move1);
    content: "GLITCH";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }

  button:hover::after {
    animation: glitch_4011 1s;
    text-shadow: 10 10px 10px black;
    animation-timing-function: steps(2, end);
    text-shadow: -3px -3px 0px #1df2f0, 3px 3px 0px #e94be8;
    background-color: transparent;
    border: 3px solid rgb(0, 255, 213);
  }

  button:hover {
    text-shadow: -1px -1px 0px #1df2f0, 1px 1px 0px #e94be8;
  }

  button:hover {
    background-color: transparent;
    border: 1px solid rgb(0, 255, 213);
    box-shadow: 0px 10px 10px -10px rgb(0, 255, 213);
  }

  @keyframes glitch_4011 {
    0% {
      clip-path: var(--move1);
      transform: translate(0px, -10px);
    }

    10% {
      clip-path: var(--move2);
      transform: translate(-10px, 10px);
    }

    20% {
      clip-path: var(--move3);
      transform: translate(10px, 0px);
    }

    30% {
      clip-path: var(--move4);
      transform: translate(-10px, 10px);
    }

    40% {
      clip-path: var(--move5);
      transform: translate(10px, -10px);
    }

    50% {
      clip-path: var(--move6);
      transform: translate(-10px, 10px);
    }

    60% {
      clip-path: var(--move1);
      transform: translate(10px, -10px);
    }

    70% {
      clip-path: var(--move3);
      transform: translate(-10px, 10px);
    }

    80% {
      clip-path: var(--move2);
      transform: translate(10px, -10px);
    }

    90% {
      clip-path: var(--move4);
      transform: translate(-10px, 10px);
    }

    100% {
      clip-path: var(--move1);
      transform: translate(0);
    }
  }
`;
