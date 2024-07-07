// src/components/Navbar.js

import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(180deg, #240B15 20%, #000000 100%);
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink href="#about">About me</NavLink>
      <NavLink href="#skills">Skills</NavLink>
      <NavLink href="#portfolio">Portfolio</NavLink>
      <NavLink href="#contact">Contact me</NavLink>
    </Nav>
  );
};

export default Navbar;
