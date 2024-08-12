import React from 'react';
import { StyledButton } from './ButtonStyles';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (React.MouseEventHandler<HTMLButtonElement>);
}
const Button: React.FC<ButtonProps> = ({ onClick , children: text }) => {
  return (
    <StyledButton onClick= {onClick}>
      {text}
    </StyledButton>
  );
}

export default Button;
