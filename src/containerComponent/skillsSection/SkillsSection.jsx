import React from "react";
import './skillsSection.css';
import './mobileSkillsSection.css';
import './monitorSkillsSection.css';
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
                <p className="paragHeader">Spoken languages</p>
                <Languages />
            </div>
            <ComputerSvgContainer />
        </div>
    )
}

export default SkillsSection;