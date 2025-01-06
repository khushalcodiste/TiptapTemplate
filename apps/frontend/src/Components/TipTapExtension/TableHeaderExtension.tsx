import { TableHeaderBaseExtension } from '@ndeck/tiptap-extensions';
import { TbColumnInsertLeft } from '@react-icons/all-files/tb/TbColumnInsertLeft';
import { TbColumnInsertRight } from '@react-icons/all-files/tb/TbColumnInsertRight';
import { TbColumnRemove } from '@react-icons/all-files/tb/TbColumnRemove';
import { NodeViewProps } from '@tiptap/core';
import { NodeViewContent, NodeViewWrapper, ReactNodeViewRenderer } from '@tiptap/react';
import { Button, Popover, Tooltip } from 'antd';
import styled from 'styled-components';

const StyledNodeViewWrapper = styled(NodeViewWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  tr {
    div > div {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
    }
  }
`;

const StyledToolbar = styled.div`
  display: flex;
  gap: 4px;
`;

export default function TableHeaderComponent({ editor }: NodeViewProps) {
  const handleAddColumn = (action: 'addColumnAfter' | 'addColumnBefore') => {
    editor.chain().focus()[action]().run();
  };
  const handleDeleteColumn = () => {
    editor.chain().focus().deleteColumn().run();
  };

  return (
    <StyledNodeViewWrapper>
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
            <Tooltip title="Column Before">
              <Button
                size="middle"
                onClick={() => handleAddColumn('addColumnBefore')}
                icon={<TbColumnInsertLeft size={18} />}
              />
            </Tooltip>
            <Tooltip title="Column After">
              <Button
                size="middle"
                onClick={() => handleAddColumn('addColumnAfter')}
                icon={<TbColumnInsertRight size={18} />}
              />
            </Tooltip>
            <Tooltip title="Delete Column">
              <Button size="middle" onClick={() => handleDeleteColumn()} icon={<TbColumnRemove size={18} />} />
            </Tooltip>
          </StyledToolbar>
        }
      >
        <NodeViewContent />
      </Popover>
    </StyledNodeViewWrapper>
  );
}

export const TableHeaderExtension = TableHeaderBaseExtension.extend({
  addNodeView() {
    return ReactNodeViewRenderer(TableHeaderComponent, { as: 'th' });
  },
});
