import React from "react";
import './skillsSection.css';
import Skill from "./skillComponent/SkillContainer.jsx";
import Techstack from "./techstackComponent/Techstack.jsx";
import ProgrammingLangs from "./programmingLanguagesComponent/ProgrammingLangs.jsx"
import Languages from "./languagesComponent/Languages.jsx";

const SkillsSection = () => {
    return (
        <div id="skillsSectionContainer">
            <p className="paragHeader">Techstack</p>
            <Techstack />
            <p className="paragHeader">Languages - Frameworks - Databases</p>
            <ProgrammingLangs />
            <p className="paragHeader">Spoken languages</p>
            <Languages />
        </div>
    )
}

export default SkillsSection;