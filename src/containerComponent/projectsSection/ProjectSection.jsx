import React from 'react'
import './projectSection.css'
import ProjectComponent from './projectComponent/ProjectComponent.jsx'

const ProjectSection = () => {
  return (
    <div id='projectSectionContainer'>
        <p id='projectHeader'>Projects</p>
        <ProjectComponent
        name={"Breakout"} 
        projectSource={"https://github.com/AchabNassim/Breakout_game"}
        technologies={["Php", "Javascript", "Html", "Css", "Mysql"]} 
        description={"Here I'll describe in a paragraph or so what my project is, what it does, and most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it for. If you worked on a team. Fixes and for who it fixes it for. Here I'll describe in a paragraph or so what my project is"}
        videoSource={"project.mp4"}
        />

        <ProjectComponent
          name={"Ecommerce backend api"} 
          projectSource={"https://github.com/AchabNassim/NodeAuth"}
          technologies={["Nodejs", "ExpressJs", "Express-session", "Postgresql"]} 
          description={"Here I'll describe in a paragraph or so what my project is, what it does, and most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it for. If you worked on a team. Fixes and for who it fixes it for. Here I'll describe in a paragraph or so what my project is."}
          videoSource={"project.mp4"}
         />

        <ProjectComponent
        name={"Productive Notes"} 
        projectSource={"https://github.com/AchabNassim/productivityApp"}
        technologies={["React", "Material-ui", "Zustand"]} 
        description={"Here I'll describe in a paragraph or so what my project is, what it does, and most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it for. If you worked on a team. Fixes and for who it fixes it for. Here I'll describe in a paragraph or so what my project is."}
        videoSource={"project.mp4"}
        />

        <ProjectComponent
        name={"MinimalTyper"} 
        projectSource={"https://github.com/AchabNassim/productivityApp"}
        technologies={["Html", "Css", "Javascript"]} 
        description={"Here I'll describe in a paragraph or so what my project is, what it does, and most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it for. If you worked on a team. Fixes and for who it fixes it for. Here I'll describe in a paragraph or so what my project is."}
        videoSource={"project.mp4"}
        />
        {/* <ProjectComponent
          name={"Breakout"} 
          projectSource={""}
          technologies={["Php", "Javascript", "Html", "Css", "Mysql"]} 
          description={"Here I'll describe in a paragraph or so what my project is, what it does, and most importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it for. If you worked on a team. Fixes and for who it fixes it for."}
          videoSource={"."}
         /> */}
    </div>
  )
}

export default ProjectSection;
