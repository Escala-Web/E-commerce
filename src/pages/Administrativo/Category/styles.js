import styled from 'styled-components';

// Estilização da tabela
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

// Estilização dos cabeçalhos da tabela
export const StyledTh = styled.th`
  background-color: rgba(237, 50, 56, 0.84);
  color: white;
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
`;

// Estilização das células da tabela
export const StyledTd = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
`;

// Estilização das linhas da tabela
export const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;


export const ContainerAction = styled.div`

  display: flex;
  align-items: center;

  width: 100%;
  justify-content: center;

  gap: .4rem;

`;

export const ContainerActionEdit = styled.div`

  background: #26adff;

  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  cursor: pointer;
  color: #fff;
  transition:.1s;
  &:hover {
    transform:scale(1.08) ;
  }
`;

export const ContainerActionDelete = styled.div`

  background:rgb(255, 56, 38);

  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  cursor: pointer;
  transition:.1s ;
  &:hover {
    transform:scale(1.08) ;
  }
`;


export const ContainerModal = styled.div`

  position: fixed;
  width: 100%;
  background-color: #00000054;
  height: 100vh;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ContainerModalSection = styled.div`

  z-index: 9999999999999;
  width: 40%;

`;