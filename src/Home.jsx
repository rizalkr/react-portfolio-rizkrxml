import About from './components/About'
import Client from './components/Client'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portofolio'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Client />
            <Contact />
            <Footer />
        </>
    )
}
