import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  // const [first, setfirst] = useState([10,20,30,40,50])
  // function change(){
  //   setfirst([...first,60])
  //   setfirst([...first,80])
  // }
  const [num, set] = useState({ name:"Satyam keshari" , age:21})
  
  const change = () =>{
    const newNum = {...num};
    newNum.name = "Ritik Kumar";
    newNum.age = 22;
    set(newNum);

  }

  return (
    <>
     <h1>Hello world <br /> My Name is {num.name} <br />   I Am {num.age} year's old </h1>
     <button onClick={change}>Change me</button>
     
     

    </>
  )
}

export default App
