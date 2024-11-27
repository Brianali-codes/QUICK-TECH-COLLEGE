import './App.css'
import Navbar from './navbar'
import Footer from './footer'
import Hero from './hero'
import Packages from './packages'
import Faqs from './faqs'
import About from './about'
import Quote from './quote'
import Sources from './sources'
import AboutUs from './aboutUs'
import Vision from './vision'

function App() {
  return (
    <>
      <Navbar/>
      <p className='block text-transparent'>...</p>
      <Hero/>
      <About/>
      <br />
      <Packages/>
      <br />
      <AboutUs/>
      <br />
      <Quote/>
      <br />
      <Vision/>
      <Sources/>
      <br/>
      <Faqs/>
      <br /><br />
      <Footer/>
    </>
  )
}

export default App
