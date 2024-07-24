import React from "react";
import styled, { keyframes } from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Home,
  LogOut,
  TreePalm,
  UserPlus,
  Users,
} from "lucide-react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const NavBarContainer = styled.div`
  width: 20vw;
  min-width: 270px;
  min-height: 100vh;
  background-color: #2f5a2b;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-out;
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

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
    background-color: #E4E4E4;
    color: #000000;
    svg {
      stroke-width: 2.5px;
      color: #000000;
      fill: none;
    }
    transform: scale(1.05);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  animation: ${fadeIn} 0.5s ease-out;
  transition: transform 0.3s, filter 0.3s;
  color: white; /* Adiciona cor branca aos textos diretamente dentro do container */

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
    cursor: pointer;
  }

  & > * {
    color: white; /* Aplica cor branca a todos os filhos */
  }
`;

const NavBar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aqui você pode adicionar a lógica de logout, se necessário
    navigate("/", { state: { reload: true } });
  };

  return (
    <NavBarContainer>
      <LogoContainer>
        <FaUserCircle size={80} />
        <h4>Nome Usuário</h4>
      </LogoContainer>
      <LinksContainer>
        {role === "admin" && (
          <>
            <NavLinkStyled  to="/">
              <Home /> Home Admin
            </NavLinkStyled>
            <NavLinkStyled to="/admin/funcao1">
              Função 1
            </NavLinkStyled>
            <NavLinkStyled to="/admin/funcao2">
              Função 2
            </NavLinkStyled>
            <NavLinkStyled to="/admin/funcao3">
              Função 3
            </NavLinkStyled>
            <NavLinkStyled to="/admin/funcao4">
              Função 4
            </NavLinkStyled>
          </>
        )}
        {role === "supervisor" && (
          <>
            <NavLinkStyled  to="/">
              <Home /> Home Supervisor
            </NavLinkStyled>
            <NavLinkStyled to="/supervisor/funcao1">
              Função 1
            </NavLinkStyled>
            <NavLinkStyled to="/supervisor/funcao2">
              Função 2
            </NavLinkStyled>
            <NavLinkStyled to="/supervisor/funcao3">
              Função 3
            </NavLinkStyled>
            <NavLinkStyled to="/supervisor/funcao4">
              Função 4
            </NavLinkStyled>
          </>
        )}
        {role === "pontista" && (
          <>
            <NavLinkStyled  to="/pontista/home">
              <Home /> Home 
            </NavLinkStyled>
            <NavLinkStyled to="/pontista/funcao1">
              <CalendarDays/> Calendário
            </NavLinkStyled>
            <NavLinkStyled to="/pontista/funcao2">
              <Users /> Ver Pontistas
            </NavLinkStyled>
            <NavLinkStyled to="/pontista/funcao2">
              <TreePalm />Pedidos de Férias
            </NavLinkStyled>
            <NavLinkStyled to="/pontista/funcao3">
              <UserPlus />Cadastrar Pontista
            </NavLinkStyled>

          </>
        )}
      </LinksContainer>
      <NavLinkStyled to="/" onClick={handleLogout}>
        <LogOut /> Sair
      </NavLinkStyled>
    </NavBarContainer>
  );
};

export default NavBar;
