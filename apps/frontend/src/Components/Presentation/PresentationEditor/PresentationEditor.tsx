'use client';

import { MutableRefObject, Suspense } from 'react';

import { Editor, EditorContent } from '@tiptap/react';

import styled from 'styled-components';

const StyledPageSlideWrapper = styled.div`
  grid-area: slide-content;
  background: white;

  display: grid;
  place-content: center;
  gap: 1rem;
  height: calc(100vh - 60px);
  overflow: hidden;
`;

const StyledEditor = styled(EditorContent)`
  &&& {
    width: calc(100%);
    height: calc(100%);
    margin: auto;

    .react-renderer.node-Slide {
      display: grid;
    }
  }
`;

export function PresentationEditor({
  editorRefs,
}: {
  editorRefs: MutableRefObject<{
    editor: null | Editor;
    preview: null | Editor;
  }>;
}) {
  return (
    <Suspense fallback={<div>Error</div>}>
      <StyledPageSlideWrapper>
        <StyledEditor id="editor" editor={editorRefs.current.editor} />
      </StyledPageSlideWrapper>
    </Suspense>
  );
}
