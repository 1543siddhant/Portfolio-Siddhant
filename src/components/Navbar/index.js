import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 32px;
  margin: 0;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const Button = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
    padding: 8px 16px;
  }
`;

const StyledNavLink = styled.a`
  color: white;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 24px;
  background: ${({ theme }) => theme.card_light}99;
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobileMenuLinks = styled(StyledNavLink)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </NavLogo>
        <MobileIcon onClick={() => setOpen(!open)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <StyledNavLink href="#about">About</StyledNavLink>
          <StyledNavLink href="#skills">Skills</StyledNavLink>
          <StyledNavLink href="#experience">Experience</StyledNavLink>
          <StyledNavLink href="#projects">Projects</StyledNavLink>
          <StyledNavLink href="#education">Education</StyledNavLink>
        </NavItems>
        <ButtonContainer>
          <Button
            href="https://github.com/1543siddhant"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Button>
          <Button
            href="https://www.linkedin.com/in/siddhant-patil-04587525b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            href="https://drive.google.com/file/d/1DXa90QqmgSgKsMbGkXuV2Fvl128uh8XU/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Button>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks href="#about" onClick={() => setOpen(!open)}>
            About
          </MobileMenuLinks>
          <MobileMenuLinks href="#skills" onClick={() => setOpen(!open)}>
            Skills
          </MobileMenuLinks>
          <MobileMenuLinks href="#experience" onClick={() => setOpen(!open)}>
            Experience
          </MobileMenuLinks>
          <MobileMenuLinks href="#projects" onClick={() => setOpen(!open)}>
            Projects
          </MobileMenuLinks>
          <MobileMenuLinks href="#education" onClick={() => setOpen(!open)}>
            Education
          </MobileMenuLinks>
          <Button
            href="https://github.com/1543siddhant"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: theme.primary, color: "white" }}
          >
            Github
          </Button>
          <Button
            href="https://www.linkedin.com/in/siddhant-patil-04587525b/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: theme.primary, color: "white" }}
          >
            LinkedIn
          </Button>
          <Button
            href="https://drive.google.com/file/d/1DXa90QqmgSgKsMbGkXuV2Fvl128uh8XU/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: theme.primary, color: "white" }}
          >
            Resume
          </Button>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
