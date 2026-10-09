import React, { useState } from "react";
import './navbar.css'
import stlogo from '../../images/stlogo.png';
import contact from '../../images/contact.png';

const Navbar = () => {
  
  const[showMenu, setShowMenu] = useState(false);

  return(
    
        <nav className="navbar">
          <div className="logoMark">
            <img src={stlogo} alt="stlightinglogo" className="logo" />
          </div>
        <div className="nav-links">
            <a href="#about" className="linkItem">About Us</a>
            <a href="#Gallery" className="linkItem">Gallery</a>
            <a href="#FAQ" className="linkItem">LED Benefits</a>
            <a href="#Products" className="linkItem">Line Cards</a>
            <a href="#Testimonials" className="linkItem">Testimonials</a>
            <a href="#Clients" className="linkItem">Clients</a>
          <a className="linkItem" href="https://naturaled.com/resources/case-studies/" target="_blank" rel="noreferrer">

          Case Study
          </a>
        </div>

        <a className="contactButton" href="#contact">
          <img src={contact} alt="contactus" className="contactImg" />
          Contact Us
        </a>

        <button
          className="mobileMenuButton"
          type="button"
          aria-label={showMenu ? "Close menu" : "Open menu"}
          aria-expanded={showMenu}
          aria-controls="mobile-navigation"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="hamburgerIcon" aria-hidden="true" />
        </button>
        <div id="mobile-navigation" className="mobMenu" style={{display: showMenu? 'flex' : 'none'}}>
          <a href="#about" className="linkItemMobile" onClick={() => setShowMenu(false)}>About Us</a>
          <a href="#Gallery" className="linkItemMobile" onClick={() => setShowMenu(false)}>Gallery</a>
          <a href="#FAQ" className="linkItemMobile" onClick={() => setShowMenu(false)}>FAQ</a>
          <a href="#Products" className="linkItemMobile" onClick={() => setShowMenu(false)}>Line Cards</a>
          <a href="#Testimonials" className="linkItemMobile" onClick={() => setShowMenu(false)}>Testimonials</a>
          <a href="#Clients" className="linkItemMobile" onClick={() => setShowMenu(false)}>Clients</a>
          <a href="#contact" className="linkItemMobile" onClick={() => setShowMenu(false)}>Contact Us</a>
         <a className="linkItemMobile" href="https://naturaled.com/resources/case-studies/" target="_blank" rel="noreferrer">

          Case Study
          </a>
        </div>

        </nav>
        
      

    );
}

export default Navbar;
