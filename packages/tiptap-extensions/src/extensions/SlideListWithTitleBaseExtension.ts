import { Node } from '@tiptap/core';

export const SlideListWithTitleBaseExtensionConfig = (version: string = '') => ({
  id: `list-with-title${version}`,
  name: `ListWithTitle${version}`,
});

export const SlideListWithTitleBaseExtension = (version: string = '') =>
  Node.create({
    name: SlideListWithTitleBaseExtensionConfig(version).name,
    group: 'block',
    content: 'paragraph (paragraph | ListWrapper) CurrencyAmount?',

    allowGapCursor: false,
    atom: true,
    draggable: false,
    isolating: true,

    addAttributes() {
      return {
        class: {
          default: '',
        },
        slideType: {
          default: '',
        },
        slideTemplate: {
          default: '',
        },
        backgroundImage: {
          default: {
            id: '',
            src: '',
            alt: '',
            query: '',
            uploadKey: '',
            content: '',
            orientation: 'portrait',
            slideType: null,
            keywords: [],
            extractedKeywords: [],
            presentationKeywords: [],
          },
        },
      };
    },

    parseHTML() {
      return [
        {
          tag: SlideListWithTitleBaseExtensionConfig(version).id,
        },
      ];
    },
  });
