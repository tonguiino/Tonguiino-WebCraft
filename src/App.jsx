import { useState } from 'react'
import './App.scss'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />
      <main>
      <Home/>
      
      </main>
    </>
  )
}

export default App
