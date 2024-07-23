import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CircleUser } from "lucide-react";

const HeaderContainer = styled.div`
  width: 80vw;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  border-bottom: 2px solid #c3c3c3;
  background-color: #f1f1f1;
  p {
    color: #000;
    font-weight: bold;
    margin: 0;
  }
  a {
    margin-top: 5px;
    text-decoration: none;
    color: #000;
  }
`;

const Header = ({ nomePontista }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getCurrentDate = () => {
    const date = currentTime;
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getCurrentTime = () => {
    const date = currentTime;
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <HeaderContainer>
      <p>Bem-vindo(a) ao Zenith</p>
      <p>Data Atual: {getCurrentDate()} - Hora Atual: {getCurrentTime()}</p>
      <a href=""><CircleUser /></a>
    </HeaderContainer>
  );
};

export default Header;