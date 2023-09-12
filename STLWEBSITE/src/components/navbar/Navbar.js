import React from "react";
import './navbar.css'

const Navbar = () => {
    return(
        <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          
            S&T Lighting
          
        
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#About" className="mr-5 hover:text-white">
            About Us
          </a>
          <a href="#FAQ" className="mr-5 hover:text-white">
            FAQ
          </a>
          <a href="#Contacts" className="mr-5 hover:text-white">
            Contact Us
          </a>
          <a href="#Products" className="mr-5 hover:text-white">
            Products
          </a>
          <a href="#Clients" className="mr-5 hover:text-white">
            Clients
          </a>
          <a href="#Testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
          <a href="#Casestudy" className="mr-5 hover:text-white">
            Case Studies
          </a>
        </nav>
        
      </div>
    </header>
    );
}

export default Navbar;