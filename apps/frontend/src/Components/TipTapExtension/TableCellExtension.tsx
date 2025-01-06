import { NodeViewProps } from '@tiptap/core';
import { NodeViewContent, NodeViewWrapper, ReactNodeViewRenderer } from '@tiptap/react';

import { TableCellBaseExtension } from '@ndeck/tiptap-extensions';
import { Button, Popover, Tooltip } from 'antd';
import styled from 'styled-components';

const StyledToolbar = styled.div`
  display: flex;
  gap: 4px;
`;

export default function TableColumnComponent({ editor, getPos }: NodeViewProps) {
  const handleAddRow = (action: 'addRowAfter' | 'addRowBefore') => {
    editor.chain().focus('start');
    editor.chain().focus(getPos())[action]().focus().run();
  };

  const handleDeleteRow = () => {
    editor.chain().focus('start');
    editor.chain().focus().deleteRow().focus(getPos()).run();
  };

  return (
    <NodeViewWrapper>
      <Popover
        arrow={false}
        trigger="click"
        placement="top"
        overlayInnerStyle={{
          padding: '5px',
          marginBottom: '4px',
          gap: '4px',
        }}
        content={
          <StyledToolbar>
            <Tooltip title="Row Below">
              <Button size="middle" onClick={() => handleAddRow('addRowAfter')} icon="icon" />
            </Tooltip>
            <Tooltip title="Row Above">
              <Button size="middle" onClick={() => handleAddRow('addRowBefore')} icon="icon" />
            </Tooltip>
            <Tooltip title="Delete Row">
              <Button size="middle" onClick={() => handleDeleteRow()} icon="icon" />
            </Tooltip>
          </StyledToolbar>
        }
      >
        <NodeViewContent />
      </Popover>
    </NodeViewWrapper>
  );
}

export const TableCellExtension = TableCellBaseExtension.extend({
  addNodeView() {
    return ReactNodeViewRenderer(TableColumnComponent, { as: 'td' });
  },
});
