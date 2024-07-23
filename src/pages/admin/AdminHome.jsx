//import React from "react";
import styled from "styled-components";
import { 
    Clock, 
    ClipboardList, 
    CalendarPlus, 
    FileStack,
    FilePen
 } from "lucide-react";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AdminHomeContainer = styled.div`
    width: 600px;
    height: 1;
    background: #d9d9d9;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    h1 {
        margin-bottom: 15px
    }
`;

const BotoesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
`;

const Botao = styled.button`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #3B7135;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    border: none;
    outline: none;
    transition: background 0.3s ease;

    &:hover {
        background: #5CAB53;
    }

    p {
        margin-top: 3px;
        margin-left: 5px;
    }

    a {
        display: flex;
        text-decoration: none;
        color: #fff;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`

const AdminHome = () => {
    return (
        <PageContainer>
            <AdminHomeContainer>
                <h1>Acesso Admin</h1>
                {/* <BotoesContainer>
                    <StyledLink to="/pontista/registrarponto"><Botao><Clock />Registrar Ponto</Botao></StyledLink>
                    <StyledLink to="/pontista/folhadeponto"><Botao><ClipboardList />Folha de Ponto</Botao></StyledLink>
                    <StyledLink to="/pontista/solicitarferias"><Botao><CalendarPlus />Solicitar Férias</Botao></StyledLink>
                    <StyledLink to="/pontista/solicitacoesferias"><Botao><FileStack />Solicitações de Férias</Botao></StyledLink>
                </BotoesContainer>
                <StyledLink to="/pontista/justificarfalta"><Botao><FilePen />Justificar Falta</Botao></StyledLink> */}
            </AdminHomeContainer>
        </PageContainer>
    );
};

export default AdminHome;