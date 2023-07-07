import styled from 'styled-components';

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 30px 0;
  border: 1px solid #e3dada;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.78);

  & .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 10px 10px;
    background: #fef8ff;
    gap: 10px;
    color: #656561;
  }

  & img {
    width: 100%;
  }

  & p {
    margin: 0;
  }

  & p.name {
    font-weight: bold;
    font-size: 24px;
  }

  & p.location {
    font-size: 12px;
  }
`;

export const StyledStats = styled.ul`
  box-sizing: border-box;
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  background: #fdfdea;

  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc((100% - 15px) / 2);
    padding: 10px 0;
    border: 1px solid #e3dada;
  }

  & .label {
    margin-bottom: 5px;
    color: #868ce2;
    font-weight: 700;
  }

  & .quantity {
    font-size: 12px;
    font-weight: bold;
    color: #656561;
  }
`;
