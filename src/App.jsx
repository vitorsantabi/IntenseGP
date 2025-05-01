import { useState } from 'react'
import './App.css'
import logo from "./assets/logo.gif";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img src={logo} className="logo" alt="logo" />
      
      </header>
    </>
  )
}

export default App
