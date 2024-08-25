import React from 'react'
import "./about.css"
import { MdInsertDriveFile } from 'react-icons/md';
import CV from '/Abbad_Malik_CV.pdf'
import Info from './Info'
const About = () => {
  return (
    <>
    <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My Introduction</span>

        <div className="about_container container grid">

        <img src="./AbbadMalik.jpg" className='about_img' alt="abbad_malik" />
        <div className="about_data">
            <Info/>
            <p className="about_description">I am a web developer specializing in crafting front-end UI/UX interfaces and implementing backend functionality. I focus on delivering quality solutions tailored to meet clients' needs and exceed their expectations.
             </p>

             <a href={CV} download='' className="button button--flex">Download CV <MdInsertDriveFile className="files-icon" /></a>
        </div>

        </div>
    </section>
    </>
  )
}

export default About