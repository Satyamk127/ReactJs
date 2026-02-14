import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [name, setName] = useState('John Doe')
  function change(){
    setName("Satyam keshari");
  }

  return (
    <>
      <h1>Hello My Name Is {name}</h1>
      <button onClick={change}>Change Name</button>
    </>
  )
}

export default App
