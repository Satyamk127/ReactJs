import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './Person';
const App=()=>{
  return (
    <>
    <h1 className="bg-danger p-3 text-white">Welcome to my Bootstrap Project </h1>
    <Person name='Satyam keshari'   />
     <Person name='Prabhakar Lal'   />

    </>
  );

}
export default App;