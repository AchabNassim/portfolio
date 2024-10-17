import { useEffect, useState } from 'react'
import './container.css'
import Nav from './navbarComponent/Nav.jsx';
import HeroSection from './heroSectionContent/HeroSection.jsx';
import SkillsSection from './skillsSection/SkillsSection.jsx';
import ProjectSection from './projectsSection/ProjectSection.jsx'

const minimumWidth = 1000;
const maxWidth = 1800;

function Container() {
  const [selectedSection, setSelectedSection] = useState(window.innerWidth > minimumWidth && window.innerWidth < maxWidth ? "heroSection" : "all");
  let section;

  switch (selectedSection) {
    case "heroSection" : {
      section = <HeroSection />;
      break ;
    }
    case "skillsSection" : {
      section = <SkillsSection />;
      break ;
    }
    case "projectsSection" : {
      section = <ProjectSection />;
      break ;
    }
    case "all" : {
      section = [<HeroSection key={0} />, <SkillsSection key={1} />, <ProjectSection key={2} />];
      break ;
    }
    default : section = <HeroSection />
  }

  return (
    <div id='appContainer'>
      <Nav section={selectedSection} setSection={setSelectedSection} />
        {section}
    </div>
  )
}

export default Container;
