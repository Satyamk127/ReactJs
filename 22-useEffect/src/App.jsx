import { useEffect } from "react";
import { useState } from "react";

const App=()=>{

  const [count,setCount]= useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setCount(pros=> pros+1)
    },2000)
  },[])
  return (
    <>
    <h1>This is the {count} Increse by one</h1>

    </>
  );
}
export default App;