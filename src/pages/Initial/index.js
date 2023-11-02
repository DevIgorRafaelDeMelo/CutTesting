import logo from "../../assets/LOGO png y.png";
import mock from "../../assets/mock.png";
import mock3 from "../../assets/mock3.png";
import mock2 from "../../assets/mock2.png";
import icon from "../../assets/image 13.png";
import icon2 from "../../assets/image 14.png";
import icon3 from "../../assets/image 15.png";
import icon4 from "../../assets/image 16.png";
import anunce from "../../assets/anunce.png";
import {
  Container,
  Logo,
  Mock,
  Slogan,
  Icons,
  Slide1,
  Slide2,
  Title,
  Text,
  Paragrafo,
  Slide3,
  Slide4,
  Slide3img,
} from "./styles";
import { Header } from "../../components/Header";

export const Initial = () => {
  return (
    <>
      <Header />
      <Container>
        <Slide1>
          <Logo src={logo} alt="logo" />
          <Slogan>O prazer de se cuidar está aqui!</Slogan>
          <Icons>
            <img src={icon} alt="icon" />
            <img src={icon2} alt="icon" />
            <img src={icon3} alt="icon" />
            <img src={icon4} alt="icon" />
          </Icons>
        </Slide1>
        <Slide2>
          <Paragrafo>
            <Title>What is Lorem Ipsum?</Title>
            <Text>
              fringilla ipsum. Ut porttitor purus facilisis massa commodo, vel
              commodo nunc iaculis.
            </Text>
          </Paragrafo>
          <Mock src={mock3} alt="mock " />
        </Slide2>
        <Slide3>
          <Slide3img src={mock} alt="mock " />
          <Slide3img src={anunce} alt="mock " />
        </Slide3>
        <Slide4>
          <Paragrafo>
            <Title>What is Lorem Ipsum?</Title>
            <Text>
              fringilla ipsum. Ut porttitor purus facilisis massa commodo, vel
              commodo nunc iaculis.
            </Text>
          </Paragrafo>
          <Mock src={mock2} alt="mock " />
        </Slide4>
      </Container>
    </>
  );
};
