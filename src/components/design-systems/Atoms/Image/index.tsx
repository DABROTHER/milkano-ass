import React from 'react';
import { ImageProps } from './interaface';
const Image: React.FC<ImageProps> = ({ src, alt, className = 'h-8' }) => {
    return <img src={src} alt={alt} className={className} />;
};

export default Image;
