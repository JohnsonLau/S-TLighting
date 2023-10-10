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


const Clients = () => {

    const form = useRef();
        
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a2589ol', 'template_ofah6ve', form.current, 'IyhpadH4R1oaYeu-9')
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
                <div className="clientImgs">
                <img src = {abc} alt="Abc dollar store" className="clientLogoImg"/>
                <img src = {atlas} alt="Atlas roofing" className="clientLogoImg"/>
                <img src = {dollar} alt="dollarstore" className="clientLogoImg"/>
                <img src = {grill} alt="Coquitlam grill" className="clientLogoImg"/>
                <img src = {langley} alt="Langley Industrial Park" className="clientLogoImg"/>
                <img src = {newpacific} alt="new pacific supermarket" className="clientLogoImg"/>
                </div>
                <div className="clientImgs">
                <img src = {nofrills} alt="Nofrills" className="clientLogoImg"/>
                <img src = {oktire} alt="OK Tire" className="clientLogoImg"/>
                <img src = {pharmasave} alt="Pharmasave" className="clientLogoImg"/>
                <img src = {poco} alt="Port Coquitlam Industrial Park" className="clientLogoImg"/>
                <img src = {richmond} alt="Richmond Warehouse" className="clientLogoImg"/>
                <img src = {runners} alt="Port Moody Runners Den" className="clientLogoImg"/>
                </div>
                <div id='contact'>
                    <h1 className="contactPageTitle">Contact Us</h1>
                    <p className="contactDesc">Email or Call Us Today!<br></br> 604-802-6019 </p>
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