import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const PontistaVerFaltasContainer = styled.div`
  width: 90vw;
  max-width: 800px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PontistaFaltaContainer = styled.div`
  width: 100%;
  background-color: #e4e4e4;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 20px;
`;

const BotaoJustificarFalta = styled.button`
  width: 120px;
  height: 30px;
  background-color: #168ef0;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: #126eaf;
    transition: .3s;
  }
`;

const ObsJustificativa = styled.button`
  width: 120px;
  height: 30px;
  background-color: #424242;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: #212121;
    transition: .3s;
  }
`;

const PontistaVerFaltas = () => {
  const [faltas, setFaltas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/ListaFaltas')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setFaltas(data))
      .catch(error => setError(error.message));
  }, []);

  const formatarData = (data) => {
    const [ano, mes, dia] = data.split('T')[0].split('-');
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <PageContainer>
      <PontistaVerFaltasContainer>
        <h2>Faltas</h2>
        {error ? (
          <ErrorMessage>Erro ao buscar faltas: {error}</ErrorMessage>
        ) : (
          faltas.map((falta, index) => (
            <PontistaFaltaContainer key={index}>
              <span>Dia: <strong>{formatarData(falta.data)}</strong></span>
              <span>Status: <strong>{falta.status}</strong></span>
              <ObsJustificativa>Justificativa</ObsJustificativa>
              <BotaoJustificarFalta>Justificar Falta</BotaoJustificarFalta>
            </PontistaFaltaContainer>
          ))
        )}
      </PontistaVerFaltasContainer>
    </PageContainer>
  );
};

export default PontistaVerFaltas;