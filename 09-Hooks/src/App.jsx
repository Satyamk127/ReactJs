import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
// useStateSnippet
function App() {
       // read   write
  const [first, setfirst] = useState(0)
  function click(){
    setfirst(first + 1)
  }

  return (
    <>
      <h1>This is the first Number: {first}</h1>
      <button onClick={click}>change Number</button>
        
    </>
  )
}

export default App
