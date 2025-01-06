import { Node, mergeAttributes } from '@tiptap/core';

export const SlideTitleBaseExtensionConfig = (version: string = '') => ({
  id: `slide-title${version}`,
  name: `SlideTitleWrapper${version}`,
});

export const SlideTitleBaseExtension = (version: string = '') =>
  Node.create({
    name: SlideTitleBaseExtensionConfig(version).name,
    group: 'block',
    content: 'paragraph paragraph?',
    atom: true,

    allowGapCursor: false,
    isolating: true,

    addAttributes() {
      return {
        class: {
          default: '',
        },
        slideTemplate: {
          default: '',
        },
        slideType: {
          default: '',
        },
      };
    },

    renderHTML({ HTMLAttributes }) {
      return [SlideTitleBaseExtensionConfig(version).id, mergeAttributes(HTMLAttributes), 0];
    },
  });
