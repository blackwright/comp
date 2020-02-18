import React from 'react';
import styled, { css } from 'styled-components';
import { Block } from './Block';
import { sizeStringToNumberValue, MappedSize } from './types';

export default {
  title: 'Block',
  component: Block
};

export const SizePresets = () => (
  <>
    {(Object.keys(sizeStringToNumberValue) as MappedSize[]).map(size => (
      <MarginBlock key={size} p={size}>
        <BorderBlock>
          <PaddingBlock p={size}>
            <TextBlock>
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

const BorderBlock = styled.div(
  ({ theme: { colors } }) => css`
    background-color: ${colors.yellow3.hex};
    padding: 5px;
  `
);

const TextBlock = styled.div(
  ({ theme: { sizing, colors } }) => css`
    padding: ${sizing.fn(1)}px;
    background-color: ${colors.blue2.hex};
    border: 1px dashed ${colors.dark3.hex};
    text-align: center;
  `
);
