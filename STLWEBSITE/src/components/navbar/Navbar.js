import React, { useState } from "react";
import { Link } from "react-scroll";
import './navbar.css'
import stlogo from '../../images/stlogo.png';
import contact from '../../images/contact.png';
import hamburger from './menu.png';

const Navbar = () => {
  
  const[showMenu, setShowMenu] = useState(false);

  return(
    
        <nav className="navbar">
          <img src={stlogo} alt="stlightinglogo" className="logo" />
        <div className="nav-links">
          <Link activeClass="active" to="about" className="linkItem" spy={true} smooth={true} offset={-100}>About Us</Link>
          <Link activeClass="active" to="FAQ" className="linkItem" spy={true} smooth={true} offset={-50}>FAQ</Link>
          <Link activeClass="active" to="Products" className="linkItem" spy={true} smooth={true} offset={-50}>Line Cards</Link>
          <Link activeClass="active" to="Testimonials" className="linkItem" spy={true} smooth={true} offset={-50}>Testimonials</Link>
          <Link activeClass="active" to="contactPage" className="linkItem" spy={true} smooth={true} offset={-50}>Clients</Link>
          <a  activeClass="active" className="linkItem" href="https://www.mynaturaled.com/casestudy.html" target="_blank" rel="noreferrer">

          Case Study
          </a>
        </div>

        <button className="contactButton" onClick={ () => {
          document.getElementById('contact').scrollIntoView({behavior : 'smooth'}); 
        }}>
          <img src={contact} alt="contactus" className="contactImg" />
          Contact Us
        </button>

        <img src={hamburger} alt="mobileMenu" className="hamburgerMenu" onClick={()=>setShowMenu(!showMenu)}/>
        <div className="mobMenu" style={{display: showMenu? 'flex' : 'none'}}>
          <Link activeClass="active" to="about" className="linkItemMobile" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(!showMenu)}>About Us</Link>
          <Link activeClass="active" to="FAQ" className="linkItemMobile" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(!showMenu)}>FAQ</Link>
          <Link activeClass="active" to="Products" className="linkItemMobile" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(!showMenu)}>Line Cards</Link>
          <Link activeClass="active" to="Testimonials" className="linkItemMobile" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(!showMenu)}>Testimonials</Link> 
         <Link activeClass="active" to="Clients" className="linkItemMobile" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(!showMenu)}>Clients</Link>
         <a  activeClass="active" className="linkItemMobile" href="https://www.mynaturaled.com/casestudy.html" target="_blank" rel="noreferrer">

          Case Study
          </a>
        </div>

        </nav>
        
      

    );
}

export default Navbar;
