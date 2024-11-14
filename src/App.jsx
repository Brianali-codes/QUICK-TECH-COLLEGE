import './App.css'
import Navbar from './navbar'
import Footer from './footer'
import Hero from './hero'
import Services from './services'
import Packages from './packages'
import Faqs from './faqs'

function App() {
  return (
    <>
      <Navbar/>
      <br /><br />
      <Hero/>
      <Services/>
      <Packages/>
      <br />
      <Faqs/>
      <br /><br />
      <Footer/>
    </>
  )
}

export default App
