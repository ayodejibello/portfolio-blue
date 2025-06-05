import github from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import linkedIn from "../assets/linkedin.svg";
const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-4 sm:px-10 sm:text-base text-sm font-light bg-gray-950">
      <div className="tracking-wider">
        Blue &copy; copyright {new Date().getFullYear()}
      </div>
      <div className="flex items-center sm:gap-10 gap-2">
        <a href="">
          <img src={github} alt="" className="sm:size-7 size-5" />
        </a>
        <a href="">
          <img src={linkedIn} alt="" className="sm:size-7 size-5" />
        </a>{" "}
        <a href="">
          <img src={whatsapp} alt="" className="sm:size-7 size-5" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
