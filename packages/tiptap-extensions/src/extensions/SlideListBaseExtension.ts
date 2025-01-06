import { Node, mergeAttributes } from '@tiptap/core';

export const SlideListBaseExtensionConfig = (version: string = '') => ({
  id: `list-wrapper${version}`,
  name: `ListWrapper${version}`,
});

export const SlideListBaseExtension = (version: string = '') =>
  Node.create({
    name: SlideListBaseExtensionConfig(version).name,
    group: 'block',
    content: 'block+',
    draggable: false,

    addAttributes() {
      return {
        class: {
          default: 'list-wrapper',
        },
      };
    },

    parseHTML() {
      return [
        {
          tag: SlideListBaseExtensionConfig(version).id,
        },
      ];
    },

    renderHTML({ HTMLAttributes }) {
      return [SlideListBaseExtensionConfig(version).id, mergeAttributes(HTMLAttributes), 0];
    },
  });
