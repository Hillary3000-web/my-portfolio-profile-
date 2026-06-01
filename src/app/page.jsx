import Nav            from '../components/Nav'
import Hero           from '../components/Hero'
import About          from '../components/About'
import Ticker         from '../components/Ticker'
import Projects       from '../components/Projects'
import Infrastructure from '../components/Infrastructure'
import Contact        from '../components/Contact'
import Footer         from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Ticker />
        <Projects />
        <Infrastructure />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
