import styled from "styled-components";
import { Themes } from "../../styles/themes";

export const Container = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 160px;
  margin-top: -30px;
`;

export const Mock = styled.img`
  width: 150px;
`;
export const Slogan = styled.h1`
  color: ${Themes.yellow};
  font-size: 10px;
  margin-top: -40px;
`;

export const Icons = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin-top: 30px;
`;

export const Slide1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const Slide2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: ${Themes.yellow};
  margin: 40px;
  max-height: 30%;
`;

export const Title = styled.h2`
  color: white;
  font-size: 20px;
`;
export const Text = styled.h3`
  color: ${Themes.dark};
  font-size: 10px;
`;
export const Paragrafo = styled.div`
  margin: 30px;
`;

export const Slide3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${Themes.dark};
`;

export const Slide4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 30%;
  background-color: ${Themes.yellow};
  max-height: 30%;
`;

export const Slide3img = styled.img`
  width: 180px;
  margin-bottom: 20px;
  margin-right: 20px;
`;
