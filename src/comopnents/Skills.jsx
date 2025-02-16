import React from "react";
import styled from "styled-components";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function Skills() {
  return (
    <div className="bg-black">
      <div className="py-5 text-white">
        <p className="text-center  font-bold md:text-3xl sm:text-2xl text-xl ">Skills</p>
        <p className="text-center  font-bold md:text-lg sm:text-lg text-xs text">
          -- <span className="text-red-500">what i know</span> --
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-20 sm:gap-10 gap-5  md:py-20 sm:py-10 py-6 md:px-20 sm:px-12 px-10">
        <div>
          <StyledWrapper>
            <div className="card md:w-[14rem] md:h-[18rem] sm:w-[10rem] sm:h-[14rem] w-[8rem] h-[10rem]  ">
              <h2 className="flex flex-col items-center w-20">
                <FaHtml5 /> <span className="md:text-2xl sm:text-xl text-lg">HTML</span>
              </h2>
            </div>
          </StyledWrapper>
        </div>
        <div>
          <StyledWrapper>
            <div className="card md:w-[14rem] md:h-[18rem] sm:w-[10rem] sm:h-[14rem] w-[8rem] h-[10rem] ">
              <h2 className="flex flex-col items-center w-20">
                <IoLogoCss3 />
                <span className="md:text-2xl sm:text-xl text-lg">CSS</span>
              </h2>
            </div>
          </StyledWrapper>
        </div>
        <div>
          <StyledWrapper>
            <div className="card md:w-[14rem] md:h-[18rem] sm:w-[10rem] sm:h-[14rem] w-[8rem] h-[10rem] ">
              <h2 className="flex flex-col items-center w-20">
                <BiLogoTailwindCss />
                <span className="md:text-2xl sm:text-xl text-lg">Tailwindcss</span>
              </h2>
            </div>
          </StyledWrapper>
        </div>
        <div>
          <StyledWrapper>
            <div className="card md:w-[14rem] md:h-[18rem] sm:w-[10rem] sm:h-[14rem] w-[8rem] h-[10rem] ">
              <h2 className="flex flex-col items-center w-20">
                <IoLogoJavascript />
                <span className="md:text-2xl sm:text-xl text-lg">JavaScript</span>
              </h2>
            </div>
          </StyledWrapper>
        </div>
        <div>
          <StyledWrapper>
            <div className="card md:w-[14rem] md:h-[18rem] sm:w-[10rem] sm:h-[14rem] w-[8rem] h-[10rem] ">
              <h2 className="flex flex-col items-center w-20">
                <FaReact />
                <span className="md:text-2xl sm:text-xl text-lg">React</span>
              </h2>
            </div>
          </StyledWrapper>
        </div>
        <div>
          <StyledWrapper>
            <div className="card md:w-[14rem] md:h-[18rem] sm:w-[10rem] sm:h-[14rem] w-[8rem] h-[10rem] ">
              <h2 className="flex flex-col items-center w-20">
                <FaNodeJs />
                <span className="md:text-2xl sm:text-xl text-lg">Nodejs</span>
              </h2>
            </div>
          </StyledWrapper>
        </div>
        <div>
          <StyledWrapper>
            <div className="card md:w-[14rem] md:h-[18rem] sm:w-[10rem] sm:h-[14rem] w-[8rem] h-[10rem] ">
              <h2 className="flex flex-col items-center w-20">
                <SiMongodb /> <span className="md:text-2xl sm:text-xl text-lg">Mongodb</span>
              </h2>
            </div>
          </StyledWrapper>
        </div>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .card {
   
   
    background: #07182e;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
  }

  .card h2 {
    z-index: 1;
    color: white;
    font-size: 2em;
  }

  .card::before {
    content: "";
    position: absolute;
    width: 100px;
    background-image: linear-gradient(
      180deg,
      rgb(0, 183, 255),
      rgb(255, 48, 255)
    );
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: "";
    position: absolute;
    background: #07182e;
    inset: 5px;
    border-radius: 15px;
  }
  /* .card:hover:before {
    background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
    animation: rotBGimg 3.5s linear infinite;
  } */
`;
