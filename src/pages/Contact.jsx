import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageWrap from '../components/PageWrap'
import { ArrowUpRight } from 'lucide-react'
const Contact = () => {
    return (<PageWrap>
        <Nav />
        <main className="flex flex-col gap-3 p-10 items-center min-h-screen">

            <h1 className='sm:text-3xl text-lg'>Get in touch</h1>
            <p className='text-sm'>Compose a message and send, or you can get to me through the social media links below:</p>
            <div className="flex gap-5 text-sm">
                <a href="wa.link/vgjw6q">whatsapp</a>
                <a href="https://www.linkedin.com/in/abdullah-abdulfatai-9b8a0b2b3/">linkedIn</a>
                <a href="https://x.com/_bello_Jnr">twitter</a>
            </div>
            <form className="flex flex-col gap-4 p-10 items-center md:w-1/2 sm:w-2/3 w-full" action="https://formsubmit.co/ayodejibello769@gmail.com" method="POST" >
                <input type="text" className='w-full border-b outline-none p-2' placeholder='Name'
                    name="name" />
                <input type="email"
                    name="email" className='w-full border-b outline-none p-2' placeholder='Email' />
                <textarea className='min-h-40 border-b w-full p-2' placeholder='Your message' name="message"></textarea>
                <button className="px-6 py-2 border flex items-center gap-2 bg-neutral-900 text-white rounded-lg text-sm self-end cursor-pointer">
                    just send <ArrowUpRight />
                </button>
            </form>
        </main >
        <Footer />
    </PageWrap>)
}
export default Contact;