import git from "../assets/github.svg";
import linkedIn from "../assets/linkedin.svg";
import linked2 from "../assets/linked2.png";
import whatsapp from "../assets/whatsapp.svg";
import { useState } from "react";
import phantom from "../assets/phantom.jpg";
import headphones from "../assets/headphones.png";
import joypad from "../assets/joypad.png";
//stacks
import reactIcon from "../assets/react.svg";
import hamMenu from "../assets/hamburger-icon.svg";
import tailwind from "../assets/tailwind.svg";
import js from "../assets/js.svg";
import next from "../assets/next.svg";
import vscode from "../assets/vscode.svg";
import router from "../assets/router.svg";
import whatsapp2 from "../assets/whatsapp-outlined.png";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import twitter from "../assets/twitter-outlined.png";
import mail from "../assets/mail.png";
const Cover = () => {
  const [current, setCurrent] = useState("home");
  const [showNav, setShowNav] = useState(false);

  const [textColor, setTextColor] = useState("text-white");
  const [bgColor, setBgColor] = useState("bg-gray-950");
  const [border, setBorder] = useState("border-white");
  const [border2, setBorder2] = useState("border-white");
  const lightMode = () => {
    setTextColor("text-black-950");
    setBgColor("bg-white");
    setBorder("border-orange-400");
    setBorder2("border-black");
  };
  const darkMode = () => {
    setTextColor("text-white");
    setBgColor("bg-gray-950");
    setBorder("border-white");
    setBorder2("border-white");
  };

  return (
    <>
      <section className={`h-screen flex ${bgColor} ${textColor}`}>
        {/* mobile nav */}
        <nav
          className={`md:hidden flex flex-col items-start transition-all delay-75 ease-linear duration-100 absolute overflow-hidden ${
            showNav ? "h-screen" : " h-16 "
          } w-full z-10 p-3`}
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          <div className="flex justify-between w-full items-center">
            <button
              onClick={() => {
                setShowNav(!showNav);
              }}
              className=""
            >
              <img src={hamMenu} alt="menu" />
            </button>
            <div className="flex items-center p-3 gap-3">
              <h4 className="text-white">Light Mode</h4>
              <input
                type="checkbox"
                className="p-3"
                onChange={(e) => {
                  e.target.checked ? lightMode() : darkMode();
                }}
              />
            </div>
          </div>

          <div
            className="flex flex-col mt-10 gap-2 text-center self-center items-center w-full text-white"
            style={{ listStyle: "none" }}
          >
            <a href="#home" className=" p-2 w-full  active:bg-orange-800 ">
              Home
            </a>
            <a href="#about" className=" p-2 w-full  active:bg-orange-800">
              About
            </a>
            <a href="#project" className=" p-2 w-full active:bg-orange-800">
              Projects
            </a>
            <a href="#contact" className=" p-2 w-full active:bg-orange-800">
              Contact
            </a>
            <button className=" p-2 w-full  active:bg-orange-800">Blog</button>
          </div>
          <div
            className="h-full w-full"
            onClick={() => {
              setShowNav(false);
            }}
          ></div>
        </nav>

        <aside
          className={`md:flex hidden border-r-2  ${border} my-2 items-center flex-col lg:px-12 px-6 py-10 gap-10 `}
        >
          <div className="flex items-center p-3 gap-3">
            <h4>Light Mode</h4>
            <input
              type="checkbox"
              className="p-3"
              onChange={(e) => {
                e.target.checked ? lightMode() : darkMode();
              }}
            />
          </div>

          <h1 className="underline text-2xl uppercase font-semibold">
            Content
          </h1>

          <ul className="flex flex-col items-center gap-3 text-base transition-all ease-in-out delay-75 duration-300 uppercase">
            <li
              className={` cursor-pointer hover:text-2xl transition-all ease-in-out delay-75 duration-300 ${
                current == "home" && "text-2xl text-orange-400"
              }`}
            >
              <a
                href="#home"
                onClick={() => {
                  setCurrent("home");
                }}
              >
                #home
              </a>
            </li>
            <li
              className={` cursor-pointer hover:text-2xl transition-all ease-in-out delay-75 duration-300 ${
                current == "about" && "text-2xl text-orange-400"
              }`}
            >
              <a
                href="#about"
                onClick={() => {
                  setCurrent("about");
                }}
              >
                #about
              </a>
            </li>
            <li
              className={` cursor-pointer hover:text-2xl transition-all ease-in-out delay-75 duration-300 ${
                current == "project" && "text-2xl text-orange-400"
              }`}
            >
              <a
                href="#project"
                onClick={() => {
                  setCurrent("project");
                }}
              >
                #projects
              </a>
            </li>
            <li
              className={` cursor-pointer hover:text-2xl transition-all ease-in-out delay-75 duration-300 ${
                current == "contact" && "text-2xl text-orange-400"
              }`}
            >
              <a
                href="#contact"
                onClick={() => {
                  setCurrent("contact");
                }}
              >
                #contact
              </a>
            </li>
            <li
              className={` cursor-pointer hover:text-xl transition-all ease-in-out delay-75 duration-300`}
            >
              Blog
            </li>
          </ul>

          <hr className={`${border} border-1  w-full `} />
          <div className="grid grid-cols-4 gap-4">
            <img
              src={git}
              alt="github"
              className="w-10 hover:-translate-y-1 cursor-pointer hover:border-2 hover:border-orange-400 transition-all ease-in-out delay-75 border-white border-1 p-1 rounded-sm bg-gray-900"
            />
            <img
              src={linkedIn}
              alt="github"
              className="w-10 hover:-translate-y-1 cursor-pointer hover:border-2 hover:border-orange-400 transition-all ease-in-out delay-75 border-white border-1 p-1 rounded-sm bg-gray-900"
            />
            <img
              src={whatsapp}
              alt="github"
              className="w-10 hover:-translate-y-1 cursor-pointer hover:border-2 hover:border-orange-400 transition-all ease-in-out delay-75 border-white border-1 p-1 rounded-sm bg-gray-900"
            />
            <img
              src={git}
              alt="github"
              className="w-10 hover:-translate-y-1 cursor-pointer hover:border-2 hover:border-orange-400 transition-all ease-in-out delay-75 border-white border-1 p-1 rounded-sm bg-gray-900"
            />
          </div>
          <span
            className=" text-nowrap text-sm"
            style={{ fontFamily: "monospace" }}
          >
            {" "}
            copyright &copy; Blue 2025
          </span>
        </aside>
        <div className="w-full overflow-y-scroll md:mt-0 mt-10">
          {/* home */}

          <section
            className="w-full min-h-screen flex lg:flex-row flex-col  items-center gap-10 p-10"
            id="home"
          >
            <div className="w-max">
              <div
                style={{ backgroundImage: `url(${phantom})` }}
                className="w-72 h-80 bg-contain bg-center bg-no-repeat relative"
              >
                <div
                  className={`border-1 top-0 left-0 right-0 bottom-0 translate-x-4 translate-y-6 ${border} h-full absolute hover:border-orange-400 transition-all delay-75 ease-linear`}
                ></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-medium uppercase text-orange-400">
                -Website & Applications Developer
              </h2>
              <h1 className="md:text-3xl text-xl font-semibold">
                Abdullah A. Abdulfatai.
              </h1>
              <p className="text-sm font-light">
                I love building cool and functional user interfaces. With 2
                years of experience with javaScript and a year in react, your's
                truly is moving onto other stacks and growing...
              </p>
              <a
                href="#about"
                onClick={() => {
                  setCurrent("about");
                }}
                className={`border-1 ${border} p-2 w-max self-start px-5 text-xs rounded-sm cursor-pointer hover:px-6 transition-all ease-in-out delay-75 hover:bg-orange-400 hover:text-white hover:border-orange-400`}
              >
                Learn more
              </a>
            </div>
          </section>
          {/* about */}
          <section
            className=" w-full min-h-screen p-10 flex flex-col gap-5"
            id="about"
          >
            <h1 className="text-orange-400">#about-me</h1>
            <img src={phantom} alt="" className="w-56 rounded-sm" />
            <p className="font-light text-sm">
              I'm a frontend web Developer, passionate about building smooth,
              fast and responsive user interfaces. I enjoy turning ideas into
              clean functional experiences using languages like HTML, CSS,
              JavaScript, frameworks like React, tools like Git, Github, VScode,
              NPM and others like API integration, mobile-first designs. Whether
              its building from scratch or improving existing apps, I focus on
              performance, usablilliy, and aesthetics. I'm constantly learning
              and love working on projects that push me to grow.
            </p>
            <h2 className="mt-5 text-lg font-semibold uppercase">Tech stack</h2>
            <div className="flex flex-wrap gap-10 p-3">
              <img src={htmlIcon} alt="" className="w-10" />
              <img src={cssIcon} alt="" className="w-10" />
              <img src={reactIcon} alt="" className="w-10" />
              <img src={tailwind} alt="" className="w-10" />
              <img src={router} alt="" className="w-10" />
              <img src={vscode} alt="" className="w-10" />
              <img
                src={git}
                alt=""
                className="w-12 bg-gray-700 p-1 rounded-sm"
              />
              <img src={next} alt="" className="w-10" />
              <img src={js} alt="" className="w-10" />
            </div>
          </section>
          {/* project */}

          <section className=" w-full min-h-screen lg:p-10 p-6" id="project">
            <h1 className="text-orange-400">#projects</h1>
            <div className="grid lg:grid-cols-3 gap-2 grid-rows-2 w-full mt-10">
              <div
                className="lg:col-start-1 lg:col-end-3 md:text-transparent text-gray-100 hover:text-white  h-60 hover:scale-105 lg:hover:translate-x-6 transition-all delay-75 duration-150 ease-in-out cursor-pointer bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${headphones})` }}
              >
                <div className="size-full p-4  flex flex-col gap-3" id="card1">
                  <h1 className="text-white font-semibold text-2xl">
                    Real-world Clone
                  </h1>
                  <p className="text-xs">
                    A minimalist replica of Netflix, the world's largest online
                    streaming platform.{" "}
                  </p>
                  <p className="text-xs">
                    Built with React.js, github, tailwindcss and vite,
                  </p>
                  <div className="flex items-center gap-2">
                    <a href="" className="border-1 px-6 py-2 text-xs">
                      View App
                    </a>
                    <a href="" className="border-1 px-6 py-2 text-xs">
                      View on Github
                    </a>
                  </div>
                </div>
              </div>
              <div
                className=" lg:col-start-3 lg:col-end-4 h-60  flex flex-col gap-3  hover:scale-105 lg:hover:-translate-x-6 transition-all  delay-75 duration-150 ease-in-out cursor-pointer hover:text-white  md:text-transparent text-gray-100  bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${joypad})` }}
              >
                <div className="size-full p-4  flex flex-col gap-3" id="card2">
                  <h1 className="text-white font-semibold text-2xl">
                    Landing page
                  </h1>
                  <p className="text-xs">Sufcart, an ecommerce platform.</p>
                  <p className="text-xs">
                    Built with React.js, github, tailwindcss and vite,
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://six-web-alpha.vercel.app/"
                      className="border-1 px-6 py-2 text-xs"
                    >
                      View App
                    </a>
                    <a href="" className="border-1 px-6 py-2 text-xs">
                      View on Github
                    </a>
                  </div>
                </div>
              </div>
              <div
                className=" lg:col-start-1 lg:col-end-2 h-60  flex flex-col gap-3 hover:scale-105 transition-all lg:hover:translate-x-6 delay-75 duration-150 ease-in-out cursor-pointer hover:text-white  md:text-transparent text-gray-100 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${headphones})` }}
              >
                <div className="size-full p-4  flex flex-col gap-3" id="card3">
                  <h1 className="text-white font-semibold text-2xl">
                    Music Player
                  </h1>
                  <p className="text-xs">
                    A Music player with data from APIs.{" "}
                  </p>
                  <p className="text-xs">
                    Built with React.js, github, tailwindcss and vite, APIs
                  </p>
                  <div className="flex items-center gap-2">
                    <a href="" className="border-1 px-6 py-2 text-xs">
                      View App
                    </a>
                    <a href="" className="border-1 px-6 py-2 text-xs">
                      View on Github
                    </a>
                  </div>
                </div>
              </div>
              <div
                className=" lg:col-start-2 lg:col-end-4 h-60  flex flex-col gap-3 hover:scale-105 transition-all lg:hover:-translate-y-6 delay-75 duration-150 ease-in-out cursor-pointer hover:text-white  md:text-transparent text-gray-100 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${joypad})` }}
              >
                <div className="size-full p-4  flex flex-col gap-3" id="card4">
                  {" "}
                  <h1 className="text-white font-semibold text-2xl">Game</h1>
                  <p className="text-xs">
                    Your basic guessing game, where you see cards and test
                    memory for contents.
                  </p>
                  <p className="text-xs">
                    Built with React.js, github, tailwindcss and vite,
                  </p>
                  <div className="flex items-center gap-2">
                    <a href="" className="border-1 px-6 py-2 text-xs">
                      View App
                    </a>
                    <a href="" className="border-1 px-6 py-2 text-xs">
                      View on Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* contact*/}
          <section className=" w-full min-h-screen p-10" id="contact">
            <h1 className="text-orange-400">#contact-me</h1>
            <div className="flex flex-col items-center mt-5 md:w-3/5 w-full mx-auto gap-2">
              <h2 className="text-3xl font-semibold">Get In Touch</h2>
              <p className="font-light text-sm text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates facere tempora explicabo eos fuga reprehenderit neque
                asperiores dolore unde quibusdam.
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={whatsapp2}
                  alt=""
                  className="w-9 bg-white p-1 rounded-full"
                />
                <img
                  src={twitter}
                  alt=""
                  className="w-9 bg-white p-1 rounded-full"
                />
                <img
                  src={mail}
                  alt=""
                  className="w-9 bg-white p-1 rounded-full"
                />
                <img
                  src={linked2}
                  alt=""
                  className="w-9 bg-white p-1 rounded-full"
                />
              </div>
              <form
                action="https://formsubmit.co/b2da66b5e51eba995f8c5209ce3db293"
                method="POST"
                className="w-full flex flex-col gap-y-4 font-light"
              >
                <input
                  type="text"
                  name="name"
                  className={`border-b-1 w-full ${border2} outline-none p-2`}
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  className={`border-b-1 w-full ${border2} outline-none p-2`}
                  placeholder="Email"
                />
                <textarea
                  name="message"
                  placeholder="Your Message Here"
                  className={`border-b-1 w-full ${border2} outline-none p-1 min-h-40 `}
                >
                  Your Message Here
                </textarea>
                <button
                  className={`self-end ${border2} border-1 px-6 py-2 text-sm font-medium rounded-sm hover:bg-orange-500 hover:text-white hover:px-10 transition-all duration-120 ease-in-out`}
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default Cover;
