import React from 'react'
import './footer.css'
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Abbad Malik</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#services" className="footer_link">Services</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>

                </ul>
                <div className="footer_social">

                    <a href="https://www.linkedin.com/in/abbadmalik/" target='_blank' className="footer_social-icon"> <FaLinkedin className="linkedin-icon" /></a>

                    <a href="mailto:abbadmalikwork@gmail.com" className="footer_social-icon"> <MdEmail className="gmail-icon" /></a>

                    <a href="https://github.com/AbbadMalikk" target='_blank' className="footer_social-icon"><i className='uil uil-github-alt'></i></a>
                </div>
                <span className='footer_copy'> Thank you for visiting !</span>
            </div>

        </footer>
    )
}

export default Footer