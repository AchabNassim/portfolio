import React from "react";
import './skillContainer.css'

const Skill = ({source, skillName}) => {
    return (
        <div id="skillContainer">
            <img src={source} alt={source} className="skillImage"/>
            <p className="skillName">{skillName}</p>
        </div>
    )
}

export default Skill;