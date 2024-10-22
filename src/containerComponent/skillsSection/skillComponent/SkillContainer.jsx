import React from "react";
import './skillContainer.css'

const Skill = ({source, skillName}) => {
    return (
        <div id="skillContainer">
            <p className="skillName">{skillName}</p>
            {/* <img src={source} alt={source} className="skillImage"/> */}
        </div>
    )
}

export default Skill;