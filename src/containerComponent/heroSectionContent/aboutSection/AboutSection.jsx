import React from "react";
import './aboutSection.css';

const AboutSection = () => {
    return (
        <p className="paragAbout">
            I started programming as a hobby almost four years ago and since then, I've built a solid toolset and deep understanding of computers and programming. Currently, I'm a student at <span className="highlight"><a target="_blank" href="https://1337.ma/en/" className="aboutLink">1337</a></span> programming school. You can download my CV <span className="highlight"><a target="_blank" href="https://1337.ma/en/" className="aboutLink">here.</a></span><br />
            Outside of programming, I enjoy <span className="blueHighlight">sports</span>, <span className="blueHighlight">cooking</span> and <span className="blueHighlight">taking naps.</span>
        </p>
    );
};

export default AboutSection;