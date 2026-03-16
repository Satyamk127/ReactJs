import { useState } from "react";

const App=()=>{
   const [car,setValue] = useState({
      brand:"Ferrari",
      color:"red",
      model:"Roma",
      year:"2023"
    });
    const changeColor=()=>{
      setValue((car) =>{
        return{...car , color: "blue",year:"2024"}
      })

    }

  return (
    <>
    <h1>My {car.brand}</h1>
    <h2>It is a {car.color } {car.model} from {car.year}</h2>
    <button onClick={changeColor}>Blue</button>


    </>
  );
}
export default App;