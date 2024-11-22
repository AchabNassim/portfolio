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
        description={"Breakout game clone using JavaScript and PHP. Players can easily sign up and log in to save their score and have access to the leaderboard where players can check their scores against friends and other gamers. This project allowed me to explore game development using javascript canvas, backend integration and user authentication using php and sessions"}
        videoSource={"showcase/videos/notes.mp4"}
        poster={"showcase/screenshots/notes.png"}
        />

        <ProjectComponent
        name={"Notes App"} 
        projectSource={"https://github.com/AchabNassim/productivityApp"}
        technologies={["Nodejs", "ExpressJs", "React", "Mongodb"]} 
        description={"A note-taking app allowing users to authenticate, organize, and manage notes with features like archiving, pinning, and filtering. Built with React for the frontend and Node.js/MongoDB for the backend."}
        videoSource={"showcase/videos/notes.mp4"}
        poster={"showcase/screenshots/notes.png"}
        />

        <ProjectComponent
          name={"WeatherWear"} 
          projectSource={"https://github.com/AchabNassim/api.git"}
          technologies={["Nodejs", "ExpressJs", "Express-session", "Postgresql"]} 
          description={"A weather-based recommendation API providing personalized outfit suggestions. Includes secure API key generation and management, with role-based access and efficient database handling."}
          videoSource={null}
          poster={"showcase/screenshots/api.png"}
        />

        {/* <ProjectComponent
          name={"ProTyper"} 
          projectSource={"https://github.com/AchabNassim/ProTyper"}
          technologies={["html, css, javascript"]} 
          description={"A typing speed website built with HTML, CSS, and JavaScript that calculates WPM and accuracy as users type. It features an interactive SVG keyboard that highlights keys pressed, with real-time animations enhancing the typing experience. This project strengthened my JavaScript skills and my understanding of DOM manipulation and CSS animations."}
          videoSource={"showcase/videos/proTyper.mp4"}
          poster={"showcase/screenshots/keyboard.png"}
        /> */}

        <ProjectComponent
          name={"Webserver"} 
          projectSource={"https://github.com/mouradden/web-server.git"}
          technologies={["C++"]} 
          description={"An HTTP server built with C++ 98, focusing on the HTTP protocol, socket programming, and parsing requests/responses. This project solidified my understanding of server-side development while also improving my object oriented programming skills."}
          videoSource={null}
          poster={"showcase/screenshots/webserver.png"}
         />

    </div>
  )
}

export default ProjectSection;
