import React from 'react';
import { Button2, Bar } from './styles';



export const HamburgerButton = ({ onClick, isOpen }) => {
  return (
    <Button2 onClick={onClick}>
      <Bar open={isOpen}></Bar>
      <Bar open={isOpen}></Bar>
      <Bar open={isOpen}></Bar>
    </Button2>
  );
};