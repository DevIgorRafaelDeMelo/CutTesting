import styled from "styled-components";

export const SectionSaldo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  color: white;
`;

export const Title = styled.div`
  margin-top: 20%;
  padding: 20px;
  h2 {
    font-weight: 500;
    font-size: 18px;
  }
  h3 {
    text-align: center;
    color: #f0c106;
    margin-bottom: 20px;
  }
  h1 {
    padding: 0px 40px 0px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    color: #f0c106;
    padding-top: 10px;
  }
  div2 {
    height: 40px;
    width: 200px;
    background: #3b3b3b;
  }
`;

export const CardStatus = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
  h1 {
    font-size: 13px;
    text-align: center;
    font-size: 20px;
    font-family: 300;
  }
  section {
    display: flex;
    justify-content: space-between;
    background: #393939;
    padding: 10px;
    border-radius: 20px;
  }
  div {
    background: #1e1e1e;
    width: 40%;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    h1 {
      font-size: 20px;
    }
    h2 {
      font-weight: 200;
      font-size: 10px;
      color: #f0c106;
    }
    h3 {
      font-size: 15px;
    }
  }
  h4 {
    padding-top: 20px;
    font-size: 20px;
    font-weight: 200;
  }
`;
