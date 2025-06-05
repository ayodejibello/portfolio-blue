import bg1 from "../assets/render.jpg";
import bg2 from "../assets/3394.jpg";
import bg3 from "../assets/bg3.jpg";
import blueI from "../assets/blueI.jpg";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <div
        className="bg-center bg-cover bg-no-repeat text-white min-h-screen"
        style={{ backgroundImage: `url(${bg3})` }}
        id="about"
      >
        <div className="flex items-center justify-center min-h-screen bg-gray-900 opacity-75 gap-4 p-6 sm:flex-row flex-col-reverse">
          <div className="sm:w-1/2 w-full flex flex-col justify-center gap-6">
            <h4 className="text-blue-300 font-light">#about-me</h4>
            <h2 className="font-semibold">Junior React Developer</h2>
            <div className="flex items-center gap-6">
              <div className="tracking-wide">
                <span className="sm:text-6xl text-xl  font-bold block text-blue-400 ">
                  2+
                </span>
                <span className="sm:text-base text-xs sm:font-medium block ">
                  years of Experience
                </span>
              </div>
              <div className=" tracking-wide">
                <span className="sm:text-6xl text-xl font-bold block text-blue-400">
                  20+
                </span>
                <span className="sm:text-base text-xs sm:font-medium block ">
                  Ongoing + Completed projects
                </span>
              </div>
            </div>
            <p className="w-9/10 sm:text-base text-xs sm:font-medium font-light tracking-wide">
              I have always loved to sit behind the screen and explore how code
              runs, how it makes things work. I have worked for numerous
              startups and organizations, through freelance and also hire. With
              2 years of experience and a year in React.js, i have built and
              collaborated to build stunning and fully functional websites and
              web applications.
            </p>
          </div>
          <div className="sm:w-1/3 w-full">
            <img
              src={blueI}
              alt="my Image"
              className="sm:w-[75%] w-56 rounded-t-full m-auto"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default About;
