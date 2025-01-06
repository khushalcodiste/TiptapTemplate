import { NodeViewProps } from '@tiptap/core';

import deepmerge from 'deepmerge';
import styled, { css } from 'styled-components';

import { ImageSelector } from '@/Components/ImageSelector/ImageSelector';
import { ImageSearchOptions } from '@/types/presentation';
import { calculateDynamicFontSize } from '@/utils/editor/dynamicFontSize';
import { getPptImageUrl } from '@/utils/function';

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;

  div[data-node-view-content] {
    height: 100%;
    width: 100%;

    & > div {
      div.react-renderer.node-SlideContentWrapper {
        height: 100%;
        width: 100%;

        & > div {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
`;

const StyledSvgWrapper = styled.svg`
  position: absolute;
  bottom: 0;

  g > path {
    &:first-child {
      fill: ${({ theme }) => theme.slideTheme.color.primary};
    }

    &:nth-child(2) {
      fill: ${({ theme }) => theme.slideTheme.color.secondary};
    }
  }

  z-index: 3;
`;

const StyledImageWrapper = styled.div`
  width: 1650px;
  height: 1150px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 35%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

  .image-actions-container {
    margin-bottom: 350px;
  }

  img {
    width: 1650px;
    height: 1150px;
    object-fit: cover;
  }

  z-index: 2;
`;

const StyledTitle = styled.div`
  & > div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50rem;
    gap: 8px;
    margin: auto;
    margin-top: 5rem;

    p {
      text-align: center;

      &:first-child {
        color: ${({ theme }) => theme.slideTheme.fontColor};
        font-family: Poppins;
        font-size: 50px !important;
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;

        margin: 0;

        line-height: 1;
        max-height: calc(1em * 2);
        overflow: scroll;
        word-break: break-word;
      }

      &:nth-child(n + 2) {
        color: ${({ theme }) => theme.slideTheme.fontColor};
        font-family: Poppins;
        font-size: 20px !important;
        font-weight: 400;
        line-height: 30px;
        text-align: center;

        line-height: 1.5;
        max-height: calc(1em * 6);
        overflow: scroll;
        margin: 0;
      }
    }
  }
`;

const getStylesForNodes = (numberOfBox: number) => {
  switch (numberOfBox) {
    case 2:
      return css`
        div[data-node-view-content] > div > div {
          margin-top: 3rem;
          z-index: 3;
        }

        div[data-node-view-content] > div > div:nth-child(1) {
          position: absolute;
          top: 275px;
          left: 40px;
        }
        div[data-node-view-content] > div > div:nth-child(2) {
          position: absolute;
          top: 275px;
          right: 40px;
        }
      `;
    case 3:
      return css`
        div[data-node-view-content] > div > div {
          margin-top: 3rem;
          z-index: 3;
        }

        div[data-node-view-content] > div > div:nth-child(1) {
          position: absolute;
          top: 0px;
          left: 40px;
        }
        div[data-node-view-content] > div > div:nth-child(2) {
          position: absolute;
          top: 415px;
          left: 40px;
        }
        div[data-node-view-content] > div > div:nth-child(3) {
          position: absolute;
          top: 415px;
          right: 40px;
        }
      `;
    default:
      return css`
        div[data-node-view-content] > div > div:nth-child(1) {
          position: absolute;
          top: 0px;
          left: 40px;
        }
        div[data-node-view-content] > div > div:nth-child(2) {
          position: absolute;
          top: 0px;
          right: 40px;
        }
        div[data-node-view-content] > div > div:nth-child(3) {
          position: absolute;
          top: 415px;
          left: 40px;
        }
        div[data-node-view-content] > div > div:nth-child(4) {
          position: absolute;
          top: 415px;
          right: 40px;
        }
        div[data-node-view-content] > div > div:nth-child(n + 5) {
          display: none;
        }
      `;
  }
};

const StyledContent = styled.div<{ $numberOfBox: number }>`
  ${({ $numberOfBox }) => getStylesForNodes($numberOfBox)}
`;

const StyledSlideList = styled.div<{
  $titleFontSize: number;
  $descriptionFontSize: number;
}>`
  padding: 1rem;

  border: 1px solid transparent;
  &:hover {
    border: 1px solid lightgrey;
    border-radius: 5px;
  }

  & > div > div {
    width: 100%;
    max-width: 484px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  p:first-child {
    color: ${({ theme }) => theme.slideTheme.fontColor};
    font-family: '${({ theme }) => theme.slideTheme.fontFamily}';
    font-size: ${({ $titleFontSize }) => $titleFontSize}px !important;
    font-weight: 400;
    line-height: 45px;

    line-height: 1.1;
    max-height: calc(1em * 2);
    overflow: scroll;
    word-break: break-word;
  }

  p:nth-child(2) {
    color: ${({ theme }) => theme.slideTheme.fontColor};
    font-family: '${({ theme }) => theme.slideTheme.fontFamily}';
    font-size: ${({ $descriptionFontSize }) => $descriptionFontSize}px !important;
    font-weight: 400;
    line-height: 30px;

    min-width: 484px;
    max-height: 220px;
    line-height: 1.4;
    max-height: calc(1em * 7);
    overflow: scroll;
    margin: 0;
  }

  .item-cover {
    grid-area: image;
    width: fit-content;

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export function PortfolioFloatingSlideWrapper({
  nodeViewProps,
  children,
}: {
  nodeViewProps: NodeViewProps;
  children: React.JSX.Element;
}) {
  const backgroundImage = nodeViewProps.node.attrs.backgroundImage as ImageSearchOptions;
  const { updateAttributes } = nodeViewProps;

  return (
    <StyledWrapper>
      <StyledSvgWrapper width="1920" height="234" viewBox="0 0 1920 234" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_108_155)">
          <path d="M1920 82.6504V234.282H677.381L1920 82.6504Z" fill="#00C8FF" />
          <path d="M0 0L1920 234.281H0V0Z" fill="#818991" />
          <path opacity="0.2" d="M0 25.9312L1920 234.281L0 0V25.9312Z" fill="white" />
          <path opacity="0.2" d="M1298.7 158.475L1920 217.781V234.281L1298.7 158.475Z" fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_108_155">
            <rect width="1920" height="234.281" fill="white" />
          </clipPath>
        </defs>
      </StyledSvgWrapper>
      <StyledImageWrapper contentEditable={false}>
        <ImageSelector
          disabled={!nodeViewProps.editor.isEditable}
          defaultSrc=""
          updateAttributes={(updatedProps: ImageSearchOptions) => {
            updateAttributes({
              backgroundImage: deepmerge(backgroundImage || {}, updatedProps),
            });
          }}
          src={getPptImageUrl(backgroundImage?.src || backgroundImage?.uploadKey)}
          alt={backgroundImage?.alt || ''}
          renderImage={(props: { src: string; alt: string }) => <img alt={props.alt} src={props.src} />}
        />
      </StyledImageWrapper>
      {children}
    </StyledWrapper>
  );
}

export function PortfolioFloatingSlideTitle({ children }: { children: React.JSX.Element }) {
  return <StyledTitle>{children}</StyledTitle>;
}

export function PortfolioFloatingSlideContent({
  nodeViewProps,
  children,
}: {
  nodeViewProps: NodeViewProps;
  children: React.JSX.Element;
}) {
  const { childCount } = nodeViewProps.node;

  return <StyledContent $numberOfBox={childCount}>{children}</StyledContent>;
}

export function PortfolioFloatingSlideListItem({
  children,
  nodeViewProps,
}: {
  children: React.JSX.Element;
  nodeViewProps: NodeViewProps;
}) {
  const { updateAttributes } = nodeViewProps;
  const backgroundImage = nodeViewProps.node.attrs.backgroundImage as ImageSearchOptions;
  const titleFontSize = calculateDynamicFontSize({
    node: nodeViewProps.node?.child(0),
    minFontSize: 30,
    maxFontSize: 30,
    wide: 300,
  });
  const descriptionFontSize = calculateDynamicFontSize({
    node: nodeViewProps.node?.child(nodeViewProps.node?.childCount > 1 ? 1 : 0),
    maxFontSize: 20,
    minFontSize: 20,
    wide: 300,
  });

  return (
    <StyledSlideList $titleFontSize={titleFontSize} $descriptionFontSize={descriptionFontSize}>
      <div className="item-cover" contentEditable={false}>
        <ImageSelector
          disabled={!nodeViewProps.editor.isEditable}
          defaultSrc=""
          updateAttributes={(updatedProps: ImageSearchOptions) => {
            updateAttributes({
              backgroundImage: deepmerge(backgroundImage || {}, updatedProps),
            });
          }}
          src={getPptImageUrl(backgroundImage?.src || '') || '/images/slides/slide-objectives-default.webp'}
          alt={backgroundImage?.alt || ''}
          renderImage={(props: { src: string; alt: string }) => (
            <img
              src={props?.src}
              alt={props?.alt}
              onError={(evt) => {
                evt.currentTarget.src = '/images/slides/objective-slide-default-points-left-align.webp';
              }}
            />
          )}
        />
      </div>
      {children}
    </StyledSlideList>
  );
}
