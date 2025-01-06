import { Node, mergeAttributes } from '@tiptap/core';

export const CurrencyAmountBaseExtensionConfig = (version: string = '') => ({
  id: `currency-amount${version}`,
  name: `CurrencyAmount${version}`,
});

export const CurrencyAmountBaseExtension = (version: string = '') =>
  Node.create({
    name: CurrencyAmountBaseExtensionConfig(version).name,
    group: 'block',
    content: 'block+',
    draggable: true,

    addAttributes() {
      return {
        class: {
          default: CurrencyAmountBaseExtensionConfig(version).id,
        },
        value: {
          default: 0,
        },
        currency: {
          default: 'USD',
        },
      };
    },

    parseHTML() {
      return [
        {
          tag: CurrencyAmountBaseExtensionConfig(version).id,
        },
      ];
    },
    renderHTML({ HTMLAttributes }) {
      return [CurrencyAmountBaseExtensionConfig(version).id, mergeAttributes(HTMLAttributes), 0];
    },
  });
