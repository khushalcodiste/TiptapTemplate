import { Node } from '@tiptap/core';

import { createUniqueId } from '../utils/uniqueId';

import { SlideExtensionAttributes } from './tiptap-extensions';

export const SlideWrapperBaseExtensionConfig = (version: string = '') => ({
  id: `slide-wrapper${version}`,
  name: `SlideWrapper${version}`,
});

export const SlideWrapperBaseExtension = (version: string = '') =>
  Node.create({
    name: SlideWrapperBaseExtensionConfig(version).name,
    group: 'block',
    content: '(paragraph | ListWithTitle | table)*',

    allowGapCursor: false,
    atom: true,
    draggable: false,
    isolating: true,
    marks: '',

    addAttributes() {
      const attributes: SlideExtensionAttributes = {
        id: {
          default: '',
        },
        title: {
          default: '',
        },
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
            slideId: '',
            src: '',
            alt: '',
            query: '',
            uploadKey: '',
            content: '',
            orientation: 'portrait',
          },
          parseHTML: (element) => {
            const id = createUniqueId('img');
            const slideId = element.getAttribute('slideId');
            const src = element.getAttribute('image') || '';
            const content = element.textContent?.trim() || '';
            const query = element.getAttribute('query') || '';
            const uploadKey = `ndeck/images/${id}.jpeg`;

            return {
              id,
              slideId,
              src,
              alt: query,
              query,
              uploadKey,
              content,
              orientation: 'portrait',
            };
          },
        },
        backgroundImageAlt: {
          default: {
            id: '',
            slideId: '',
            src: '',
            alt: '',
            query: '',
            uploadKey: '',
            content: '',
            orientation: 'portrait',
          },
          parseHTML: (element) => {
            const id = createUniqueId('img');
            const slideId = element.getAttribute('slideId');
            const src = element.getAttribute('imageAlt') || '';
            const content = element.textContent?.trim() || '';
            const query = element.getAttribute('query') || '';
            const uploadKey = `ndeck/images/${id}.jpeg`;

            return {
              id,
              slideId,
              src,
              alt: query,
              query,
              uploadKey,
              content,
              orientation: 'portrait',
            };
          },
        },
      };

      return attributes;
    },

    parseHTML() {
      return [
        {
          tag: SlideWrapperBaseExtensionConfig(version).name,
        },
      ];
    },
  });
