import React from 'react';

import WebSlider from './WebSlider';
import ProcessingSlider from './ProcessingSlider';

import './Projects.css';

const Projects = () => {

    return (
        <div className="entire-pg">
            <div id="project-box">
                <div id="project-text-box">
                    <div className="text-header">
                        Projects
                    </div> 
                </div>
                <WebSlider />
                <ProcessingSlider />
            </div>
        </div> 
    );
};

export default Projects;
