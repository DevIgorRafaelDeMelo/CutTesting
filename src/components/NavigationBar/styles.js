import styled, { keyframes } from 'styled-components';
import { Themes } from '../../styles/themes';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${Themes.black};
  width: 100%;
  height: 70px;
`;

export const Chat = styled.div`
  z-index: 1;
  width: 100%;
  height: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  background-color: ${Themes.yellow};
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export const Icon = styled.img`
  width: 30px;

`;

export const NavigationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;
  color: ${(props) => (props.selected ? Themes.dark : Themes.yellow)};
  background-color: ${(props) => (props.selected ? Themes.yellow : 'transparent')};
  border-radius: 50%;
  cursor: pointer;


  &:hover {
    animation: ${pulseAnimation} 0.5s ;
  }
`;
