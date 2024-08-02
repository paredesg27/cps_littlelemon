import React from "react";
import { Link } from 'react-router-dom';
import HeaderImage from './media/restauranfood.jpg'
function Header(){
    return(
        <header className="header">
            <section className="header-section">
                <div className="header-banner">
                    <h2>
                        Little Lemon
                    </h2>
                    <h3>
                        Chicago
                    </h3>
                    <p>
                        We are a family owned Mediterranean restaurant, 
                        focused on traditional recipes erved with a modern twist.
                    </p>
                    <Link to="/booking"><button aria-label="On Click"> Reserve a Table</button></Link>
                </div>
                <div className="header-image">
                    <img src={HeaderImage} alt ="Sample dish image"></img>
                </div>
            </section>
        </header>
    )
}export default Header;
