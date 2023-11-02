function Pessoa(horario, nome, telefone, servico, statusPayment) {
  // eslint-disable-next-line no-unused-expressions
  (this.horario = horario),
    (this.nome = nome),
    (this.telefone = telefone),
    (this.servico = servico),
    (this.statusPayment = statusPayment);
}

const ArrayAgenda = [];

const pessoa1 = new Pessoa(
  "17:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa2 = new Pessoa(
  "13:30",
  "Ana",
  "(51) 999999-9999",
  "Cabelo",
  "Pago"
);
const pessoa3 = new Pessoa(
  "14:30",
  "Paulo",
  "(51) 99999-9999",
  "Barba",
  "Pago"
);
const pessoa4 = new Pessoa(
  "16:30",
  "Renato",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa5 = new Pessoa(
  "17:30",
  "Lucas",
  "(51) 9999-9999",
  "Bigode",
  "Pago"
);
const pessoa6 = new Pessoa(
  "17:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa7 = new Pessoa(
  "12:30",
  "Roberto",
  "(51) 9999-9999",
  "Barba",
  "Pago"
);
const pessoa8 = new Pessoa(
  "13:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa9 = new Pessoa(
  "14:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa10 = new Pessoa(
  "15:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa11 = new Pessoa(
  "16:30",
  "Roberto",
  "(51) 9999-9999",
  "Barba",
  "Pago"
);
const pessoa12 = new Pessoa(
  "17:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa13 = new Pessoa(
  "17:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa14 = new Pessoa(
  "15:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa15 = new Pessoa(
  "17:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa16 = new Pessoa(
  "12:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa17 = new Pessoa(
  "14:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa19 = new Pessoa(
  "15:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa20 = new Pessoa(
  "16:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);
const pessoa21 = new Pessoa(
  "17:30",
  "Roberto",
  "(51) 9999-9999",
  "Cabelo",
  "Pago"
);

ArrayAgenda.push(pessoa1, pessoa2, pessoa3);
ArrayAgenda.push(pessoa4, pessoa9, pessoa14);
ArrayAgenda.push(pessoa5, pessoa10, pessoa15);
ArrayAgenda.push(pessoa6, pessoa11, pessoa16);
ArrayAgenda.push(pessoa7, pessoa12, pessoa17);
ArrayAgenda.push(pessoa8, pessoa13, pessoa19);
ArrayAgenda.push(pessoa20, pessoa21);

export default ArrayAgenda;
