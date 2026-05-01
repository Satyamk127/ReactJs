import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("hello incapp");
  },[count]);
// count per rerender hoga
  return (
    <>
      <h1>count: {count}</h1>
      <br />
      <button onClick={() => {
        setCount(count + 1);
      }}>Increse by 1</button>


    </>
  )
}

export default App
