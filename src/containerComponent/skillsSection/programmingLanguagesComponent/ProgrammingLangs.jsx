import React from "react";
import './programmingLangs.css'
import Skill from "../skillComponent/SkillContainer.jsx";

const ProgrammingLangs = () => {
    return (
        <div id="programmingLangContainer">
            <Skill source={'ProgrammingLang/html.svg'} skillName={"html"} />
            <Skill source={'ProgrammingLang/css.svg'} skillName={"Css"} />
            <Skill source={'ProgrammingLang/javascript.svg'} skillName={"javascript"} />
            <Skill source={'techstack/react.svg'} skillName={"React"} />
            <Skill source={'techstack/nodejs.svg'} skillName={"Nodejs"} />
            <Skill source={'techstack/expressJs.svg'} skillName={"Express"} />
            <Skill source={'ProgrammingLang/php.svg'} skillName={"Php"} />
            <Skill source={'ProgrammingLang/c.svg'} skillName={"C"} />
            <Skill source={'ProgrammingLang/c++.svg'} skillName={"C++"} />
            <Skill source={'techstack/mongodb.svg'} skillName={"MongoDb"} />
            <Skill source={'ProgrammingLang/mysql.svg'} skillName={"Mysql"} />
            <Skill source={'ProgrammingLang/docker.svg'} skillName={"Docker"} />
            <Skill source={'ProgrammingLang/git.svg'} skillName={"Git"} />
            <Skill source={'ProgrammingLang/docker.svg'} skillName={"Docker"} />
            {/* <Skill source={'ProgrammingLang/figma.svg'} skillName={"Figma"} /> */}
        </div>
    )
}

export default ProgrammingLangs;