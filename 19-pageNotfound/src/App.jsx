import { Routes, Route } from 'react-router-dom'
import Contact from './Contact';
import Home from './Home';
import About from './About';
import NotfoundPage from './NotfoundPage';

const App = () => {
  return (
    <>
      <h1>This is the My first Page of the react </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotfoundPage />} />

      </Routes>



    </>
  );
}
export default App;
