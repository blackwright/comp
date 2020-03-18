import React from 'react';
import { Wrapper, Label, Cross } from './components';
import { Props } from './types';

export const Pill: React.FC<Props> = React.forwardRef(
  (
    { testId, label, value, variant, onClick },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const handleClick = () => onClick?.(value);

    return (
      <Wrapper ref={ref} data-testid={testId}>
        <Label variant={variant}>{label}</Label>
        <Cross variant={variant} onClick={handleClick} />
      </Wrapper>
    );
  }
);

Pill.defaultProps = {
  testId: 'pill',
  variant: 'neutral'
};
