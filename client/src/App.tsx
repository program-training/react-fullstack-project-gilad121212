import { useState } from 'react'
import { Token } from './contex.tsx/token'
import Home from './componnet/HomePage'
import Trips from './componnet/Trips'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Token>
  <Home></Home> 
  </Token>
 
    </>
  )
}

export default App
