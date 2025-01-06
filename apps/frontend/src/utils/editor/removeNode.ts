import { NodeViewProps } from '@tiptap/core';

/**
 * Remove a node from slide
 */
const removeNode = ({ getPos, editor, node }: NodeViewProps) => {
  const pos = getPos();

  editor
    .chain()
    .deleteRange({ from: pos, to: pos + node.nodeSize })
    .run();
};

export default removeNode;
