import React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './types';
import { mergeRefs } from 'utils';
import { resize } from './utils';
import { typeableInputStyle } from '../shared';

export const TextAreaComponent: React.FC<Props> = React.forwardRef(
  (
    { testId, value, onChange, fitContents, isFullWidth, isResizable, ...rest },
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
    const [val, setVal] = React.useState(value);

    React.useEffect(() => setVal(value), [value]);

    const textAreaRef = React.useCallback(
      (textArea: HTMLTextAreaElement | null) => {
        resize(textArea, fitContents);
      },
      [fitContents]
    );

    const handleChange = (
      changeEvent: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      onChange?.(changeEvent);

      if (value == null) {
        setVal(changeEvent.currentTarget.value);
      }
    };

    return (
      <textarea
        data-testid={testId}
        ref={mergeRefs([ref, textAreaRef])}
        value={val ?? ''}
        onChange={handleChange}
        {...rest}
      />
    );
  }
);

TextAreaComponent.defaultProps = {
  testId: 'text-area',
  fitContents: false
};

export const TextArea = styled(TextAreaComponent)(
  ({ theme, isFullWidth, disabled, fitContents, isResizable }) => css`
    ${typeableInputStyle(theme, isFullWidth, disabled)}
    ${(fitContents || isResizable === false) && 'resize: none;'}
  `
);
