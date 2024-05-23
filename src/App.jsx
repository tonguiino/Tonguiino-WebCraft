import { useState } from 'react'
import './App.scss'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import AboutMe from './Components/AboutMe/AboutMe'
import Contac from './Components/Contac/Contac'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />
      <main>
        <Home />
        <AboutMe />
        <Contac />
      </main>
    </>
  )
}

export default App
