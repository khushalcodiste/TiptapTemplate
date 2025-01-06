'use client';

import { useEffect, useState } from 'react';

import { createGlobalStyle } from 'styled-components';

import { PresentationLayout } from '@/Components/Presentation/PresentationLayout/PresentationLayout';
import { PresentationSlidesView } from '@/Components/Presentation/PresentationSlidesView/PresentationSlidesView';
import { PRESENTATION_DATA, PRESENTATION_THEMES } from '@/app/data';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
  }

  #editor {
    ::-webkit-scrollbar {
      display: none;
    }

    .ProseMirror {
      outline: none;
    }

    .tiptap p.is-empty::before {
      color: #adb5bd;
      content: attr(data-placeholder);
      float: left;
      height: 0;
      pointer-events: none;
    }
  }
`;

function Layout() {
  const [isMounted, setIsMounted] = useState(false);

  const presentation = { data: PRESENTATION_DATA.json };
  const presentationThemes = { data: PRESENTATION_THEMES.json };

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <>
      <style>{presentationThemes.data.fonts.map(({ fontUrl }) => `@import url(${fontUrl});`).join('\n')}</style>
      <PresentationLayout>
        <GlobalStyle />
        <PresentationSlidesView
          presentationState={{
            slides: presentation.data.slides,
            slideId: presentation.data.slides.at(1)!.id,
            themeId: presentationThemes.data.themes.at(0)!.id,
            fontId: presentationThemes.data.fonts.at(0)!.id,
          }}
          themes={presentationThemes.data.themes}
          fonts={presentationThemes.data.fonts}
        />
      </PresentationLayout>
    </>
  );
}

export default Layout;
