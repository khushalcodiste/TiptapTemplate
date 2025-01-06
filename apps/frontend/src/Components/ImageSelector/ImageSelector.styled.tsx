import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledDrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > .spinner-border {
    margin: auto;
    margin-top: 150px;
  }
`;

export const StyledSearchActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledSearchActionsTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h5 {
    margin: 0;
  }
`;

export const StyledImageActionsWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;

  display: grid;
  place-items: center;

  transition: opacity 0.5s linear;

  .wrapper {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  button {
    opacity: 0;
    transform: scale(1) translateY(150px);
    transform-origin: center center;

    &:nth-child(n + 2) {
      transition-delay: 50ms;
    }
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  max-height: 100%;

  &:hover ${StyledImageActionsWrapper} {
    cursor: pointer;
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);

    button {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;
