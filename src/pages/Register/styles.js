// styles.js
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
  padding: 40px;
  padding-top: 0px;
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${Themes.yellow};
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: white;
  font-size: 0.8rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 50px;
  text-align: center;
`;

export const GenderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  font-size: 0.7rem;
  color: white;
  margin-bottom: 15px;
  margin: auto;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  text-align: center;
  font-size: 0.8rem;
  color: white;
`;

export const TermsLabel = styled.label`
  margin-left: 5px;
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

export const LogoBrain = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 40px;
  img {
    height: 12vh;
  }
`;
