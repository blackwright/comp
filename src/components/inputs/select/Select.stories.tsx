import React from 'react';
import faker from 'faker';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Select } from './Select';
import { booleanSelectKnob } from 'utils';

export default {
  title: 'Input/Select',
  component: Select,
  decorators: [withKnobs]
};

const ungroupedOptions = [...new Array(20)].map(() => ({
  label: faker.lorem.words(3),
  value: faker.random.uuid()
}));

const groupedOptions = [...new Array(5)].map(() => {
  const groupLabel = faker.lorem.words(5);

  const options = [...new Array(5)].map(() => ({
    label: faker.lorem.words(3),
    value: faker.random.uuid(),
    groupLabel
  }));

  return {
    label: groupLabel,
    options
  };
});

const virtualizedOptions = [...new Array(2000)].map(() => {
  const groupLabel = faker.lorem.words(5);

  const options = [...new Array(5)].map(() => ({
    label: faker.lorem.words(3),
    value: faker.random.uuid(),
    groupLabel
  }));

  return {
    label: groupLabel,
    options
  };
});

export const Ungrouped = () => {
  const placeholder = text('placeholder', 'Select...');
  const disabled = boolean('disabled', false);
  const menuIsOpen = booleanSelectKnob('menuIsOpen');
  const isMulti = boolean('isMulti', false);
  const isSearchable = boolean('isSearchable', true);
  const isRtl = boolean('isRtl', false);

  return (
    <Select
      placeholder={placeholder}
      options={ungroupedOptions}
      disabled={disabled}
      menuIsOpen={menuIsOpen}
      isMulti={isMulti}
      isSearchable={isSearchable}
      isRtl={isRtl}
    />
  );
};

export const Grouped = () => {
  const placeholder = text('placeholder', 'Select...');
  const disabled = boolean('disabled', false);
  const menuIsOpen = booleanSelectKnob('menuIsOpen');
  const isMulti = boolean('isMulti', false);
  const isSearchable = boolean('isSearchable', true);
  const isRtl = boolean('isRtl', false);

  return (
    <Select
      placeholder={placeholder}
      options={groupedOptions}
      disabled={disabled}
      menuIsOpen={menuIsOpen}
      isMulti={isMulti}
      isSearchable={isSearchable}
      isRtl={isRtl}
    />
  );
};

export const Virtualized = () => {
  const placeholder = text('placeholder', 'Select...');
  const disabled = boolean('disabled', false);
  const menuIsOpen = booleanSelectKnob('menuIsOpen');
  const isMulti = boolean('isMulti', false);
  const isSearchable = boolean('isSearchable', true);
  const isRtl = boolean('isRtl', false);

  return (
    <Select
      placeholder={placeholder}
      options={virtualizedOptions}
      disabled={disabled}
      menuIsOpen={menuIsOpen}
      isMulti={isMulti}
      isSearchable={isSearchable}
      isRtl={isRtl}
    />
  );
};
