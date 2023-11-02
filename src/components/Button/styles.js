import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background: #fbbb00;
  border-radius: 22px;
  position: relative;

  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 50%;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
    min-width: 167px;
    padding: 10px;
    border: none;
    margin-bottom:40px;

    background: #FBBB00;

    &::after{
        content: '',
        position: absolute;
        border: 1px solid #FBBB00;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
    }
`}
`;
