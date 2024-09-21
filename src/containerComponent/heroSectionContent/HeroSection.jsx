import React from "react";
import GreetText from "./GreetText.jsx";
import Introductiontext from "./IntroductionText.jsx";
import ProfileImage from "./profileImageComponent/ProfileImage.jsx";
import Socials from "./socialsComponent/Socials.jsx";
import './heroSection.css';
import './mobileHeroSection.css';


const HeroSection = () => {
    return (
        <div id="heroSectionContainer">
            <ProfileImage />
            <GreetText />
            <Introductiontext />
            <Socials />
        </div>
    )
}

export default HeroSection;