import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { TextArea } from './TextArea';

export default {
  title: 'Input/TextArea',
  component: TextArea,
  decorators: [withKnobs]
};

export const Default = () => {
  const placeholder = text('placeholder', 'Text area');
  const fitContents = boolean('fitContents', false);
  const isResizable = boolean('isResizable', true);
  const isFullWidth = boolean('isFullWidth', false);
  const disabled = boolean('disabled', false);

  return (
    <TextArea
      placeholder={placeholder}
      fitContents={fitContents}
      isResizable={isResizable}
      isFullWidth={isFullWidth}
      disabled={disabled}
    />
  );
};
