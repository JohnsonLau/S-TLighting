import React from "react";
import './About.css';

const About = () => {
    return (
     
            <div className='about'>
                <h1 className="aboutHeader">About Us</h1>
                <p className="aboutText">
        S & T Lighting is a local distributor of quality commercial lighting products. In over 13 years, we have supplied customers throughout the Vancouver lower mainland with quality products and good pricing. All products are selected to meet your business needs. With the quality products and excellent services, we keep gaining repeat and referral customers. S & T Lighting is also a BC Hydro Power Smart Alliance Professional and has done over hundreds of projects and keeps on adding. BC Hydro Power Smart program offers incentives for commercial and industrial lighting upgrades to reduce energy costs and is also great for the environment. When you upgrade your lights by purchasing directly from us or applying for eligible BC Hydro incentives, give us a call, and we will assist you on how to easily transition from inefficient lighting to better, brighter, high-efficiency, and long-lasting lighting for your business.
      </p>

      <h2>What makes us different?</h2>
      <ul className="servicesListWrapper">
        <li className="serviceList">We offer the best and honest price for your lighting project.</li>
        <li className="serviceList">Highly professional, licensed, and certified team, also a BC Hydro alliance team to do your lighting project.</li>
        <li className="serviceList">All products are of high quality provided by Canadian and US manufacturers.</li>
        <li className="serviceList">We are gaining customers from word of mouth and supported by many of our customers' testimonials.</li>
      </ul>

      <p className="aboutText">
        Every great lighting upgrade is a project of quality job. Don't settle for less when you can have the best. Let our team of experts transform your simple needs into the best lighting new looks you can ever imagine for your business.
      </p>
    </div>
          
       
    );
}

export default About;