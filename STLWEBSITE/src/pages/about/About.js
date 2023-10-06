import React from "react";
import './About.css';

const About = () => {
    return (
        <section className="About">
            <div className='aboutContent'>
                <h1>Services</h1>
               <ul>
                <li className="services">Free Onsite Lighting Audit</li>
                <li className="services">Free Quotation</li>
                <li className="services">Free Assisting for Incentive Approval</li>
                <li className="services">Free Lighting Payback Calculator</li>
                
               </ul>
            </div>
        </section>
    );
}

export default About;