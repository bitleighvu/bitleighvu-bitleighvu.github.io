import React from 'react';

import ProjectCard from './ProjectCard';
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
                <div className="sub-projHeader">
                    Processing
                </div> 

                <div className="card-deck">
                     <ProjectCard 
                         src={process.env.PUBLIC_URL + "/images/project/bezPatch.png"}
                         alt={"Bezier Patch of Elephant"}
                         title={"Bezier Patches"}
                         link={"https:github.com/bitleighvu/BezierPatches"}
                         text={"A smooth surface creation program using Bezier patches that reads in control points for patches and creates a  collections of polygons from this information. Programs allows for toggling of different displays of control points for single quadrilateral, nine quadrilaterals, and a full Bezier Patch."}
                         date={"April 16, 2020"}
                     />
                     <ProjectCard 
                         src={process.env.PUBLIC_URL + "/images/project/rayTracing.png"}
                         alt={"Ray Tracing of Shadows"}
                         title={"Ray Tracing"}
                         link={"https:github.com/bitleighvu/RayTracing"}
                         text={"A ray tracing implementation that detects intersections between light rays, ellipsoids, and disks. The implementation utilizes a shading function which takes into account reflectance prosperities of surfaces to cast accurate shadows and highlights. Recursive ray casting is used for reflection of light on other objects in the scene."}
                         date={"March 29, 2020"}
                     />
                     <ProjectCard 
                         src={process.env.PUBLIC_URL + "/images/project/houseAnim.png"}
                         alt={"House Animation"}
                         title={"House Animation"}
                         link={"https:github.com/bitleighvu/AnimateScene"}
                         text={"An animation utilizing the matrix stack, transformations, camera position, and lighting to create an animated scene."}
                         date={"February 17, 2020"}
                     />
                     <ProjectCard 
                         src={process.env.PUBLIC_URL + "/images/project/orthoSqur.png"}
                         alt={"Orthographic Squares"}
                         title={"Projection Techniques"}
                         link={"https:github.com/bitleighvu/TransformProc"}
                         text={"A small graphics library that is similar in design to OpenGL for transformation, projection, and mapping to the screen of user-provided lines."}
                         date={"January 29, 2020"}
                     />
                 </div> 
                 <div className="card-deck">
                    <ProjectCard 
                         src={process.env.PUBLIC_URL + "/images/project/kalSquares.png"}
                         alt={"Orthographic Squares"}
                         title={"Tech Kaleidoscope Squares"}
                         link={"https://github.com/bitleighvu/KaleidoSquares"}
                         text={"A Georgia Tech-themed interactive program that mimics a pattern similar to a kaleidoscope by controlling one satellite square. "}
                         date={"January 8, 2020"}
                     />
                 </div>
            </div>
        </div> 
    );
};

export default Projects;
