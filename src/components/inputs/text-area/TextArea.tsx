import React from 'react';
import { Props } from './types';
import { mergeRefs } from 'utils';
import { resize } from './utils';

export const TextArea: React.FC<Props> = React.forwardRef(
  (
    { testId, value, fitContents, onChange, disabled, ...rest },
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

TextArea.defaultProps = {
  testId: 'text-area',
  fitContents: false
};
