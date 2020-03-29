import * as React from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { Card } from './Card';
import { sizeStringToNumberValue, MappedSize } from 'components/box/types';
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
    <Card
      shadow={shadow}
      isInline={isInline}
      flex={flex}
      flow={flow}
      justifyContent={justifyContent}
      m={m}
      mx={mx}
      my={my}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      p={p}
      px={px}
      py={py}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
    >
      A Card is a Box with a shadow
    </Card>
  );
};
