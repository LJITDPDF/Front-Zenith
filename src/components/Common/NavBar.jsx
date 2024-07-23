import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import {
  Home,
  Users,
  UserPlus,
  LogOut,
  CalendarDays,
  UserRoundX,
  CalendarPlus,
  FileStack,
  CalendarSearch,
  ClipboardList,
  FilePen
} from "lucide-react";

const NavBarContainer = styled.div`
  width: 20vw;
  min-width: 270px;
  min-height: 100vh;
  background-color: #3B7135;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const MenuList = styled.ul`
  flex-grow: 1;
`;

const Option = styled.li`
  margin-top: 10px;
  width: 20vw;
  height: auto;
  position: relative;
  ${({ selected }) => selected && `
    background-color: #1bce48;
  `}
  &:hover {
    transition: 0.6s;
    background-color: #1bce48;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  margin-left: 10px;
  margin-bottom: 5px;
  display: flex;
  padding: 10px;
  cursor: pointer;
  p {
    margin-left: 8px;
    font-size: 20px;
  }
`;

const LogoutContainer = styled.div`
  margin-top: auto;
  p {
    margin-left: 8px;
    font-size: 20px;
  }
  &:hover {
    transition: 0.6s;
    background-color: #1bce48;
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`

const NavLinkStyled = styled(NavLink)`
  width: 100%;
  padding: 12px 32px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
  &.active,
  &:hover {
    background-color: #1bce48;
    color: #000000;
    svg {
      stroke-width: 2.5px;
      color: #000000;
      fill: none;
    }
    transform: scale(1.05);
  }
`;

const NavBar = ({ role }) => {

  return (
    <NavBarContainer>
      <LinksContainer>
        {
          role === "admin" && (
            <>
              <NavLinkStyled>
                <Home />Home Admin
              </NavLinkStyled>
              <NavLinkStyled>
                <Home />Home Admin
              </NavLinkStyled>
              <NavLinkStyled>
                <Home />Home Admin
              </NavLinkStyled>
              <NavLinkStyled>
                <Home />Home Admin
              </NavLinkStyled>
              <NavLinkStyled>
                Home Admin
              </NavLinkStyled>
            </>
          )
        }
        {
          role === "supervisor" && (
            <>
              <NavLinkStyled>
                <Home />Home Supervisor
              </NavLinkStyled>
              <NavLinkStyled>
                <Home />Home Supervisor
              </NavLinkStyled>
              <NavLinkStyled>
                <Home />Home Supervisor
              </NavLinkStyled>
              <NavLinkStyled>
                <Home />Home Supervisor
              </NavLinkStyled>
              <NavLinkStyled>
                <Home />Home Supervisor
              </NavLinkStyled>
            </>
          )
        }
        {
          role === "pontista" && (
            <>
              <NavLinkStyled>
                <Home />Home Pontista
              </NavLinkStyled>
              <NavLinkStyled>
                <Home />Home Pontista
              </NavLinkStyled>
              <NavLinkStyled>
                <Home />Home Pontista
              </NavLinkStyled>
              <NavLinkStyled>
                <Home />Home Pontista
              </NavLinkStyled>
              <NavLinkStyled>
                <Home />Home Pontista
              </NavLinkStyled>
            </>
          )
        }
      </LinksContainer>
      <LogoutContainer>
        <StyledLink to="/"><LogOut /><p>Logout</p></StyledLink>
      </LogoutContainer>
    </NavBarContainer>
  );
};

export default NavBar;