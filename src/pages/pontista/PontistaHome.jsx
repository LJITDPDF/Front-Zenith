import React from "react";
import styled, { keyframes } from "styled-components";
import { 
    Clock, 
    TreePalm,
    FileText,
    FilePlus2,
    FilePen
 } from "lucide-react";
import { Link } from "react-router-dom";

// Keyframes para animação de fade-in
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

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    animation: ${fadeIn} 0.5s ease-out;
`;

const PontistaHomeCard = styled.div`
    width: 50%;
    height: auto;
    background: #fff;
    border-radius: 1rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    h1 {
        margin-bottom: 15px;
    }
`;

const CardItem = styled.div`
    display: flex;
    width: 80%;
    height: 50px;
    color: white;
    background-color: #3B7135;
    align-items: center;
    justify-content: center;
    padding-inline: 1rem;
    gap: 0.5rem;
    font-weight: bold;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    
    &:hover {
        background-color: #2E5D29;
        transform: scale(1.05);
    }
`;

const StyledLink = styled(Link)`
    width: 100%;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const PontistaHome = () => {
    return (
        <PageContainer>
            <PontistaHomeCard>
                <h2>ACESSO RÁPIDO</h2>
                <CardItem>Registrar Ponto<Clock /></CardItem>
                <CardItem>Folhas de Ponto <FileText /></CardItem>
                <StyledLink to="/pontista/solicitacoesdeferias"><CardItem>Pedidos de Férias<TreePalm/></CardItem></StyledLink>
                <CardItem>Solicitar Férias<FilePlus2 /></CardItem>
                <CardItem>Justificar Faltas<FilePen /></CardItem>
            </PontistaHomeCard>
        </PageContainer>
    );
};

export default PontistaHome;
