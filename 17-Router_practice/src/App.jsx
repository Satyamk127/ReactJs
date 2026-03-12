import { Routes,Route } from "react-router-dom";
import Home from "./Comp/Home";
import About from "./Comp/About";
import Index from "./Comp/Index";
import Nav from "./Comp/Nav";
import "./Comp/header.css";
function App(){
  return(
    <>
       <Nav/>
    <Routes>
   
      <Route path="/" element={<Home/>} />
      <Route path='/about'   element={<About/>}/>
      <Route path='/index'   element={<Index/>}/>
      </Routes>
    </>
  );
}
export default App;