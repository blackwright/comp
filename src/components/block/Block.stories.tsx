import React from 'react';
import styled, { css } from 'styled-components';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { Block } from './Block';
import { sizeStringToNumberValue, MappedSize } from './types';
import { createKnobsSelectOptions } from 'utils';

export default {
  title: 'Layout/Block',
  component: Block,
  decorators: [withKnobs]
};

export const Default = () => {
  const isInline = boolean('isInline', false);

  const flex = text('flex', '1 1 auto');
  const flow = text('flow', 'row nowrap');

  const flexAlignments = ['center', 'flex-start', 'flex-end', 'normal'];

  const justifyContent = select('justifyContent', flexAlignments, 'center');

  const boxSizes = createKnobsSelectOptions(
    Object.keys(sizeStringToNumberValue) as MappedSize[]
  );

  const m = select('m', boxSizes, 'md');
  const mX = select('mX', boxSizes, undefined);
  const mY = select('mY', boxSizes, undefined);
  const mTop = select('mTop', boxSizes, undefined);
  const mRight = select('mRight', boxSizes, undefined);
  const mBottom = select('mBottom', boxSizes, undefined);
  const mLeft = select('mLeft', boxSizes, undefined);
  const p = select('p', boxSizes, 'md');
  const pX = select('pX', boxSizes, undefined);
  const pY = select('pY', boxSizes, undefined);
  const pTop = select('pTop', boxSizes, undefined);
  const pRight = select('pRight', boxSizes, undefined);
  const pBottom = select('pBottom', boxSizes, undefined);
  const pLeft = select('pLeft', boxSizes, undefined);

  return (
    <MarginBlock
      isInline={isInline}
      p={m}
      pX={mX}
      pY={mY}
      pTop={mTop}
      pRight={mRight}
      pBottom={mBottom}
      pLeft={mLeft}
    >
      <BorderBlock p={5}>
        <PaddingBlock
          isInline={isInline}
          p={p}
          pX={pX}
          pY={pY}
          pTop={pTop}
          pRight={pRight}
          pBottom={pBottom}
          pLeft={pLeft}
        >
          <TextBlock
            p="xs"
            flex={flex}
            flow={flow}
            justifyContent={justifyContent}
          >
            Content
          </TextBlock>
        </PaddingBlock>
      </BorderBlock>
    </MarginBlock>
  );
};

const MarginBlock = styled(Block)(
  ({ theme: { colors } }) => css`
    background-color: ${colors.orange3.hex};
    border: 1px dashed ${colors.dark3.hex};
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
