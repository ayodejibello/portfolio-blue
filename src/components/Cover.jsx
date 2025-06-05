// import "../index.css";
import htmlImg from "../assets/html.svg";
import cssImg from "../assets/css.svg";
import jsImg from "../assets/js.svg";
import vsImg from "../assets/vscode.svg";
import nextImg from "../assets/next.svg";
import reactImg from "../assets/react.svg";
import routerImg from "../assets/router.svg";
import tailImg from "../assets/tailwind.svg";
import gitImg from "../assets/github.svg";
import logo from "../assets/me-logo.png";
import bg1 from "../assets/render.jpg";
import bg2 from "../assets/3394.jpg";
import bg3 from "../assets/bg3.jpg";
import menuIcon from "../assets/hamburger-icon.svg";
import { useState } from "react";
const Cover = () => {
  const [menu, setMenu] = useState(true);
  return (
    <>
      <div
        className="sm:min-h-screen bg-cover bg-center text-white "
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="min-h-screen bg-gray-950 sm:p-10 p-8 opacity-95 flex flex-col justify-between gap-10">
          {/* desktop nav */}
          <nav className="justify-between text-sm items-center sm:flex hidden">
            <img src={logo} alt="" className="w-20" />
            <div className="flex gap-8 items-center">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <div className="border-button ">
                <button className="cursor-pointer bg-gray-950 p-3  ">
                  Get In Touch
                </button>
              </div>
            </div>
          </nav>
          {/* mobile nav */}
          <nav className="flex justify-between text-xs sm:hidden">
            <img src={logo} alt="" className="sm:w-20 w-16 h-8" />
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <img src={menuIcon} />
              </button>
              <div
                className={`flex flex-col items-center gap-4  ${
                  menu ? "h-0 overflow-hidden" : "increase "
                }`}
              >
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <div className="border-button ">
                  <button className="cursor-pointer bg-gray-950 p-2  ">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div className="text-center flex flex-col gap-4 items-center">
            <h2 className="font-light">Hello!</h2>
            <h1 className="font-bold tracking-wide">I'm Abdullah Abdulfatai</h1>
            <h3 className="font-semibold">Front-End Web Developer</h3>
            <p className="flex sm:w-1/2 w-[90%] tracking-wide text-sm">
              A mostly cool and normal developer with a knack for aesthetically
              built, functional and optimized web services and solutions.
            </p>
            {/* <button className="p-3 bg-blue-800 w-max px-6 rounded-full font-semibold text-white cursor-pointer shadow-sm shadow-gray-800">
              Request A project
            </button> */}
          </div>
          <div className="flex flex-wrap justify-around sm:gap-10 gap-6 sm:p-4 p-10">
            <img src={htmlImg} alt="html" className="sm:size-10 size-6 logo" />
            <img src={cssImg} alt="" className="sm:size-10 size-6 logo" />
            <img src={nextImg} alt="" className="sm:size-10 size-6 logo" />
            <img src={gitImg} alt="" className="sm:size-10 size-6 logo" />
            <img src={tailImg} alt="" className="sm:size-10 size-6 logo" />
            <img src={reactImg} alt="" className="sm:size-10 size-6 logo" />
            <img src={jsImg} alt="" className="sm:size-10 size-6 logo" />
            <img src={routerImg} alt="" className="sm:size-10 size-6 logo" />
            <img src={vsImg} alt="" className="sm:size-10 size-6 logo" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Cover;
