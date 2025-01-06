import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

import { JSONContent, NodeViewProps } from '@tiptap/core';

/**
 * This function would get & calculate parent content length
 * @returns Array containing parent content length and dispatch action to set content length
 */
const useGetParentContentLength = ({
  nodeViewProps,
}: {
  nodeViewProps: NodeViewProps;
}): [number, Dispatch<SetStateAction<number>>] => {
  const [parentContentLength, setParentContentLength] = useState<number>(0);

  const updateParentContentLength = useCallback(() => {
    try {
      const { editor, getPos } = nodeViewProps;
      const { state } = editor.view;

      const pos = getPos();

      const resolvedPos = state.doc.resolve(pos);

      const parentNode = resolvedPos.node(resolvedPos.depth);

      setParentContentLength((parentNode.content.toJSON() as JSONContent[]).length);
    } catch (err) {
      // ok
    }
  }, [nodeViewProps]);

  useEffect(() => {
    updateParentContentLength();

    const handleTransaction = () => {
      updateParentContentLength();
    };

    nodeViewProps.editor.on('transaction', handleTransaction);

    return () => {
      nodeViewProps.editor.off('transaction', handleTransaction);
    };
  }, [nodeViewProps.editor, updateParentContentLength]);

  return [parentContentLength, setParentContentLength];
};

export default useGetParentContentLength;
