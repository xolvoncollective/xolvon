import React, { useState } from 'react';
import type { ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  fallbackSrc = 'https://placehold.co/600x400/e2e8f0/475569?text=Image+Not+Found', 
  className = '', 
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt || ''} 
      onError={handleError}
      loading={props.loading || 'lazy'}
      className={`max-w-full h-auto ${className}`}
      {...props}
    />
  );
};

export default Image;
