import './App.css'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Navbar from './components/NavBar'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Experience/>
      <Portfolio/> 
      <Contact/>
    </div>
  )
}

export default App
