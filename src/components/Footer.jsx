import { Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t-4 border-black bg-white w-full py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-center">
        
        {/* Socials */}
        <div className="flex items-center gap-6">
          <a href="https://x.com/_bello_Jnr" className="p-3 border-2 border-black hover:bg-[#00E5FF] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/abdullah-abdulfatai-9b8a0b2b3/" className="p-3 border-2 border-black hover:bg-[#0077B5] hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:ayodejibello769@gmail.com" className="p-3 border-2 border-black hover:bg-[#FF52B2] hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm font-bold uppercase tracking-wider text-center">
          &copy; 2026 Abdullah A. Abdulfatai. <br/> All rights reserved.
        </div>

        {/* Links */}
        <div className="flex lg:justify-end gap-6 text-sm font-bold uppercase">
          <Link to={"/projects"} className="hover:underline decoration-4 underline-offset-4">Projects</Link>
          <Link to={"/contact"} className="hover:underline decoration-4 underline-offset-4">Contact</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;