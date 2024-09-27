import React from "react";
import './projectComponent.css'
import './projectComponentMobile.css'
import ProjectName from "./projectNameComponent/ProjectNameComponent.jsx";
import VideoComponent from "./videoComponent/VideoComponent.jsx";

const ProjectComponent = ({name, projectSource, technologies, description, videoSource}) => {
    return (
        <div className="projectContainer">
            <div id="projectInfoContainer">
                {/* project name, link and click icon */}
                <ProjectName name={name} projectSource={projectSource}/>
                {/* technologies used in the project */}
                <ul id="technologiesList">
                    {technologies.map((technology, index) => {
                        return (
                            <li className="technologiesLi" key={index}>{technology}</li>
                        )
                    })}
                </ul>
                <p id="projectDescription"> {description}</p>
            </div>
                    
            <div id="projectShowcaseContainer">
                <VideoComponent videoSource={videoSource} />
            </div>
        </div>
    )
}

export default ProjectComponent;