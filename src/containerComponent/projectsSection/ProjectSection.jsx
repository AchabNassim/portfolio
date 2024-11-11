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
        description={"Note-taking app built with React that allows users to authenticate, store, and categorize their notes. Users can archive, pin, and filter notes for easy management. The backend is powered by Node.js and MongoDB. This project helped me enhance my React skills while also deepening my understanding of NoSQL databases."}
        videoSource={"showcase/videos/notes.mp4"}
        poster={"showcase/screenshots/notes.png"}
        />

        {/* <ProjectComponent
          name={"Ecommerce backend api"} 
          projectSource={"https://github.com/AchabNassim/NodeAuth"}
          technologies={["Nodejs", "ExpressJs", "Express-session", "Postgresql"]} 
          description={"Complete eCommerce backend API with payment integration using Stripe. Users can log in as guests, clients, or admins, each with secure routes. The API allows users to view products, save items to their carts, and proceed to checkout. Product routes support fetching specific items and browsing by category. This project allowed me to level up my backend skills in database design, user roles, and more."}
          videoSource={null}
          poster={"showcase/screenshots/api.png"}
        /> */}

        <ProjectComponent
          name={"ProTyper"} 
          projectSource={"https://github.com/AchabNassim/ProTyper"}
          technologies={["html, css, javascript"]} 
          description={"A typing speed website built with HTML, CSS, and JavaScript that calculates WPM and accuracy as users type. It features an interactive SVG keyboard that highlights keys pressed, with real-time animations enhancing the typing experience. This project strengthened my JavaScript skills and my understanding of DOM manipulation and CSS animations."}
          videoSource={"showcase/videos/proTyper.mp4"}
          poster={"showcase/screenshots/keyboard.png"}
        />

        <ProjectComponent
          name={"Webserver"} 
          projectSource={"https://github.com/mouradden/web-server.git"}
          technologies={["C++"]} 
          description={"HTTP server in C++ 98 using object-oriented programming principles. As part of a team of three, my role involved deepening my understanding of the HTTP protocol and its functionalities, learning about socket programming for network communication, parsing HTTP requests, and constructing appropriate responses. This project gave me a solid foundation for server-side development and the http protocol in general"}
          videoSource={null}
          poster={"showcase/screenshots/webserver.png"}
         />

    </div>
  )
}

export default ProjectSection;
