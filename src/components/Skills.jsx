import React from 'react';
import styled from 'styled-components';
// Import images for skills
import uiDesignIcon from '../images/ui.png';
import appDevelopmentIcon from '../images/app.png';
import webDevelopmentIcon from '../images/web.png';
import posterDesignIcon from '../images/pd.png';


// Import images for tools & technologies
import figmaLogo from '../images/figma.png';
import flutterLogo from '../images/flutter.png';
import pythonLogo from '../images/py.png';
import cLogo from '../images/c.png';
import htmlLogo from '../images/html.png';
import cssLogo from '../images/css.png';
import jsLogo from '../images/js.png';
import photoshopLogo from '../images/ps.png';

const SkillsContainer = styled.section`
  padding: 4rem;
  background: linear-gradient(-135deg, #000000 12%, #431527 100%);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const SubHeading = styled.h3`
  font-size: 2rem;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillBox = styled.div`
  background-color: ${({ color }) => color};
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const SkillTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  margin-top: 1rem;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ToolLogos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const ToolLogo = styled.img`
  width: 50px;
  height: 50px;
  margin: 0.5rem;
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SectionTitle>SKILLS</SectionTitle>

      <SubHeading>What Can I Do</SubHeading>
      <SkillsGrid>
        <SkillBox color="#F2F2F2">
          <SkillImage src={uiDesignIcon} alt="UI Design" />
          <SkillTitle>UI Design</SkillTitle>
        </SkillBox>
        <SkillBox color="#F7F7F7">
          <SkillImage src={appDevelopmentIcon} alt="App Development" />
          <SkillTitle>App Development</SkillTitle>
        </SkillBox>
        <SkillBox color="#F2F2F2">
          <SkillImage src={webDevelopmentIcon} alt="Web Development" />
          <SkillTitle>Web Development</SkillTitle>
        </SkillBox>
        <SkillBox color="#FAF3E3">
          <SkillImage src={posterDesignIcon} alt="Poster Design" />
          <SkillTitle>Poster Design</SkillTitle>
        </SkillBox>
      </SkillsGrid>

      <SubHeading>Tools & Technology</SubHeading>
      <ToolLogos>
        <ToolLogo src={figmaLogo} alt="Figma" />
        <ToolLogo src={flutterLogo} alt="Flutter" />
        <ToolLogo src={pythonLogo} alt="Python" />
        <ToolLogo src={cLogo} alt="C" />
        <ToolLogo src={htmlLogo} alt="HTML" />
        <ToolLogo src={cssLogo} alt="CSS" />
        <ToolLogo src={jsLogo} alt="JavaScript" />
        <ToolLogo src={photoshopLogo} alt="Photoshop" />
      </ToolLogos>
    </SkillsContainer>
  );
};

export default Skills;
