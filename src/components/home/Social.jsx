import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Social = () => {
  return (<>

  
    <div className="home_social">
        <a href="https://www.linkedin.com/in/abbadmalik/" target='_blank' className="home_social-icon"> <FaLinkedin className="linkedin-icon" /></a>

        <a href="mailto:abbadmalikwork@gmail.com" className="home_social-icon"> <MdEmail className="gmail-icon" /></a>

        <a href="https://github.com/AbbadMalikk" target='_blank' className="home_social-icon"><i className='uil uil-github-alt'></i></a>
    </div>
  </>
  )
}

export default Social