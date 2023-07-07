import styled from 'styled-components';

export const StyledFriend = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  padding: 10px 10px 10px 15px;
  border-radius: 10px;
  background: #fef8ff;
  gap: 25px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.78);

  & .avatar {
    filter: drop-shadow(0px 0px 5px #000000);
  }

  & .status {
    width: 15px;
    height: 15px;
    background: ${props => (props.$isOnline ? 'green' : 'red')};
    border-radius: 50%;
    box-shadow: ${props =>
      props.$isOnline ? '0px 0px 5px 1px rgba(0, 128, 0, 0.78)' : 'none'};
    animation: ${props =>
      props.$isOnline ? 'pulseStatus 800ms alternate infinite' : 'none'};
    @keyframes pulseStatus {
      0% {
        box-shadow: none;
      }
      100% {
        box-shadow: 0px 0px 5px 1px rgba(0, 128, 0, 0.78);
      }
    }
  }

  & .name {
    margin: 0 0 0 30px;
  }
`;
