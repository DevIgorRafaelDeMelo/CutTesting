import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  Saudation,
  HomeContainer,
  Statusbar,
  SectionDaily,
  DayCard,
  SectionDiary,
  CardAgenda,
} from "./styles";
import { useNavigate } from "react-router-dom";

// Objeto representandos os dados do DB Temporario
import ArrayAgenda from "../../ObjPessoaBD";

export const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [statusbarCloseOpen, setStatusbatCloseOpen] = useState(false);
  const now = new Date();
  const arrayDays = [0, 1, 2, 3, 4, 5, 6];
  useEffect(() => {
    // Adicione um observador de alterações de autenticação
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      //Variavel Statica para inicia app
      user = true;

      if (!user) {
        // Se o usuário não estiver autenticado, redirecione para a página de apresentação
        navigate("/");
      } else {
        // Recupere o nome do usuário a partir do Firestore
        const userId = user.uid;
        const firestore = firebase.firestore();
        const userRef = firestore.collection("barbeiros").doc(userId);

        userRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              const userData = doc.data();
              setUserName(userData.name); // Defina o nome do usuário no estado
            } else {
              console.log("Documento não encontrado");
            }
          })
          .catch((error) => {
            console.error("Erro ao buscar dados do usuário:", error);
          });
      }
    });

    return () => {
      // Certifique-se de cancelar a inscrição quando o componente for desmontado
      unsubscribe();
    };
  }, [navigate]);

  return (
    <>
      <HomeContainer>
        <Saudation>
          <h1>Olá{userName}, Lucas Konzen</h1>
          <Statusbar>
            {statusbarCloseOpen ? (
              <>
                <div></div>
                <h1>Open</h1>
              </>
            ) : (
              <>
                <div2></div2>
                <h1>Close</h1>
              </>
            )}
          </Statusbar>
        </Saudation>
        <SectionDaily>
          {arrayDays.map((day) => {
            return (
              <DayCard>
                <h1>{now.getDate() + day}</h1>
                <h2>{now.getDay() + day == 1 ? <>SEG</> : <></>}</h2>
                <h2>{now.getDay() + day == 2 ? <>TER</> : <></>}</h2>
                <h2>{now.getDay() + day == 3 ? <>QUA</> : <></>}</h2>
                <h2>{now.getDay() + day == 4 ? <>QUI</> : <></>}</h2>
                <h2>{now.getDay() + day == 5 ? <>SEX</> : <></>}</h2>
                <h2>{now.getDay() + day == 6 ? <>SAB</> : <></>}</h2>
                <h2>{now.getDay() + day == 7 ? <>DOM</> : <></>}</h2>
                <h2>{now.getDay() + day == 8 ? <>SEG</> : <></>}</h2>
                <h2>{now.getDay() + day == 9 ? <>TER</> : <></>}</h2>
                <h2>{now.getDay() + day == 10 ? <>QUA</> : <></>}</h2>
                <h2>{now.getDay() + day == 11 ? <>QUI</> : <></>}</h2>
                <h2>{now.getDay() + day == 12 ? <>SEX</> : <></>}</h2>
                <h2>{now.getDay() + day == 13 ? <>QUI</> : <></>}</h2>
                <h2>{now.getDay() + day == 14 ? <>SEX</> : <></>}</h2>
              </DayCard>
            );
          })}
        </SectionDaily>
        <SectionDiary>
          <h1>Agenda do Dia</h1>
          {ArrayAgenda.map((Val) => {
            return (
              <CardAgenda>
                <div>{Val.horario}</div>
                <h2> {Val.nome}</h2>
                <h1>Contato: {Val.telefone}</h1>
                <h1>Serviço: {Val.servico}</h1>
                <h1>Status Pgm: {Val.statusPayment}</h1>
                <section></section>
              </CardAgenda>
            );
          })}
        </SectionDiary>
      </HomeContainer>
    </>
  );
};
