import gitImg from "../assets/github.svg";
import extlink from "../assets/ext-link.png";
import bg3 from "../assets/bg3.jpg";
import ramen from "../assets/blue-ramen.jpg";
import gold from "../assets/agold.jpg";
import healthscope from "../assets/healthscope.jpg";
import bluetodo from "../assets/bluetodo.PNG";
import mood from "../assets/mood.PNG";
import dict from "../assets/dict.PNG";
import boks from "../assets/boks.jpg";

//cards component
const Cards = ({ image, name, year, github, link }) => {
  return (
    <div className="w-full bg-white sm:p-6 p-3 rounded-md">
      <img
        src={image}
        alt={name}
        className="w-full sm:h-96 h-auto rounded-lg "
      />
      <div className="flex items-ceter justify-between mt-4 p-2  border-t-1 border-gray-200">
        <h4 className="font-bold text-gray-800">{name}</h4>
        <h4 className="text-gray-600 font-bold">({year})</h4>
      </div>
      <div className="flex items-center mt-4 gap-4 p-2">
        <a href={github}>
          <img
            src={gitImg}
            alt=""
            className="sm:size-6 size-4 bg-black rounded-full"
          />
        </a>
        <a href={link}>
          <img src={extlink} alt="" className="sm:size-6 size-4" />
        </a>
      </div>
    </div>
  );
};
const Projects = () => {
  let projects = [
    {
      name: "HealthScope",
      year: "2025",
      github: "https://github.com/ayodejibello/ARM",
      link: "https://healthscope-tau.vercel.app/",
      image: `${healthscope}`,
    },
    {
      name: "Boks_Web",
      year: "2025",
      github: "https://github.com/ayodejibello/boks",
      link: "https://boks-web.vercel.app/",
      image: `${boks}`,
    },
    {
      name: "BlueRamen",
      year: "2025",
      github: "https://github.com/ayodejibello/dattebayo",
      link: "https://blue-ramen.vercel.app/",
      image: `${ramen}`,
    },
    {
      name: "A-Gold",
      year: "2025",
      github: "https://github.com/ayodejibello/AgoldSample",
      link: "https://agold-sample.vercel.app/",
      image: `${gold}`,
    },
    {
      name: "Blue To_Do",
      year: "2024",
      github: "https://github.com/ayodejibello/hacker-stories",
      link: "https://bluetodo.vercel.app/",
      image: { bluetodo },
    },
    {
      name: "Thesaurus",
      year: "2024",
      github: "https://github.com/ayodejibello/Dictionary",
      link: "https://bluethesaurus.vercel.app/",
      image: { dict },
    },
    {
      name: "Mood Tracker",
      year: "2025",
      github: "https://github.com/ayodejibello/Mood-Tracker",
      link: "https://mood-tracker-pied-pi.vercel.app/",
      image: { mood },
    },
  ];
  return (
    <>
      <div className="bg-slate-300 p-10" id="projects">
        <h1 className="m-2 text-blue-950 mb-8 font-bold">Projects Showcase</h1>
        <div className="grid sm:grid-cols-2 grid-cols-1 justify-items-center gap-8 items-center content-center">
          {projects.map((item) => {
            return (
              <Cards
                name={item.name}
                year={item.year}
                image={item.image}
                github={item.github}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Projects;
