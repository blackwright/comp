import * as React from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { Card } from './Card';
import { sizeStringToNumberValue, MappedSize } from 'components/block/types';
import { shadows as themeShadows, ShadowName } from 'theme/shadows';
import { createKnobsSelectOptions } from 'utils';

export default {
  title: 'Layout/Card',
  component: Card,
  decorators: [withKnobs]
};

export const Default = () => {
  const shadowOptions = createKnobsSelectOptions(
    Object.keys(themeShadows) as ShadowName[]
  );

  const shadow = select('shadow', shadowOptions, 'md');

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
    <Card
      shadow={shadow}
      isInline={isInline}
      flex={flex}
      flow={flow}
      justifyContent={justifyContent}
      m={m}
      mX={mX}
      mY={mY}
      mTop={mTop}
      mRight={mRight}
      mBottom={mBottom}
      mLeft={mLeft}
      p={p}
      pX={pX}
      pY={pY}
      pTop={pTop}
      pRight={pRight}
      pBottom={pBottom}
      pLeft={pLeft}
    >
      A Card is a Block with a shadow
    </Card>
  );
};
