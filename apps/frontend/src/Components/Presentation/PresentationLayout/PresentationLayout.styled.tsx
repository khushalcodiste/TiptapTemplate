import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  grid-template: 'header' 'content';
  grid-auto-flow: column;
  grid-template-rows: 60px auto;

  width: 100%;
`;

export const StyledViewWrapper = styled.div<{ $visible: boolean }>`
  &&& {
    display: ${({ $visible }) => ($visible ? 'flex' : 'none')};

    visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  }
`;
