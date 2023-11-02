import React, { useState } from "react";
import { Container, Logo, MenuHoriz, Buttons, ButtonContainer } from "./styles";
import logo from "../../assets/LOGO png y.png";
import { Button } from "../Button";
import { HamburgerButton } from "../MenuHamburger";
import { useNavigate } from "react-router-dom";
import { LogoBrain } from "./styles";
import IMGLogo from "../../assets/LOGO ATUAL3.png";

export const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRegister = () => {
    setIsMenuOpen(false);
    navigate("/register");
  };

  const handleButtonClick = () => {
    navigate("/login");
    setIsMenuOpen(false);
  };

  return (
    <>
      <Container>
        <Logo src={logo} alt="logo" />
        <ButtonContainer>
          <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen} />
        </ButtonContainer>
      </Container>

      <MenuHoriz open={isMenuOpen}>
        <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen} />
        <LogoBrain>
          <img src={IMGLogo} />
        </LogoBrain>
        <Buttons>
          <Button onClick={handleButtonClick} title="Login" />
          <Button onClick={handleRegister} title="Registro" />
          <Button onClick={handleButtonClick} title="Saiba mais" />
        </Buttons>
      </MenuHoriz>
    </>
  );
};
