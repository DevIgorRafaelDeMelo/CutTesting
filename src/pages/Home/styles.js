import styled from "styled-components";
import { Themes } from "../../styles/themes";

export const Saudation = styled.div`
  color: ${Themes.white};
  padding: 10px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  h1 {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

export const HomeContainer = styled.div`
  overflow: hidden;
  padding-top: 15%;
`;

export const Statusbar = styled.div`
  margin-top: 5px;
  background: #262626;
  width: 30%;
  border-radius: 50px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  padding: 5px 30px 5px;

  div {
    background: #44ff00;
    height: 10px;
    width: 10px;
    border-radius: 100%;
  }
  div2 {
    background: #ff0800;
    height: 10px;
    width: 10px;
    border-radius: 100%;
  }
  h1 {
    color: white;
    font-size: 0.5rem;
  }
`;

export const SectionDaily = styled.div`
  display: flex;
  width: 100%;
  overflow-y: scroll;
  padding: 10px;
  justify-content: space-between;
`;
export const DayCard = styled.div`
  padding: 15px;
  font-size: 0.7rem;
  min-width: 100px;
  text-align: center;
  margin-left: 10px;
  background: #181818;
  border-radius: 20px;
  color: white;
  h1 {
    color: ${Themes.yellow};
  }
`;

export const SectionDiary = styled.div`
  padding: 20px;
  h1 {
    color: ${Themes.yellow};
    font-size: 1rem;
    margin-bottom: 10px;
  }
  margin-bottom: 20%;
`;

export const CardAgenda = styled.div`
  background: #2d2d2d;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  h1 {
    color: white;
    font-size: 1rem;
    font-weight: 500;
  }
  h2 {
    color: ${Themes.yellow};
  }
  section {
    height: 1px;
    width: 80%;
    background: hsla(0, 0%, 18%, 1);
    background: ${Themes.yellow};
    margin: auto;
    margin-top: 30px;
  }
  div {
    margin-left: 70%;
    width: 30%;
    text-align: center;
    border-radius: 50px;
    margin-bottom: 5px;
    font-weight: 700;
    background-color: ${Themes.yellow};
  }
`;
