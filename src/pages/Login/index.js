import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  FormInput,
  FormColumn,
  CheckboxContainer,
  TermsLabel,
  LinkToLogin,
  LogoBanner,
  Button,
  RecuperarConta,
  MidiaSocialBox,
  LogoBrain,
} from "./styles";
import logoImgBanner from "../../assets/LOGO png y.png";
import logoTwitter from "../../assets/twitter.png";
import logoFacebook from "../../assets/facebook.png";
import logoGoogle from "../../assets/Google.png";
import firebase from "firebase/compat/app";
import Logo from "../../assets/LOGO ATUAL3.png";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "../../server/firebaseConfig";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("root@brainlab.com");
  const [senha, setSenha] = useState("123456");
  const [manterConexao, setManterConexao] = useState(false);

  useEffect(() => {
    // Verifique se o usuário já está autenticado ao renderizar a página de login
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Se o usuário já estiver autenticado, redirecione para a página inicial
        navigate("/home");
      }
    });

    return () => unsubscribe(); // Limpar o observador quando o componente for desmontado
  }, [navigate]);

  const handleLogin = async () => {
    //Comando Para testing
    navigate("/home");

    try {
      await auth.setPersistence(
        manterConexao
          ? firebase.auth.Auth.Persistence.LOCAL
          : firebase.auth.Auth.Persistence.SESSION
      );
      await auth.signInWithEmailAndPassword(email, senha);

      // Notificação de login bem-sucedido (para Chrome)
      if ("Notification" in window) {
        if (Notification.permission === "granted") {
          new Notification("Login bem-sucedido!");
        } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              new Notification("Login bem-sucedido!");
            }
          });
        }
      }
      navigate("/home");
    } catch (error) {
      console.error("Erro no login:", error);
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
          <CheckboxContainer>
            <input
              type="checkbox"
              id="manterConexao"
              name="manterConexao"
              checked={manterConexao}
              onChange={(e) => setManterConexao(e.target.checked)}
            />
            <TermsLabel>Manter-me Conectado</TermsLabel>
          </CheckboxContainer>
        </FormColumn>
        <a href="/home"></a>
        <Button type="submit" title="Login" onClick={handleLogin}>
          LOGIN
        </Button>
        <RecuperarConta>Esqueceu sua Senha?</RecuperarConta>
        <LinkToLogin>
          <p>
            Não tem uma conta? <a href="/register">Registre-se agora</a>
          </p>
        </LinkToLogin>
      </FormContainer>
      <MidiaSocialBox>
        <img src={logoGoogle} />
        <img src={logoFacebook} />
        <img src={logoTwitter} />
      </MidiaSocialBox>
      <LogoBrain>
        <img src={Logo} />
      </LogoBrain>
    </>
  );
};
