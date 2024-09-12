import { useState } from 'react'
import './container.css'
import Nav from './navbarComponent/Nav.jsx';
import HeroSection from './heroSectionContent/HeroSection.jsx';
import SkillsSection from './skillsSection/SkillsSection.jsx';

function Container() {

  return (
    <div id='appContainer'>
      <Nav />
      <div id='miniContainer'>
        <HeroSection />
        {/* <SkillsSection /> */}
      </div>
    </div>
  )
}

export default Container;
