import React from 'react';
import styled from 'styled-components';
import { Label, HiddenRadio, VisibleRadio, Description } from './components';
import { Context } from './context';
import { RadioProps } from './types';

export const RadioComponent: React.FC<RadioProps> = ({
  components = {},
  testId,
  labelTestId,
  visibleTestId,
  className,
  value,
  checked,
  disabled,
  children,
  ...rest
}) => {
  const context = React.useContext(Context);

  const [isHovered, setIsHovered] = React.useState(false);

  let isMatchingValue = false;

  if (checked != null) {
    isMatchingValue = !!checked;
  } else if (context) {
    isMatchingValue = value === context.value;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    context.setValue(value);
  };

  const Components = {
    Label: components.Label ?? Label,
    VisibleRadio: components.VisibleRadio ?? VisibleRadio,
    Description: components.Description ?? Description
  };

  const internalDisabled = !!(disabled || context.disabled);

  return (
    <Components.Label
      data-testid={labelTestId}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <HiddenRadio
        data-testid={testId}
        name={context.name}
        value={value}
        checked={isMatchingValue}
        onChange={handleChange}
        disabled={internalDisabled}
        {...rest}
      />
      <Components.VisibleRadio
        data-testid={visibleTestId}
        isHovered={isHovered}
        checked={isMatchingValue}
        disabled={internalDisabled}
      />
      <Components.Description>{children}</Components.Description>
    </Components.Label>
  );
};

RadioComponent.defaultProps = {
  testId: 'radio-hidden',
  labelTestId: 'radio-label',
  visibleTestId: 'radio-visible',
  alignItems: 'flex-start',
  components: {}
};

export const Radio = styled(RadioComponent)``;
