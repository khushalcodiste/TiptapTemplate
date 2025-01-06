import { ReactNodeViewRenderer } from '@tiptap/react';

import { SlideWrapperExtension } from '@/Components/TipTapExtension/SlideWrapperBaseExtension';
import { SlideWrapperEditorComponent } from '@/Components/TipTapExtension/SlideWrapperComponents/SlideWrapperEditorComponent';

export const SlideWrapperEditorExtension = SlideWrapperExtension.extend({
  addNodeView() {
    return ReactNodeViewRenderer(SlideWrapperEditorComponent);
  },
});
