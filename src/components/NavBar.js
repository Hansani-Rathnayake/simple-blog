import { Link } from "react-router-dom";
import Logo from "./../assets/logo.png"

const NavBar = () => {
  return (
    <nav className="nav-bar-wrapper">
        <ul className="logo-section">
            <li>
                <img src={Logo}/>
            </li>
        </ul>
      <ul className="nav-item-section">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Post</Link></li>
        <li><Link to="/edit/1">Edit Post</Link></li> 
      </ul>
    </nav>
  );
};

export default NavBar;
