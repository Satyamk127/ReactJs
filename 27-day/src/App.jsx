import { useRef } from 'react'

function App() {
  const inputref = useRef(null);

  const handleClick = () => {
    inputref.current.focus(); // ✅ correct
  };

  
    const countRef = useRef(0);

    const increment = () => {
      countRef.current++;
      console.log(countRef.current);
    };

    return (
      <>
        <input type="text" ref={inputref} />
        <button onClick={handleClick}>Focus Input</button>
      

        <button onClick={increment}>Click</button>;
      </>
    );
  }

  export default App;