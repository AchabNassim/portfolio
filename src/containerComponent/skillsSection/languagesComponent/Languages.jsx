import React from "react";
import './Languages.css'
import SkillContainer from "../skillComponent/SkillContainer.jsx";

const Languages = () => {
    return (
        <div id="languagesContainer"> 
            <SkillContainer skillName={"English"} />
            <SkillContainer skillName={"French"} />
            <SkillContainer skillName={"Arabic"} />
            {/* <SkillContainer skillName={"Spanish"} /> */}
        </div>
    )
}

export default Languages