import { expect } from '@jest/globals';
import { generateHTML, generateJSON } from '@tiptap/html';
import format from 'diffable-html';

import {
  CodeBlockBaseExtension,
  CodeBlockBaseExtensionConfig,
} from '@/extensions/CodeBlockBaseExtension/CodeBlockBaseExtension';
import { CurrencyAmountBaseExtension } from '@/extensions/CurrencyAmountBaseExtension';
import {
  HeadingBaseExtension,
  ParagraphBaseExtension,
  TableBaseExtension,
  TableRowBaseExtension,
  TextBaseExtension,
} from '@/extensions/DefaultExtensions';
import { DocumentBaseExtension } from '@/extensions/DocumentBaseExtension';
import { SlideBaseExtension } from '@/extensions/SlideBaseExtension/SlideBaseExtension';
import { SlideContentBaseExtension } from '@/extensions/SlideContentBaseExtension';
import { SlideListBaseExtension } from '@/extensions/SlideListBaseExtension';
import { SlideListWithTitleBaseExtension } from '@/extensions/SlideListWithTitleBaseExtension';
import { SlideTitleBaseExtension } from '@/extensions/SlideTitleBaseExtension';
import { TableCellBaseExtension } from '@/extensions/TableCellBaseExtension';
import { TableHeaderBaseExtension } from '@/extensions/TableHeaderBaseExtension';

const extensions = [
  DocumentBaseExtension(),
  CodeBlockBaseExtension(),
  TextBaseExtension,
  HeadingBaseExtension,
  ParagraphBaseExtension,
  SlideTitleBaseExtension(),
  SlideBaseExtension(),
  SlideContentBaseExtension(),
  SlideListBaseExtension(),
  SlideListWithTitleBaseExtension(),
  TableBaseExtension,
  TableCellBaseExtension,
  TableHeaderBaseExtension,
  CurrencyAmountBaseExtension(),
  TableRowBaseExtension,
];

test('CodeBlockBaseExtensionConfig', () => {
  expect(CodeBlockBaseExtensionConfig()).toMatchObject({ id: 'code', name: 'codeBlock' });
});

test('CodeBlockBaseExtensionConfig with version', () => {
  expect(CodeBlockBaseExtensionConfig('V1')).toMatchObject({ id: 'codeV1', name: 'codeBlockV1' });
});

test('CodeBlockBaseExtension', () => {
  const template = `<slide
      id="{{slideId}}"
      title="{{slideTitle}}"
      class="slide"
      slide-type="{{slideType}}-wrapper"
      slide-template="{{slideTemplate}}"
      background-image-id="{{backgroundImageId}}"
      background-image-src="{{backgroundImageSrc}}"
      background-image-caption
      background-image-query="{{query}}"
      background-image-upload-key="{{backgroundImageUploadKey}}"
      background-image-content
      background-image-orientation
      background-image-alt-id
      background-image-alt-src
      background-image-alt-caption
      background-image-alt-query
      background-image-alt-upload-key
      background-image-alt-content
      background-image-alt-orientation
    >
      <slide-title
        id="{{slideId}}"
        class="slide-title"
        slide-type="{{slideType}}-title"
        slide-template="{{slideTemplate}}"
      >
        <p>
          {{contentTitle}}
        </p>
      </slide-title>
      <slide-content
        id="{{slideId}}"
        class="slide-content"
        slide-type="{{slideType}}-content"
        slide-template="{{slideTemplate}}"
        background-image-id
        background-image-src
        background-image-caption
        background-image-query
        background-image-upload-key
        background-image-content
        background-image-orientation
      >
        <p>
          {{contentSubtitle}}
        </p>
      </slide-content>
    </slide>
`.trim();

  const json = generateJSON(template, extensions);
  const html = generateHTML(json, extensions);

  expect(format(html)).toBe(format(template));
});
