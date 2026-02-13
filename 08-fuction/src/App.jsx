import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// function click() {
//   console.log("Button clicked successfully");
// }
// function Double() {
//   alert("Double Clicked");
// }

function App() {


  return (
    <>
      {/* <button onClick={click} >Click Me</button> <br /><br />
      <button onDoubleClick={function(){
        alert("Double Clicked");
      }}>Double Click me </button> */}

      {/* <div  onMouseMove={(ele)=>{
        console.log(ele.clientY);
      }} className='box'>

      </div> */}

      <div onWheel={(ele)=>{
        console.log(ele.deltaY);
       

     
     }}>
        <div className='box'>div1</div>
        <br /><br />
        <div className='box'>div2</div>
        <br /><br />
        <div className='box'>div3</div>

      </div>
    </>
  )
}

export default App
