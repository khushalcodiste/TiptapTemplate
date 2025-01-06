'use client';

import { useRef } from 'react';

import { StyledContainer, StyledImageContainer } from './ImageSelector.styled';

import { ImageSearchOptions } from '@/types/presentation';

export function ImageSelector({
  defaultSrc,
  src,
  alt,
  renderImage,
}: {
  defaultSrc: string;
  src: string;
  alt: string;
  renderImage: (props: ImageSearchOptions) => JSX.Element;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <StyledContainer ref={containerRef}>
      <StyledImageContainer className="image-selector image-selector-wrapper">
        {renderImage({ src: src || defaultSrc, alt } as ImageSearchOptions)}
      </StyledImageContainer>
    </StyledContainer>
  );
}
