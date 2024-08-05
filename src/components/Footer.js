import React from "react";
import Logo  from './media/MarioandAdrianA.jpg'; // Importing logo


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        <img src={Logo} alt="Little Lemon Owners" className="footer-logo" width={100} height={100}/>
        </div>
        <div className="footer-info">
          <section className="footer-about">
          <ul className="footer-list">
            <li className="footer-list-item"><a href="#home">Home</a></li>
            <li className="footer-list-item"><a href="#about">About</a></li>
            <li className="footer-list-item"><a href="#menu">Menu</a></li>
            <li className="footer-list-item"><a href="#reservations">Reservations</a></li>
            <li className="footer-list-item"><a href="#order-online">Order Online</a></li>
            <li className="footer-list-item"><a href="#login">Login</a></li>
          </ul>
          </section>
          <section className="footer-contact">
            <h2>Contact Us</h2>
            <p>123 Main Street, City, Country</p>
            <p>Email: contact@littlelemon.com</p>
            <p>Phone: (123) 456-7890</p>
          </section>
          <section className="footer-social">
            <h2>Follow Us</h2>
            <ul>
              <li><a href="https://facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </section>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;