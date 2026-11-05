import { ArrowUpRight, Github } from "lucide-react";

export const ProjectCard1 = ({ img, stacks, description, title, link, gitlink }) => {
  const brutalBorder = "border-4 border-black";
  const brutalShadow = "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]";
  const brutalHover = "hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all";

  return (
    <div className={`flex md:flex-row flex-col w-full bg-white ${brutalBorder} ${brutalShadow} ${brutalHover}`}>
      
      {/* Image Side */}
      <div className="md:w-1/2 w-full h-64 md:h-auto border-b-4 md:border-b-0 md:border-r-4 border-black overflow-hidden bg-gray-100">
        <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
            onError={(e) => {
                // Fallback if image fails to load
                e.target.src = "https://placehold.co/600x400/black/white?text=Project+Image";
            }}
        />
      </div>

      {/* Content Side */}
      <div className="flex flex-col gap-6 md:w-1/2 w-full p-6 md:p-8 justify-between">
        <div>
            <h1 className="text-3xl font-black uppercase mb-4 leading-tight">{title}</h1>
            
            {/* Stacks: Sharp, bold, black/white */}
            <div className="flex flex-wrap gap-3 mb-6">
                {stacks && stacks.map((stack, index) => (
                <span key={index} className="px-3 py-1 text-xs font-bold uppercase bg-black text-white border-2 border-black">
                    {stack}
                </span>
                ))}
            </div>
            
            <p className="text-lg font-medium leading-relaxed text-neutral-800">{description}</p>
        </div>

        {/* Actions: Thick borders, uppercase, bold */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a 
                href={gitlink} 
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border-4 border-black py-3 font-bold uppercase hover:bg-gray-100 transition bg-white"
            >
                <Github className="w-5 h-5" /> Github
            </a>
            <a 
                href={link} 
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#FFDE00] border-4 border-black py-3 font-bold uppercase hover:bg-white transition"
            >
                View Project <ArrowUpRight className="w-5 h-5" />
            </a>
        </div>
      </div>
    </div>
  );
};