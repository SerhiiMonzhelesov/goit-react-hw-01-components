import styled from 'styled-components';

export const StyledStatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  padding: 8px 13px;
  gap: 7px;
  color: #0a0d0abd;
  font-weight: 600;
  font-size: 16px;
  background-color: ${props => props.$bgColor};

  & .percentage {
    font-size: 12px;
    font-weight: 700;
  }
`;
