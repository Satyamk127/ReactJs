import { useState } from "react";

const App=()=>{
  // let name ="satyam";
  // function change(){
  //   name="shivam";
  //    console.log(name);
  // }
  const [name, setValue] = useState("Satyam");
  const change=()=>{
    setValue("ram");

  }
  
 
  

  return (
    <>
    <h1>I Studies useState</h1>
    

    <h2>Hello My name is {name}</h2>
    <button onClick={change}>change_Name</button>
    <button></button>


    </>
  );

}

export default App;