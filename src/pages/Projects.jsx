import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ProjectCard1 } from '../components/ProjectCard';

// Images
import clodocs from "../assets/clodocs3.png";
import six from "../assets/six-app.png";
import bluetopia from "../assets/bluetopia-snip.png";
import lost from "../assets/lost-and-found.png";
// Placeholders for projects without images
import tostPlaceholder from "../assets/tost.png"; 
import upsidePlaceholder from "../assets/upside.png";
import doorgrabPlaceholder from "../assets/doorgrab.png";

const Projects = () => {
    

    return (
        <>
            <Nav />
            <main className='sm:p-10 p-5 max-w-7xl mx-auto'>
                
                <div className="mb-16 mt-10">
                    <h1 className='text-5xl md:text-7xl font-black uppercase border-b-8 border-black inline-block pr-10'>All Projects</h1>
                    <p className="mt-6 text-xl font-bold max-w-2xl">
                        A collection of full-stack applications, landing pages, and experimental interfaces.
                    </p>
                </div>

                {/* Grid Layout for Cards */}
                <div className="grid grid-cols-1 gap-16">
                    
                    {/* Professional Work Section Header */}
                    <div className="col-span-1 mt-10 mb-5">
                         <h2 className="text-3xl font-black uppercase bg-black text-white inline-block px-4 py-2 transform -skew-x-12">Professional Work</h2>
                    </div>

                    <ProjectCard1
                        title={"TOST Landing Page"}
                        description={"Founding team member. Built the high-conversion landing page for a location-based dating app."}
                        stacks={["React", "Tailwind", "Vercel"]}
                        img={tostPlaceholder} // Replace with real image if available
                        link={"https://tostapp.com/"}
                        gitlink={"#"}
                    />

                    <ProjectCard1
                        title={"Upside Web App"}
                        description={"Web developer on a startup product team. Contributed to core feature development."}
                        stacks={["React", "JavaScript"]}
                        img={upsidePlaceholder} // Replace with real image if available
                        link={"https://myupside.org/"}
                        gitlink={"#"}
                    />

                    <ProjectCard1
                        title={"DoorGrab Dashboard"}
                        description={"Frontend contributor on a restaurant management platform. Built auth, dashboard, menu management, and analytics."}
                        stacks={["React", "Private Repo"]}
                        img={doorgrabPlaceholder} // Replace with real image if available
                        link={"#"}
                        gitlink={"#"}
                    />

                     {/* Personal Projects Section Header */}
                     <div className="col-span-1 mt-10 mb-5">
                         <h2 className="text-3xl font-black uppercase bg-[#FF52B2] text-white inline-block px-4 py-2 transform -skew-x-12">Personal Projects</h2>
                    </div>

                    <ProjectCard1
                        title={"Clodocs (SaaS)"}
                        description={"Medical software bridging patients, doctors, hospitals, and Laboratories."}
                        stacks={["React.js", "Tailwindcss", "Github"]}
                        img={clodocs}
                        link={"https://clodocs.com/"}
                        gitlink={"https://github.com/nova-technology-ltd/clodocs-website"}
                    />
                    
                    <ProjectCard1
                        title={"Lost and Found Site"}
                        description={"An application for announcing and viewing lost items with search functionality."}
                        stacks={["Html", "Tailwindcss", "React.js"]}
                        img={lost}
                        link={"https://lost-and-found-web-rust.vercel.app/"}
                        gitlink={"https://github.com/ayodejibello/lost-and-found-web"}
                    />

                    <ProjectCard1
                        title={"Landing page: Sufcart"}
                        description={"Digital service provider revolutionizing online transactions."}
                        stacks={["React.js", "Tailwindcss"]}
                        img={six}
                        link={"https://six-web-alpha.vercel.app/"}
                        gitlink={"https://github.com/nova-technology-ltd/six-web"}
                    />

                    <ProjectCard1
                        title={"Music player: Bluetopia"}
                        description={"In-built music player with custom audio API controls."}
                        stacks={["Html", "Css", "JavaScript"]}
                        img={bluetopia}
                        link={"https://bluetopia.vercel.app/"}
                        gitlink={"https://github.com/ayodejibello/musik-app"}
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Projects;