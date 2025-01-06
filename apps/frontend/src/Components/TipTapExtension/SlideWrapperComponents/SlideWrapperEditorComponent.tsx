import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

import { NodeViewProps } from '@tiptap/core';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';

import styled from 'styled-components';

import SlideComponents from '@/Components/BusinessSlide';

const StyledNodeViewContainer = styled(NodeViewWrapper)`
  width: fit-content;
  aspect-ratio: 16 / 9;
  transform-origin: center center;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  position: relative;

  p {
    word-break: break-word;
  }
`;

const StyledWrapper = styled.div`
  width: 1920px;
  height: 1080px;

  position: relative;
  overflow: hidden;

  background: ${({ theme }) => theme.slideTheme.background};
  border: ${({ theme }) => theme.slideTheme.slideBorder || 'none'};

  & > div[data-node-view-content] {
    width: 100%;
    height: 100%;
    & > div {
      width: 100%;
      height: 100%;
      & > div {
        width: 100%;
        height: 100%;
        & > div {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

const getScaleFactor = (width: number, height: number) => {
  const scale = Math.min((width - 80) / 1920, (height - 80) / 1080);

  return scale;
};

export function SlideWrapperEditorComponent(nodeViewProps: NodeViewProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slideId = nodeViewProps.node.attrs.id as string;

  const adjustSlideDimension = useCallback(() => {
    if (wrapperRef.current?.parentElement) {
      const editorDiv = wrapperRef.current.closest('#editor')?.parentElement;

      if (!editorDiv) return;

      const { width, height } = editorDiv.getBoundingClientRect();
      const scaleX = getScaleFactor(width, height);

      if (wrapperRef.current.style) {
        wrapperRef.current?.setAttribute('style', `transform: scale(${scaleX});`);

        wrapperRef.current
          .querySelectorAll('.node-Slide-actions')
          .forEach((target) =>
            target.setAttribute('style', `transform: scale(${Math.min(1 / scaleX, 10)}) translateX(1rem);`)
          );
      }
    }
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return () => {};

    window.addEventListener('resize', adjustSlideDimension);

    const resizeObserver = new ResizeObserver(() => {
      adjustSlideDimension();
    });

    const editor = wrapperRef.current.closest('#editor');

    if (editor) {
      resizeObserver.observe(editor);
    }

    adjustSlideDimension();

    return () => {
      window.removeEventListener('resize', adjustSlideDimension);
    };
  });

  useLayoutEffect(() => {
    adjustSlideDimension();
  });

  return (
    <StyledNodeViewContainer ref={wrapperRef}>
      <StyledWrapper data-slide-id={slideId}>
        <SlideComponents nodeViewProps={nodeViewProps}>
          <NodeViewContent />
        </SlideComponents>
      </StyledWrapper>
    </StyledNodeViewContainer>
  );
}
