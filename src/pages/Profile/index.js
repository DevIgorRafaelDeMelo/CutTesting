import { Perfil, CardStatus, Box, BarNvl, HypeLinks } from "./styles";
import ImgProfile from "../../assets/Perfil.png";
import { BsCash, BsPerson, BsBell, BsShieldCheck } from "react-icons/bs";

export const Profile = () => {
  return (
    <Perfil>
      <h1>Perfil</h1>
      <Box>
        <img src={ImgProfile} />
        <h2>João Perreira</h2>
        <h3>Joao@perreira.com.br</h3>
        <h4>Nivel 5</h4>
        <BarNvl>
          <div></div>
        </BarNvl>
        <CardStatus>
          <div>
            <h1>Cortes</h1>
            <h2>89</h2>
          </div>
          <div>
            <h1>Notas</h1>
            <h2>
              7,8<span>/10</span>
            </h2>
          </div>
        </CardStatus>
      </Box>
      <HypeLinks>
        <div>
          <BsPerson />
          <h1>Editar perfil</h1>
        </div>
        <div>
          <BsBell />
          <h1>Notificações</h1>
        </div>
        <div>
          <BsCash />
          <h1>Pagamentos</h1>
        </div>
        <div>
          <BsShieldCheck />
          <h1>Segurança</h1>
        </div>
      </HypeLinks>
    </Perfil>
  );
};
