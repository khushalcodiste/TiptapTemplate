'use client';

import CodeBlock from '@tiptap/extension-code-block';
import Text from '@tiptap/extension-text';

import {
  BoldBaseExtension,
  BulletListBaseExtension,
  HistoryBaseExtension,
  ImageBaseExtension,
  ListItemBaseExtension,
  ParagraphBaseExtension,
  TableBaseExtension,
  TableCellBaseExtension,
  TableHeaderBaseExtension,
  TableRowBaseExtension,
} from '@ndeck/tiptap-extensions';

import { CurrencyAmountExtension } from '@/Components/TipTapExtension/CurrencyWrapperExtension';
import { DocumentExtension } from '@/Components/TipTapExtension/DocumentExtension';
import { ListWithTitleExtension } from '@/Components/TipTapExtension/ListWithTitleExtension';
import { ListWrapperExtension } from '@/Components/TipTapExtension/ListWrapperExtension';
import { SlideContentWrapperExtension } from '@/Components/TipTapExtension/SlideContentWrapperExtension';
import { SlideTitleWrapperExtension } from '@/Components/TipTapExtension/SlideTitleWrapperExtension';
import { SlideWrapperEditorExtension } from '@/Components/TipTapExtension/SlideWrapperEditorExtension';
import { PresentationSlideActions } from '@/types/presentation';

export function TipTapEditorExtensions({
  onPresentationSlideAction,
}: {
  onPresentationSlideAction: ({ type, slideId }: { type: PresentationSlideActions; slideId: string }) => Promise<void>;
}) {
  return [
    DocumentExtension,
    BoldBaseExtension,
    CodeBlock,
    HistoryBaseExtension.configure({
      depth: 1000,
    }),
    ParagraphBaseExtension.extend({
      allowGapCursor: false,
      draggable: false,
      isolating: true,
      marks: 'bold',
    }),
    SlideWrapperEditorExtension.configure({
      onAction: onPresentationSlideAction,
    }),
    SlideContentWrapperExtension,
    SlideTitleWrapperExtension,
    ListWithTitleExtension,
    ListWrapperExtension,
    ListItemBaseExtension,
    BulletListBaseExtension,
    ImageBaseExtension,
    Text,
    TableBaseExtension.configure({
      allowTableNodeSelection: false,
      lastColumnResizable: false,
      resizable: true,
    }),
    TableCellBaseExtension,
    TableHeaderBaseExtension,
    TableRowBaseExtension,
    CurrencyAmountExtension,
  ];
}
