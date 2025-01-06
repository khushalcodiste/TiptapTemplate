import { SlideListWithTitleBaseExtension } from '@ndeck/tiptap-extensions';
import { NodeViewProps } from '@tiptap/core';
import { NodeViewContent, NodeViewWrapper, ReactNodeViewRenderer } from '@tiptap/react';
import styled from 'styled-components';

import SlideComponents from '@/Components/BusinessSlide';

const StyledNodeViewContainer = styled(NodeViewWrapper)`
  div[data-node-view-content] {
    div[data-node-view-content-react] {
      p {
        margin: 0;
      }
    }
  }
`;

function ListWithTitleComponent(nodeViewProps: NodeViewProps) {
  return (
    <StyledNodeViewContainer>
      <SlideComponents nodeViewProps={nodeViewProps}>
        <NodeViewContent />
      </SlideComponents>
    </StyledNodeViewContainer>
  );
}

export const ListWithTitleExtension = SlideListWithTitleBaseExtension().extend({
  addNodeView() {
    return ReactNodeViewRenderer(ListWithTitleComponent);
  },
});
