import React from 'react';
import styled, { css } from 'styled-components';
import { Block } from './Block';
import { sizeStringToNumberValue, MappedSize } from './types';

export default {
  title: 'Layout/Block',
  component: Block
};

export const Sizing = () => (
  <>
    {(Object.keys(sizeStringToNumberValue) as MappedSize[]).map(size => (
      <MarginBlock key={size} p={size} mBottom="xs">
        <BorderBlock p={5}>
          <PaddingBlock p={size}>
            <TextBlock p="xs" justifyContent="center">
              {size}: {sizeStringToNumberValue[size]}px
            </TextBlock>
          </PaddingBlock>
        </BorderBlock>
      </MarginBlock>
    ))}
  </>
);

const MarginBlock = styled(Block)(
  ({ theme: { sizing, colors } }) => css`
    background-color: ${colors.orange3.hex};
    border: 1px dashed ${colors.dark3.hex};
    margin-bottom: ${sizing.fn(1)}px;
  `
);

const PaddingBlock = styled(Block)(
  ({ theme: { colors } }) => css`
    background-color: ${colors.green2.hex};
    border: 1px dashed ${colors.dark3.hex};
  `
);

const BorderBlock = styled(Block)(
  ({ theme: { colors } }) => css`
    background-color: ${colors.yellow3.hex};
  `
);

const TextBlock = styled(Block)(
  ({ theme: { colors } }) => css`
    background-color: ${colors.blue2.hex};
    border: 1px dashed ${colors.dark3.hex};
    text-align: center;
  `
);
