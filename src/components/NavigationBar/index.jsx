import React, { useState } from "react";
import { FaHome, FaDollarSign, FaCog, FaUser } from "react-icons/fa";
import {
  Navigation,
  NavigationItem,
  Container,
  Chat,
  ChatCircle,
  Icon,
} from "./styles";
import { Themes } from "../../styles/themes";
import { Link } from "react-router-dom";
import iconChat from "../../assets/icons/iconChat.png";

export const NavigationBar = () => {
  const [selectedItem, setSelectedItem] = useState("home");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Container>
      <Navigation>
        <Link to="/home">
          <NavigationItem
            onClick={() => handleItemClick("home")}
            selected={selectedItem === "home"}
          >
            <FaHome
              size={25}
              color={selectedItem === "home" ? Themes.dark : Themes.yellow}
            />
          </NavigationItem>
        </Link>
        <Link to="/faturamento">
          <NavigationItem
            onClick={() => handleItemClick("billing")}
            selected={selectedItem === "billing"}
          >
            <FaDollarSign
              size={25}
              color={selectedItem === "billing" ? Themes.dark : Themes.yellow}
            />
          </NavigationItem>
        </Link>
        <Link to="/configuracao">
          <NavigationItem
            onClick={() => handleItemClick("settings")}
            selected={selectedItem === "settings"}
          >
            <FaCog
              size={25}
              color={selectedItem === "settings" ? Themes.dark : Themes.yellow}
            />
          </NavigationItem>
        </Link>
        <Link to="/profile">
          <NavigationItem
            onClick={() => handleItemClick("profile")}
            selected={selectedItem === "profile"}
          >
            <FaUser
              size={25}
              color={selectedItem === "profile" ? Themes.dark : Themes.yellow}
            />
          </NavigationItem>
        </Link>
      </Navigation>
    </Container>
  );
};
