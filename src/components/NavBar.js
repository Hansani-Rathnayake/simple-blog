import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Post</Link></li>
        <li><Link to="/edit/1">Edit Post</Link></li> 
      </ul>
    </nav>
  );
};

export default NavBar;
