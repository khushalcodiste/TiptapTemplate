import { mergeAttributes } from '@tiptap/core';
import { CodeBlock } from '@tiptap/extension-code-block';

export const CodeBlockBaseExtensionConfig = (version: string = '') => ({
  id: `code${version}`,
  name: `codeBlock${version}`,
});

export const CodeBlockBaseExtension = (version: string = '') =>
  CodeBlock.extend({
    allowGapCursor: false,
    atom: true,
    draggable: false,
    isolating: true,
    marks: '',

    addAttributes() {
      return {
        id: {
          default: '',
        },
      };
    },

    parseHTML() {
      return [
        {
          tag: 'code',
        },
      ];
    },

    renderHTML({ HTMLAttributes }) {
      return [CodeBlockBaseExtensionConfig(version).name, mergeAttributes(HTMLAttributes), 0];
    },
  });
