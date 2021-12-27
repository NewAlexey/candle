import React from 'react';

interface IImage {
  src: string;
  alt: string;
}

const Image: React.FC<IImage> = ({
  src,
  alt,
}) => <img src={src} alt={alt} />;
export default Image;
