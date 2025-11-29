import { Code2, Menu, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { ModeContext } from "../Context/ModeProvider";
import { useContext } from "react";

const Nav = () => {
  const { mode, toggleMode } = useContext(ModeContext)
  return (
    <>
      {/* desktop, tablet nav */}
      <nav className={"md:flex hidden justify-between p-10 text-sm"}>
        <h1 className="flex gap-2 items-center">
          {" "}
          <Code2 /> Blue's Domain
        </h1>
        <div className="flex gap-5 items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link>Portfolio</Link>
          <Link to={"/contact"}>Contact me</Link>
          <Link className="text-gray-400">Blogs</Link>
          <button onClick={toggleMode} className="cursor-pointer">
            {mode == "light" ? <Moon /> : <Sun />}
          </button>
        </div>
      </nav>
      {/* mobile */}
      <nav className="md:hidden flex flex-col p-6 relative">
        <div className="flex justify-between w-full">
          <h1 className="flex gap-2 items-center z-2">
            <Code2 /> Blue's Domain
          </h1>
          <button className="z-2">
            <Menu />
          </button>
        </div>
        <div className="flex flex-col gap-4 w-max p-10 rounded-sm text-sm absolute top-12 right-10 z-2 border">
          <Link to={"/about"}>about me</Link>
          <Link>portfolio</Link>
          <Link className="text-gray-400">my blogs</Link>
          <button
            onClick={toggleMode}
            className="cursor-pointer flex items-center gap-2"
          >
            {mode == "light" ? <Moon /> : <Sun />}
            mode
          </button>
        </div>
        <div className=" left-0 right-0 h-screen top-0 bottom-0 fixed z-1 overflow-hidden "></div>

        {/*  */}
      </nav>
    </>
  );
};
export default Nav;
