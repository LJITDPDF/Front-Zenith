import { useState, useEffect } from 'react';

const useSolicitacoesDeFerias = () => {
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
      console.error('Erro ao buscar solicitações de férias:', error);
    }
  };

  useEffect(() => {
    fetchSolicitacoes();
  }, []);

  const filteredSolicitacoes = solicitacoes.filter((solicitacao) => {
    return selectedStatus === '' || solicitacao.status === selectedStatus;
  });

  return {
    solicitacoes: filteredSolicitacoes,
    selectedStatus,
    handleStatusChange,
  };
};

export default useSolicitacoesDeFerias;