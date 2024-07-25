import React, { useEffect, useState } from 'react';
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

const PontistSolicitacoesDeFeriasContainer = styled.div`
  width: 90vw;
  max-width: 800px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  padding: 20px;
`;

const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
  }
`;

const SolicitacaoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff; 
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-left: 5px solid #928d8d; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 2px 0;
    font-size: 14px;
  }
`;

const StatusIndicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    switch (status) {
      case 'APR':
        return '#28a745';
      case 'NEG':
        return '#dc3545';
      case 'USU':
        return '#116de5'
      default:
        return '#e3aa1b';
    }
  }};
  margin-left: 10px;
`;

const StatusText = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const StatusFilter = styled.select`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 14px;
  cursor: pointer;
`

const PontistaSolicitacoesDeFerias = () => {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const fetchSolicitacoes = async () => {
    try {
      const response = await fetch('http://localhost:3000/ListaFerias');
      if (!response.ok) {
        throw new Error('Erro ao buscar solicitações');
      }
      const data = await response.json();
      setSolicitacoes(data);
    } catch (error) {
      console.error('Erro ao buscar solicitações:', error);
    }
  };

  useEffect(() => {
    fetchSolicitacoes();
  }, []);

  const filteredSolicitacoes = solicitacoes.filter((solicitacao) => {
    return selectedStatus === '' || solicitacao.status === selectedStatus;
  });

  return (
    <PageContainer>
      <PontistSolicitacoesDeFeriasContainer>
        <Titulo>
          <h2>Solicitações de Férias</h2>
        </Titulo>

        <strong>Status:</strong> 
        <StatusFilter value={selectedStatus} onChange={handleStatusChange}>
          <option value="">Todos</option>
          <option value="APR">Aprovado</option>
          <option value="NEG">Negado</option>
          <option value="USU">Usufruido</option>
          <option value="PEN">Pendente</option>
        </StatusFilter>

        {filteredSolicitacoes.map((solicitacao) => (
          <SolicitacaoContainer key={solicitacao.id} status={solicitacao.status}>
            <Info>
              <p>
                Data de Início: <strong>{new Date(solicitacao.data_inicio).toLocaleDateString()}</strong>
              </p>
              <p>
                Data de Fim: <strong>{new Date(solicitacao.data_fim).toLocaleDateString()}</strong>
              </p>
            </Info>
            <StatusText>
              <p><strong>Status:</strong> {solicitacao.status}</p>
              <StatusIndicator status={solicitacao.status} />
            </StatusText>
          </SolicitacaoContainer>
        ))}
      </PontistSolicitacoesDeFeriasContainer>
    </PageContainer>
  );
};

export default PontistaSolicitacoesDeFerias;
