import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ArrowUpRight } from 'lucide-react'

const Contact = () => {
    const brutalBorder = "border-4 border-black";
    const brutalShadow = "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]";
    const brutalHover = "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all";

    return (
        <>
            <Nav />
            <main className="flex flex-col gap-8 p-6 md:p-10 items-center justify-center min-h-[80vh]">

                <div className="text-center max-w-2xl">
                    <h1 className='text-5xl md:text-7xl font-black uppercase mb-6'>Get In Touch</h1>
                    <p className='text-xl font-bold mb-8'>Have a project in mind? Compose a message below or reach out via socials.</p>
                    
                    <div className="flex flex-wrap justify-center gap-4 text-lg font-bold uppercase">
                        <a href="wa.link/vgjw6q" className={`${brutalBorder} bg-white px-6 py-2 hover:bg-[#25D366] hover:text-white transition`}>WhatsApp</a>
                        <a href="https://www.linkedin.com/in/abdullah-abdulfatai-9b8a0b2b3/" className={`${brutalBorder} bg-white px-6 py-2 hover:bg-[#0077B5] hover:text-white transition`}>LinkedIn</a>
                        <a href="https://x.com/_bello_Jnr" className={`${brutalBorder} bg-white px-6 py-2 hover:bg-black hover:text-white transition`}>Twitter</a>
                    </div>
                </div>

                <form 
                    className={`flex flex-col gap-6 p-8 md:p-12 w-full max-w-2xl bg-white ${brutalBorder} ${brutalShadow}`} 
                    action="https://formsubmit.co/ayodejibello769@gmail.com" 
                    method="POST" 
                >
                    <div className="flex flex-col gap-2">
                        <label className="font-bold uppercase">Name</label>
                        <input type="text" className={`w-full border-4 border-black p-4 font-bold outline-none focus:bg-[#FFDE00] transition`} placeholder='YOUR NAME' name="name" required />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="font-bold uppercase">Email</label>
                        <input type="email" className={`w-full border-4 border-black p-4 font-bold outline-none focus:bg-[#FFDE00] transition`} placeholder='YOUR EMAIL' name="email" required />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="font-bold uppercase">Message</label>
                        <textarea className={`min-h-40 border-4 border-black w-full p-4 font-bold outline-none focus:bg-[#FFDE00] transition`} placeholder='TELL ME ABOUT YOUR PROJECT...' name="message" required></textarea>
                    </div>

                    <button className={`w-full md:w-auto self-end px-8 py-4 ${brutalBorder} bg-black text-white font-black uppercase text-lg ${brutalShadow} ${brutalHover} flex items-center justify-center gap-2 cursor-pointer`}>
                        Send Message <ArrowUpRight />
                    </button>
                </form>
            </main >
            <Footer />
        </>
    )
}
export default Contact;