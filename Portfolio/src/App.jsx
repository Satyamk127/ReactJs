import Header from "./components/Header";
import Navbar from "./components/Navbar";
import School from "./components/School";
import College from "./components/College";
import Content from "./components/Content";
import Home from "./components/Home";
import { PhotoContext } from "./PhotoContext";
import { Routes, Route } from 'react-router-dom';
import pic from './assets/p1.jpg'


const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <PhotoContext.Provider value={pic}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/school' element={<School />} />
          <Route path='/college' element={<College />} />
        </Routes>
      </PhotoContext.Provider>

      <Content />


    </>
  );
}

export default App;