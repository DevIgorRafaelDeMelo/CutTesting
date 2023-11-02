import styled from "styled-components";

export const Button2 = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

export const Bar = styled.div`
  width: 20px;
  height: 2px;
  background-color: #ffb900;
  transition: background-color 0.9s;
  transform: ${(props) =>
    props.open ? "rotate(45deg) translate(2px, 2px)" : "none"};
  &:nth-child(2) {
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${(props) =>
      props.open ? "rotate(-45deg) translate(2px, -2px)" : "none"};
  }
`;
