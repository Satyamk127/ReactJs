
import SchoolInfo from "./comp/SchoolInfo";
import HighSchool from "./comp/HighSchool";
import Collage from "./comp/Collage";
import {  Routes, Route } from "react-router-dom";
import Nav from "./comp/Nav";


const App = () => {
  return (

    <>
      <h1>Welcome to My Satyam Keshari</h1>

      <p>phone 9264929875&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: <a href="">satyamkumarkeshari358@gmail.com</a></p>
      <Nav />
        <Routes>
          <Route path="/schoolinfo" element={<SchoolInfo />} />
          <Route path="/highschool" element={<HighSchool />} />
          <Route path="/collage" element={<Collage />} />
        </Routes>


      <p>This is My Protfolio</p>
     
     

    </>
  );
}
export default App;
