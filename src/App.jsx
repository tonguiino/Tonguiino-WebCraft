import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './Components/Header/Header'
import AboutUs from './Components/Home/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />
      <main>
      <AboutUs />
      </main>
    </>
  )
}

export default App
