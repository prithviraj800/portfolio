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
        <p className="text-center  font-bold text-3xl ">Skills</p>
        <p className="text-center  font-bold text-lg text">
          -- <span className="text-red-500">what i know</span> --
        </p>
      </div>
      <div className="grid grid-cols-4 gap-20 py-20 px-20">
        <div>
          <StyledWrapper>
            <div className="card">
              <h2 className="flex flex-col items-center w-20">
                <FaHtml5 /> <span>HTML</span>
              </h2>
            </div>
          </StyledWrapper>
        </div>
        <div>
          <StyledWrapper>
            <div className="card">
              <h2 className="flex flex-col items-center w-20">
                <IoLogoCss3 />
                <span>CSS</span>{" "}
              </h2>
            </div>
          </StyledWrapper>
        </div>
        <div>
          <StyledWrapper>
            <div className="card">
              <h2 className="flex flex-col items-center w-20">
                <BiLogoTailwindCss />
                <span>Tailwindcss</span>
              </h2>
            </div>
          </StyledWrapper>
        </div>
        <div>
          <StyledWrapper>
            <div className="card">
              <h2 className="flex flex-col items-center w-20">
                <IoLogoJavascript />
                <span>JavaScript</span>
              </h2>
            </div>
          </StyledWrapper>
        </div>
        <div>
          <StyledWrapper>
            <div className="card">
              <h2 className="flex flex-col items-center w-20">
                <FaReact />
                <span>React</span>
              </h2>
            </div>
          </StyledWrapper>
        </div>
        <div>
          <StyledWrapper>
            <div className="card">
              <h2 className="flex flex-col items-center w-20">
                <FaNodeJs />
                <span>Nodejs</span>
              </h2>
            </div>
          </StyledWrapper>
        </div>
        <div>
          <StyledWrapper>
            <div className="card">
              <h2 className="flex flex-col items-center w-20">
                <SiMongodb /> <span>Mongodb</span>
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
    width: 190px;
    height: 254px;
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
