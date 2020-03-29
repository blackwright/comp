import React from 'react';
import styled, { css } from 'styled-components';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { Box } from './Box';
import { sizeStringToNumberValue, MappedSize } from './types';
import { createKnobsSelectOptions } from 'utils';

export default {
  title: 'Layout/Box',
  component: Box,
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
  const mx = select('mx', boxSizes, undefined);
  const my = select('my', boxSizes, undefined);
  const mt = select('mt', boxSizes, undefined);
  const mr = select('mr', boxSizes, undefined);
  const mb = select('mb', boxSizes, undefined);
  const ml = select('ml', boxSizes, undefined);
  const p = select('p', boxSizes, 'md');
  const px = select('px', boxSizes, undefined);
  const py = select('py', boxSizes, undefined);
  const pt = select('pt', boxSizes, undefined);
  const pr = select('pr', boxSizes, undefined);
  const pb = select('pb', boxSizes, undefined);
  const pl = select('pl', boxSizes, undefined);

  return (
    <MarginBox
      isInline={isInline}
      p={m}
      px={mx}
      py={my}
      pt={mt}
      pr={mr}
      pb={mb}
      pl={ml}
    >
      <BorderBox p={5}>
        <PaddingBox
          isInline={isInline}
          p={p}
          px={px}
          py={py}
          pt={pt}
          pr={pr}
          pb={pb}
          pl={pl}
        >
          <TextBox
            p="xs"
            flex={flex}
            flow={flow}
            justifyContent={justifyContent}
          >
            Content
          </TextBox>
        </PaddingBox>
      </BorderBox>
    </MarginBox>
  );
};

const MarginBox = styled(Box)(
  ({ theme: { colors } }) => css`
    background-color: ${colors.orange3.hex};
    border: 1px dashed ${colors.dark3.hex};
  `
);

const PaddingBox = styled(Box)(
  ({ theme: { colors } }) => css`
    background-color: ${colors.green2.hex};
    border: 1px dashed ${colors.dark3.hex};
  `
);

const BorderBox = styled(Box)(
  ({ theme: { colors } }) => css`
    background-color: ${colors.yellow3.hex};
  `
);

const TextBox = styled(Box)(
  ({ theme: { colors } }) => css`
    background-color: ${colors.blue2.hex};
    border: 1px dashed ${colors.dark3.hex};
    text-align: center;
  `
);
