import { TableHeaderBaseExtension } from '@ndeck/tiptap-extensions';
import { ReactNodeViewRenderer } from '@tiptap/react';

import TableHeaderComponent from '@/Components/TipTapExtension/TableHeaderExtension';

export const SlideTableHeaderExtension = TableHeaderBaseExtension.extend({
  addNodeView() {
    return ReactNodeViewRenderer(TableHeaderComponent, { as: 'th' });
  },
});
