import React, { useState } from 'react';

import { NodeViewProps } from '@tiptap/core';

import { IoCloseSharp } from '@react-icons/all-files/io5/IoCloseSharp';
import { Button } from 'antd';
import styled from 'styled-components';

import { ImageSelector } from '@/Components/ImageSelector/ImageSelector';
import useGetParentContentLength from '@/hooks/useGetParentContentLength';
import { ImageSearchOptions } from '@/types/presentation';
import { calculateDynamicFontSize } from '@/utils/editor/dynamicFontSize';
import removeNode from '@/utils/editor/removeNode';
import { getPptImageUrl } from '@/utils/function';

const StyledWrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  p {
    font-family: '${({ theme }) => theme.slideTheme.fontFamily}';
  }

  & > div {
    width: 100%;
    height: 100%;
    & > div {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }

  div.react-renderer.node-SlideTitleWrapper {
    width: 40%;
    height: 100%;
    & > div {
      width: 100%;
      height: 100%;
      & > div {
      }
    }
  }

  div.react-renderer.node-SlideContentWrapper {
    width: 100%;
    height: 100%;
    & > div {
      width: 100%;
      height: 100%;
      & > div {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.slideTheme.color.primary};

  width: calc(100%-40px);
  padding: 0 80px;
  height: 1080px;

  div[data-node-view-content] > div {
    font-size: 50px !important;
    display: flex;
    flex-direction: column;
    gap: 45px;

    & > p:first-child {
      font-size: 50px !important;
      font-weight: 500;
      line-height: 50px;
      margin-bottom: 30px;
      text-transform: uppercase;

      margin: 0;

      line-height: 1.4;
      max-height: calc(1em * 4);
      overflow: scroll;
      word-break: break-word;
    }

    & > p:nth-child(2) {
      font-weight: 400;
      font-size: 30px !important;
      line-height: 45px;

      line-height: 1.4;
      max-height: calc(1em * 10);
      overflow: scroll;
      margin: 0;
    }
  }
`;

const StyledBackgroundWrapper = styled.div<{ $bgImage: string }>`
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  user-select: none;

  background-image: url(${({ $bgImage }) => $bgImage});
  background-position: right center;
  background-repeat: no-repeat;

  .bg-center,
  .bg-outline {
    position: absolute;

    img {
      width: 100%;
    }
  }

  .bg-center {
    transform: rotate(90deg) translateY(10%);
  }

  .bg-outline {
    width: auto;

    img {
      aspect-ratio: 573 / 586;
    }
  }
`;

const CHILDREN_STYLE = (number: number) => {
  if (number <= 2)
    return `&:has(:nth-child(2)):not(:has(:nth-child(3))) {
    & > div:nth-child(1) {
      transform: translateX(-10%) translateY(50%);
    }
    & > div:nth-child(2) {
      transform: translateX(-10%) translateY(-50%);
    }
  }`;

  if (number === 3)
    return `&:has(:nth-child(3)):not(:has(:nth-child(4))) {
    & > div:nth-child(1) {
      transform: translateX(-40%);
    }
    & > div:nth-child(2) {
      transform: translateX(-10%);
    }
    & > div:nth-child(3) {
      transform: translateX(-40%);
    }
  }`;

  if (number === 4)
    return `&:has(:nth-child(4)):not(:has(:nth-child(5))) {
    & > div:nth-child(1) {
      transform: translateX(-40%);
    }
    & > div:nth-child(2) {
      transform: translateX(-10%);
    }
    & > div:nth-child(3) {
      transform: translateX(-10%);
    }
    & > div:nth-child(4) {
      transform: translateX(-40%);
    }
  }`;

  if (number >= 5)
    return `&:has(:nth-child(5)) {
    & > div:nth-child(1) {
      transform: translateX(-40%);
    }
    & > div:nth-child(2) {
      transform: translateX(-10%);
    }
    & > div:nth-child(3) {
      transform: translateX(-10%);
    }
    & > div:nth-child(4) {
      transform: translateX(-40%);
    }
    & > div:nth-child(n + 5) {
      display: none;
    }
  }`;

  return `&:has(:nth-child(2)):not(:has(:nth-child(3))) {
    & > div:nth-child(1) {
      transform: translateX(-10%);
    }
    & > div:nth-child(2) {
      transform: translateX(-10%);
    }
  }`;
};

const StyledContentContainer = styled.div<{ $childCount: number }>`
  color: ${({ theme }) => theme.slideTheme.fontColor};

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 35% auto;
  height: 100%;

  div[data-node-view-content] {
    display: flex;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      margin: 0 auto 0;

      ${({ $childCount }) => CHILDREN_STYLE($childCount)}
    }
  }
`;

const StyledContentList = styled.div<{
  $titleFontSize: number;
  $descriptionFontSize: number;
}>`
  width: 700px;

  display: grid;
  grid-template-areas: 'image content';
  grid-template-columns: 150px auto;

  align-items: flex-start;

  gap: 20px;

  .item-cover {
    grid-area: image;

    img {
      height: 150px;
      min-width: 150px;
      max-width: 150px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }
  }

  padding: 1rem;

  border: 1px solid transparent;

  &:hover {
    border: 1px solid lightgrey;
    border-radius: 5px;
  }

  div[data-node-view-content] > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin: 0;
    max-height: 240px;
    overflow-y: scroll;

    p {
      font-weight: 400;
      padding: 0;
      margin: 0;

      &:first-child {
        font-size: ${({ $titleFontSize }) => $titleFontSize}px !important;
        line-height: 1.5;
        margin: 0;

        line-height: 1.1;
        max-height: calc(1em * 2);
        overflow: scroll;
        word-break: break-word;
      }

      &:nth-child(2) {
        font-size: ${({ $descriptionFontSize }) => $descriptionFontSize}px !important;
        line-height: 1.5;

        line-height: 1.4;
        max-height: calc(1em * 7);
        overflow: scroll;
        margin: 0;
      }
    }
  }
`;

const StyledContentListContent = styled.div``;

export function PortfolioManWithSuitCaseSlideWrapper({ children }: { children: React.JSX.Element }) {
  return <StyledWrapperContainer>{children}</StyledWrapperContainer>;
}

export function PortfolioManWithSuitCaseSlideTitle({ children }: { children: React.JSX.Element }) {
  return <StyledTitleContainer>{children}</StyledTitleContainer>;
}

export function PortfolioManWithSuitCaseSlideContent({
  children,
  nodeViewProps,
}: {
  children: React.JSX.Element;
  nodeViewProps: NodeViewProps;
}) {
  const { node } = nodeViewProps;
  const backgroundImage = node.attrs.backgroundImage as ImageSearchOptions;
  const { childCount } = nodeViewProps.node;

  return (
    <StyledContentContainer $childCount={childCount}>
      <StyledBackgroundWrapper
        contentEditable={false}
        $bgImage={`/images/ObjectiveCurve${Math.min(4, childCount)}circle.png`}
      >
        <div className="bg-center">
          <img className="mainImage" src="/images/slides/slide-portfolio-default.webp" alt={backgroundImage?.alt} />
        </div>
      </StyledBackgroundWrapper>
      {children}
    </StyledContentContainer>
  );
}

export function PortfolioManWithSuitCaseSlideListItem({
  children,
  nodeViewProps,
}: {
  children: React.JSX.Element;
  nodeViewProps: NodeViewProps;
}) {
  const { updateAttributes, node } = nodeViewProps;
  const backgroundImage = node.attrs.backgroundImage as ImageSearchOptions;
  const [parentContentLength, setParentContentLength] = useGetParentContentLength({ nodeViewProps });
  const [isHovered, setIsHovered] = useState(false);
  const titleFontSize = calculateDynamicFontSize({
    node: nodeViewProps.node?.child(0) || nodeViewProps.node,
    minFontSize: 30,
    maxFontSize: 30,
    wide: 200,
  });
  const descriptionFontSize = calculateDynamicFontSize({
    node: nodeViewProps.node?.child(nodeViewProps.node?.childCount > 1 ? 1 : 0),
    maxFontSize: 20,
    minFontSize: 20,
    wide: 300,
  });

  return (
    <StyledContentList
      $titleFontSize={titleFontSize}
      $descriptionFontSize={descriptionFontSize}
      onMouseEnter={() => setIsHovered(nodeViewProps.editor.isEditable && true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div contentEditable={false} className="item-cover">
        <ImageSelector
          disabled={!nodeViewProps.editor.isEditable}
          defaultSrc=""
          updateAttributes={(updatedAttr: ImageSearchOptions) => {
            updateAttributes({ backgroundImage: { ...(backgroundImage || {}), ...updatedAttr } });
          }}
          uploadPath={backgroundImage.uploadKey}
          src={getPptImageUrl(backgroundImage?.src || backgroundImage?.uploadKey)}
          alt={backgroundImage?.alt || ''}
          renderImage={(props: { src: string; alt: string }) => <img alt={props.alt} src={props.src} />}
        />
      </div>
      <StyledContentListContent>{children}</StyledContentListContent>
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
        />
      )}
    </StyledContentList>
  );
}
