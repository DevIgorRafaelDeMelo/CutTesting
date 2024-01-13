import React from "react";
import { Title, CardOpc, SecCard } from "./style";

export const Configuracao = () => {
  const chargeColor = (Nub, bol) => {
    const elemento = document.getElementById(Nub);
    const cor = getComputedStyle(elemento).background;
    console.log(cor);
    if (
      cor ==
      "rgb(255, 204, 0) none repeat scroll 0% 0% / auto padding-box border-box"
    ) {
      elemento.setAttribute("style", "background-color: #414141;");
    } else {
      elemento.setAttribute("style", "background-color: #ffcc00;");
    }
  };

  return (
    <>
      <Title>Configuração</Title>
      <SecCard>
        <CardOpc id="1" onClick={() => chargeColor(1)}>
          Notificações gerais
        </CardOpc>
        <CardOpc id="2" onClick={() => chargeColor(2)}>
          Som
        </CardOpc>
        <CardOpc id="3" onClick={() => chargeColor(3)}>
          Vibração
        </CardOpc>
        <CardOpc id="4" onClick={() => chargeColor(4)}>
          Ofertas Especiais
        </CardOpc>
        <CardOpc id="5" onClick={() => chargeColor(5)}>
          Pagamentos
        </CardOpc>
        <CardOpc id="6" onClick={() => chargeColor(6)}>
          Cashback
        </CardOpc>
      </SecCard>
    </>
  );
};
