import React from "react";
import './projectComponent.css'
import './mobileProjectComponent.css'
import './monitorProjectComponent.css'
import ProjectName from "./projectNameComponent/ProjectNameComponent.jsx";
// import VideoComponent from "./videoComponent/MediaComponent.jsx";
import MediaComponent from "./videoComponent/MediaComponent.jsx";

const ProjectComponent = ({name, projectSource, technologies, description, videoSource, poster}) => {
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
                <MediaComponent videoSource={videoSource} poster={poster} />
            </div>
        </div>
    )
}

export default ProjectComponent;