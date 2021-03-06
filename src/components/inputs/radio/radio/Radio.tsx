import React from 'react';
import { Label, HiddenRadio, VisibleRadio, Description } from './components';
import { Context } from '../context';
import { Props } from './types';

export const Radio: React.FC<Props> = React.forwardRef(
  (
    {
      components = {},
      testId,
      labelTestId,
      visibleTestId,
      className,
      value,
      checked,
      alignItems,
      disabled,
      children,
      ...rest
    },
    ref: React.Ref<HTMLInputElement>
  ) => {
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
        alignItems={alignItems}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HiddenRadio
          data-testid={testId}
          ref={ref}
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
  }
);

Radio.defaultProps = {
  testId: 'radio-hidden',
  labelTestId: 'radio-label',
  visibleTestId: 'radio-visible',
  alignItems: 'flex-start',
  components: {}
};
