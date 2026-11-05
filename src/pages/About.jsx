import Nav from "../components/Nav";
import Footer from "../components/Footer";
import me from "../assets/me1.jpg";
import { BadgeCheck, Code2, Terminal, Webhook } from "lucide-react";

const About = () => {
  const brutalBorder = "border-4 border-black";
  const brutalShadow = "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]";
  const brutalHover = "hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all";

  return (
    <div className="bg-[#EAE8E3] text-black font-mono min-h-screen relative overflow-hidden">
      
      {/* Background Spider Web Particles (Decorative) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
         <div className="absolute top-10 left-10 w-64 h-64 border border-black rounded-full animate-[spin_10s_linear_infinite]"></div>
         <div className="absolute top-10 left-10 w-48 h-48 border border-black rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
         <div className="absolute bottom-20 right-20 w-96 h-96 border border-black rounded-full animate-[spin_20s_linear_infinite]"></div>
         {/* Connecting Lines */}
         <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="10%" x2="90%" y2="90%" stroke="black" strokeWidth="1" />
            <line x1="90%" y1="10%" x2="10%" y2="90%" stroke="black" strokeWidth="1" />
            <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="black" strokeWidth="1" />
            <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="black" strokeWidth="1" />
         </svg>
      </div>

      <Nav />
      
      <main className="max-w-6xl mx-auto p-6 md:p-10 relative z-10">
        
        {/* Hero Section: The Web Profile */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-24 mt-10">
          
          {/* The Web Image Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 group">
             {/* Rotating Web Rings */}
             <div className="absolute inset-0 border-4 border-black rounded-full animate-[spin_12s_linear_infinite] border-dashed"></div>
             <div className="absolute inset-4 border-2 border-black rounded-full animate-[spin_8s_linear_infinite_reverse] opacity-50"></div>
             
             {/* The Image Clip Path (Octagon/Web Shape) */}
             <div className="absolute inset-8 bg-black overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform duration-500 group-hover:scale-105"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <img 
                  src={me} 
                  alt="Abdullah" 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => e.target.src="https://placehold.co/400x400/black/white?text=Abdullah"}
                />
             </div>

             {/* Floating Icon */}
             <div className="absolute -top-4 -right-4 bg-[#FFDE00] border-4 border-black p-2 rounded-full animate-bounce">
                <Webhook className="w-6 h-6" />
             </div>
          </div>

          {/* Intro Text */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">
              Caught in the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF52B2] to-[#00E5FF]" style={{ WebkitTextStroke: '2px black' }}>Code Web</span>
            </h1>
            <p className="text-xl font-bold max-w-lg border-l-8 border-black pl-6 py-2 bg-white/50 backdrop-blur-sm">
              I’m Abdullah Abdulfatai. I weave clean code into responsive, user-focused web experiences.
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Bio Column */}
          <div className="md:col-span-2 flex flex-col gap-8">
            
            {/* Story Card */}
            <div className={`bg-white p-8 ${brutalBorder} ${brutalShadow} relative overflow-hidden`}>
               {/* Decorative Web Corner */}
               <div className="absolute top-0 right-0 w-20 h-20 bg-[#EAE8E3] border-l-4 border-b-4 border-black transform rotate-45 translate-x-10 -translate-y-10"></div>
               
               <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                 <Terminal className="w-8 h-8" /> The Story
               </h2>
               
               <div className="space-y-6 text-lg font-medium leading-relaxed">
                  <p>
                    Hi, I’m <span className="bg-[#FF52B2] px-2 py-1 border-2 border-black font-bold">Abdullah Abdulfatai</span>. 
                    My journey started with simple curiosity, but it quickly spun into a passion. Turning abstract ideas into functional, tangible interfaces feels like magic to me.
                  </p>
                  <p>
                    I specialize in the frontend triad: <strong>HTML, CSS, and JavaScript</strong>, powered by <strong>React</strong> and <strong>Tailwind CSS</strong>. 
                    Currently, I'm expanding my web by integrating <strong>TypeScript</strong> and <strong>Next.js</strong> to build more robust, full-stack applications.
                  </p>
                  <p>
                    When I'm not coding, I'm exploring creative intersections between tech and design, always looking for the next thread to pull.
                  </p>
               </div>
            </div>
            
            {/* Focus Card */}
            <div className={`bg-[#00E5FF] p-8 ${brutalBorder} ${brutalShadow} text-black`}>
                <h3 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2 flex items-center gap-2">
                  <Code2 className="w-6 h-6" /> Currently Weaving
                </h3>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                      "Deepening TypeScript proficiency",
                      "Building cleaner React architectures",
                      "Exploring Next.js Full-stack",
                      "Mastering Framer Motion animations"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-bold bg-white/80 p-3 border-2 border-black hover:bg-white transition cursor-default">
                        <span className="w-2 h-2 bg-black rounded-full"></span> {item}
                      </li>
                    ))}
                </ul>
            </div>
          </div>

          {/* Sidebar: Skills & Timeline */}
          <div className="flex flex-col gap-8">
             
             {/* Skills Web */}
             <div className={`bg-white p-6 ${brutalBorder} ${brutalShadow}`}>
                <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">Tech Stack</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "HTML5", "CSS3", "JavaScript", "React.js", 
                    "Tailwind", "TypeScript", "Git", "Supabase", "REST API"
                  ].map((skill) => (
                    <span key={skill} className={`px-4 py-2 bg-[#EAE8E3] border-2 border-black font-bold text-sm hover:bg-[#FFDE00] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all cursor-default`}>
                      {skill}
                    </span>
                  ))}
                </div>
             </div>

             {/* Timeline Thread */}
             <div className={`bg-white p-6 ${brutalBorder} ${brutalShadow}`}>
                <h2 className="text-2xl font-black uppercase mb-8 border-b-4 border-black pb-2">Timeline</h2>
                
                <div className="relative pl-8 border-l-4 border-black space-y-8">
                    {/* 2023 */}
                    <div className="relative group">
                        <div className="absolute -left-[42px] top-1 w-6 h-6 bg-white border-4 border-black rounded-full group-hover:bg-[#FF52B2] transition-colors"></div>
                        <h3 className="font-black text-xl">2023</h3>
                        <p className="text-sm font-bold mt-1">Started programming — Python basics + Java.</p>
                    </div>
                    
                    {/* 2024 */}
                    <div className="relative group">
                        <div className="absolute -left-[42px] top-1 w-6 h-6 bg-white border-4 border-black rounded-full group-hover:bg-[#FFDE00] transition-colors"></div>
                        <h3 className="font-black text-xl">2024</h3>
                        <p className="text-sm font-bold mt-1">Began frontend journey — HTML, CSS, Layouts.</p>
                    </div>

                    {/* Early 2025 */}
                    <div className="relative group">
                        <div className="absolute -left-[42px] top-1 w-6 h-6 bg-white border-4 border-black rounded-full group-hover:bg-[#00E5FF] transition-colors"></div>
                        <h3 className="font-black text-xl">Early 2025</h3>
                        <p className="text-sm font-bold mt-1">Focused on JS Logic, DOM & Mini Projects.</p>
                    </div>

                    {/* Late 2025 */}
                    <div className="relative group">
                        <div className="absolute -left-[42px] top-1 w-6 h-6 bg-white border-4 border-black rounded-full group-hover:bg-black group-hover:border-white transition-colors"></div>
                        <h3 className="font-black text-xl">Late 2025</h3>
                        <p className="text-sm font-bold mt-1">Mastered React + Tailwind. Built dynamic apps.</p>
                    </div>

                    {/* 2026 */}
                    <div className="relative group">
                        <div className="absolute -left-[46px] top-1 w-8 h-8 bg-[#FF52B2] border-4 border-black rounded-full flex items-center justify-center animate-pulse">
                           <Webhook className="w-4 h-4 text-black" />
                        </div>
                        <h3 className="font-black text-xl">2026 (Now)</h3>
                        <p className="text-sm font-bold mt-1">Version Control, Deployment, Supabase & Firebase.</p>
                    </div>
                </div>
             </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default About;