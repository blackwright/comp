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
  ({ theme: { spacing, colors } }) => css`
    background-color: ${colors.all.orange3.css.hex};
    border: 1px dashed ${colors.all.dark3.css.hex};
    margin-bottom: ${spacing(1)}px;
  `
);

const PaddingBlock = styled(Block)(
  ({ theme: { colors } }) => css`
    background-color: ${colors.all.green2.css.hex};
    border: 1px dashed ${colors.all.dark3.css.hex};
  `
);

const BorderBlock = styled.div(
  ({ theme: { colors } }) => css`
    background-color: ${colors.all.yellow3.css.hex};
    padding: 5px;
  `
);

const TextBlock = styled.div(
  ({ theme: { spacing, colors } }) => css`
    padding: ${spacing(1)}px;
    background-color: ${colors.all.blue2.css.hex};
    border: 1px dashed ${colors.all.dark3.css.hex};
    text-align: center;
  `
);
