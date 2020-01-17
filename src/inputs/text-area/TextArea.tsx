import React from 'react';
import { Props } from './types';
import { mergeRefs } from 'utils';
import { resize } from './utils';

export const TextArea: React.FC<Props> = React.forwardRef(
  (
    { testId, value, fitContents, onChange, disabled, isDisabled, ...rest },
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
    const internalDisabled = disabled || isDisabled;

    const [val, setVal] = React.useState(value);

    React.useEffect(() => setVal(value), [value]);

    const textAreaRef = React.useCallback(
      (textArea: HTMLTextAreaElement | null) => {
        resize(textArea, fitContents);
      },
      [fitContents, val]
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
        disabled={internalDisabled}
        {...rest}
      />
    );
  }
);

TextArea.defaultProps = {
  testId: 'text-area',
  isDisabled: false,
  fitContents: false
};
