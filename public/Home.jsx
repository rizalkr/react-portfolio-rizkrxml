import About from '../src/components/About'
import Client from '../src/components/Client'
import Contact from '../src/components/Contact'
import Hero from '../src/components/Hero'
import Navbar from '../src/components/Navbar'
import Portfolio from '../src/components/Portofolio'
import Projects from '../src/components/Projects'
import Footer from '../src/components/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Client />
            <Contact />
            <Footer/>
        </>
    )
}
