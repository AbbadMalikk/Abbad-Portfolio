import React from 'react';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiFirebase } from 'react-icons/si';

const Backend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">Backend Developer</h3>
            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <FaNodeJs className="skills_icon node_icon" />
                        <div>
                            <h3 className="skills_name">Node.js</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <SiExpress className="skills_icon express_icon" />
                        <div>
                            <h3 className="skills_name">ExpressJS</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <SiMongodb className="skills_icon mongodb_icon" />
                        <div>
                            <h3 className="skills_name">MongoDB</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills_group">
                    <div className="skills_data">
                        <SiFirebase className="skills_icon firebase_icon" />
                        <div>
                            <h3 className="skills_name">Firebase</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backend;
