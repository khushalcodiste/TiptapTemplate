import { SlideContentBaseExtension } from '@ndeck/tiptap-extensions';
import { NodeViewProps } from '@tiptap/core';
import { NodeViewContent, NodeViewWrapper, ReactNodeViewRenderer } from '@tiptap/react';
import styled from 'styled-components';

import SlideComponents from '@/Components/BusinessSlide';

const StyledNodeViewContainer = styled(NodeViewWrapper)``;

function SlideContentWrapperComponent(nodeViewProps: NodeViewProps) {
  return (
    <StyledNodeViewContainer>
      <SlideComponents nodeViewProps={nodeViewProps}>
        <NodeViewContent />
      </SlideComponents>
    </StyledNodeViewContainer>
  );
}

export const SlideContentWrapperExtension = SlideContentBaseExtension().extend({
  addNodeView() {
    return ReactNodeViewRenderer(SlideContentWrapperComponent);
  },
});
