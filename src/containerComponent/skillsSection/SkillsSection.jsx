import React from "react";
import './skillsSection.css';
import Skill from "./skillComponent/SkillContainer.jsx";
import Techstack from "./techstackComponent/Techstack.jsx";
import ProgrammingLangs from "./programmingLanguagesComponent/ProgrammingLangs.jsx"
import Languages from "./languagesComponent/Languages.jsx";
import ComputerSvgContainer from "./computerSvgComponent/ComputerSvgContainer.jsx";

const SkillsSection = () => {
    return (
        <div id="skillsSectionContainer">
            <div id="skillsContainer">
                <p className="paragHeader">Techstack</p>
                <Techstack />
                <p className="paragHeader">Languages - Frameworks - Databases</p>
                <ProgrammingLangs />
            </div>
            <ComputerSvgContainer />
        </div>
    )
}

export default SkillsSection;