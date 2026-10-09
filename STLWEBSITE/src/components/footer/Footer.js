import React from "react";
import bchydro from "../../images/bchydro.png";
import './footer.css';

const Footer = () => {
    return(
        <div className="footer">
            S & T Lighting © 2026 | Proudly Partnered with 
           <img className="footerImg" src = {bchydro} alt="footerlogo"  /> 
       </div> 
        
    );
}

export default Footer;