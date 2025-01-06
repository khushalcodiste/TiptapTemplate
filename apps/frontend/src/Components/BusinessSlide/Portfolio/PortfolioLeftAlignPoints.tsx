import { useState } from 'react';

import { NodeViewProps } from '@tiptap/core';

import { IoCloseSharp } from '@react-icons/all-files/io5/IoCloseSharp';
import { Button } from 'antd';
import deepmerge from 'deepmerge';
import styled from 'styled-components';

import { ImageSelector } from '@/Components/ImageSelector/ImageSelector';
import useGetParentContentLength from '@/hooks/useGetParentContentLength';
import { ImageSearchOptions } from '@/types/presentation';
import { calculateDynamicFontSize } from '@/utils/editor/dynamicFontSize';
import removeNode from '@/utils/editor/removeNode';
import { getPptImageUrl } from '@/utils/function';

const StyledWrapper = styled.div`
  height: 1080px;
  width: 100%;

  & > div[data-node-view-content] {
    height: 100%;
    width: 100%;

    & > div {
      height: 1080px;
      width: 100%;

      display: grid;
      grid-template-columns: 3fr 7fr;

      & > div {
        height: 1080px;
        width: 100%;

        & > div {
          height: 1080px;
          width: 100%;
        }
      }
    }
  }
`;

export function PortfolioLeftAlignPointsSlideWrapper({ children }: { children: React.JSX.Element }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

const StyledTitle = styled.div<{
  $titleFontSize: number;
  $descriptionFontSize: number;
}>`
  width: 100%;
  height: 1080px;

  background-color: ${({ theme }) => theme.slideTheme.color.primary};
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;

  & > div[data-node-view-content] {
    width: 100%;
    height: 1080px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      height: 1080px;
      gap: 30px;

      padding: 0 3rem;

      p {
        width: 100%;

        &:first-child {
          font-family: ${({ theme }) => theme.slideTheme.fontFamily};
          font-size: ${({ $titleFontSize }) => $titleFontSize}px !important;
          font-weight: 600;
          line-height: 50px;
          margin: 0;
          text-transform: uppercase;
          text-align: center;

          line-height: 1;
          max-height: calc(1em * 4);
          overflow: scroll;
          word-break: break-word;
        }

        &:nth-child(n + 2) {
          font-family: ${({ theme }) => theme.slideTheme.fontFamily};
          font-size: ${({ $descriptionFontSize }) => $descriptionFontSize}px !important;
          font-weight: 400;
          line-height: 45px;

          max-width: 510px;
          max-height: 610px;
          overflow-y: scroll;
          line-height: 1.4;
          max-height: calc(1em * 10);
          overflow: scroll;
          margin: 0;
        }
      }
    }
  }
`;

export function PortfolioLeftAlignPointsSlideTitle({
  children,
  nodeViewProps,
}: {
  children: React.JSX.Element;
  nodeViewProps: NodeViewProps;
}) {
  const { node } = nodeViewProps;

  const titleFontSize = calculateDynamicFontSize({
    node: node.childCount > 0 ? node.child(0) : node,
    maxFontSize: 50,
    minFontSize: 50,
    wide: 400,
  });
  const descriptionFontSize = calculateDynamicFontSize({
    node: node.childCount > 1 ? node.child(1) : node,
    maxFontSize: 30,
    minFontSize: 30,
    wide: 400,
  });

  return (
    <StyledTitle $titleFontSize={titleFontSize} $descriptionFontSize={descriptionFontSize}>
      {children}
    </StyledTitle>
  );
}

const StyledContent = styled.div`
  height: 100%;
  width: 100%;
  & > div[data-node-view-content] {
    height: 100%;
    width: 100%;
    & > div {
      height: 100%;
      width: 100%;
    }
  }

  & > div[data-node-view-content] > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & > .react-renderer:nth-child(n + 5) {
      display: none;
    }
  }
`;

const StyledSlideList = styled.div<{
  $titleFontSize: number;
  $descriptionFontSize: number;
}>`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-template-columns: 57px 1fr 350px 50px;
  grid-template-rows: 1fr;
  grid-template-areas: 'point content image bottom-spacer';
  gap: 50px;

  margin-left: 20px;
  margin-right: 20px;
  padding: 1rem;

  position: relative;

  border: 1px solid transparent;
  &:hover {
    border: 1px solid lightgrey;
    border-radius: 5px;
  }

  & > div {
    grid-area: content;
    & > div {
      width: 100%;
      max-width: 900px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  p:first-child {
    color: ${({ theme }) => theme.slideTheme.fontColor};
    font-family: '${({ theme }) => theme.slideTheme.fontFamily}';
    font-size: ${({ $titleFontSize }) => $titleFontSize}px !important;
    font-weight: 600;
    line-height: 45px;

    line-height: 1.1;
    max-height: calc(1em * 2.2);
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
    max-height: 210px;
    overflow-y: scroll;
    line-height: 1.2;
    max-height: calc(1em * 5);
    overflow: scroll;
    margin: 0;
  }

  .item-cover {
    grid-area: image;
    width: fit-content;

    img {
      height: 150px;
      min-width: 350px;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
    }
  }
`;

export function PortfolioLeftAlignPointsSlideContent({ children }: { children: React.JSX.Element }) {
  return <StyledContent>{children}</StyledContent>;
}

const StyledPointSvg = styled.svg`
  width: 63px;
  height: 110px;
  grid-area: point;

  & > path {
    fill: ${({ theme }) => theme.slideTheme.color.primary};
  }
`;

export function PortfolioLeftAlignPointsSlideListWrapper({
  children,
  nodeViewProps,
}: {
  children: React.JSX.Element;
  nodeViewProps: NodeViewProps;
}) {
  const [parentContentLength, setParentContentLength] = useGetParentContentLength({ nodeViewProps });
  const [isHovered, setIsHovered] = useState(false);

  const { updateAttributes } = nodeViewProps;
  const backgroundImage = nodeViewProps.node.attrs?.backgroundImage as ImageSearchOptions;
  const titleFontSize = calculateDynamicFontSize({
    node: nodeViewProps.node?.child(0),
    minFontSize: 30,
    maxFontSize: 30,
    wide: 300,
  });
  const descriptionFontSize = calculateDynamicFontSize({
    node: nodeViewProps.node?.child(nodeViewProps.node?.childCount > 1 ? 1 : 0),
    maxFontSize: 25,
    minFontSize: 25,
    wide: 300,
  });

  return (
    <StyledSlideList
      onMouseEnter={() => setIsHovered(nodeViewProps.editor.isEditable && true)}
      onMouseLeave={() => setIsHovered(false)}
      $titleFontSize={titleFontSize}
      $descriptionFontSize={descriptionFontSize}
    >
      <StyledPointSvg>
        <path
          d="M55.6687 44.0303C59.3055 47.8918 61.1239 49.8226 61.8101 52.024C62.4142 53.962 62.4142 56.038 61.8101 57.976C61.1239 60.1774 59.3055 62.1082 55.6687 65.9697L28.3976 94.926C19.7761 104.08 15.4653 108.657 11.7435 109.029C8.51621 109.351 5.33308 108.088 3.20463 105.641C0.750002 102.819 0.750002 96.5313 0.750003 83.9563L0.750005 26.0437C0.750006 13.4687 0.750006 7.18119 3.20463 4.35896C5.33309 1.91175 8.51621 0.648782 11.7435 0.971002C15.4653 1.3426 19.7761 5.91973 28.3976 15.074L55.6687 44.0303Z"
          fill="#7ACCF9"
          fillOpacity="0.4"
        />
      </StyledPointSvg>
      {children}
      <div className="item-cover" contentEditable={false}>
        <ImageSelector
          disabled={!nodeViewProps.editor.isEditable}
          defaultSrc=""
          updateAttributes={(updatedProps: ImageSearchOptions) => {
            updateAttributes({
              backgroundImage: deepmerge(backgroundImage || {}, updatedProps),
            });
          }}
          src={getPptImageUrl(backgroundImage?.src) || '/images/slides/profolio-slide-default-image.webp'}
          alt={backgroundImage?.alt || ''}
          renderImage={(props: { src: string; alt: string }) => (
            <img
              src={props?.src}
              alt={props?.alt}
              onError={(evt) => {
                evt.currentTarget.src = '/images/slides/profolio-slide-default-image.webp';
              }}
            />
          )}
        />
      </div>
      {nodeViewProps.editor.isEditable && isHovered && parentContentLength > 2 && (
        <Button
          className="close-button"
          size="middle"
          shape="circle"
          style={{ position: 'absolute', top: '-15px', right: '-15px' }}
          onClick={() => {
            setParentContentLength(parentContentLength);
            removeNode(nodeViewProps);
          }}
          icon={<IoCloseSharp />}
          contentEditable={false}
        />
      )}
    </StyledSlideList>
  );
}
