import React from 'react'
import { StyledCustomLink } from './CustomLinkStyles';

interface CustomLinkProps{
  to: string;
  prefetch?: boolean;
  label?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const CustomLink: React.FC<CustomLinkProps> =({ to, prefetch, label, children, ...props }) => {
  return (
    <StyledCustomLink href={to} prefetch={prefetch ? undefined : false} {...props}>
      {label ? label : children}</StyledCustomLink>
  )
}

export default CustomLink;