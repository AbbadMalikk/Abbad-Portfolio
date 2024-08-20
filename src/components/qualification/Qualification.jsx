import React, {useState} from 'react'
import "./qualification.css"
const Qualification = () => {

    const [toggleState,setToggleState]=useState(1)

    const toggleTab=(index)=>{
        setToggleState(index)
    }

    return (
        <div className="section qualification section" id="qualification">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My Personal Journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={toggleState===1 ?"qualification_button qualification_active button--flex": "qualification_button  button--flex"} onClick={()=>toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"></i>Education
                    </div>

                    <div className={toggleState===2 ?"qualification_button qualification_active button--flex": "qualification_button  button--flex"} onClick={()=>toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
                    </div>
                    <div className="qualification_animation"></div>
                </div>

                <div className="qualification_sections">
                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"} >
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web Projects</h3>
                                <span className="qualification_subtitle">Self-employed</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Web Internship</h3>
                                <span className="qualification_subtitle">DevBunch</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>2024 June - 2024 Sept
                                </div>
                            </div>
                           
                        </div>


                    </div>


                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"} >
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">APS Bahawalpur</h3>
                                <span className="qualification_subtitle">Fsc-FBISE</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>2018 - 2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">CUI, Lahore Campus</h3>
                                <span className="qualification_subtitle">BS Software Engineering</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>
                           
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}

export default Qualification