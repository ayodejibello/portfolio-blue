import { ArrowUpRight } from "lucide-react";

export const ProjectCard1 = ({ img, stacks, description, title }) => {
  return (
    <>
      <div className="flex md:flex-row flex-col sm:gap-10 gap-5 w-full sm:p-8 p-4">
        <div
          className="md:w-1/2 md:h-auto h-[50vh] w-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="flex flex-col gap-5 md:w-1/2 w-full">
          <h1>{title}</h1>
          <div className="grid sm:grid-cols-5 grid-cols-3 gap-5 items-center w-full">
            {stacks.map((stack) => {
              return (
                <span className="px-2 py-1 text-xs rounded-full bg-gray-900 w-max text-white">
                  {stack}
                </span>
              );
            })}
          </div>
          <p className="text-sm font-light text-wrap">{description}</p>
          <div className="flex gap-10 items-center text-sm">
            <a className=" border-1 px-6 py-2  hover:text-neutral-950 transition duration-200 ease-linear">
              View Github
            </a>
            <a className="flex items-center gap-1 border-b ">
              View project <ArrowUpRight className="w-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export const ProjectCard2 = () => {
  return (
    <>
      <div className="flex"></div>
    </>
  );
};
