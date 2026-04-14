import Hero from './sections/hero'
import About from './sections/about'
import Stacks from './sections/stacks'
import Experience from './sections/experience'
import Project from './sections/project'
import Services from './sections/services'
import Reel from './sections/reel'
import Contact from './sections/contact'
import Sidebar from './components/sidebar'
import Footer from './components/footer'

function App() {
  return (
    <div className='overflow-hidden'>
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="stacks"><Stacks /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Project /></div>
      <div id="services"><Services /></div>
      <div id="reel"><Reel /></div>
      <div id="contact"><Contact /></div>
      
      {/* Fixed Sidebar visible everywhere */}
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App
