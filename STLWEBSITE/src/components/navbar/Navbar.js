import React, { useState } from "react";
import { Link } from "react-scroll";
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
          <Link activeClass="active" to="about" className="linkItem" spy={true} smooth={true} offset={-100}>About Us</Link>
          <Link activeClass="active" to="Gallery" className="linkItem" spy={true} smooth={true} offset={-100}>Gallery</Link>
          <Link activeClass="active" to="FAQ" className="linkItem" spy={true} smooth={true} offset={-50}>LED Benefits</Link>
          <Link activeClass="active" to="Products" className="linkItem" spy={true} smooth={true} offset={-50}>Line Cards</Link>
          <Link activeClass="active" to="Testimonials" className="linkItem" spy={true} smooth={true} offset={-50}>Testimonials</Link>
          <Link activeClass="active" to="contactPage" className="linkItem" spy={true} smooth={true} offset={-50}>Clients</Link>
          <a  activeClass="active" className="linkItem" href="https://naturaled.com/resources/case-studies/" target="_blank" rel="noreferrer">

          Case Study
          </a>
        </div>

        <button className="contactButton" onClick={ () => {
          document.getElementById('contact').scrollIntoView({behavior : 'smooth'}); 
        }}>
          <img src={contact} alt="contactus" className="contactImg" />
          Contact Us
        </button>

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
          <Link activeClass="active" to="about" className="linkItemMobile" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(!showMenu)}>About Us</Link>
          <Link activeClass="active" to="Gallery" className="linkItemMobile" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(!showMenu)}>Gallery</Link>
          <Link activeClass="active" to="FAQ" className="linkItemMobile" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(!showMenu)}>FAQ</Link>
          <Link activeClass="active" to="Products" className="linkItemMobile" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(!showMenu)}>Line Cards</Link>
          <Link activeClass="active" to="Testimonials" className="linkItemMobile" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(!showMenu)}>Testimonials</Link> 
         <Link activeClass="active" to="Clients" className="linkItemMobile" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(!showMenu)}>Clients</Link>
         <button
           className="linkItemMobile"
           type="button"
           onClick={() => {
             document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
             setShowMenu(false);
           }}
         >
           Contact Us
         </button>
         <a  activeClass="active" className="linkItemMobile" href="https://naturaled.com/resources/case-studies/" target="_blank" rel="noreferrer">

          Case Study
          </a>
        </div>

        </nav>
        
      

    );
}

export default Navbar;
