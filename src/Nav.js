import React from "react";
import {ReactComponent as Logo} from './media/Logo1.svg'
function Nav() {
    return (
        <nav>
          <Logo id="nav-logo" /> {/* Add a className for styling */}
          <ul className="nav-list">
            <li className="nav-list-item"><a href="#home">Home</a></li>
            <li className="nav-list-item"><a href="#about">About</a></li>
            <li className="nav-list-item"><a href="#menu">Menu</a></li>
            <li className="nav-list-item"><a href="#reservations">Reservations</a></li>
            <li className="nav-list-item"><a href="#order-online">Order Online</a></li>
            <li className="nav-list-item"><a href="#login">Login</a></li>
          </ul>
        </nav>
      );
    }
    
    export default Nav;
