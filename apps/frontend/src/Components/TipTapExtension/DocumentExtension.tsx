import { DocumentBaseExtension, PreviewDocumentBaseExtension } from '@ndeck/tiptap-extensions';
import Document from '@tiptap/extension-document';

export const DocumentExtension = DocumentBaseExtension().extend({});

export const PreviewDocumentExtension = PreviewDocumentBaseExtension().extend({});

export const DocumentViewExtension = Document.extend({
  content: 'tableOfContent main',
});
