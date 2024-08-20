import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import './contact.css'
import { MdSend } from 'react-icons/md';
import { MdCheck } from 'react-icons/md'; // Import tick icon
const Contact = () => {

    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);


    const sendEmail = (e) => {
      e.preventDefault();
      setIsLoading(true); // Start loading
        
      emailjs
        .sendForm('service_7ba9dfu', 'template_8id8owi', form.current, {
          publicKey: 'Iq_jUAfjA1XUt8FIV',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setIsLoading(false); // Stop loading
            setIsSent(true); // Mark as sent
            e.target.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            setIsLoading(false); // Stop loading even on failure

          },
        );
    };


  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Contact Me</h2>
        <span className="section_subtitle">Get in touch</span>

        <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">Talk to me</h3>

            <div className="contact_info">
                <div className="contact_card">

                    <i className="bx bx-mail-send email contact_card-icon"></i>

                    <h3 className="contact_card-title">Email</h3>
                    <span className="contact_card-data">abbadmalikwork@gmail.com</span>

                    <a href="mailto:abbadmalikwork@gmail.com" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                </div>

                <div className="contact_card">

                    <i className="bx bxl-whatsapp whatsapp contact_card-icon"></i>

                    <h3 className="contact_card-title">WhatsApp</h3>
                    <span className="contact_card-data">+92-3045498151</span>

                    <a href="https://wa.me/923045498151" target='_blank' className="contact_button">Chat On WhatsApp <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                </div>

                <div className="contact_card">

                    <i className="bx bxl-instagram insta contact_card-icon"></i>

                    <h3 className="contact_card-title">Instagram</h3>
                    <span className="contact_card-data">abbad._.002</span>

                    <a href="https://www.instagram.com/abbad._.002/" target='_blank' className="contact_button">DM me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                </div>
            </div>
      
      
            </div>




            <div className="contact_content">
                <h3 className="contact_title">Write me your project</h3>
                <form ref={form} onSubmit={sendEmail} className="contact_form">
                    <div className="contact_form-div">
                        <label className='contact_form-tag'>Name</label>
                        <input type="text" name='name' className='contact_form-input' placeholder='Insert your name...' />
                    </div>

                    <div className="contact_form-div">
                        <label className='contact_form-tag'>Mail</label>
                        <input type="email" name='email' className='contact_form-input' placeholder='Insert your email...' />
                    </div>

                    <div className="contact_form-div contact_form-area">
                        <label className='contact_form-tag'>Name</label>
                        <textarea name="project" className='contact_form-input' placeholder='Write your project...' cols="30" rows="10"></textarea>
                    </div>
                <button className='button button--flex' disabled={isLoading || isSent}>
                {isLoading ? 'Sending...' : isSent ? 'Sent' : 'Send Message'}
                {isLoading ? <span className="loading-spinner"></span> : isSent ? <MdCheck className="send-icon" /> : <MdSend className="send-icon" />}  
                     </button>
                </form>
            </div>

        </div>

    </section>
  )
}

export default Contact