import React from "react";
import './techstack.css'
import Skill from "../skillComponent/SkillContainer.jsx";

const Techstack = () => {
    return (
        <div id="teckstackContainer">
            <Skill source={'techstack/react.svg'} skillName={"React"} />
            <Skill source={'techstack/nodejs.svg'} skillName={"Nodejs"} />
            <Skill source={'techstack/expressJs.svg'} skillName={"Express"} />
            <Skill source={'techstack/mongodb.svg'} skillName={"Postresql"} />
        </div>
    )
}

export default Techstack;