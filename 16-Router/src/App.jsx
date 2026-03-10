
import React from 'react';
import Nav from './Comp/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/sec-1" element={<h1>Section 1</h1>} />
          <Route path="/sec-2" element={<h1>Section 2</h1>} />
          <Route path="/sec-3" element={<h1>Section 3</h1>} />
        </Routes>
      </BrowserRouter>

    </>

  );
}
export default App;