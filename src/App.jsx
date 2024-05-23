import { useState } from 'react'
import './App.scss'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import AboutMe from './Components/AboutMe/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />
      <main>
        <Home />
        <AboutMe />
      </main>
    </>
  )
}

export default App
