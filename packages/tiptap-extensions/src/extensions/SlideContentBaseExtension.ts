import { Node } from '@tiptap/core';

import { ImageSearchOptions } from './tiptap-extensions';

export const SlideContentBaseExtensionConfig = (version: string = '') => ({
  id: `slide-content${version}`,
  name: `SlideContentWrapper${version}`,
});

export const SlideContentBaseExtension = (version: string = '') =>
  Node.create({
    name: SlideContentBaseExtensionConfig(version).name,
    group: 'block',
    content: '(paragraph | ListWithTitle | table)*',

    allowGapCursor: false,
    atom: true,
    draggable: false,
    isolating: true,
    marks: '',

    addAttributes() {
      return {
        id: {
          default: '',
          parseHTML: (element) => {
            const attribute = element.getAttribute('id') as string;

            return attribute;
          },
          renderHTML: (attributes: { id: string }) => {
            return { id: attributes.id };
          },
        },
        title: {
          default: '',
          parseHTML: (element) => {
            const attribute = element.getAttribute('title') as string;

            return JSON.parse(attribute) as ImageSearchOptions;
          },
          renderHTML: (attributes: { title: string }) => {
            return { title: attributes.title };
          },
        },
        class: {
          default: '',
          parseHTML: (element) => {
            const attribute = element.getAttribute('class') as string;

            return JSON.parse(attribute) as ImageSearchOptions;
          },
          renderHTML: (attributes: { class: string }) => {
            return { class: attributes.class };
          },
        },
        slideType: {
          default: '',
          parseHTML: (element) => {
            const attribute = element.getAttribute('slideType') as string;

            return JSON.parse(attribute) as ImageSearchOptions;
          },
          renderHTML: (attributes: { slideType: string }) => {
            return { slideType: attributes.slideType };
          },
        },
        slideTemplate: {
          default: '',
          parseHTML: (element) => {
            const attribute = element.getAttribute('slideTemplate') as string;

            return JSON.parse(attribute) as ImageSearchOptions;
          },
          renderHTML: (attributes: { slideTemplate: string }) => {
            return { slideTemplate: attributes.slideTemplate };
          },
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
            const attribute = element.getAttribute('backgroundImage') as string;

            return JSON.parse(attribute) as ImageSearchOptions;
          },
          renderHTML: (attributes: { backgroundImage: object }) => {
            return { backgroundImage: JSON.stringify(attributes.backgroundImage) };
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
            const attribute = element.getAttribute('backgroundImageAlt') as string;

            return JSON.parse(attribute) as ImageSearchOptions;
          },
          renderHTML: (attributes: { backgroundImageAlt: string }) => {
            return { backgroundImageAlt: JSON.stringify(attributes.backgroundImageAlt) };
          },
        },
      };
    },

    parseHTML() {
      return [
        {
          tag: SlideContentBaseExtensionConfig(version).id,
        },
      ];
    },
  });
