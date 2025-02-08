import React from "react";
import styled from "styled-components";
export default function Contact() {
  return (
    <div className="py-10 px-5 bg-black text-white">
      <div className="grid grid-cols-3">
        <div>
          <iframe
            className=" w-full h-[20rem]"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1634771.5074031334!2d77.75256862507909!3d30.940345645096865!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1738946361595!5m2!1sen!2sin"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="px-10">
          <p className="font-bold text-3xl text-center py-10">Contact Us</p>
          <ul className="flex flex-col gap-5 ">
            <li>Email : prithviraj8002131@gmail.com </li>
            <li>Mobile : 8002131099</li>
            <li>Location : Chandighar</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-3xl text-center py-10">Social</p>
          <div className="flex  flex-col items-center">
            <StyledWrapper >
              <div className="main">
                <div className="up">
                  <button className="card1">
                    <svg
                      className="whatsapp"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      height={30}
                      width={30}
                    >
                      <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z" />
                    </svg>
                  </button>
                  <a href="https://www.linkedin.com/in/prithviraj-chauhan-a22171342/">
                    <button className="card2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="linkedin"
                        height="1.6em"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                      </svg>
                    </button>
                  </a>
                </div>
                <div className="down">
                  <a href="https://github.com/prithviraj800">
                    <button className="card3">
                      <svg
                        className="github"
                        height="30px"
                        width="30px"
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                      </svg>
                    </button>
                  </a>
                  <button className="card4">
                    <svg
                      className="discord"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="30px"
                      height="30px"
                    >
                      <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z" />
                    </svg>
                  </button>
                </div>
              </div>
            </StyledWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .up {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }

  .down {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }

  .card1 {
    width: 90px;
    height: 90px;
    outline: none;
    border: none;
    background: white;
    border-radius: 90px 5px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;
  }

  .whatsapp {
    margin-top: 1.5em;
    margin-left: 2em;
    fill: #00ff00;
  }

  .card2 {
    width: 90px;
    height: 90px;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 90px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;
  }

  .linkedin {
    margin-top: 1.5em;
    margin-left: 2em;
    fill: #0077b5;
  }

  .card3 {
    width: 90px;
    height: 90px;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 5px 5px 90px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;
  }

  .github {
    margin-top: -0.6em;
    margin-left: 2em;
  }

  .card4 {
    width: 90px;
    height: 90px;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 5px 90px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;
  }

  .discord {
    margin-top: -0.9em;
    margin-left: 1.6em;
    fill: #8c9eff;
  }

  .card1:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #00ff00;
  }

  .card1:hover .whatsapp {
    fill: white;
  }

  .card2:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #0077b5;
  }

  .card2:hover .linkedin {
    fill: white;
  }

  .card3:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: black;
  }

  .card3:hover .github {
    fill: white;
  }

  .card4:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #8c9eff;
  }

  .card4:hover .discord {
    fill: white;
  }
`;
