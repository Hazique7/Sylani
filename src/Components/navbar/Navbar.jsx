import { Link, Routes } from "react-router-dom";
import Login from "../login/login";
import { Route } from "react-router-dom";
// import Signup from '../signup/Signup'
import "./navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="">CART</Link>
          </li>
          <li>
            <Link>ACCOUNT </Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </nav>

     
    </div>
  );
}
export default Navbar;
