import { useMemo } from 'react';

import { CurrencyAmountBaseExtension } from '@ndeck/tiptap-extensions';
import { HiMiniPencilSquare } from '@react-icons/all-files/hi2/HiMiniPencilSquare';
import { NodeViewProps } from '@tiptap/core';
import { NodeViewWrapper, ReactNodeViewRenderer } from '@tiptap/react';
import { InputNumber, Popover, Select } from 'antd';
import styled from 'styled-components';

import { formatCurrency } from '@/utils/utils';

const StyledNodeViewContainer = styled(NodeViewWrapper)`
  font-weight: 500;
  font-size: 30px;
  margin-top: 30px;
  vertical-align: initial;
  color: ${({ theme }) => theme.slideTheme.fontColor};

  span {
    color: ${({ theme }) => theme.slideTheme.fontColor};
  }
`;

export const CURRENCY_AMOUNT = {
  type: 'currency-amount',
  hName: 'currency-amount',
  component: 'CurrencyAmount',
};

const CURRENCY_OPTIONS: { label: string; value: 'USD' | 'INR' }[] = [
  { label: 'USD', value: 'USD' },
  // { label: 'INR', value: 'INR' },
];

function ListWithTitleComponent(nodeViewProps: NodeViewProps) {
  const { isEditable } = nodeViewProps.editor;

  const currency = useMemo<'USD' | 'INR'>(
    () => (nodeViewProps.node.attrs?.currency as 'USD' | 'INR') || CURRENCY_OPTIONS.at(0)?.value,
    [nodeViewProps.node.attrs?.currency]
  );

  const handleOnCurrencyChange = (updatedCurrency: 'USD' | 'INR') => {
    nodeViewProps.updateAttributes({ currency: updatedCurrency });
  };

  const handleOnAmountChange = (value: number | null) => {
    nodeViewProps.updateAttributes({ value: Number(value) });
  };

  return (
    <StyledNodeViewContainer>
      <Popover
        trigger={['click', 'hover']}
        content={
          <div>
            <div style={{ marginBottom: '0.5rem', fontWeight: 500 }}>
              Edit Budget <HiMiniPencilSquare />
            </div>
            <InputNumber
              type="number"
              defaultValue={Number(nodeViewProps.node.attrs?.value || 0)}
              onChange={handleOnAmountChange}
              max={9999999}
              min={0}
              addonBefore={
                CURRENCY_OPTIONS.length < 2 ? (
                  CURRENCY_OPTIONS.at(0)?.value
                ) : (
                  <Select
                    disabled
                    options={CURRENCY_OPTIONS}
                    defaultValue={CURRENCY_OPTIONS.at(0)?.value}
                    value={CURRENCY_OPTIONS.at(0)?.value}
                    onChange={handleOnCurrencyChange}
                  />
                )
              }
            />
          </div>
        }
        overlayStyle={{
          maxWidth: '200px',
        }}
      >
        Budget: {formatCurrency(Number(nodeViewProps.node.attrs?.value || 0), { currency, maximumFractionDigits: 0 })}
        &nbsp;
        {isEditable && <HiMiniPencilSquare size={22} />}
      </Popover>
    </StyledNodeViewContainer>
  );
}

export const CurrencyAmountExtension = CurrencyAmountBaseExtension().extend({
  addNodeView() {
    return ReactNodeViewRenderer(ListWithTitleComponent);
  },
});
