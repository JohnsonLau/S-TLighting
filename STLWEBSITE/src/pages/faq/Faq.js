import React from "react";
import './Faq.css';

const FAQ = () => {
   
    const faqItems = document.querySelectorAll('faq-item');

        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    
    return (

        <section id="FAQ">
            <h1 className="faqHeader">Frequently Asked Questions</h1>
        <div class="faq-container">
                <div class="faq-item">
                    <h3>Q: I’m an end-customer, can you purchase products directly from you?</h3>
                    <div class="faq-answer">
                        <p>A: Yes.  We sell directly to end-customers.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <h3>Q: How do I create an FAQ accordion?</h3>
                    <div class="faq-answer">
                        <p>To create an FAQ accordion, you can use HTML and CSS to structure and style the content. You can use CSS to hide the answers by default and show them when the user clicks on the questions.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <h3>Q: Can I customize the accordion style?</h3>
                    <div class="faq-answer">
                        <p>Yes, you can customize the accordion's appearance by modifying the CSS styles. You can change the colors, fonts, and other visual elements to match your website's design.</p>
                    </div>
                </div>
        </div>
        </section>

    );
}

export default FAQ;