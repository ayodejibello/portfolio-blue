import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 border-t w-full sm:px-10 px-5 py-6 items-center  gap-10">
      <div className="flex items-center md:justify-center sm:gap-6 gap-3 ">
        <a href="https://x.com/_bello_Jnr"><Twitter className="max-w-5" /></a>
        <a href="https://www.linkedin.com/in/abdullah-abdulfatai-9b8a0b2b3/"><Linkedin className="max-w-5" /></a>
        <a href="mailto:ayodejibello769@gmail.com">
          {" "}
          <Mail className="max-w-5" />
        </a>
      </div>
      <div className="text-sm font-medium   md:text-center">
        &copy; All rights reserved for Abdullah A. Abdulfatai.
      </div>
      <div className="flex md:justify-center sm:gap-6 gap-3 sm:text-sm text-xs font-medium ">
        <Link to={"/portfolio"}>Portfolio</Link>
        <Link>Blogs</Link>
        <Link to={"/contact"}>Contact me</Link>
      </div>
    </footer>
  );
};
export default Footer;
