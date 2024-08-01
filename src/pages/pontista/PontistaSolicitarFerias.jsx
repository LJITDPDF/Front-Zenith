import React from 'react'
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
    width: 650px;
    height: 400px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

const PontistaSolicitarFerias = () => {
  return (
    <PageContainer>
      <PontistaSolicitarFeriasContainer>
        <h1>Solicitar Férias</h1>
      </PontistaSolicitarFeriasContainer>
    </PageContainer>
  );
};

export default PontistaSolicitarFerias;
