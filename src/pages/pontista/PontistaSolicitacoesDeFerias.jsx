import React from 'react';
import styled from 'styled-components';
import useSolicitacoesDeFerias from '../../hooks/pontista/useFetchSolicitacoesFerias';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;

const PontistSolicitacoesDeFeriasContainer = styled.div`
  width: 90vw;
  max-width: 800px;
  height: 1;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  max-height: calc(100vh - 40px); 
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
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;

const StatusIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    switch (status) {
      case 'APR':
        return '#28a745';
      case 'NEG':
        return '#dc3545';
      case 'USU':
        return '#116de5';
      default:
        return '#e3aa1b';
    }
  }};
  margin-right: 10px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 10px;
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
`;

const PontistaSolicitacoesDeFerias = () => {
  const { solicitacoes, selectedStatus, handleStatusChange } = useSolicitacoesDeFerias();

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

        {/* Renderize as solicitações filtradas */}
        {solicitacoes.map((solicitacao) => (
          <SolicitacaoContainer key={solicitacao.id}>
            <Info>
              <p>
                Data de Início: <strong>{new Date(solicitacao.data_inicio).toLocaleDateString()}</strong>
              </p>
              <p>
                Data de Fim: <strong>{new Date(solicitacao.data_fim).toLocaleDateString()}</strong>
              </p>
              <p>Status: <strong>{solicitacao.status}</strong></p>
              <StatusIndicator status={solicitacao.status} />
            </Info>
          </SolicitacaoContainer>
        ))}
      </PontistSolicitacoesDeFeriasContainer>
    </PageContainer>
  );
};

export default PontistaSolicitacoesDeFerias;