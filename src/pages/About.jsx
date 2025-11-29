import Nav from "../components/Nav";
import Footer from "../components/Footer";
import me from "../assets/me1.png";
import PageWrap from "../components/PageWrap";
import { BadgeCheck } from "lucide-react";
const About = () => {
  return (
    < PageWrap >
      <Nav />
      <main className=" items-center gap-20 min-h-screen">
        <div
          className="bg-center bg-no-repeat bg-contain w-full h-[60vh] "
          style={{ backgroundImage: `url(${me})` }}
        >
          <div className="size-full flex justify-center items-end p-10 bg-conic-90 from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.7)] to-[rgb(0,0,0,0.45)] "></div>
        </div>

        <div className="flex flex-col gap-2 text-sm p-10">
          <h1 className="text-2xl font-semibold">About Me</h1>
          <p>
            Hi, I’m Abdullah Abdulfatai — a frontend developer who enjoys
            building clean, responsive, and user-friendly web experiences.{" "}
            <br /> I started learning web development out of curiosity, but it
            quickly became something I genuinely love. Turning ideas into real,
            functional interfaces feels like magic to me — and I’m always
            excited to learn more.{" "}
          </p>
          <p>
            I work mainly with HTML, CSS, JavaScript, React, and Tailwind CSS,
            and I enjoy creating projects that are simple, fast, and intuitive.
            I’m also exploring animations with Framer Motion and improving the
            way I consume APIs and design components.
          </p>{" "}
          <p>
            Outside of coding, I enjoy reading, exploring creative ideas, and
            finding ways to combine tech with design and storytelling. I’m
            always learning, experimenting, and trying to level up my skills one
            project at a time.
          </p>
          <p>
            {" "}
            I’m open to collaboration, internships, and any opportunity that
            helps me grow as a developer — and contribute to meaningful
            projects.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm p-10">
          <h1 className="text-2xl font-semibold">Skills overview</h1>
          <ul className="flex flex-col gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "REST APIs",
              "Responsive Design",
              "Firebase",
            ].map((item) => {
              return (
                <li className="flex gap-2 items-center">
                  <BadgeCheck className="fill-green-500 text-white" />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-sm p-10">
          <h1 className="text-2xl font-semibold my-10">Timeline</h1>
          <div className="mx-auto">
            <div className="flex">
              <div className="sm:w-86 w-40  border-r-2 p-2 px-5 ">
                <h1> 2023</h1>
                <p>Started programming — Python basics + Java from school.</p>
              </div>
              <div className="sm:w-86 w-40  border-l-2"></div>
            </div>
            <div className="flex">
              <div className="sm:w-86 w-40   border-r-2"></div>{" "}
              <div className="sm:w-86 w-40  border-l-2 p-2 px-5">
                <h1> 2024</h1>
                <p>Began frontend journey — HTML, CSS, layouts.</p>
              </div>
            </div>{" "}
            <div className="flex">
              <div className="sm:w-86 w-40  border-r-2 p-2 px-5">
                <h1>Early 2025</h1>
                <p>Focused on JavaScript — logic, DOM, mini projects.</p>
              </div>{" "}
              <div className="sm:w-86 w-40  border-l-2"></div>
            </div>
            <div className="flex">
              <div className="sm:w-86 w-40  border-r-2"></div>{" "}
              <div className="sm:w-86 w-40  border-l-2 p-2 px-5">
                <h1> Mid 2025</h1>
                <p>API integrations — learned REST, Fetch, authentication.</p>
              </div>
            </div>{" "}
            <div className="flex">
              <div className="sm:w-86 w-40 border-r-2 p-2 px-5">
                <h1>Late 2025</h1>

                <p> Learnt React + Tailwind — built dynamic projects.</p>
              </div>{" "}
              <div className="sm:w-86 w-40  border-l-2"></div>
            </div>
            <div className="flex">
              <div className="sm:w-86 w-40 border-r-2 p-2 px-5"></div>{" "}
              <div className="sm:w-86 w-40  border-l-2  p-2 px-5">
                {" "}
                <h1>Late 2025</h1>
                <p> Learnt React + Tailwind — built dynamic projects.</p>
              </div>
            </div>
          </div>
          {/* <div>
     










2026
Version control, deployment, Firebase exploration.
          </div> */}
        </div>
      </main>

      <Footer />
    </PageWrap >
  );
};
export default About;
