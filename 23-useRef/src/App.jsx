import { useEffect, useRef, useState } from "react";

const App = () => {
  const inputElem =useRef();
  const [value, setCount]= useState(0);
  const btnClick =()=>{
    console.log(inputElem.current);
    inputElem.current.style.background= "blue" ;
  }

    const count =useRef(0);
    useEffect(()=>{
      count.current=count.current+1;
    })

  return (
    <div style={{textAlign:'center', margin:'30vh'}}>
      <div >
      <button onClick={()=>{setCount((pros)=>pros-1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={()=>{setCount((pros)=>pros+1)}}>+1</button>
      <h2>Render Count is  {count.current} </h2>
    </div>
    <div tyle={{textAlign:'center', margin:'30vh'}}>
      <input type="text" name="" id="" ref={inputElem} />
      <button onClick={btnClick}>click Here</button>
    </div>
    </div>
  );
}
export default App;