'use client';

import { StyledContainer, StyledViewWrapper } from './PresentationLayout.styled';

export function PresentationLayout({ children }: { children: React.ReactNode }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export function PresentationViewWrapper({ visible, children }: { visible: boolean; children: React.ReactNode }) {
  return <StyledViewWrapper $visible={visible}>{children}</StyledViewWrapper>;
}
