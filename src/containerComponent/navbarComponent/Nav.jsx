import React from "react";
import './nav.css'

const minimumWidth = 1000;
const maxWidth = 1800;

const Nav = ({section, setSection}) => {

    const handleOnClick = (section) => {
        if (window.innerWidth > minimumWidth && window.innerWidth < maxWidth) {
            console.log("works!");
            setSection(section);
        }
    }
    
    return (
        <nav>
            <div id="navContainer">
                <ul id="navbarList">
                    <li onClick={() => handleOnClick("heroSection")} >
                        <a href={window.innerWidth < minimumWidth || window.innerWidth > maxWidth ? "#heroSectionContainer" : "#"} className={section === "heroSection" ? "selectedNav" : "unselectedHeroNav"}>Home</a>
                    </li>
                    <li onClick={() => handleOnClick("skillsSection")} >
                        <a href={window.innerWidth < minimumWidth || window.innerWidth > maxWidth ? "#skillsSectionContainer" : "#"} className={section === "skillsSection" ? "selectedNav" : "unselectedSkillsNav"}>Skills</a>
                    </li>
                    <li onClick={() => handleOnClick("projectsSection")} >
                        <a href={window.innerWidth < minimumWidth || window.innerWidth > maxWidth ? "#projectsSectionContainer" : "#"} className={section === "projectsSection" ? "selectedNav" : "unselectedProjectsNav"}>Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;