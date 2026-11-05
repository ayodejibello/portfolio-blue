import { Code2, Menu, Moon, Sun, X } from "lucide-react";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(false);

  
  // Brutalist utility classes
  const brutalBorder = "border-4 border-black";
  const brutalShadow = "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";

  return (
    <>
      {/* Desktop Nav */}
      <nav className="md:flex hidden justify-between p-6 md:p-10 text-sm font-bold uppercase tracking-wide bg-white border-b-4 border-black">
        <h1 className="flex gap-2 items-center text-xl">
          <Code2 className="w-8 h-8" /> Blue's Domain
        </h1>
        <div className="flex gap-8 items-center">
          <Link to={"/"} className="hover:bg-[#FFDE00] px-2 py-1 transition-colors">Home</Link>
          <Link to={"/about"} className="hover:bg-[#FFDE00] px-2 py-1 transition-colors">About</Link>
          <Link to={"/projects"} className="hover:bg-[#FFDE00] px-2 py-1 transition-colors">Projects</Link>
          <Link to={"/contact"} className="hover:bg-[#FFDE00] px-2 py-1 transition-colors">Contact</Link>
          
       
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="md:hidden flex flex-col p-6 relative bg-white border-b-4 border-black">
        <div className="flex justify-between w-full items-center">
          <h1 className="flex gap-2 items-center z-20 font-bold text-xl">
            <Code2 className="w-8 h-8" /> Blue's Domain
          </h1>
          <button 
            className="z-20 cursor-pointer p-2 border-2 border-black rounded bg-white" 
            onClick={() => setShow(!show)}
          >
            {show ? <X /> : <Menu />}
          </button>
        </div>
        
        {show && (
          <div className="z-10 flex flex-col gap-4 w-full mt-6 p-6 bg-[#EAE8E3] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] absolute top-full left-0 right-0">
            <Link to={"/"} onClick={() => setShow(false)}>Home</Link>
            <Link to={"/about"} onClick={() => setShow(false)}>About</Link>
            <Link to={"/projects"} onClick={() => setShow(false)}>Projects</Link>
            <Link to={"/contact"} onClick={() => setShow(false)}>Contact</Link>
            
           
          </div>
        )}
      </nav>
    </>
  );
};
export default Nav;