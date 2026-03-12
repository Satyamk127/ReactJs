import{ Link } from "react-router-dom";
import "./header.css";
export default function Nav() {
  return (
    <div className="nav">

      <div><h1><Link className="a" to='/'>Nav Bar</Link></h1></div>
      <div className="div">

        <ul>

          <li><Link className="a"  to="/">Home</Link></li>
          <li><Link className="a"  to="/index">Index</Link></li>
          <li><Link  className="a"  to="/about">About</Link></li>
        </ul>
       
       
      </div>
    </div>
  );
}