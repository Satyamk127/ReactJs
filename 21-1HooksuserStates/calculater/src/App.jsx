import { useState } from "react";

const App = () => {
  const [count , setCount] = useState(0);
  function decrese(){
    setCount(count-1);
  }
  function Increse(){
    setCount(count+1);
  }
  function Infour(){
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);
  }
  return (

    <div style={{textAlign:'center', margin:'40vh'}}>
      <button onClick={decrese}>-</button>
      <h1>{count}</h1>
      <button onClick={Increse}>+</button>
      <button onClick={Infour}>Increse By 4</button>
    </div>



  );

}
export default App;
