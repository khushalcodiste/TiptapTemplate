import React from 'react';

import { NodeViewProps } from '@tiptap/core';

import BUSINESS_TEMPLATES from '../templates';

import {
  PortfolioManWithSuitCaseSlideContent,
  PortfolioManWithSuitCaseSlideListItem,
  PortfolioManWithSuitCaseSlideTitle,
  PortfolioManWithSuitCaseSlideWrapper,
} from './ManWithSuitcase';
import {
  PortfolioFloatingSlideContent,
  PortfolioFloatingSlideListItem,
  PortfolioFloatingSlideTitle,
} from './PortfolioFloatingtriangle';
import {
  PortfolioLeftAlignPointsSlideContent,
  PortfolioLeftAlignPointsSlideListWrapper,
  PortfolioLeftAlignPointsSlideTitle,
  PortfolioLeftAlignPointsSlideWrapper,
} from './PortfolioLeftAlignPoints';

export function PortfolioSlideWrapper({
  nodeViewProps,
  children,
}: {
  nodeViewProps: NodeViewProps;
  children: React.JSX.Element;
}) {
  switch (nodeViewProps.node.attrs.slideTemplate) {
    case BUSINESS_TEMPLATES.portfolio.LEFT_ALIGN_POINTS:
      return <PortfolioLeftAlignPointsSlideWrapper>{children}</PortfolioLeftAlignPointsSlideWrapper>;
    default:
      return <PortfolioManWithSuitCaseSlideWrapper>{children}</PortfolioManWithSuitCaseSlideWrapper>;
  }
}

export function PortfolioSlideTitle({
  nodeViewProps,
  children,
}: {
  nodeViewProps: NodeViewProps;
  children: React.JSX.Element;
}) {
  switch (nodeViewProps.node.attrs.slideTemplate) {
    case BUSINESS_TEMPLATES.portfolio.FLOATING_TRIANGLE:
      return <PortfolioFloatingSlideTitle>{children}</PortfolioFloatingSlideTitle>;
    case BUSINESS_TEMPLATES.portfolio.LEFT_ALIGN_POINTS:
      return (
        <PortfolioLeftAlignPointsSlideTitle nodeViewProps={nodeViewProps}>
          {children}
        </PortfolioLeftAlignPointsSlideTitle>
      );
    default:
      return <PortfolioManWithSuitCaseSlideTitle>{children}</PortfolioManWithSuitCaseSlideTitle>;
  }
}

export function PortfolioSlideContent({
  nodeViewProps,
  children,
}: {
  nodeViewProps: NodeViewProps;
  children: React.JSX.Element;
}) {
  switch (nodeViewProps.node.attrs.slideTemplate) {
    case BUSINESS_TEMPLATES.portfolio.FLOATING_TRIANGLE:
      return <PortfolioFloatingSlideContent nodeViewProps={nodeViewProps}>{children}</PortfolioFloatingSlideContent>;
    case BUSINESS_TEMPLATES.portfolio.LEFT_ALIGN_POINTS:
      return <PortfolioLeftAlignPointsSlideContent>{children}</PortfolioLeftAlignPointsSlideContent>;
    default:
      return (
        <PortfolioManWithSuitCaseSlideContent nodeViewProps={nodeViewProps}>
          {children}
        </PortfolioManWithSuitCaseSlideContent>
      );
  }
}

export function PortfolioSlideListItem({
  nodeViewProps,
  children,
}: {
  nodeViewProps: NodeViewProps;
  children: React.JSX.Element;
}) {
  switch (nodeViewProps.node.attrs.slideTemplate) {
    case BUSINESS_TEMPLATES.portfolio.FLOATING_TRIANGLE:
      return <PortfolioFloatingSlideListItem nodeViewProps={nodeViewProps}>{children}</PortfolioFloatingSlideListItem>;
    case BUSINESS_TEMPLATES.portfolio.LEFT_ALIGN_POINTS:
      return (
        <PortfolioLeftAlignPointsSlideListWrapper nodeViewProps={nodeViewProps}>
          {children}
        </PortfolioLeftAlignPointsSlideListWrapper>
      );
    default:
      return (
        <PortfolioManWithSuitCaseSlideListItem nodeViewProps={nodeViewProps}>
          {children}
        </PortfolioManWithSuitCaseSlideListItem>
      );
  }
}
