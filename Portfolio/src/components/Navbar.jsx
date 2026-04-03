import { Link } from 'react-router-dom'
function f1(){
    var h=document.getElementById("home-link");
    h.style.display="inline";
}
function f2(){
    var h=document.getElementById("home-link");
    h.style.display="none";
}
const Navbar=()=>{

    return (
        <nav className="bg-dark text-white py-2 px-5">
           <Link to='/school' className="text-white text-decoration-none me-3" onClick={f1}>School</Link>
           <Link to='/college' className="text-white text-decoration-none me-3" onClick={f1}>College</Link>
           <Link style={{display:'none'}} id='home-link' to='/' className="text-white text-decoration-none me-3" onClick={f2}>Home</Link>
        </nav>
    );
}
export default Navbar;