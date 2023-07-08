import styled from 'styled-components';

export const StyledTransactionHystory = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  border-collapse: collapse;
  font-size: 12px;
  table-layout: fixed;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.78);

  & thead {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background-color: #759fe0;
    color: #e3dcd5;
  }

  & th,
  td {
    width: 100px;
    min-width: 0;
    border: 1px solid #e3dada;
    text-align: center;
    padding: 10px 4px;
  }

  & td {
    font-size: 10px;
  }

  & tbody {
    background-color: #dedefd;
    color: #575751;
  }

  tbody tr:nth-child(even) {
    background-color: #b5b6f6;
  }
`;
