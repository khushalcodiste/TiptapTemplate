import { SlideTitleBaseExtension } from '@ndeck/tiptap-extensions';
import { NodeViewProps } from '@tiptap/core';
import { NodeViewContent, NodeViewWrapper, ReactNodeViewRenderer } from '@tiptap/react';
import styled from 'styled-components';

import SlideComponents from '@/Components/BusinessSlide';

const StyledNodeViewContainer = styled(NodeViewWrapper)``;

function SlideTitleWrapperComponent(nodeViewProps: NodeViewProps) {
  return (
    <StyledNodeViewContainer className="extension-SlideComponents">
      <SlideComponents nodeViewProps={nodeViewProps}>
        <NodeViewContent />
      </SlideComponents>
    </StyledNodeViewContainer>
  );
}

export const SlideTitleWrapperExtension = SlideTitleBaseExtension().extend({
  addNodeView() {
    return ReactNodeViewRenderer(SlideTitleWrapperComponent);
  },
});
