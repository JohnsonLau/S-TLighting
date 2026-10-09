import React, { useRef } from "react";
import './Clients.css';
import abc from './ClientLogos/abcstore.jpg';
import atlas from './ClientLogos/atlas.jpg';
import dollar from './ClientLogos/dollarstore.jpg';
import grill from './ClientLogos/grill.jpg';
import langley from './ClientLogos/langley.jpg';
import newpacific from './ClientLogos/newpacific.jpg';
import nofrills from './ClientLogos/nofrills.jpg';
import oktire from './ClientLogos/oktire.jpg';
import pharmasave from './ClientLogos/pharmasave.jpg';
import poco from './ClientLogos/pocoindustry.png';
import richmond from './ClientLogos/richmond.jpg';
import runners from './ClientLogos/runnersden.jpg';
import emailjs from '@emailjs/browser';

const clientLogos = [
    { image: abc, alt: "Abc dollar store" },
    { image: atlas, alt: "Atlas roofing" },
    { image: dollar, alt: "dollarstore" },
    { image: grill, alt: "Coquitlam grill" },
    { image: langley, alt: "Langley Industrial Park" },
    { image: newpacific, alt: "new pacific supermarket" },
    { image: nofrills, alt: "Nofrills" },
    { image: oktire, alt: "OK Tire" },
    { image: pharmasave, alt: "Pharmasave" },
    { image: poco, alt: "Port Coquitlam Industrial Park" },
    { image: richmond, alt: "Richmond Warehouse" },
    { image: runners, alt: "Port Moody Runners Den" },
];

const clientLogoRows = [
    clientLogos.filter((_, index) => index % 2 === 0),
    clientLogos.filter((_, index) => index % 2 === 1),
];


const Clients = () => {

    const form = useRef();
        
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jc2bsof', 'template_08509ax', form.current, 'raionefVxG3xXWG5b')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email has been sent');
        }, (error) => {
            console.log(error.text);
        });
    };
    

   
    
    return (

        <section className='contactPage'>
            <div id='Clients'>
                <h1 className="clientTitlePage">Our Clients</h1>
                <p className="clientNames">We have had the opportunity to work with these incredible companies.</p>
               
                <div className="scroll-container" role="region" aria-label="Client logos" tabIndex={0}>
                    <div className="clientLogoCarousel">
                        {clientLogoRows.map((logos, rowIndex) => (
                            <div className="clientLogoTrack" key={rowIndex}>
                                {[false, true].map((isDuplicate) => (
                                    <div className="clientImgs" aria-hidden={isDuplicate || undefined} key={String(isDuplicate)}>
                                        {logos.map(({ image, alt }) => (
                                            <img
                                                src={image}
                                                alt={isDuplicate ? "" : alt}
                                                className="clientLogoImg"
                                                key={alt}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            <p className="clientNames">And many more!</p>

                <div id='contact'>
                    <h1 className="contactPageTitle">Contact Us</h1>
                    <p className="contactDesc">Email or Call Us Today!<br></br>sales@stlighting.ca<br></br> 604-802-6019 </p>
                    <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <input required type="text" className="clientInputName" placeholder="Name/Company Name" name='your_name'/>
                        <input required type="email" className="clientInputEmail" placeholder="Email" name='your_email'/>
                        <textarea required className="clientMessage" name="message" rows="5" placeholder="Your Message" />
                        <button type="submit" value='Send'className="submitMessage"><p className="submitText">Submit</p></button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Clients;
