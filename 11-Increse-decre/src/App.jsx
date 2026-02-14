import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  function Increse(){
    setCount(count + 1);
  }
  function Decrese(){
    setCount(count - 1);
  }
  function IncreseBy5(){
    setCount(count + 5);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increse}>Increse</button>
      <button onClick={Decrese} >Decrese</button>
      <button onClick={IncreseBy5} >Increse by 5</button>
    </>
  )
}

export default App
