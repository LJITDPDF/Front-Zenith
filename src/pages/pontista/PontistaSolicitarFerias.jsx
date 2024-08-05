import React, { useState } from 'react';
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

const PontistaSolicitarFeriasContainer = styled.div`
  width: 600px;
  height: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #397b33;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #325e2e;
  }
`;

const PontistaSolicitarFerias = () => {
  const id = 1;
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/SolicitarFerias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, data_inicio: startDate, data_fim: endDate }),
      });

      if (response.ok) {
        setMessage('Solicitação de férias enviada com sucesso!');
      } else {
        const errorData = await response.json();
        setMessage(`Erro ao enviar solicitação de férias: ${errorData.message}`);
      }
    } catch (error) {
      setMessage(`Erro ao enviar solicitação de férias: ${error.message}`);
    }
  };

  return (
    <PageContainer>
      <PontistaSolicitarFeriasContainer>
        <h1>Solicitar Férias</h1>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="Data de Início"
        />
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="Data de Fim"
        />
        <Button onClick={handleSubmit}>Solicitar</Button>
        {message && <p>{message}</p>}
      </PontistaSolicitarFeriasContainer>
    </PageContainer>
  );
};

export default PontistaSolicitarFerias;