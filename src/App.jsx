import { useState } from 'react'
import './App.scss'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import AboutMe from './Components/AboutMe/AboutMe'
import Contac from './Components/Contac/Contac'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />
      <main>
        <Home />
        <Skills />
        <AboutMe />
        <Contac />
      </main>
      <Footer />
    </>
  )
}

export default App
