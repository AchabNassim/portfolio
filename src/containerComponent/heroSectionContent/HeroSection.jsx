import React, {useState} from "react";
import GreetText from "./GreetText.jsx";
import Introductiontext from "./IntroductionText.jsx";
import ProfileImage from "./profileImageComponent/ProfileImage.jsx";
import Socials from "./socialsComponent/Socials.jsx";
import AboutSection from "./aboutSection/AboutSection.jsx";
import './heroSection.css';
import './mobileHeroSection.css';
import './monitorHeroSection.css';


const HeroSection = () => {
    const [selectedParag, setSelectedParag] = useState("intro");
    // console.log(selectedParag)
    return (
        <div id="heroSectionContainer">
            <ProfileImage />
            <GreetText />
            {selectedParag === "intro" ? <Introductiontext /> : <AboutSection />}
            <Socials selectedParag={selectedParag} setSelectedParag={setSelectedParag} />
        </div>
    )
}

export default HeroSection;