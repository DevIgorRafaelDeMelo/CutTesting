import { SectionSaldo, Title, CardStatus } from "./styles";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import React, { useState } from "react";

export const Faturamento = () => {
  const [eyeOpen, setEyeOpen] = useState(true);

  return (
    <>
      <SectionSaldo>
        <Title>
          <h3>Análise Diarias </h3>
          <h2>Fatura de hoje</h2>
          <h1>
            {eyeOpen ? <div>R$ 176,99</div> : <div2 />}
            <span onClick={() => setEyeOpen(!eyeOpen)}>
              {eyeOpen ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </h1>
        </Title>
        <CardStatus>
          <h1>Relatório Diario</h1>
          <section>
            <div>
              <h1>25</h1>
              <h2>Serviço</h2>
            </div>
            <div>
              {eyeOpen ? <h3>R$ 250,00</h3> : <></>}
              <h2>Saldo total</h2>
            </div>
            <h4>80%</h4>
          </section>
        </CardStatus>
        <CardStatus>
          <h1>Relatório Semana</h1>
          <section>
            <div>
              <h1>225</h1>
              <h2>Serviço</h2>
            </div>
            <div>
              {eyeOpen ? <h3>R$ 1250,00</h3> : <></>}
              <h2>Saldo total</h2>
            </div>
            <h4>80%</h4>
          </section>
        </CardStatus>
        <CardStatus>
          <h1>Relatório Mensal</h1>
          <section>
            <div>
              <h1>2512</h1>
              <h2>Serviço</h2>
            </div>
            <div>
              {eyeOpen ? <h3>R$ 11250,00</h3> : <></>}
              <h2>Saldo total</h2>
            </div>
            <h4>80%</h4>
          </section>
        </CardStatus>
      </SectionSaldo>
    </>
  );
};
