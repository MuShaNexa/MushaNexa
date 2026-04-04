import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import OurWork from './components/OurWork'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import WorkProcess from './components/WorkProcess'

const page = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      {/* <WorkProcess /> */}
      {/* <OurWork /> */}
      {/* <Testimonial /> */}
      {/* <Contact /> */}
    </main>
  )
}

export default page