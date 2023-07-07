import styled from 'styled-components';

export const StyledStatistics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  background: #f1d2d2;
  border-radius: 8px;
  border: 1px solid #e3dada;
  overflow: hidden;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.78);

  & h2 {
    text-transform: uppercase;
    font-size: 20px;
    color: #bc4eb2;
  }

  & ul {
    list-style: none;
    padding: 0;
    display: flex;
    width: 300px;
    margin: 0;
  }
`;
