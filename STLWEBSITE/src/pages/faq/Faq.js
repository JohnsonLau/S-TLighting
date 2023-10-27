
import React, {useState} from "react";
import './Faq.css';

const FAQ = () => {
   
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    const faqData = [
      {
        question: "I'm an end-customer, can you purchase products directly from you?",
        answer: "Yes.  We sell directly to end-customer.",
      },
      {
        question: "Do you take credit card or debit card for payment?",
        answer: "No. We only take cash or cheque upon product delivery.",
      },
      {
        question: "Do you know about the BC Hydro Incentive program, and how to apply for it?",
        answer: "Yes.  We are BC Hydro Alliance of Energy Professional.  We have assisted hundreds commercial customers to apply for the incentives.",
      },
      {
        question: "Do you take credit card or debit card for payment?",
        answer: "Unfortunately, we only take cash or cheque upon product delivery.",
      },
      {
        question: "Does the lighting product come with warranty?",
        answer: "Yes, warranty is provided by the lighting manufacturer.",
      },
    ];
   
    return (
        <section id="FAQ">
          <h1 className="faqHeader">Frequently Asked Questions</h1>
    
          {faqData.map((faq, index) => (
            <div key={index}>
              <button
                className={`accordion ${index === activeIndex ? "active" : ""}`}
                onClick={() => toggleAccordion(index)}>
                {faq.question}
              </button>
              <div className={`panel ${index === activeIndex ? "open" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </section>
      );
    };
    
    export default FAQ;
  