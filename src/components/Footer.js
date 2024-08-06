import React from "react";
import Logo  from '../media/MarioandAdrianA.jpg'; // Importing logo


function Footer() {
  return (
    <footer>
     <section>
      <div className="company-info">
        <img src={Logo} alt=""/>
        <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist</p>
      </div>
      <div>
        <h3>
          Important Links
        </h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/">Reservation</a></li>
          <li><a href="/">Order Online</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li><span className="contact-items">Address:</span> 112 NameTown, USA</li>
          <li><span className="contact-items">Phone: </span> 123-456-7890</li>
          <li><span className="contact-items">Email: </span> LittleLemon@Lemon.com</li>
        </ul>
      </div>
     </section>
    </footer>
  );
}

export default Footer;