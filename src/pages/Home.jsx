import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Icons (Ensure these paths exist or replace with lucide icons if missing)
import reactIcon from "../assets/react2.svg";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import github from "../assets/github.svg";
import js from "../assets/js.svg";
import tailwindIcon from "../assets/tailwind.svg";
import vscode from "../assets/vscode.svg";

// Project Images
import clodocs from "../assets/clodocs3.png";
import six from "../assets/six-app.png";
import bluetopia from "../assets/bluetopia-snip.png";
// Placeholder for PSFMS since you didn't provide an asset yet
import psfmsPlaceholder from "../assets/PSFMS.png"; 

const Home = () => {
  const brutalBorder = "border-4 border-black";
  const brutalShadow = "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]";
  const brutalHover = "hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all";

  return (
    <>
      <Nav />
      <main className="p-4 md:p-10 max-w-7xl mx-auto">
        
        {/* Hero */}
        <section className="mb-24 mt-10">
          <div className={`bg-sky-300 ${brutalBorder} ${brutalShadow} p-8 md:p-16 max-w-5xl mx-auto transform -rotate-1 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF52B2] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <h1 className="text-5xl md:text-8xl font-black uppercase leading-none mb-6">
              Hi, I'm <br/> Abdullah.
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-2xl border-l-8 border-black pl-6 mb-8">
              Frontend Developer building responsive, user-focused web apps with React & TypeScript.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className={`${brutalBorder} bg-white px-8 py-4 font-black text-lg ${brutalShadow} ${brutalHover} uppercase`}>
                Contact Me
              </Link>
              <Link to="/projects" className={`${brutalBorder} bg-sky-600 text-white px-8 py-4 font-black text-lg ${brutalShadow} ${brutalHover} flex items-center gap-2 uppercase`}>
                View Projects <ArrowUpRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 border-b-8 border-black inline-block pr-10">Featured Work</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Project 1: PSFMS (New) */}
            <div className={`${brutalBorder} bg-white p-6 ${brutalShadow} ${brutalHover} transform rotate-1`}>
              <div className="border-4 border-black mb-6 overflow-hidden h-64 bg-gray-200 flex items-center justify-center">
                 {/* Replace src with actual image when available */}
                <img src={psfmsPlaceholder} alt="PSFMS" className="w-full h-full object-cover" onError={(e) => e.target.src="https://placehold.co/600x400/black/white?text=PSFMS+Project"} />
              </div>
              <h3 className="text-3xl font-black uppercase mb-2">PSFMS Platform</h3>
              <p className="mb-6 font-medium text-lg">Full-stack student project supervision system with role-based access.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-black text-white px-3 py-1 text-xs font-bold border-2 border-transparent">REACT</span>
                <span className="bg-black text-white px-3 py-1 text-xs font-bold border-2 border-transparent">SUPABASE</span>
                <span className="bg-black text-white px-3 py-1 text-xs font-bold border-2 border-transparent">TAILWIND</span>
              </div>
              <a href="https://fyp-manager-alpha.vercel.app/" target="_blank" rel="noreferrer" className="block text-center bg-emerald-600 text-white border-4 border-black py-3 font-black uppercase hover:bg-white hover:text-black transition">View Live</a>
            </div>

            {/* Project 2: Clodocs */}
            <div className={`${brutalBorder} bg-white p-6 ${brutalShadow} ${brutalHover} transform -rotate-1`}>
              <div className="border-4 border-black mb-6 overflow-hidden h-64">
                <img src={clodocs} alt="Clodocs" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl font-black uppercase mb-2">Clodocs SaaS</h3>
              <p className="mb-6 font-medium text-lg">Medical software bridging patients, doctors, and labs.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-black text-white px-3 py-1 text-xs font-bold border-2 border-transparent">REACT</span>
                <span className="bg-black text-white px-3 py-1 text-xs font-bold border-2 border-transparent">TAILWIND</span>
              </div>
              <a href="https://clodocs.com/" target="_blank" rel="noreferrer" className="block text-center bg-[#00E5FF] border-4 border-black py-3 font-black uppercase hover:bg-white transition">View Live</a>
            </div>
          </div>
        </section>

        {/* Tech Stack / Arsenal */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 border-b-8 border-black inline-block pr-10">My Arsenal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Languages */}
            <div className={`${brutalBorder} bg-white p-8 ${brutalShadow}`}>
              <h3 className="font-black text-2xl mb-6 border-b-4 border-black pb-2 uppercase">Languages</h3>
              <ul className="space-y-4 font-bold text-lg">
                <li className="flex items-center gap-3"><img src={htmlIcon} className="w-8 h-8" alt="HTML"/> HTML5</li>
                <li className="flex items-center gap-3"><img src={cssIcon} className="w-8 h-8" alt="CSS"/> CSS3</li>
                <li className="flex items-center gap-3"><img src={js} className="w-8 h-8" alt="JS"/> JavaScript (ES6+)</li>
                <li className="flex items-center gap-3"><span className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-serif font-bold rounded">TS</span> TypeScript</li>
              </ul>
            </div>

            {/* Frameworks */}
            <div className={`${brutalBorder} bg-white p-8 ${brutalShadow}`}>
              <h3 className="font-black text-2xl mb-6 border-b-4 border-black pb-2 uppercase">Frameworks</h3>
              <ul className="space-y-4 font-bold text-lg">
                <li className="flex items-center gap-3"><img src={reactIcon} className="w-8 h-8" alt="React"/> React.js</li>
                <li className="flex items-center gap-3"><img src={tailwindIcon} className="w-8 h-8" alt="Tailwind"/> Tailwind CSS</li>
                <li className="flex items-center gap-3"><span className="w-8 h-8 bg-purple-600 text-white flex items-center justify-center font-bold rounded">V</span> Vite</li>
              </ul>
            </div>

            {/* Tools */}
            <div className={`${brutalBorder} bg-white p-8 ${brutalShadow}`}>
              <h3 className="font-black text-2xl mb-6 border-b-4 border-black pb-2 uppercase">Tools</h3>
              <ul className="space-y-4 font-bold text-lg">
                <li className="flex items-center gap-3"><img src={github} className="w-8 h-8 bg-black rounded-full p-1" alt="Git"/> Git & GitHub</li>
                <li className="flex items-center gap-3"><img src={vscode} className="w-8 h-8" alt="VSCode"/> VS Code</li>
                <li className="flex items-center gap-3"><span className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center font-bold rounded">S</span> Supabase</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};
export default Home;