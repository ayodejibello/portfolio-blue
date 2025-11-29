import { Code2, Menu, Moon, Sun, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ModeContext } from "../Context/ModeProvider";
import { useContext, useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(false)
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
          <Link to={"/portfolio"}>Portfolio</Link>
          <Link to={"/contact"}>Contact me</Link>
          <Link className="text-gray-400">Blogs</Link>
          <button onClick={toggleMode} className="cursor-pointer">
            {mode == "light" ? <Moon /> : <Sun />}
          </button>
        </div>
      </nav >
      {/* mobile */}
      < nav className="md:hidden flex flex-col p-6 relative" >
        <div className="flex justify-between w-full">
          <h1 className="flex gap-2 items-center z-2">
            <Code2 /> Blue's Domain
          </h1>
          <button className="z-2 cursor-pointer" onClick={() => {
            show ? setShow(false) : setShow(true)
          }}>
            {show ? <X /> : <Menu />}
          </button>
        </div>
        {/*  */}
        {
          show && <div className={`${mode == "light" ? "bg-white text-neutral-950 shadow-gray-300" : "bg-neutral-950 text-white shadow-gray-700"} z-10 flex flex-col shadow-sm  gap-4 w-[90%] p-10 justify-center items-start rounded-xl text-sm absolute top-12 right-4 left-4 `}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/portfolio"}>Portfolio</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link className="text-gray-400">My blogs</Link>
            <button
              onClick={toggleMode}
              className="cursor-pointer flex items-center gap-2 border w-full p-1 text-sm rounded-lg justify-center"
            >
              {mode == "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
              mode
            </button>
          </div>
        }
        <div className=" left-0 right-0 h-screen top-0 bottom-0 fixed z-1 overflow-hidden " onClick={() => {
          setShow(false)
        }}></div>

        {/*  */}
      </nav >
    </>
  );
};
export default Nav;
