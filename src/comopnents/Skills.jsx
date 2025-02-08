import React from "react";
import styled from "styled-components";

export default function Skills() {
  return (
    <div className=" text-white px-10 bg-gradient-to-t w-full h-screen to-black snap-center">
      <div className="py-5">
      <p className="text-center   font-bold text-3xl">My Skills</p>
      <p className="font-semibold text-center">--<span className="text-red-500">what i know</span>--</p>
      </div>
      <div className="flex flex-col">
        <div className=" px-30 py-10 border-[0.01rem] bg-black">
          As a creative web developer, I specialize in HTML, CSS, Tailwind CSS,
          JavaScript, React, and Node.js. I seamlessly blend clean and semantic
          HTML with modern CSS and Tailwind CSS to craft visually appealing,
          responsive, and user-friendly web interfaces. My expertise in
          JavaScript and React.js enables me to build dynamic, interactive, and
          high-performance web applications that deliver a seamless user
          experience. On the backend, I leverage Node.js to develop scalable and
          efficient server-side solutions. With a deep passion for innovation
          and UI/UX design, I strive to create engaging, seamless, and modern
          digital experiences that push the boundaries of web development.
        </div>
        <div className=" flex py-10 justify-between">
          <div>
          <StyledWrapper>
            <div className="card">
              <div>
                <p className="heading">HTML</p>
                
                
              </div>
              <button className="card-button"></button>
            </div>
          </StyledWrapper>
          </div>
          <div>
          <StyledWrapper>
            <div className="card">
              <div>
                <p className="heading">CSS & Tailwind CSS</p>
                
                
              </div>
              <button className="card-button"></button>
            </div>
          </StyledWrapper>
          </div>
          <div>
          <StyledWrapper>
            <div className="card">
              <div>
                <p className="heading">JavaScript</p>
                
                
              </div>
              <button className="card-button"></button>
            </div>
          </StyledWrapper>
          </div>
          <div>
          <StyledWrapper>
            <div className="card">
              <div>
                <p className="heading">React</p>
                
                
              </div>
              <button className="card-button"></button>
            </div>
          </StyledWrapper>
          </div>
          <div>
            <StyledWrapper>
            <div className="card">
              <div>
                <p className="heading">Node.js</p>
                
                
              </div>
              <button className="card-button"></button>
            </div>
          </StyledWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 160px;
    height: 160px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
    color: rgb(255, 255, 255);
  }
  .card > div {
    margin: auto auto;
  }
  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 170px;
    height: 170px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #fff01c 0%, #40c9ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fff01c 0%, #40c9ff 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
  }

  .card p:not(.heading) {
    font-size: 14px;
  }

  .card p:last-child {
    color: #e81cff;
    font-weight: 600;
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1) scaleY(1);
  }

  .card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
  .card-button {
    transform: translate(-50%, 125%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
  }`; 
