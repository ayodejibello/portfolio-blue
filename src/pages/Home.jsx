import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ProjectCard1 } from "../components/ProjectCard";
import PageWrap from "../components/PageWrap";

import clodocs from "../assets/clodocs3.png";
import six from "../assets/six-app.png";
import bluetopia from "../assets/bluetopia-snip.png";
import { ArrowUpRight, Code2, Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

//icons
import reactIcon from "../assets/react2.svg";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import github from "../assets/github.svg";
import js from "../assets/js.svg";
import router from "../assets/router.svg";
import tailwindIcon from "../assets/tailwind.svg";
import vscode from "../assets/vscode.svg";
import postman from "../assets/postman.png";

// import  from "../assets/.svg";

const Home = () => {
  const [lightMode, setLightMode] = useState(true);
  const toggleMode = () => {
    lightMode ? setLightMode(false) : setLightMode(true);
  };
  return (
    <PageWrap>
      <Nav />
      <main
        className={`min-h-screen `}
      >
        {/* hero */}
        <section
          className="sm:p-10 p-5 flex flex-col items-center justify-center gap-10 md:h-screen h-[50vh]  "
          style={{ backgroundImage: `url($)` }}
        >
          <h1 className="lg:text-5xl md:text-3xl text-2xl  font-semibold">
            Hi, I'm Abdullah
          </h1>
          <p className="text-semibold text-sm  text-center">
            I use the following words and phrases as qualifiers: <br /> react
            developer, speed, UI focused, learning by doing, cool UI,
            aesthetics, react, Javasacript, minimalist...
          </p>
          <div className="flex gap-2 text-sm">
            <Link className="px-6 py-2 border rounded-lg text-nowrap" to={"/contact"}>Contact me</Link>
            <button className="px-6 py-2 border flex items-center gap-2 text-nowrap bg-neutral-900 text-white rounded-lg">
              view my work <ArrowUpRight className="size-4" />
            </button>
          </div>
        </section >
        {/* featured projects */}
        < section className="min-h-screen" >
          <div className="flex justify-between items-center sm:p-10 p-5">
            <h1 className="sm:text-2xl text-lg font-semibold">-Featured projects</h1>
            <Link className="flex items-center text-sm">
              View all Projects <ArrowUpRight className="size-5" />
            </Link>
          </div>

          <div className="flex flex-col items-center mx-auto w-full sm:gap-20 gap-10 sm:my-10 my-5 p-4">
            <ProjectCard1
              title={"Clodocs (SaaS) project"}
              description={
                "Clodocs is a  SaaS medical software that aims to bridge patient, doctors, hospitals, and Laboratories and give them a single rendezvous of online operations"
              }
              stacks={["React.js", "tailwindcss", "Github"]}
              img={clodocs}
            />
            <ProjectCard1
              title={"Landing page: Sufcart"}
              description={
                "Sufcart is your premier digital service provider, revolutionizing how people connect and transact online with seamless social engagement, instant bill payments, and innovative solutions."
              }
              stacks={["React.js", "tailwindcss", "Github"]}
              img={six}
            />
            <ProjectCard1
              title={"Music player: Bluetopia"}
              description={
                "Bluetopia is an in-built music player with pause, play, next, previous functionalities. Does not support music streaming, but only plays availble songs uploaded."
              }
              stacks={["Html", "css", "JavaScript", "audio api", " github"]}
              img={bluetopia}
            />
          </div>
        </section >
        {/* Skills */}
        < section className="min-h-screen sm:p-10 p-5" >
          <h1 className=" text-2xl font-semibold my-10">-Skills and Tools</h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 text-sm">
            <div>
              <h3 className="text-lg font-semibold mb-5">Languages</h3>
              <div className="flex gap-10">
                <div className="flex flex-col gap-2 items-center">
                  <img src={htmlIcon} alt="html5 icon" className="w-12" />
                  <span>HTML5</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <img src={cssIcon} alt="css3 icon" className="w-12" />
                  <span>CSS3</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <img src={js} alt="javascript icon" className="w-12" />
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-5">
                Libaries and frameworks
              </h3>
              <div className="flex gap-10">
                <div className="flex flex-col gap-2 items-center">
                  <img src={reactIcon} alt="html5 icon" className="w-12" />
                  <span>React</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <img src={tailwindIcon} alt="css3 icon" className="w-12" />
                  <span>Tailwind</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <img src={router} alt="html5 icon" className="w-12" />
                  <span>Router</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-5">Tools</h3>
              <div className="flex gap-10">
                <div className="flex flex-col gap-2 items-center">
                  <img src={vscode} alt="html5 icon" className="w-12" />
                  <span>VS Code</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <img
                    src={github}
                    alt="css3 icon"
                    className="w-12 bg-neutral-800 rounded-full"
                  />
                  <span>Git and GitHub</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <img src={postman} alt="css3 icon" className="w-12 " />
                  <span>Postman</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-5">Others</h3>
              <div className="flex flex-col gap-3 w-max">
                {[
                  "Rest API and API integration.",
                  "React Hooks, React Router and Context API.",
                  "UI/UX basics.",
                  "Mobile First responsive Web Design.",
                ].map((item) => {
                  return (
                    <span className="flex items-center gap-3">
                      <Code2 /> {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section >
        <Footer />
      </main >
    </PageWrap>
  );
};
export default Home;
