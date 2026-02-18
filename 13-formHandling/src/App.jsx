import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const  submithander =(e) =>{
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <>
      <form  onSubmit={(e)=>{ 
        submithander(e)} 
        }>
        <input type="text" name=""  placeholder="Enter your name here " />
        <button> sumbmit here</button>
      </form>
    </>
  )
}

export default App
