import React, { useState } from "react";
import { Container, Logo, MenuHoriz, Buttons, ButtonContainer } from "./styles";
import logo from "../../assets/LOGO png y.png";
import { Button } from "../Button";
import { HamburgerButton } from "../MenuHamburger";
import { useNavigate } from "react-router-dom";
import { LogoBrain } from "./styles";
import IMGLogo from "../../assets/LOGO ATUAL3.png";
import { useAuth } from "../../routes/authContext";

export const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRegister = () => {
    setIsMenuOpen(false);
    navigate("/register");
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setIsMenuOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <div>
      <Container>
        <Logo src={logo} alt="logo" />
        <ButtonContainer>
          <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen} />
        </ButtonContainer>
      </Container>

      <MenuHoriz open={isMenuOpen}>
        <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen} />
        <LogoBrain>
          <img src={IMGLogo} alt="Logo" />
        </LogoBrain>
        <Buttons>
          {user ? (
            <Button onClick={handleLogout} title="Logout" />
          ) : (
            <>
              <Button onClick={() => navigate("/login")} title="Login" />
              <Button onClick={handleRegister} title="Registro" />
              <Button
                onClick={() => navigate("/saiba-mais")}
                title="Saiba mais"
              />
            </>
          )}
        </Buttons>
      </MenuHoriz>
    </div>
  );
};
