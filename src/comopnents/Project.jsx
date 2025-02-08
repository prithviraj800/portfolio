import React from "react";
import styled from "styled-components";

export default function Project() {
  return (
    <div className=" text-white bg-black w-full h-screen snap-center">
       <div className="py-5">
       <p className="text-center font-bold text-3xl  ">My Project</p>
       <p className="font-semibold text-center">-- <span className="text-red-600 ">Projects done</span> --</p>
       </div>
      <div className="flex justify-between px-20 py-18 ">
        <div>
          <a href="https://github.com/prithviraj800/ShopMe-Ecommerce">
            <StyledWrapper>
              <div className="card-container">
                <div className="card bg-black">
                  <div className="front-content">
                    <img
                      src="https://pcdn.sharethis.com/wp-content/uploads/2020/06/Blog_eCommerce_060120_WP-2.png"
                      alt=""
                      className="rounded-full w-40 h-40 object-cover border-4 border-red-500 "
                    />
                  </div>
                  <div className="content">
                    <p className="heading">Shop me </p>
                    <p>
                      Developed a responsive and dynamic eCommerce website using
                      React, enhancing user experience and optimizing
                      performance.
                    </p>
                  </div>
                </div>
              </div>
            </StyledWrapper>
          </a>
        </div>
        <div>
          <a href="https://github.com/prithviraj800/Ecommerce-Store">
            <StyledWrapper>
              <div className="card-container">
                <div className="card bg-black">
                  <div className="front-content">
                    <img
                      src="https://www.vnmtsolutions.com/wp-content/uploads/2021/08/NetSuite-eCommerce-development-platform.jpg"
                      alt=""
                      className="w-40 h-40 rounded-full object-cover border-4 border-red-500 "
                    />
                  </div>
                  <div className="content">
                    <p className="heading">Ecommerce Store</p>
                    <p>
                      Created an interactive and scalable eCommerce platform
                      with React, focusing on performance, usability, and modern
                      design.
                    </p>
                  </div>
                </div>
              </div>
            </StyledWrapper>
          </a>
        </div>
        <div>
          <a href="https://github.com/prithviraj800/fast-food">
            <StyledWrapper>
              <div className="card-container">
                <div className="card bg-black">
                  <div className="front-content ">
                    <img
                      src="https://cdn0.iconfinder.com/data/icons/luna-food-delivery/512/browser__fork_spoon__keterangan_aksen_saja-512.png"
                      alt=""
                      className="w-40 h-40 rounded-full object-cover border-4 border-red-500 bg-white"
                    />
                  </div>
                  <div className="content">
                    <p className="heading">Fast Food </p>
                    <p>
                      Developed a fast food ordering website using React,
                      ensuring an intuitive interface and seamless user
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </StyledWrapper>
          </a>
        </div>
      </div>
      <p className="text-end  underline text-sm">Project Commingsoon --</p>
    </div>
  );
}

const StyledWrapper = styled.div`
  .card-container {
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 10px px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .front-content p {
    font-size: 32px;
    font-weight: 700;
    opacity: 1;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    color: #e8e8e8;
    padding: 20px;
    line-height: 1.5;
    border-radius: 5px;
    pointer-events: none;
    transform: translateX(-96%);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content .heading {
    font-size: 32px;
    font-weight: 700;
  }

  .card:hover .content {
    transform: translateY(0);
  }

  .card:hover .front-content {
    transform: translateX(-30%);
  }

  .card:hover .front-content p {
    opacity: 0;
  }
`;
