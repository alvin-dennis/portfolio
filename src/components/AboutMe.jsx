// src/components/AboutMe.js

import React from 'react';
import styled from 'styled-components';
import profileImage from '../images/abtme.jpg';  // Import the image

const AboutMeContainer = styled.section`
  padding: 4rem;
  background: linear-gradient(-135deg,
    rgba(67, 21, 39, 1) 0%,
    rgba(255, 255, 255, 0.5) 8%,
    rgba(74, 14, 38, 0.76) 15%,
    rgba(67, 21, 39, 1) 60%,
    rgba(255, 255, 255, 0.5) 65%,
    rgba(67, 21, 39, 0.5) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50vh;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const RoundedRectangleImage = styled.img`
  border-radius: 20px;
  margin-top: 40px;
  margin-left: 10rem;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    margin-left: 0;
    margin-top: 0;
  }
`;

const BackgroundShapes = styled.div`
  position: absolute;
  bottom: -50px; 
  left: -10px; 
`;

const RectangleBox = styled.div`
  position: absolute;
  width: 308px;
  height: 360px;
  background-color: rgba(67, 21, 39, 1); /* Color 431527 with 100% opacity */
  margin-left: 12rem;
  margin-top: 15rem;
  border-radius: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SquareBox = styled.div`
  position: absolute;
  width: 308px;
  height: 360px;
  margin-left: 8rem;
  margin-top: 12rem;
  border-radius: 20px;
  background-color: rgba(99, 98, 98, 0.34); /* Color 636262 with 34% opacity */

  @media (max-width: 768px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  margin-left: 14rem;
  margin-right: 10rem;
  text-align: justify;

  @media (max-width: 1024px) {
    margin-left: 5rem;
    margin-right: 5rem;
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
  margin-left:10rem;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  background-color: #4E2D3A;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeContainer id="about">
      <BackgroundShapes>
        <SquareBox />
        <RectangleBox />
      </BackgroundShapes>
      <ImageContainer>
        <RoundedRectangleImage src={profileImage} alt="Profile" />
      </ImageContainer>
      <TextContainer>
        <Title>About Me</Title>
        <Paragraph>
          I am a dedicated Frontend developer and UI designer with a strong passion for creating intuitive and seamless user experiences. I hold a BTech in Computer Science from St. Joseph's College of Engineering and Technology, Palai, affiliated with APJ Abdul Kalam Technological University. 
          Throughout my academic and professional journey, I have honed my skills in designing and developing applications that are not only functional but also aesthetically pleasing. My interest in programming drives me to continuously learn and adapt to new technologies, ensuring that my solutions are innovative and up-to-date.
          In addition to my technical skills, I am deeply committed to volunteering and giving back to the community. My friendly and caring nature allows me to connect with people easily, making collaboration and teamwork a rewarding experience. I am passionate about using my skills to make a positive impact and contribute meaningfully to any project I undertake.
        </Paragraph>
        <Button onClick={() => window.location.href = '#contact'}>Contact me</Button>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
      </TextContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
