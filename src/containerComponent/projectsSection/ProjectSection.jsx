import React from 'react'
import './projectSection.css'
import ProjectComponent from './projectComponent/ProjectComponent.jsx'

const ProjectSection = () => {
  return (
    <div id='projectSectionContainer'>
        <p id='projectHeader'>Projects</p>
        
        <ProjectComponent
        name={"Ft_transcendence"} 
        projectSource={"https://github.com/AchabNassim/ft_transcandence"}
        technologies={["Docker", "Javascript", "Django", "Postgresql", "Redis", "Web sockets"]} 
        description={"An online single page multiplayer pong game where players can choose various different game modes such as online, tournament and AI. It also includes a secure authentication system, a chat app and much more. The app was built follwing the microservice architecture for better scalability."}
        videoSource={null}
        poster={"showcase/screenshots/game.webp"}
        />

        <ProjectComponent
        name={"Notes App"} 
        projectSource={"https://github.com/AchabNassim/productivityApp"}
        technologies={["Docker", "Nodejs", "ExpressJs", "React", "Mongodb"]} 
        description={"A note-taking app allowing users to authenticate, organize, and manage notes with features like archiving, pinning, and filtering. Built with React for the frontend and Node.js/MongoDB for the backend."}
        videoSource={"showcase/videos/notes.mp4"}
        poster={"showcase/screenshots/notes.webp"}
        />

        <ProjectComponent
          name={"WeatherWear"} 
          projectSource={"https://github.com/AchabNassim/api.git"}
          technologies={["Nodejs", "ExpressJs", "Express-session", "Postgresql"]} 
          description={"A weather-based recommendation API providing personalized outfit suggestions. Includes secure API key generation and management, with role-based access and efficient database handling."}
          videoSource={null}
          poster={"showcase/screenshots/api.webp"}
        />

        {/* <ProjectComponent
          name={"ProTyper"} 
          projectSource={"https://github.com/AchabNassim/ProTyper"}
          technologies={["html, css, javascript"]} 
          description={"A typing speed website built with HTML, CSS, and JavaScript that calculates WPM and accuracy as users type. It features an interactive SVG keyboard that highlights keys pressed, with real-time animations enhancing the typing experience. This project strengthened my JavaScript skills and my understanding of DOM manipulation and CSS animations."}
          videoSource={"showcase/videos/proTyper.mp4"}
          poster={"showcase/screenshots/keyboard.webp"}
        /> */}

        <ProjectComponent
          name={"Webserver"} 
          projectSource={"https://github.com/mouradden/web-server.git"}
          technologies={["C++"]} 
          description={"An HTTP server built with C++ 98, focusing on the HTTP protocol, socket programming, and parsing requests/responses. This project solidified my understanding of server-side development while also improving my object oriented programming skills."}
          videoSource={null}
          poster={"showcase/screenshots/webserver.webp"}
         />

    </div>
  )
}

export default ProjectSection;
