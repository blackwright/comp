import React from 'react';
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs';
import { Select } from './Select';
import { booleanSelectKnob } from 'utils';

export default {
  title: 'Input/Select',
  component: Select,
  decorators: [withKnobs]
};

export const Default = () => {
  const placeholder = text('placeholder', 'Select...');
  const disabled = boolean('disabled', false);
  const menuIsOpen = booleanSelectKnob('menuIsOpen');
  const isMulti = boolean('isMulti', false);
  const isSearchable = boolean('isSearchable', true);
  const isRtl = boolean('isRtl', false);
  const options = object(
    'options',
    Object.getOwnPropertyNames(React).map(key => ({
      label: key,
      value: key
    }))
  );

  return (
    <Select
      placeholder={placeholder}
      options={options}
      disabled={disabled}
      menuIsOpen={menuIsOpen}
      isMulti={isMulti}
      isSearchable={isSearchable}
      isRtl={isRtl}
    />
  );
};
