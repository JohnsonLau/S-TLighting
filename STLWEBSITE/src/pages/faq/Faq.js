import React from "react";
import './Faq.css';

const FAQ = () => {
  const faqItems = [
    "Better Energy Usage And Long Life Span Of Minimum Of 50,000 Hours",
    "Reduced Heat Output, Which Saves Money On Cooling Costs",
    "Brighter Facilities Means Safer Facilities",
    "A Well Lit Space Significantly Reduces Heavy Equipment Accidents, Losses And Damages To The Property",
    "Reduced Maintenance Costs Since LEDs Last Much Longer",
    "Zero UV Emission, Better For Eyes",
    "Upgrading Into LED For Better Light, The Cost Will Be Paid Back By Itself"
  ];

  return (
    <section id='FAQ'>
      <div className='content'>
        <h1 className="faqHeader">Benefits of LED Lighting</h1>
        <ul className="faqList">
          {faqItems.map((item, index) => (
            <li key={index} className="faqItem">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;