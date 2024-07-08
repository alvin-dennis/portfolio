// src/components/Header.js

import React from 'react';
import styled from 'styled-components';
import profileImage from '../images/image.jpg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  background: linear-gradient(135deg, #000000 46%, #431527 100%);
  color: white;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 2rem;
    text-align: center;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  text-align: justify;
  margin-left: 4rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 2rem;
  }
`;

const RightSide = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const CircularImage = styled.img`
  width: 450px; 
  height: 500px; 
  border-radius: 80%;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: block;
    margin: 1rem auto;
  }
`;

const MainHeading = styled.h1`
  font-size: 1rem; 
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 3rem; 
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem; 
  margin: 1rem 0;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSide >
        <MainHeading data-aos="fade-up" data-aos-duration="1800">HELLO I'M</MainHeading>
        <SubHeading data-aos="fade-up" data-aos-duration="2000"> SREELAKSHMI S</SubHeading>
        <Paragraph data-aos="fade-up" data-aos-duration="2200">
          I am a versatile technology professional specializing in app development, UI design, and web development. I create seamless user experiences across platforms, combining technical expertise with creative design. My passion for technology drives me to stay updated with industry trends and continually enhance my skills.
        </Paragraph>
        <Button onClick={() => window.location.href = '#about'} data-aos="fade-up" data-aos-duration="2400">About me</Button>
        <Button href="/cv.pdf" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="2500">Download CV</Button>
      </LeftSide>
      <RightSide data-aos="fade-up" data-aos-duration="2000">
        <CircularImage src={profileImage} alt="Profile" />
      </RightSide>
    </HeaderContainer>
  );
};

export default Header;
