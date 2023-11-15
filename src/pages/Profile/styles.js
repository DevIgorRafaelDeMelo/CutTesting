import styled from "styled-components";
import { Themes } from "../../styles/themes";

export const Perfil = styled.div`
  padding-top: 10vh;
  h1 {
    padding-top: 10px;
    text-align: center;
    color: ${Themes.yellow};
    font-size: 20px;
  }
`;

export const Box = styled.div`
  background: #272727;
  width: 90%;
  margin: auto;
  border-radius: 20px;
  text-align: center;
  margin-top: 20px;
  padding-bottom: 20px;
  img {
    margin-top: 20px;
    height: 100px;
    width: 100px;
    background: red;
    background-size: cover;
    border-radius: 100%;
    border: 5px solid white;
  }
  h2 {
    color: white;
    font-size: 15px;
    font-weight: 300;
  }
  h3 {
    color: ${Themes.yellow};
    font-size: 15px;
  }
  h4 {
    margin-top: 20px;
    color: white;
  }
  section {
    width: 25%;
    background: white;
    height: 100px;
  }
`;

export const CardStatus = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  div {
    border-radius: 10px;
    background: white;
    width: 30%;
    justify-content: space-between;
    margin: auto;
    padding: 10px 0px 10px 0px;
    h1 {
      font-size: 13px;
      color: black;
      padding: 0%;
    }
    h2 {
      color: ${Themes.yellow};
      font-size: 20px;
      font-weight: 800;
      span {
        font-size: 10px;
      }
    }
  }
`;

export const BarNvl = styled.div`
  background: #565656;
  width: 50%;
  margin: auto;
  margin-top: 5px;
  border-radius: 100px;
  height: 10px;
  div {
    border-radius: 100px;
    height: 10px;
    width: 40%;
    background: ${Themes.yellow};
  }
`;

export const HypeLinks = styled.div`
  color: white;
  padding: 30px;
  svg {
    height: 25px;
    width: 25px;
    margin-right: 40px;
  }
  h1 {
    color: white;
    font-size: 15px;
    font-weight: 300;
    padding: 0px;
  }
  div {
    margin-top: 20px;
    display: flex;
  }
`;
