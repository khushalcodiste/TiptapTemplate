'use client';

import { useMemo, useRef } from 'react';

import { JSONContent } from '@tiptap/core';
import { Editor, useEditor } from '@tiptap/react';

import deepmerge from 'deepmerge';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';

import { PresentationEditor } from '@/Components/Presentation/PresentationEditor/PresentationEditor';
import { TipTapEditorExtensions } from '@/Components/TipTapExtension/TipTapEditorExtensions';
import { type PresentationViewState } from '@/types/presentation';
import { ThemeFont } from '@/types/theme';

const StyledPageContainer = styled.div<{ $fontFamily: string }>`
  grid-area: content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: calc(100vw);
  height: calc(100vh - 60px);
`;

const StyledPageContentWrapper = styled.div<{ $previewVisible: string }>`
  display: grid;
  grid-template-areas: 'sidebar slide-content actions';
  grid-template-columns: 200px calc(100vw - 200px - 60px - 10px - 2px) 60px;
  gap: 5px;
  width: 100vw;
  justify-content: center;
`;

interface PresentationSlidesViewProps {
  presentationState: PresentationViewState;
  themes: DefaultTheme[];
  fonts: ThemeFont[];
}

export function PresentationSlidesView({ presentationState, themes, fonts }: PresentationSlidesViewProps) {
  // Used for preventing user actions when we are busy syncing state to backend
  const editorRefs = useRef<{ editor: null | Editor; preview: null | Editor }>({ editor: null, preview: null });

  const editorSlide = useMemo(
    () => presentationState.slides?.find((s) => s.id === presentationState?.slideId),
    [presentationState.slideId, presentationState.slides, presentationState] // <- Don't change
  );

  editorRefs.current.editor = useEditor(
    {
      extensions: TipTapEditorExtensions({
        onPresentationSlideAction: async (options: { type: 'ADD' | 'REMOVE'; slideId: string }) => {
          console.log(options);
          await Promise.resolve();
        },
      }),
      content: { type: 'doc', content: [editorSlide?.jsonData].filter(Boolean) as JSONContent[] },
      editable: true,
      enableInputRules: true,
      enablePasteRules: false,
      autofocus: true,
      shouldRerenderOnTransaction: false,
      immediatelyRender: true,
      enableContentCheck: true,
      onContentError(props) {
        console.log('onContentError', props);
      },
      onTransaction(props) {
        console.log('onTransaction', props);
      },
    },
    [presentationState.slideId]
  );

  const [currentTheme, currentFont] = useMemo(() => {
    const theme = themes.find((t) => t.id === presentationState.themeId);
    const font = fonts.find((f) => f.id === presentationState.fontId);

    return [theme, font];
  }, [presentationState.fontId, presentationState.themeId]);

  return (
    <ThemeProvider
      theme={deepmerge(currentTheme as DefaultTheme, {
        slideTheme: { fontFamily: currentFont?.fontFamily },
      })}
    >
      <StyledPageContainer $fontFamily={presentationState.fontId}>
        <StyledPageContentWrapper $previewVisible="">
          <PresentationEditor presentationState={presentationState} editorRefs={editorRefs} />
        </StyledPageContentWrapper>
      </StyledPageContainer>
    </ThemeProvider>
  );
}
