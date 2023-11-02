import React from "react";
import { ButtonContainer } from "./styles";

export const Button = ({
    title,
    type,
    onClick,
    onChange,
    color,
  }) => {
    return (
      <ButtonContainer
        type={type}
        onClick={onClick ? onClick : undefined}
        onChange={onChange ? onChange : undefined}
        color={color}
      >
        {title}
      </ButtonContainer>
    )
  }

  export default Button