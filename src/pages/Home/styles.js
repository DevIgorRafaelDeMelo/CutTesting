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
    color: #f0c106;
  }
`;

export const SectionDiary = styled.div`
  padding: 20px;
  h1 {
    color: #f0c106;
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

export const CardAgenda = styled.div`
  background: #2d2d2d;
  padding: 40px;
  margin-bottom: 40px;
  border-radius: 30px;
  h1 {
    color: white;
    font-size: 1rem;
    font-weight: 500;
  }
`;
