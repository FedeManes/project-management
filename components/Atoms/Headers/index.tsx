import React from 'react';
import { StyledHeader } from './HeadersStyles';

interface HeadersProps{
  htmlTag: React.ElementType;
  children: string;
}
const Headers: React.FC<HeadersProps> = ({ htmlTag, children: text }) =>{
  return (
    <StyledHeader
      as={htmlTag}
    >
      {text}
    </StyledHeader>
  );
}

export default Headers; 