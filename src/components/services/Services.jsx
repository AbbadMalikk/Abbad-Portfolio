import React, {useState} from 'react'
import "./services.css"
const Services = () => {
    const [toggleState,setToggleState]=useState(0)

    const toggleTab=(index)=>{
        setToggleState(index)
    }


  return (
    <section className="services section" id="services">
   <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What I Offer</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">UI/UX <br /> Design</h3>
                    </div>
                    <span className="services_button" onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right services_button_icon"></i></span>
                    <div className={toggleState===1?"services_modal active-modal":"services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}></i>
                            <h3 className="services_modal-title">UI/UX Design</h3>
                            <p className="services_modal-description">Ensuring digital products are intuitive and enjoyable.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I design user interfaces that are visually appealing and easy to navigate, ensuring a seamless user experience across all devices. </p>
                                </li>


                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I focus on understanding user needs and behaviors to create designs that are not only functional but also delightful to use. </p>
                                </li>


                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I create prototypes to visualize and test the user journey, making iterative improvements based on feedback.</p>
                                </li>

                            </ul>


                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-mouse services_icon"></i>
                        <h3 className="services_title">Frontend <br /> Development</h3>
                    </div>
                    <span className="services_button"  onClick={()=>toggleTab(2)}>View More <i className="uil uil-arrow-right services_button_icon"></i></span>
                    <div className={toggleState===2?"services_modal active-modal":"services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}></i>
                            <h3 className="services_modal-title">Frontend Development</h3>
                            <p className="services_modal-description">build and design user interfaces, ensuring websites are visually appealing, functional, and responsive.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I develop user-friendly, responsive web interfaces that work seamlessly across devices. </p>
                                </li>


                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I translate design mockups into functional, clean code using modern web technologies.</p>
                                </li>


                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I create interactive elements that improve user engagement and provide a smooth, dynamic browsing experience.</p>
                                </li>

                            </ul>


                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className="services_title">Backend <br /> Development</h3>
                    </div>
                    <span className="services_button"  onClick={()=>toggleTab(3)}>View More <i className="uil uil-arrow-right services_button_icon"></i></span>
                    <div className={toggleState===3?"services_modal active-modal":"services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}></i>
                            <h3 className="services_modal-title">Backend Development</h3>
                            <p className="services_modal-description"> Building and maintaining the server-side logic, databases, and APIs that power the functionality of web applications.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I create and maintain the core functionality and server-side applications. </p>
                                </li>


                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info"> I design and optimize databases to handle data efficiently and securely.</p>
                                </li>


                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">I develop APIs that allow different software systems to communicate and integrate seamlessly.</p>
                                </li>

                            </ul>


                        </div>
                    </div>
                </div>

            </div>

    </section>
  )
}

export default Services