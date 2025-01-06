import { Document } from '@tiptap/extension-document';

import { SlideBaseExtensionConfig } from './SlideBaseExtension/SlideBaseExtension';

export const DocumentBaseExtension = (version: string = '') =>
  Document.extend({
    content: `${SlideBaseExtensionConfig(version).name}`,
    draggable: false,
  });

export const PreviewDocumentBaseExtension = (version: string = '') =>
  Document.extend({
    content: `${SlideBaseExtensionConfig(version).name}+`,
    draggable: false,
  });
