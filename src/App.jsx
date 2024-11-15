import './App.css'
import Navbar from './navbar'
import Footer from './footer'
import Hero from './hero'
import Packages from './packages'
import Faqs from './faqs'
import About from './about'
import Quote from './quote'

function App() {
  return (
    <>
      <Navbar/>
      <br /><br /><br />
      <Hero/>
      <About/>
      <br />
      <Packages/>
      <br />
      <Quote/>
      <br />
      <Faqs/>
      <br /><br />
      <Footer/>
    </>
  )
}

export default App
