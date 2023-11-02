import styled from "styled-components";
import { Themes } from "../../styles/themes";

export const Container = styled.div`
  width: 100%;
  height: 10%;
  max-height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: ${Themes.black};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0px;
`;

export const Logo = styled.img`
  width: 100px;
  margin-left: 15px;
`;

export const MenuHoriz = styled.div`
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  right: ${({ open }) =>
    open ? "0" : "-300px"}; /* Slide para fora da tela quando fechado */
  width: 300px;
  padding: 30px;
  height: 100%;
  z-index: 1;
  background-color: ${Themes.black};
  transition: right 0.5s ease-in-out;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Buttons = styled.div`
  width: 200%;
  margin-top: 100px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
export const ButtonContainer = styled.div`
  z-index: 120;
  padding: 15px;
`;

export const LogoBrain = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 40px;
  img {
    height: 12vh;
  }
`;
