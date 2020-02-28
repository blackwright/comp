import * as React from 'react';
import styled from 'styled-components';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { RadioGroup } from './radio-group';
import { Radio } from './radio';

export default {
  title: 'Input/Radio',
  component: RadioGroup,
  decorators: [withKnobs]
};

export const Default = () => {
  const name = text('name', 'number');
  const disabled = boolean('disabled', false);
  const alignItems = select(
    'alignItems',
    ['flex-start', 'center', 'flex-end'],
    'flex-start'
  );

  const [value, setValue] = React.useState(0);

  return (
    <RadioGroup
      name={name}
      value={value}
      onChange={setValue}
      disabled={disabled}
    >
      <RadioWithMargin value={0} alignItems={alignItems}>
        Option A<SmallText>Description about this option.</SmallText>
      </RadioWithMargin>
      <RadioWithMargin value={1} alignItems={alignItems}>
        Option B<SmallText>Description about this option.</SmallText>
      </RadioWithMargin>
      <RadioWithMargin value={2} alignItems={alignItems}>
        Option C<SmallText>Description about this option.</SmallText>
      </RadioWithMargin>
    </RadioGroup>
  );
};

const RadioWithMargin = styled(Radio)`
  margin-bottom: 8px;
`;

const SmallText = styled.div`
  font-size: 12px;
  margin-top: 4px;
`;
