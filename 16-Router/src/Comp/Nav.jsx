import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/sec-1">Section 1</Link>
      <Link to="/sec-2">Section 2</Link>
      <Link to="/sec-3">Section 3</Link>
    </nav>
  );
}

export default Nav;
