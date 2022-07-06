import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="Nav">
                <ul>
                     <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/service">Service</Link>  </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login" >Login</Link></li>
                    <li><Link to="/userData">UserData</Link></li>
                </ul>
            </div>
        );
    }

}

export default Navbar;