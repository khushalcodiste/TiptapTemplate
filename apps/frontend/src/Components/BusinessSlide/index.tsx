import { NodeViewProps } from '@tiptap/core';

import {
  PortfolioSlideContent,
  PortfolioSlideListItem,
  PortfolioSlideTitle,
  PortfolioSlideWrapper,
} from './Portfolio/Portfolio';

function SlideComponents({ children, nodeViewProps }: { children: React.JSX.Element; nodeViewProps: NodeViewProps }) {
  const slideType = nodeViewProps?.node.attrs.slideType as string;

  if (slideType === 'portfolio-wrapper') {
    return <PortfolioSlideWrapper nodeViewProps={nodeViewProps}>{children}</PortfolioSlideWrapper>;
  }

  if (slideType === 'portfolio-title') {
    return <PortfolioSlideTitle nodeViewProps={nodeViewProps}>{children}</PortfolioSlideTitle>;
  }

  if (slideType === 'portfolio-content') {
    return <PortfolioSlideContent nodeViewProps={nodeViewProps}>{children}</PortfolioSlideContent>;
  }

  if (slideType === 'portfolio-list-wrapper') {
    return <PortfolioSlideListItem nodeViewProps={nodeViewProps}>{children}</PortfolioSlideListItem>;
  }

  return children;
}

export default SlideComponents;
