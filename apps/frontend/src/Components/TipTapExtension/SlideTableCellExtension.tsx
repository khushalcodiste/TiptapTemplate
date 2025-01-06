import { TableCellBaseExtension } from '@ndeck/tiptap-extensions';
import { ReactNodeViewRenderer } from '@tiptap/react';

import TableColumnComponent from './TableCellExtension';

export const SlideTableCellExtension = TableCellBaseExtension.extend({
  addNodeView() {
    return ReactNodeViewRenderer(TableColumnComponent, { as: 'td' });
  },
});
