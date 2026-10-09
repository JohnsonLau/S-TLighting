import React from "react";
import './Testimonials.css';

import pharma from "../clients/ClientLogos/pharmasave.jpg";
import runnersden from "../clients/ClientLogos/runnersden.jpg";
import atlas from "../clients/ClientLogos/atlas.jpg";
import whistler from "../clients/ClientLogos/whistlerwater.jpg";
import CIMS from "../clients/ClientLogos/CIMS.png";


const Testimonials = () => {
    return (
        <section id='Testimonials'>
            <div className='content'>
                
               <span >
                <h1 className="testimonialsHeader">Testimonials</h1>
               </span>


                

<div className="projcard-container">
    <div className="projcard projcard-orange">
      <div className="projcard-innerbox">
        <img className="projcard-img" src={pharma} alt="pharmasave logo"/>
        <div className="projcard-textbox">
          <div className="projcard-title">Pharmasave</div>
          <div className="projcard-subtitle">Brad Fenton - Store Manager </div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">"Thanks Wing, the owner of S & T Lighting and his team, they completed the job fast, professional, reliable, and very comfortable to work with, highly recommend to any business for LED lighting upgrade."</div>
        </div>
      </div>
    </div>
    
    <div className="projcard projcard-green">
      <div className="projcard-innerbox">
        <img className="projcard-img" src={runnersden} alt="runners den logo" />
        <div className="projcard-textbox">
          <div className="projcard-title">The Runners Den</div>
          <div className="projcard-subtitle">Paul - Owner</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">"When S & T Lighting presented their proposal for the LED light upgrading for our store, it seemed the same as others, but I decided to go with them. Now it has been 4 years, I am so glad for my decision, we saved a lot of money on our Hydro bill, and also provided excellent service."</div>
        </div>
      </div>
    </div>
    
    <div className="projcard projcard-red">
      <div className="projcard-innerbox">
        <img className="projcard-img" src={atlas} alt="atlas logo"/>
        <div className="projcard-textbox">
          <div className="projcard-title">Atlas Roofing</div>
          <div className="projcard-subtitle">Bryan - Plant Engineer</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">"I would highly recommend any light upgrading project with Wing / S & T Lighting. There are many reasons: No.1 on the list was service, Wing excelled in determining what I needed and when.
            No.2 was his ability to provide me with all the bulbs and fixtures in timeframe sooner than all other vendors. No.3 was his costing. Not only did he astound with pricing but also simplified what savings I could expect, in easy to understand terms. No.4 was flexibility. We encountered a situation where the person doing the task quit. Wing was able to fill the gap with staff so the job was completed on time, and within budget."</div>
        </div>
      </div>
    </div>
    
    <div className="projcard projcard-blue">
      <div className="projcard-innerbox">
        <img className="projcard-img" src={whistler} alt="whistler water logo"  />
        <div className="projcard-textbox">
          <div className="projcard-title">Whistler Water</div>
          <div className="projcard-subtitle">Lena - Owner</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">"S & T Lighting's service was a godsend. Just when we were in desperate need of upgrading our lighting for the annual certification program and we were short of funds, Wing and his team passed by our building and came in with an amazing proposal. They are well-versed in the BC Hydro incentive program and helped us secure the much needed fund, and we were able to complete the big project with minimal investment. Now our whole plant is so bright, and our hydro bills are less! We can't say enough how grateful we are to have had S & T Lighting's help. They have a wonderful team, provide prompt, most cost-effective and professional services. You don't want to try another company. They are probably not a huge company. But they are the best!"</div>
          <div className="projcard-tagbox">
          </div>
        </div>
      </div>
    </div>

    <div className="projcard projcard-grey">
      <div className="projcard-innerbox">
        <img className="projcard-img" src={CIMS} alt="CIMS"/>
        <div className="projcard-textbox">
          <div className="projcard-title">CIMS</div>
          <div className="projcard-subtitle">Herb - Company President </div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">"S & T Lighting provided honest and professional work for our building lighting upgrade, they started with a free quotation with a very fair price, and assist us to get incentives from BC Hydro for the project. I am so impressed with their excellent service. I am happy to be their reference."</div>
        </div>
      </div>
    </div>
    
  </div>
  
  

            </div>
        </section>
    );
}

export default Testimonials;