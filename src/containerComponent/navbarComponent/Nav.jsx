import React from "react";
import './nav.css'

const Nav = ({section, setSection}) => {
    return (
        <nav>
            <div id="navContainer">
                <ul id="navbarList">
                    <li onClick={() => setSection("heroSection")} >
                        <a href="#" className={section === "heroSection" ? "selectedNav" : "unselectedHeroNav"}>Home</a>
                    </li>
                    <li onClick={() => setSection("skillsSection")} >
                        <a href="#" className={section === "skillsSection" ? "selectedNav" : "unselectedSkillsNav"}>Skills</a>
                    </li>
                    <li onClick={() => setSection("projectsSection")} >
                        <a href="#" className={section === "projectsSection" ? "selectedNav" : "unselectedProjectsNav"}>Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;