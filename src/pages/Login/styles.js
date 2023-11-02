import styled from "styled-components";
import { Themes } from "../../styles/themes";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
`;

export const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 600px; // Ajuste a largura máxima do formulário
  width: 100%;
`;

export const FormColumn = styled.div`
  margin: auto;
  padding: 0px 50px;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  text-align: start;
  width: 100%;
  padding: 10px;
  text-align: center;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 50px;
`;

export const GenderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 40%;
  margin-bottom: 15px;
  color: white;
  font-size: 0.7rem;
`;

export const TermsLabel = styled.label`
  margin-left: 5px;
  color: ${Themes.white};
`;

export const LinkToLogin = styled.div`
  margin-top: 40px;
  color: white;
  font-size: 0.6rem;
  a {
    color: ${Themes.yellow};
    cursor: pointer;
  }
`;

export const LogoBanner = styled.div`
  img {
    height: 200px;
  }
`;

export const Button = styled.button`
  width: 73%;
  padding: 15px;
  border: none;
  border-radius: 50px;
  color: white;
  background: ${Themes.yellow};
`;

export const RecuperarConta = styled.button`
  background: ${Themes.dark};
  border: none;
  color: ${Themes.white};
  font-size: 0.7rem;
  margin-top: 10px;
  padding-left: 40%;
`;

export const MidiaSocialBox = styled.div`
  width: 40%;
  margin: AUTO;
  display: flex;
  margin-top: 30px;
  height: 40px;
  justify-content: space-between;
  img {
    border-radius: 100%;
  }
`;

export const LogoBrain = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 40px;
  img {
    height: 12vh;
  }
`;
