import { Node } from 'prosemirror-model';

export const calculateDynamicFontSize = ({
  node,
  maxFontSize = 30,
  minFontSize = 12,
  wide = 200,
}: {
  node: Node;
  maxFontSize?: number;
  minFontSize?: number;
  wide?: number;
}) => {
  const fontSize = Math.max(minFontSize, Math.min(maxFontSize, wide / Math.sqrt(node?.textContent?.length ?? 0 + 1)));

  return fontSize;
};
