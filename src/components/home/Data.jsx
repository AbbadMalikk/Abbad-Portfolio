import React from 'react'
import { MdWavingHand } from 'react-icons/md';
import { MdSend } from 'react-icons/md';


const Data = () => {
  return (
    <div className="home_data">
        <h1 className="home_title">Abbad Malik  <MdWavingHand className="hand-icon" /></h1>
        <h3 className='home_subtitle'> Web developer</h3>
        <p className="home_description">I am an undergraduate student with a deep passion for working on web projects and exploring diverse concepts. I am eager to immerse myself in innovative and unique ideas, constantly seeking opportunities to push the boundaries of creativity and technology.</p>

        <a href="#contact" className='button button--flex'>Say Hello!<MdSend className="send-icon" /></a>
    </div>
  )
}

export default Data