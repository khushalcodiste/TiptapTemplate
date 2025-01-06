import { JSONContent, NodeViewProps } from '@tiptap/core';

/**
 * Add a component with given content based on editor given
 */
const createNode = ({ getPos, editor, node, updateAttributes }: NodeViewProps, content: JSONContent) => {
  return () => {
    const endPos = getPos() + node.nodeSize - 1;

    editor.chain().insertContentAt(endPos, content).run();

    // manually trigger an update
    updateAttributes({
      updated: Date.now(),
    });
  };
};

export default createNode;
