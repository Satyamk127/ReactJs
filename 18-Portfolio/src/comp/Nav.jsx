import { Link } from "react-router-dom";

const Nav =() =>{
  return (
    <nav>
      <Link  to="/schoolinfo">school deatil</Link>
      <Link  to="/highschool">HighSchool</Link>
      <Link to="/collage">College Daitis</Link>
    </nav>
  );

}
export default Nav;