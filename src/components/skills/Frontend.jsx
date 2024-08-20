import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaReact } from 'react-icons/fa';
import { SiFigma, SiVite, SiNextdotjs } from 'react-icons/si';
import { BiShapeSquare } from 'react-icons/bi'; // Using a generic shape icon for Spline
import { SiFramer } from 'react-icons/si';

const Frontend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">Frontend Developer</h3>
            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <FaHtml5 className="skills_icon html_icon" />
                        <div>
                            <h3 className="skills_name">HTML</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <FaCss3Alt className="skills_icon css_icon" />
                        <div>
                            <h3 className="skills_name">CSS</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <FaJsSquare className="skills_icon js_icon" />
                        <div>
                            <h3 className="skills_name">JavaScript</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills_group">
                    <div className="skills_data">
                        <FaGitAlt className="skills_icon git_icon" />
                        <div>
                            <h3 className="skills_name">Git</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <FaReact className="skills_icon react_icon" />
                        <div>
                            <h3 className="skills_name">React</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <SiFigma className="skills_icon figma_icon" />
                        <div>
                            <h3 className="skills_name">Figma</h3>
                            <span className="skills_level">Advanced</span>
                        </div>
                    </div>
                </div>

                <div className="skills_group">
                    <div className="skills_data">
                        <BiShapeSquare className="skills_icon spline_icon" />
                        <div>
                            <h3 className="skills_name">Spline</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>
                   
                    <div className="skills_data">
                        <SiNextdotjs className="skills_icon nextjs_icon" />
                        <div>
                            <h3 className="skills_name">Next.js</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                    <SiFramer className="skills_icon framer_icon" />
                        <div>
                            <h3 className="skills_name">Framer</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills_group">
                <div className="skills_data">
                        <SiVite className="skills_icon vite_icon" />
                        <div>
                            <h3 className="skills_name">Vite</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills_data">
                       
                        <div>
                            <h3 className="skills_name"></h3>
                            <span className="skills_level"></span>
                        </div>
                    </div>
                    <div className="skills_data">
                        
                        <div>
                            <h3 className="skills_name"></h3>
                            <span className="skills_level"></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Frontend;
