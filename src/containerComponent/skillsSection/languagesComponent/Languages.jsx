import React from "react";
import './Languages.css'
import Language from "./LanguageComponent/LanguageContainer.jsx";

const Languages = () => {
    return (
        <div id="languagesContainer"> 
            <Language language={"English"} />
            <Language language={"French"} />
            <Language language={"Arabic"} />
        </div>
    )
}

export default Languages