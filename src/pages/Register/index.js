import React, { useState } from "react";
import {
  FormContainer,
  FormLabel,
  FormInput,
  FormColumn,
  GenderContainer,
  CheckboxContainer,
  TermsLabel,
  LinkToLogin,
  LogoBanner,
  Button,
  LogoBrain,
} from "./styles";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import logoImgBanner from "../../assets/LOGO png y.png";
import { firebaseConfig } from "../../server/firebaseConfig";
import Logo from "../../assets/LOGO ATUAL3.png";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

export const Register = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [complement, setComplement] = useState("");
  const [number, setNumber] = useState("");
  const [cpf, setCpf] = useState("");
  const [gender, setGender] = useState("masculino"); // Valor padrão como masculino
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async () => {
    try {
      if (!termsAccepted) {
        console.error(
          "Você deve aceitar os termos de contrato para prosseguir."
        );
        return;
      }

      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        senha
      );
      const user = userCredential.user;

      await firestore.collection("barbeiros").doc(user.uid).set({
        name: nome,
        email: user.email,
        uf,
        city,
        address,
        birthdate,
        complement,
        number,
        cpf,
        gender,
        registrationStatus: true,
        registrationDate: new Date().toISOString(),
      });
      navigate("/login");
      // localStorage.setItem('user', JSON.stringify({ name, email, ... outras informações }));
    } catch (error) {
      console.error("Erro no registro:", error);
    }
  };

  return (
    <>
      <FormContainer>
        <a href="/">
          <LogoBanner>
            <img src={logoImgBanner} alt="icon" />
          </LogoBanner>
        </a>
        <FormColumn>
          <FormInput
            placeholder="Nome"
            type="text"
            id="name"
            name="name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <FormInput
            placeholder="E-mail"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            placeholder="Senha"
            type="password"
            id="password"
            name="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <FormInput
            placeholder="CPF"
            type="text"
            id="cpf"
            name="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />

          <FormInput
            placeholder="Data de Aniversario"
            type="date"
            id="birthdate"
            name="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </FormColumn>
        <FormColumn>
          <FormInput
            placeholder="CEP"
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <FormInput
            placeholder="Numero"
            type="text"
            id="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <FormInput
            placeholder="Complemento"
            type="text"
            id="complement"
            name="complement"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />
          <FormInput
            placeholder="Endereço"
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <FormInput
            placeholder="UF"
            type="text"
            id="uf"
            name="uf"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
          />

          <FormLabel htmlFor="gender">Sexo:</FormLabel>
          <GenderContainer>
            <label>
              <input
                type="radio"
                name="gender"
                value="masculino"
                checked={gender === "masculino"}
                onChange={() => setGender("masculino")}
              />
              Masculino
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="feminino"
                checked={gender === "feminino"}
                onChange={() => setGender("feminino")}
              />
              Feminino
            </label>
          </GenderContainer>

          <CheckboxContainer>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <TermsLabel>Eu aceito os termos de contrato</TermsLabel>
          </CheckboxContainer>
        </FormColumn>
        <Button type="submit" title="Registrar" onClick={handleSubmit}>
          REGISTRAR
        </Button>
        <LinkToLogin>
          <p>
            Já tem uma conta? <a href="/login">Logue agora</a>
          </p>
        </LinkToLogin>
      </FormContainer>
      <LogoBrain>
        <img src={Logo} />
      </LogoBrain>
    </>
  );
};
