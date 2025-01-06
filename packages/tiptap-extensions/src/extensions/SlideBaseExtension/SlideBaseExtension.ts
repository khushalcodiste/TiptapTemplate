import { Node, mergeAttributes } from '@tiptap/core';

import { SlideContentBaseExtensionConfig } from '../SlideContentBaseExtension';
import { SlideTitleBaseExtensionConfig } from '../SlideTitleBaseExtension';

import type { ImageSearchOptions } from '@/extensions/tiptap-extensions';

export const SlideBaseExtensionConfig = (version: string = '') =>
  ({
    id: `slide${version}`,
    name: `Slide${version}`,
  }) as const;

export const SlideBaseExtension = (version: string = '') =>
  Node.create({
    name: SlideBaseExtensionConfig(version).name,
    group: 'block',
    content: `(${SlideTitleBaseExtensionConfig(version).name} | ${SlideContentBaseExtensionConfig(version).name})*`,

    addAttributes() {
      return {
        id: {
          default: '',
          parseHTML: (element) => {
            return element.getAttribute('id');
          },
          renderHTML: (attributes: { id: string }) => {
            return { id: attributes.id };
          },
        },
        title: {
          default: '',
          parseHTML: (element) => element.getAttribute('title'),
          renderHTML: (attributes: { title: string }) => {
            return { title: attributes.title };
          },
        },
        class: {
          default: '',
          parseHTML: (element) => element.getAttribute('class'),
          renderHTML: (attributes: { class: string }) => {
            return { class: attributes.class };
          },
        },
        slideType: {
          default: '',
          parseHTML: (element) => element.getAttribute('slide-type'),
          renderHTML: (attributes: { slideType: string }) => {
            return { 'slide-type': attributes.slideType };
          },
        },
        slideTemplate: {
          default: '',
          parseHTML: (element) => element.getAttribute('slide-template'),
          renderHTML: (attributes: { slideTemplate: string }) => {
            return { 'slide-template': attributes.slideTemplate };
          },
        },
        backgroundImageId: {
          default: '',
          parseHTML: (element) => element.getAttribute('background-image-id'),
          renderHTML: (attributes) => {
            return { 'background-image-id': (attributes.backgroundImageId || '') as string };
          },
        },
        backgroundImageSrc: {
          default: '',
          parseHTML: (element) => element.getAttribute('background-image-src'),
          renderHTML: (attributes) => {
            return { 'background-image-src': (attributes.backgroundImageSrc || '') as string };
          },
        },
        backgroundImageCaption: {
          default: '',
          parseHTML: (element) => element.getAttribute('background-image-caption'),
          renderHTML: (attributes) => {
            return { 'background-image-caption': (attributes.backgroundImageCaption || '') as string };
          },
        },
        backgroundImageQuery: {
          default: '',
          parseHTML: (element) => element.getAttribute('background-image-query'),
          renderHTML: (attributes) => {
            return { 'background-image-query': (attributes.backgroundImageQuery || '') as string };
          },
        },
        backgroundImageUploadKey: {
          default: '',
          parseHTML: (element) => element.getAttribute('background-image-upload-key'),
          renderHTML: (attributes) => {
            return { 'background-image-upload-key': (attributes.backgroundImageUploadKey || '') as string };
          },
        },
        backgroundImageContent: {
          default: '',
          parseHTML: (element) => element.getAttribute('background-image-content'),
          renderHTML: (attributes) => {
            return { 'background-image-content': (attributes.backgroundImageContent || '') as string };
          },
        },
        backgroundImageOrientation: {
          default: '',
          parseHTML: (element) => element.getAttribute('background-image-orientation'),
          renderHTML: (attributes) => {
            return { 'background-image-orientation': (attributes.backgroundImageOrientation || '') as string };
          },
        },
        backgroundImageAltId: {
          default: '',
          parseHTML: (element) => element.getAttribute('background-image-alt-id'),
          renderHTML: (attributes) => {
            return { 'background-image-alt-id': (attributes.backgroundImageAltId || '') as string };
          },
        },
        backgroundImageAltSrc: {
          default: '',
          parseHTML: (element) => element.getAttribute('background-image-alt-src'),
          renderHTML: (attributes) => {
            return { 'background-image-alt-src': (attributes.backgroundImageAltSrc || '') as string };
          },
        },
        backgroundImageAltCaption: {
          default: '',
          parseHTML: (element) => element.getAttribute('background-image-alt-caption'),
          renderHTML: (attributes) => {
            return { 'background-image-alt-caption': (attributes.backgroundImageAltCaption || '') as string };
          },
        },
        backgroundImageAltQuery: {
          default: '',
          parseHTML: (element) => element.getAttribute('background-image-alt-query'),
          renderHTML: (attributes) => {
            return { 'background-image-alt-query': (attributes.backgroundImageAltQuery || '') as string };
          },
        },
        backgroundImageAltUploadKey: {
          default: '',
          parseHTML: (element) => element.getAttribute('background-image-alt-upload-key'),
          renderHTML: (attributes) => {
            return { 'background-image-alt-upload-key': (attributes.backgroundImageAltUploadKey || '') as string };
          },
        },
        backgroundImageAltContent: {
          default: '',
          parseHTML: (element) => element.getAttribute('background-image-alt-content'),
          renderHTML: (attributes) => {
            return { 'background-image-alt-content': (attributes.backgroundImageAltContent || '') as string };
          },
        },
        backgroundImageAltOrientation: {
          default: 'portrait',
          parseHTML: (element) => element.getAttribute('background-image-alt-orientation'),
          renderHTML: (attributes) => {
            return { 'background-image-alt-orientation': (attributes.backgroundImageAltOrientation || '') as string };
          },
        },
        // @deprecated
        backgroundImage: {
          parseHTML: (element) => element.getAttribute('backgroundImage'),
          renderHTML: (attributes) => {
            const values = {
              'background-image-id': (attributes.backgroundImage as ImageSearchOptions)?.id || '',
              'background-image-src': (attributes.backgroundImage as ImageSearchOptions)?.src || '',
              'background-image-caption': (attributes.backgroundImage as ImageSearchOptions)?.caption || '',
              'background-image-query': (attributes.backgroundImage as ImageSearchOptions)?.query || '',
              'background-image-upload-key': (attributes.backgroundImage as ImageSearchOptions)?.uploadKey || '',
              'background-image-content':
                (attributes.backgroundImage as ImageSearchOptions)?.text ||
                (attributes.backgroundImage as ImageSearchOptions)?.content ||
                '',
              'background-image-orientation': ((attributes.backgroundImage as ImageSearchOptions)?.orientation ||
                '') as string,
            } as const;

            const valid: Partial<Record<keyof typeof values, string | number | object>> = {};

            Object.keys(values).forEach((key) => {
              if (values[key as keyof typeof values]) {
                valid[key as keyof typeof values] = values[key as keyof typeof values];
              }
            });

            return valid;
          },
        },
        // @deprecated
        backgroundImageAlt: {
          parseHTML: (element) => element.getAttribute('backgroundImageAlt'),
          renderHTML: (attributes) => {
            const values = {
              'background-image-alt-id': (attributes.backgroundImageAlt as ImageSearchOptions)?.id || '',
              'background-image-alt-src': (attributes.backgroundImageAlt as ImageSearchOptions)?.src || '',
              'background-image-alt-caption': (attributes.backgroundImageAlt as ImageSearchOptions)?.caption || '',
              'background-image-alt-query': (attributes.backgroundImageAlt as ImageSearchOptions)?.query || '',
              'background-image-alt-upload-key': (attributes.backgroundImageAlt as ImageSearchOptions)?.uploadKey || '',
              'background-image-alt-content': (attributes.backgroundImageAlt as ImageSearchOptions)?.content || '',
              'background-image-alt-orientation': ((attributes.backgroundImageAlt as ImageSearchOptions)?.orientation ||
                '') as string,
            };

            const valid: Partial<Record<keyof typeof values, string | number | object>> = {};

            Object.keys(values).forEach((key) => {
              if (values[key as keyof typeof values]) {
                valid[key as keyof typeof values] = values[key as keyof typeof values];
              }
            });

            return valid;
          },
        },
      };
    },

    parseHTML() {
      return [
        {
          tag: SlideBaseExtensionConfig(version).id,
        },
      ];
    },

    renderHTML({ HTMLAttributes }) {
      return [SlideBaseExtensionConfig(version).id, mergeAttributes(HTMLAttributes), 0];
    },
  });
