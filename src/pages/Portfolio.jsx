import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ProjectCard1 } from '../components/ProjectCard'
import clodocs from "../assets/clodocs3.png";
import six from "../assets/six-app.png";
import bluetopia from "../assets/bluetopia-snip.png";
import PageWrap from '../components/PageWrap'
const Portfolio = () => {
    return <PageWrap>
        <Nav />
        <main className='sm:p-10 p-5 md:min-h-screen'>
            <h1 className='sm:text-3xl text-lg text-center sm:py-10 py-5'>All projects</h1>
            <div className="">
                <ProjectCard1
                    title={"Clodocs (SaaS) project"}
                    description={
                        "Clodocs is a  SaaS medical software that aims to bridge patient, doctors, hospitals, and Laboratories and give them a single rendezvous of online operations"
                    }
                    stacks={["React.js", "tailwindcss", "Github"]}
                    img={clodocs}
                />
                <ProjectCard1
                    title={"Landing page: Sufcart"}
                    description={
                        "Sufcart is your premier digital service provider, revolutionizing how people connect and transact online with seamless social engagement, instant bill payments, and innovative solutions."
                    }
                    stacks={["React.js", "tailwindcss", "Github"]}
                    img={six}
                />
                <ProjectCard1
                    title={"Music player: Bluetopia"}
                    description={
                        "Bluetopia is an in-built music player with pause, play, next, previous functionalities. Does not support music streaming, but only plays availble songs uploaded."
                    }
                    stacks={["Html", "css", "JavaScript", "audio api", " github"]}
                    img={bluetopia}
                />
            </div>
        </main>
        <Footer />
    </PageWrap>
}
export default Portfolio