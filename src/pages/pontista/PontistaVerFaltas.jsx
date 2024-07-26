import React, { useState, useEffect } from 'react'
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

const PontistaVerFaltasContainer = styled.div`
  width: 90vw;
  max-width: 800px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PontistaFaltaContainer = styled.div`
    
`;

const PontistaVerFaltas = () => {
  return (
    <PageContainer>
      <PontistaVerFaltasContainer>
        <h2>Faltas</h2>
      </PontistaVerFaltasContainer>
    </PageContainer>
  );
};

export default PontistaVerFaltas;
