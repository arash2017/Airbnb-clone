import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>Airbnb Clone</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Listings</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
