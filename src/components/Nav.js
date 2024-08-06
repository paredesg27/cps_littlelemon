import React, { useState } from "react";
import { ReactComponent as Logo } from '../media/Logo1.svg'
import { ReactComponent as HamburgerIcon } from '../media/icon_hamburger_menu.svg'
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/"><Logo className="nav-logo" alt="Little Lemon Logo" /></a>

      {/* mobile icon*/}
      <HamburgerIcon className="mobile-nav-icon" alt="nav menu icon for mobile" onClick={toggleMenu} />
      {/* nav items */}
      <ul className={`nav-list ${menuOpen ? "visible" : ""}`}>
        <li className="nav-list-item"><a href="/">Home</a></li>
        <li className="nav-list-item"><a href="/about">About</a></li>
        <li className="nav-list-item"><a href="/menu">Menu</a></li>
        <li className="nav-list-item"><a href="/reservations">Reservations</a></li>
        <li className="nav-list-item"><a href="/order-online">Order Online</a></li>
        <li className="nav-list-item"><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
