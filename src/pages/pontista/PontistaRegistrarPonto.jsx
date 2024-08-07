import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const PontistaRegistrarPontoContainer = styled.div`
    width: 700px;
    height: auto;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    flex-direction: column;
    padding: 20px;
`;

const HorasContainer = styled.div`
    width: 400px;
    height: 150px;
    background-color: #2f5a2b;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    border-radius: 20px;
    font-size: 2em;
    font-size: 65px;
`;

const BotaoRegistrar = styled.button`
    width: 130px;
    height: 35px;
    margin: 15px;
    border: none;
    border-radius: 10px;
    background-color: #168ef0;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #0d6cb6;
        transition: 0.3s;
    }
`;

const PontistaRegistrarPonto = () => {
    const [horaAtual, setHoraAtual] = useState(new Date());
    const [sentido, setSentido] = useState('ENTRADA');
    const [pontoRegistrado, setPontoRegistrado] = useState(false);
    const pontistaId = 1; // Substitua pelo ID real do pontista

    useEffect(() => {
        const interval = setInterval(() => {
            setHoraAtual(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const registrarPonto = () => {
        const url = sentido === 'ENTRADA' ? 'http://localhost:3000/PontoEntrada' : 'http://localhost:3000/PontoSaida';
        const body = JSON.stringify({ id: pontistaId });

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na resposta do servidor');
                }
                return response.json();
            })
            .then(data => {
                console.log('Ponto registrado com sucesso:', data);
                setPontoRegistrado(true);
                setSentido(sentido === 'ENTRADA' ? 'SAÍDA' : 'ENTRADA');
            })
            .catch(error => {
                console.error('Erro ao registrar ponto:', error);
            });
    };

    return (
        <PageContainer>
            <PontistaRegistrarPontoContainer>
                
                <h2>Registrar Ponto</h2>
                <HorasContainer>{horaAtual.toLocaleTimeString()}</HorasContainer>
                <p>Deseja registrar o ponto?</p>
                <p>Sentido: <strong>{sentido}</strong></p>
                <BotaoRegistrar onClick={registrarPonto} disabled={pontoRegistrado && sentido === 'ENTRADA'}>
                    Sim, registrar
                </BotaoRegistrar>
            </PontistaRegistrarPontoContainer>
        </PageContainer>
    );
};

export default PontistaRegistrarPonto;