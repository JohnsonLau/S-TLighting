
import React, {useState} from "react";
import './Faq.css';

const FAQ = () => {
   
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    const faqData = [
      {
        question: "Section 1",
        answer: "Lorem ipsum for Section 1...",
      },
      {
        question: "Section 2",
        answer: "Lorem ipsum for Section 2...",
      },
      {
        question: "Section 3",
        answer: "Lorem ipsum for Section 3...",
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
  