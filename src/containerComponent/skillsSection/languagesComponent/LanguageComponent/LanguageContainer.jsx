import React from "react";
import './languageContainer.css'

const Language = ({ language}) => {
    return (
        <div className="languageContainer">
            <p className="language">{language}</p>
        </div>
    )
}

export default Language;