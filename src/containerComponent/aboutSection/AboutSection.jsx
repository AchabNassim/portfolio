import React from "react";
import './aboutSection.css';

const AboutSection = () => {
    return (
        <div id="aboutSectionContainer">
            <div id="aboutContainer">
                <p className="smallHeader">About</p>
                <p id="aboutContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor commodo orci, et aliquet turpis elementum vitae. Nunc a ante libero. Mauris a elit sit amet mauris malesuada fringilla ut non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis arcu sit amet diam commodo convallis. Etiam nunc enim, varius luctus imperdiet id, placerat ac lacus. Etiam id magna imperdiet, consectetur eros sit amet, euismod arcu. Nunc in massa a risus mollis euismod. Etiam nec mauris non justo tincidunt blandit eu in arcu. Ut eu ex pretium felis imperdiet ultricies fermentum non nulla. In blandit libero in ligula ullamcorper molestie. </p>
            </div>
            <div id="educationContainer">
                <p className="smallHeader"><img src="/public/educationSvg.svg" alt="education" className="aboutSvg"/> Education</p>
                <ul id="educationUl">
                    <li className="educationLi"></li>
                    <li className="educationLi"></li>
                </ul>
            </div>
            <div id="certificatesContainer">
                <p className="smallHeader"><img src="/public/certificateSvg.svg" alt="certificate" className="aboutSvg"/> Certificates</p>

            </div>
        </div>
    )

};

export default AboutSection;