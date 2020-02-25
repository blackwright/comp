import * as React from 'react';
import { RadioGroup } from './RadioGroup';
import { Radio } from './Radio';

export default {
  title: 'Inputs/Radio',
  component: RadioGroup
};

export const Default = () => {
  const [value, setValue] = React.useState(0);

  return (
    <RadioGroup name="number" value={value} onChange={setValue}>
      <Radio value={0} alignItems="center">
        0
      </Radio>
      <Radio value={1} alignItems="center">
        1
      </Radio>
      <Radio value={2} alignItems="center">
        2
      </Radio>
    </RadioGroup>
  );
};

export const GroupDisabled = () => {
  const [value, setValue] = React.useState(0);

  return (
    <RadioGroup name="number" value={value} onChange={setValue} disabled={true}>
      <Radio value={0} alignItems="center">
        0
      </Radio>
      <Radio value={1} alignItems="center">
        1
      </Radio>
      <Radio value={2} alignItems="center">
        2
      </Radio>
    </RadioGroup>
  );
};

export const ChildDisabled = () => {
  const [value, setValue] = React.useState(0);

  return (
    <RadioGroup name="number" value={value} onChange={setValue}>
      <Radio value={0} alignItems="center">
        0
      </Radio>
      <Radio value={1} alignItems="center" disabled={true}>
        1
      </Radio>
      <Radio value={2} alignItems="center">
        2
      </Radio>
    </RadioGroup>
  );
};
