import React from 'react';
import { StyledImg } from './ImageStyles';

interface ImageProps {
  image: string;
  alt: string;
  [key: string]: any;
}

const Image: React.FC<ImageProps>  = ({ image, alt, ...props }) => {
  return <StyledImg src={image} alt={alt} {...props}></StyledImg>;
};

export default Image;
