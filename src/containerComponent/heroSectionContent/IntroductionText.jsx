import React from "react";

const Introductiontext = () => {
    return (
        <p id="introductiontext">
            Software developer based in <span className="blueHighlight"> Tangier</span> <span className="greenHighlight"> Morocco</span>. If you are looking for a passionate <span className="blueHighlight">backend developer </span> with solid understanding of frontend technologies then look no further.
        </p>
    )
}

// Software developer based in <span id="cityName"> Tangier</span> <span id="countryName"> Morocco</span>. If you are looking for a passionate backend developer with solid understand of frontend technologies then look no further. My current techstack consists of <span className="technologyName"> React</span> ,<span className="technologyName"> Nodejs</span>, <span className="technologyName"> ExpressJs</span> and <span className="technologyName"> PostgreSQL</span>

export default Introductiontext;